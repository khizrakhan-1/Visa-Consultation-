/* ============================================
   VISA KLUB — SMART CHATBOT LOGIC v4
   - Voice input → auto voice reply
   - Text input → text-only reply
   - Flags/emojis stripped from speech
   ============================================ */

   (function () {
    "use strict";
  
    const CONFIG = {
      botName: "Visa Klub Assistant",
      companyName: "Visa Klub",
      whatsappNumber: "923001234567",
      phoneNumber: "+92 42 1234567",
      welcomeMessage: `Hello! 👋 Welcome to Visa Klub.\n\nI'm your virtual assistant. I can help you with:\n\n• Study destinations (UK, USA, Australia, China, Romania, Georgia, Cyprus, Italy, Germany, Canada)\n• IELTS & PTE preparation\n• Student visa guidance\n• University admissions\n• Scholarships\n• Booking a free consultation\n\nWhat would you like to know?`,
      welcomeFollowUps: [
        "Which countries do you support?",
        "Do you offer IELTS classes?",
        "Is consultation free?",
        "How do I book a consultation?",
      ],
      voice: {
        lang: "en-US",
        rate: 1,
        pitch: 1,
        volume: 1,
      },
      typing: {
        baseMs: 700,
        perCharMs: 8,
        maxMs: 2200,
      },
    };
  
    const state = {
      isOpen: false,
      isListening: false,
      isSpeaking: false,
      hasWelcomed: false,
      recognition: null,
      synthesis: window.speechSynthesis,
      currentUtterance: null,
      conversationHistory: [],
      voiceRepliesEnabled: false, // user preference from toggle
      lastInputWasVoice: false,    // track how the last message arrived
    };
  
    let widgetBtn, chatWindow, chatBody, chatInput, sendBtn, voiceBtn,
        closeBtn, clearBtn, voiceStatus, voiceToggleInput;
  
    /* ============================================
       UI CREATION
       ============================================ */
    function createChatbotUI() {
      widgetBtn = document.createElement("button");
      widgetBtn.className = "chat-widget-btn";
      widgetBtn.setAttribute("aria-label", "Chat with AI");
      widgetBtn.innerHTML = `
        <span class="chat-btn-icon">
          <i class="fas fa-robot"></i>
        </span>
        <span class="chat-btn-label">
          <strong>Chat with AI</strong>
          <span>Ask me anything</span>
        </span>
        <span class="chat-badge" style="display:none;">1</span>
      `;
      document.body.appendChild(widgetBtn);
  
      chatWindow = document.createElement("div");
      chatWindow.className = "chat-window";
      chatWindow.innerHTML = `
        <div class="chat-header">
          <div class="chat-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="chat-header-info">
            <h4>${CONFIG.botName} <span class="ai-tag">AI</span></h4>
            <p>Online • Typically replies instantly</p>
          </div>
          <div class="chat-header-actions">
            <button class="chat-header-btn" id="chatClearBtn" title="Clear chat" aria-label="Clear chat">
              <i class="fas fa-rotate-right"></i>
            </button>
            <button class="chat-header-btn" id="chatCloseBtn" title="Close" aria-label="Close chat">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
  
        <div class="chat-body" id="chatBody"></div>
  
        <div class="voice-mode-toggle">
          <label>
            <input type="checkbox" id="voiceToggleInput">
            <i class="fas fa-volume-up"></i> Always voice replies
          </label>
        </div>
  
        <div class="chat-input-area">
          <div class="voice-status" id="voiceStatus">
            <div class="voice-waves">
              <div class="voice-wave"></div>
              <div class="voice-wave"></div>
              <div class="voice-wave"></div>
              <div class="voice-wave"></div>
              <div class="voice-wave"></div>
            </div>
            <span id="voiceStatusText">Listening…</span>
          </div>
          <div class="chat-input-row">
            <input
              type="text"
              class="chat-input"
              id="chatInput"
              placeholder="Type your question…"
              autocomplete="off"
              aria-label="Type your message"
            >
            <button class="chat-icon-btn voice-btn" id="voiceBtn" title="Voice input" aria-label="Voice input">
              <i class="fas fa-microphone"></i>
            </button>
            <button class="chat-icon-btn send-btn" id="sendBtn" title="Send" aria-label="Send">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(chatWindow);
  
      chatBody = document.getElementById("chatBody");
      chatInput = document.getElementById("chatInput");
      sendBtn = document.getElementById("sendBtn");
      voiceBtn = document.getElementById("voiceBtn");
      closeBtn = document.getElementById("chatCloseBtn");
      clearBtn = document.getElementById("chatClearBtn");
      voiceStatus = document.getElementById("voiceStatus");
      voiceToggleInput = document.getElementById("voiceToggleInput");
    }
  
    /* ============================================
       OPEN / CLOSE
       ============================================ */
    function openChat() {
      state.isOpen = true;
      chatWindow.classList.add("open");
      widgetBtn.classList.add("active");
      widgetBtn.innerHTML = `<span class="chat-btn-icon"><i class="fas fa-times"></i></span>`;
      if (!state.hasWelcomed) {
        state.hasWelcomed = true;
        // Welcome message shown as text only (do not speak it)
        addBotMessage(CONFIG.welcomeMessage, CONFIG.welcomeFollowUps, false);
      }
      setTimeout(() => chatInput.focus(), 350);
    }
  
    function closeChat() {
      state.isOpen = false;
      chatWindow.classList.remove("open");
      widgetBtn.classList.remove("active");
      widgetBtn.innerHTML = `
        <span class="chat-btn-icon"><i class="fas fa-robot"></i></span>
        <span class="chat-btn-label">
          <strong>Chat with AI</strong>
          <span>Ask me anything</span>
        </span>
      `;
      stopSpeaking();
      stopListening();
    }
  
    function toggleChat() {
      if (state.isOpen) closeChat();
      else openChat();
    }
  
    /* ============================================
       MESSAGES
       ============================================ */
    function addMessage(text, sender) {
      const msg = document.createElement("div");
      msg.className = `chat-message ${sender}`;
  
      const avatarIcon =
        sender === "bot" ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  
      msg.innerHTML = `
        <div class="msg-avatar">${avatarIcon}</div>
        <div class="msg-content">
          <div class="msg-bubble">${escapeHtml(text)}</div>
          <span class="msg-time">${time}</span>
        </div>
      `;
  
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
      return msg;
    }
  
    /**
     * Add bot message.
     * @param {string} text - the answer
     * @param {string[]} followUps - clickable follow-up questions
     * @param {boolean} speak - whether to speak this message aloud
     */
    function addBotMessage(text, followUps, speak) {
      const msgEl = addMessage(text, "bot");
  
      // Decide whether to speak:
      //  - If user used voice input → auto speak
      //  - OR if "Always voice replies" is checked
      const shouldSpeak = speak !== false && (state.lastInputWasVoice || state.voiceRepliesEnabled);
  
      if (shouldSpeak) {
        speakText(text);
      }
  
      if (followUps && followUps.length) {
        setTimeout(() => {
          renderFollowUps(msgEl, followUps);
        }, Math.min(400 + text.length * 3, 1400));
      }
    }
  
    function renderFollowUps(messageEl, followUps) {
      const contentEl = messageEl.querySelector(".msg-content");
      if (!contentEl) return;
  
      const wrap = document.createElement("div");
      wrap.className = "msg-followups";
      followUps.forEach((q, i) => {
        const chip = document.createElement("button");
        chip.className = "followup-chip";
        chip.style.animationDelay = `${i * 60}ms`;
        chip.innerHTML = `<i class="fas fa-arrow-right"></i> ${escapeHtml(q)}`;
        chip.addEventListener("click", () => {
          // Follow-up clicks are treated as text input
          state.lastInputWasVoice = false;
          handleUserMessage(q);
        });
        wrap.appendChild(chip);
      });
  
      contentEl.appendChild(wrap);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  
    function showTyping() {
      const typing = document.createElement("div");
      typing.className = "chat-typing";
      typing.id = "chatTyping";
      typing.innerHTML = `
        <div class="msg-avatar"><i class="fas fa-robot"></i></div>
        <div class="typing-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      `;
      chatBody.appendChild(typing);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  
    function hideTyping() {
      const typing = document.getElementById("chatTyping");
      if (typing) typing.remove();
    }
  
    /* ============================================
       HANDLE USER MESSAGE
       ============================================ */
    function handleUserMessage(text) {
      if (!text || !text.trim()) return;
  
      addMessage(text, "user");
      chatInput.value = "";
      state.conversationHistory.push({ role: "user", text });
  
      showTyping();
  
      const response = resolveIntent(text);
      state.conversationHistory.push({ role: "bot", text: response.answer });
  
      const delay = Math.min(
        CONFIG.typing.baseMs + response.answer.length * CONFIG.typing.perCharMs,
        CONFIG.typing.maxMs
      );
  
      setTimeout(() => {
        hideTyping();
        addBotMessage(response.answer, response.followUps);
        // Reset the flag after the reply is delivered
        state.lastInputWasVoice = false;
      }, delay);
    }
  
    /* ============================================
       VOICE INPUT
       ============================================ */
    function initSpeechRecognition() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return null;
  
      const recognition = new SpeechRecognition();
      recognition.lang = CONFIG.voice.lang;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
  
      recognition.onstart = () => {
        state.isListening = true;
        voiceBtn.classList.add("listening");
        voiceStatus.classList.add("active");
        document.getElementById("voiceStatusText").textContent = "Listening… speak now";
      };
  
      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        chatInput.value = transcript;
        if (event.results[0].isFinal) {
          voiceStatus.classList.remove("active");
          voiceBtn.classList.remove("listening");
          state.isListening = false;
          const finalText = transcript.trim();
          if (finalText) {
            // ⭐ Mark this input as voice → triggers auto voice reply
            state.lastInputWasVoice = true;
            handleUserMessage(finalText);
            chatInput.value = "";
          }
        }
      };
  
      recognition.onerror = (event) => {
        state.isListening = false;
        voiceBtn.classList.remove("listening");
        voiceStatus.classList.remove("active");
        let errMsg = "Voice input error. Please try again.";
        if (event.error === "not-allowed") errMsg = "Microphone access denied. Please allow it in your browser.";
        if (event.error === "no-speech") errMsg = "No speech detected. Please try again.";
        // Error → text-only message
        state.lastInputWasVoice = false;
        addBotMessage(errMsg);
      };
  
      recognition.onend = () => {
        state.isListening = false;
        voiceBtn.classList.remove("listening");
        voiceStatus.classList.remove("active");
      };
  
      return recognition;
    }
  
    function toggleListening() {
      if (!state.recognition) {
        state.recognition = initSpeechRecognition();
      }
      if (!state.recognition) {
        addBotMessage("Sorry, your browser doesn't support voice input. Please type your question.");
        return;
      }
      if (state.isListening) {
        state.recognition.stop();
      } else {
        try {
          state.recognition.start();
        } catch (err) {
          console.warn("Recognition start error:", err);
        }
      }
    }
  
    function stopListening() {
      if (state.recognition && state.isListening) {
        state.recognition.stop();
      }
    }
  
    /* ============================================
       VOICE OUTPUT — Smart emoji/flag removal
       ============================================ */
    function speakText(text) {
      if (!state.synthesis) return;
      stopSpeaking();
  
      const cleanText = cleanTextForSpeech(text);
      if (!cleanText) return;
  
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = CONFIG.voice.lang;
      utterance.rate = CONFIG.voice.rate;
      utterance.pitch = CONFIG.voice.pitch;
      utterance.volume = CONFIG.voice.volume;
  
      const voices = state.synthesis.getVoices();
      const preferred =
        voices.find((v) => v.lang.startsWith("en") && /female|samantha|zira|google/i.test(v.name)) ||
        voices.find((v) => v.lang.startsWith("en"));
  
      if (preferred) utterance.voice = preferred;
  
      utterance.onstart = () => { state.isSpeaking = true; };
      utterance.onend = () => { state.isSpeaking = false; };
      utterance.onerror = () => { state.isSpeaking = false; };
  
      state.currentUtterance = utterance;
      state.synthesis.speak(utterance);
    }
  
    /**
     * Strip out:
     *  - Regional indicator symbols (flag emojis like 🇬🇧)
     *  - All other emojis
     *  - Markdown-ish bullets
     *  - Multiple newlines
     *  - Extra whitespace
     */
    function cleanTextForSpeech(text) {
      return String(text)
        // Remove flag emojis (regional indicator pairs)
        .replace(/[\u{1F1E6}-\u{1F1FF}]{2}/gu, "")
        // Remove all other emoji ranges
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")
        .replace(/[\u{1FA00}-\u{1FAFF}]/gu, "")
        .replace(/[\u{2600}-\u{27BF}]/gu, "") // misc symbols & dingbats
        .replace(/[\u{2190}-\u{21FF}]/gu, "") // arrows
        .replace(/[\u{2B00}-\u{2BFF}]/gu, "") // more arrows/symbols
        .replace(/[\u{FE0F}]/gu, "")          // variation selectors
        .replace(/[\u{200D}]/gu, "")          // zero-width joiner
        // Clean markdown-ish characters
        .replace(/[•·▪●►▸▾→▼★☆✅⚠️❌✔️]/g, "")
        .replace(/[*_`~#]/g, "")
        // Fix bullet-prefixed lines: "- item" → "item"
        .replace(/^\s*[-–—]\s*/gm, "")
        // Convert line breaks to natural pauses
        .replace(/\n+/g, ". ")
        // Collapse repeated punctuation
        .replace(/\.\s*\./g, ".")
        .replace(/\s+/g, " ")
        .trim();
    }
  
    function stopSpeaking() {
      if (state.synthesis && state.synthesis.speaking) {
        state.synthesis.cancel();
      }
      state.isSpeaking = false;
    }
  
    /* ============================================
       UTILITY
       ============================================ */
    function escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  
    /* ============================================
       EVENT LISTENERS
       ============================================ */
    function attachListeners() {
      widgetBtn.addEventListener("click", toggleChat);
      closeBtn.addEventListener("click", closeChat);
  
      clearBtn.addEventListener("click", () => {
        chatBody.innerHTML = "";
        state.conversationHistory = [];
        stopSpeaking();
        addBotMessage(CONFIG.welcomeMessage, CONFIG.welcomeFollowUps, false);
      });
  
      sendBtn.addEventListener("click", () => {
        state.lastInputWasVoice = false;
        handleUserMessage(chatInput.value);
      });
  
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          state.lastInputWasVoice = false;
          handleUserMessage(chatInput.value);
        }
      });
  
      voiceBtn.addEventListener("click", toggleListening);
  
      // "Always voice replies" toggle
      voiceToggleInput.addEventListener("change", () => {
        state.voiceRepliesEnabled = voiceToggleInput.checked;
        if (!state.voiceRepliesEnabled) stopSpeaking();
      });
  
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && state.isOpen) closeChat();
      });
  
      if (state.synthesis) {
        state.synthesis.onvoiceschanged = () => {};
        state.synthesis.getVoices();
      }
    }
  
    /* ============================================
       INIT
       ============================================ */
    function init() {
      if (typeof resolveIntent !== "function") {
        console.warn("[Visa Klub Chatbot] knowledge.js not loaded. Include it BEFORE chatbot.js.");
        return;
      }
      createChatbotUI();
      attachListeners();
      console.log(
        "%c Visa Klub Chatbot v4 ",
        "background:#D9233E;color:white;font-weight:bold;padding:3px 8px;border-radius:4px;",
        "Loaded — smart voice/text mode"
      );
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();