/* ============================================
   VISA KLUB — SMART CHATBOT KNOWLEDGE BASE v3
   ============================================
   NEW: Every intent now has `followUps` — related
   questions that appear as clickable chips AFTER
   the bot answers.
   ============================================ */

   const knowledgeBase = {
    company: {
      name: "Visa Klub",
      tagline: "Study Abroad & Student Visa Consultancy",
      location: "123 Main Boulevard, Gulberg III, Lahore, Pakistan",
      phone: "+92 42 1234567",
      whatsapp: "+92 300 1234567",
      email: "info@visaklub.com",
      hours: "Monday–Saturday, 10:00 AM – 7:00 PM",
      languages: ["English", "Urdu"],
    },
  
    intents: [
  
      /* ---------- GREETINGS ---------- */
      {
        id: "greeting",
        patterns: [
          "hello", "hi", "hey", "salam", "assalam", "assalamualaikum", "assalam o alaikum",
          "good morning", "good afternoon", "good evening", "good night",
          "greetings", "howdy", "yo", "sup", "what's up", "whats up",
          "aoa", "salam alaikum", "salam u alaikum", "hi there", "hello there",
        ],
        response: `Hello! 👋 Welcome to Visa Klub.\n\nI'm your virtual assistant. I can help you with study destinations, IELTS & PTE preparation, student visa guidance, university admissions, scholarships, and booking a free consultation.\n\nWhat would you like to know?`,
        followUps: [
          "Which countries do you support?",
          "Do you offer IELTS classes?",
          "Is consultation free?",
          "How do I book a consultation?",
        ],
      },
  
      /* ---------- GOODBYE ---------- */
      {
        id: "goodbye",
        patterns: [
          "bye", "goodbye", "see you", "see ya", "talk later", "thank you", "thanks",
          "thank you so much", "thanks a lot", "shukriya", "jazakallah", "khuda hafiz",
          "allah hafiz", "good night", "ttyl", "catch you later",
        ],
        response: `You're welcome! 😊\n\nIf you have more questions, feel free to ask anytime. For personalized guidance, book a free consultation with our team.\n\nBest of luck with your study abroad journey! 🎓`,
        followUps: [
          "Book a consultation",
          "What are your services?",
          "Study in UK",
        ],
      },
  
      /* ---------- HOW ARE YOU ---------- */
      {
        id: "how_are_you",
        patterns: [
          "how are you", "how are you doing", "how do you do", "how is it going",
          "how's it going", "how have you been", "what's going on", "kaise ho",
          "kaisay ho", "how are u", "how r u", "hru",
        ],
        response: `I'm doing great, thanks for asking! 😊\n\nI'm here to help you with anything about studying abroad — study destinations, IELTS/PTE, universities, scholarships, and student visas.\n\nWhat can I help you with today?`,
        followUps: [
          "Which countries do you support?",
          "What services do you offer?",
          "Do you offer IELTS classes?",
        ],
      },
  
      /* ---------- ABOUT BOT ---------- */
      {
        id: "about_bot",
        patterns: [
          "who are you", "what are you", "are you a bot", "are you human", "are you real",
          "are you ai", "what is your name", "your name", "introduce yourself",
          "tell me about yourself", "who am i talking to", "tum kon ho",
        ],
        response: `I'm the Visa Klub virtual assistant 🤖 — an AI chatbot here to answer your questions about studying abroad.\n\nI can help with study destinations, universities, IELTS/PTE courses, scholarships, student visas, and booking consultations.\n\nFor complex or personalized matters, I'll connect you with our human counselors.`,
        followUps: [
          "Tell me about Visa Klub",
          "What services do you offer?",
          "How can I contact you?",
        ],
      },
  
      /* ---------- ABOUT COMPANY ---------- */
      {
        id: "about_company",
        patterns: [
          "who is visa klub", "what is visa klub", "about visa klub", "tell me about visa klub",
          "about your company", "about the company", "what do you do", "what is your company",
          "about your consultancy", "tell me about your consultancy",
        ],
        response: `Visa Klub is a dedicated international education and student visa consultancy based in Pakistan.\n\nWe help students:\n• Explore study opportunities\n• Navigate university admissions\n• Prepare for student visas\n• Find scholarships\n• Prepare for IELTS & PTE\n\nWe support students for the UK, USA, Australia, China, Romania, Georgia, Cyprus, Italy, Germany, and Canada.\n\n📍 Gulberg III, Lahore, Pakistan\n🕐 Mon–Sat, 10 AM – 7 PM`,
        followUps: [
          "Which countries do you support?",
          "What services do you offer?",
          "How do I book a consultation?",
          "Where is your office?",
        ],
      },
  
      /* ---------- CONTACT ---------- */
      {
        id: "contact",
        patterns: [
          "contact", "contact you", "how to contact", "how can i contact", "reach you",
          "how to reach", "your number", "your phone", "phone number", "whatsapp number",
          "email address", "your email", "how do i call", "call you", "get in touch",
          "rabta", "contact info", "contact information", "phone", "email", "whatsapp",
        ],
        response: `You can reach Visa Klub through:\n\n📞 Phone: +92 42 1234567\n💬 WhatsApp: +92 300 1234567\n📧 Email: info@visaklub.com\n📍 Office: Gulberg III, Lahore\n🕐 Hours: Mon–Sat, 10 AM – 7 PM\n\nOur team typically responds within a few hours during business hours.`,
        followUps: [
          "Where is your office?",
          "Book a free consultation",
          "Is consultation free?",
        ],
      },
  
      /* ---------- OFFICE ---------- */
      {
        id: "office",
        patterns: [
          "office", "your office", "where is your office", "office location", "address",
          "your address", "where are you located", "where are you", "location",
          "office address", "visit office", "come to office", "physical office",
          "kaise aaye", "kahan ho",
        ],
        response: `Our office is located at:\n\n📍 123 Main Boulevard, Gulberg III, Lahore, Pakistan\n\n🕐 Open: Monday–Saturday, 10:00 AM – 7:00 PM\n\nYou can also reach us on WhatsApp: +92 300 1234567\n\nWould you like directions or to book an appointment?`,
        followUps: [
          "Book a free consultation",
          "How can I contact you?",
          "Is consultation free?",
        ],
      },
  
      /* ---------- BOOK CONSULTATION ---------- */
      {
        id: "book_consultation",
        patterns: [
          "book consultation", "book appointment", "book a meeting", "schedule consultation",
          "how to book", "how do i book", "appointment", "meeting", "consultation",
          "free consultation", "book free consultation", "get consultation",
          "i want consultation", "need consultation", "talk to counselor", "speak to counselor",
          "talk to expert", "speak to expert", "talk to advisor", "meet counselor",
          "milna hai", "baat karni hai",
        ],
        response: `Great! Here's how to book a free consultation:\n\n1️⃣ Visit our consultation page and fill out the form\n2️⃣ Call us at +92 42 1234567\n3️⃣ WhatsApp us at +92 300 1234567\n4️⃣ Visit our office: Gulberg III, Lahore\n\nThe initial consultation is completely free with no obligation.`,
        followUps: [
          "Is consultation free?",
          "Where is your office?",
          "What services do you offer?",
        ],
      },
  
      /* ---------- IS IT FREE ---------- */
      {
        id: "is_free",
        patterns: [
          "is consultation free", "is it free", "do you charge", "your fees", "your charges",
          "consultation fee", "consultation charges", "how much do you charge",
          "what is your fee", "is it paid", "paid consultation", "free of cost",
        ],
        response: `Yes! Our initial consultation is completely free. 🎉\n\nYou'll discuss your goals, academic profile, and options with one of our education counselors — no obligation, no hidden charges.\n\nIf you decide to proceed with our services, we'll explain any applicable fees transparently before starting.`,
        followUps: [
          "Book a free consultation",
          "What services do you offer?",
          "Do you help with scholarships?",
        ],
      },
  
      /* ---------- SERVICES LIST ---------- */
      {
        id: "services_list",
        patterns: [
          "services", "what services", "what do you offer", "what all do you offer",
          "your services", "what can you do for me", "what can you help with",
          "how can you help", "how do you help", "what do you provide", "offerings",
        ],
        response: `Visa Klub offers the following services:\n\n1. 🎓 Career & Study Counseling\n2. 🏛️ University Selection\n3. 📝 Admission Assistance\n4. 💰 Scholarship Guidance\n5. 🛂 Student Visa Assistance\n6. ✍️ SOP Guidance\n7. 📂 Document Guidance\n8. ✈️ Pre-Departure Guidance\n9. 📚 IELTS & PTE Preparation\n\nAsk about any specific service for more details, or book a free consultation to discuss your needs.`,
        followUps: [
          "Book a free consultation",
          "Do you help with scholarships?",
          "Tell me about visa assistance",
          "Do you offer IELTS classes?",
        ],
      },
  
      /* ---------- COUNSELING ---------- */
      {
        id: "counseling",
        patterns: [
          "counseling", "counselling", "career counseling", "study counseling",
          "career guidance", "study guidance", "guidance", "advice", "career advice",
          "help me decide", "help me choose", "which country should i choose",
          "which country is best", "which country for study", "best country",
          "guide me", "mujhe guide karo",
        ],
        response: `📚 Career & Study Counseling\n\nWe provide personalized 1-on-1 guidance to help you:\n\n• Choose the right country based on your profile\n• Select suitable programs and universities\n• Understand costs and scholarship options\n• Plan your application timeline\n\nEach counseling session considers your academic background, career goals, budget, and preferences.\n\nTo schedule: +92 42 1234567 or WhatsApp +92 300 1234567`,
        followUps: [
          "Which countries do you support?",
          "Book a free consultation",
          "Do you help with scholarships?",
        ],
      },
  
      /* ---------- UNIVERSITY SELECTION ---------- */
      {
        id: "university_selection",
        patterns: [
          "university selection", "choose university", "select university", "which university",
          "best university", "good university", "recommend university", "suggest university",
          "help me pick university", "how to choose university", "find university",
          "search university", "university options", "top universities",
        ],
        response: `🏛️ University Selection\n\nWe help you shortlist universities based on:\n\n• Your academic profile (CGPA, subjects)\n• Budget & tuition preferences\n• Career goals\n• Country preferences\n• Scholarship availability\n\nWe build a balanced list of reach, match, and safety universities.\n\nTo get personalized university recommendations, book a free consultation: +92 42 1234567`,
        followUps: [
          "Which countries do you support?",
          "Book a free consultation",
          "Do you help with admission?",
        ],
      },
  
      /* ---------- ADMISSION ASSISTANCE ---------- */
      {
        id: "admission_assistance",
        patterns: [
          "admission", "admission help", "admission assistance", "admission support",
          "apply to university", "university application", "application help",
          "help with application", "how to apply", "apply for university",
          "admission process", "how to get admission", "dakhla",
        ],
        response: `📝 Admission Assistance\n\nWe help you with the complete application process:\n\n• Filling university applications\n• Gathering transcripts & documents\n• Writing/reviewing SOPs\n• Recommendation letters\n• Submitting applications on time\n• Following up with universities\n\nWe make sure every application is complete, accurate, and well-presented.\n\nBook a free consultation to start: +92 42 1234567`,
        followUps: [
          "What are the admission requirements?",
          "Do you help with SOPs?",
          "Book a free consultation",
          "What documents are required?",
        ],
      },
  
      /* ---------- SCHOLARSHIPS ---------- */
      {
        id: "scholarships",
        patterns: [
          "scholarship", "scholarships", "funding", "financial aid", "grant",
          "tuition discount", "fee waiver", "free education", "study free",
          "waiver", "scholarship help", "find scholarship", "how to get scholarship",
          "which scholarships", "available scholarships", "wazifa",
        ],
        response: `💰 Scholarship Guidance\n\nWe help you explore funding opportunities including:\n\n• 🏛️ University Merit Scholarships\n• 🏢 Government Scholarships (Chevening, Fulbright, Australia Awards, Chinese Government, etc.)\n• 🎓 Need-based Financial Aid\n• 🌍 Country-specific Scholarships\n• 💵 Tuition Discounts\n\nScholarship availability varies by country, university, and your profile.\n\n⚠️ Scholarship decisions are made by the respective institutions — we provide guidance only.`,
        followUps: [
          "Tell me about Chevening Scholarship",
          "Tell me about Fulbright Scholarship",
          "Book a free consultation",
          "Study in UK",
        ],
      },
  
      /* ---------- VISA ASSISTANCE ---------- */
      {
        id: "visa_assistance",
        patterns: [
          "visa", "visa help", "visa assistance", "visa guidance", "visa support",
          "student visa", "how to get visa", "visa process", "visa application",
          "help with visa", "visa documents", "visa requirements", "visa interview",
          "visa apply", "visa form", "visa filing",
        ],
        response: `🛂 Student Visa Assistance\n\nWe provide guidance for the complete visa process:\n\n• Document preparation & checklist\n• Financial proof organization\n• Visa application forms\n• Interview preparation\n• Submission guidance\n• Pre-departure briefing\n\n⚠️ Important: Visa decisions are made solely by immigration authorities. We do not guarantee visa approval.\n\nBook a free consultation to begin: +92 42 1234567`,
        followUps: [
          "What documents are required for visa?",
          "How long does visa take?",
          "Do I need IELTS for visa?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- SOP GUIDANCE ---------- */
      {
        id: "sop",
        patterns: [
          "sop", "statement of purpose", "personal statement", "motivation letter",
          "essay", "cover letter", "sop help", "sop guidance", "how to write sop",
          "sop writing", "help with sop", "purpose statement",
        ],
        response: `✍️ SOP Guidance\n\nWe help you write a compelling Statement of Purpose that:\n\n• Tells your authentic story\n• Explains your academic & career goals\n• Connects to your chosen program/university\n• Highlights your strengths\n• Avoids common mistakes\n\nWe review and guide — we don't write it for you, so it stays 100% genuine.\n\nGet SOP help: WhatsApp +92 300 1234567`,
        followUps: [
          "Book a free consultation",
          "What are the admission requirements?",
          "Do you help with admission?",
        ],
      },
  
      /* ---------- DOCUMENTS GENERAL ---------- */
      {
        id: "documents_general",
        patterns: [
          "documents", "documentation", "documents required", "which documents",
          "what documents", "document checklist", "required documents", "paperwork",
          "papers required", "what papers", "docs needed",
        ],
        response: `📂 Document Guidance\n\nGeneral document requirements for study abroad:\n\n• Academic transcripts & certificates\n• English test scores (IELTS / PTE / TOEFL)\n• Valid passport\n• Financial proof (bank statements)\n• Statement of Purpose (SOP)\n• Recommendation letters\n• Admission offer letter\n• Passport-size photographs\n\n⚠️ Requirements vary by country and university. Always verify current requirements against official sources.\n\nWe provide a personalized checklist during consultation.`,
        followUps: [
          "What documents are required for visa?",
          "Book a free consultation",
          "Do you help with SOPs?",
        ],
      },
  
      /* ---------- PRE-DEPARTURE ---------- */
      {
        id: "pre_departure",
        patterns: [
          "pre departure", "predeparture", "before departure", "before leaving",
          "accommodation", "housing", "where to stay", "hostel", "dorm",
          "airport", "travel planning", "packing", "settle abroad", "settling",
          "arrival", "upon arrival", "after reaching",
        ],
        response: `✈️ Pre-Departure Guidance\n\nWe help you prepare for life abroad:\n\n• Accommodation booking (dorms, private housing)\n• Travel & flight planning\n• Airport pickup arrangements\n• University registration\n• Bank account setup\n• SIM cards & local essentials\n• Cultural adjustment tips\n\nSo you land prepared and confident. 🌍\n\nBook a consultation: +92 42 1234567`,
        followUps: [
          "Book a free consultation",
          "What documents are required?",
          "How long does visa take?",
        ],
      },
  
      /* ---------- COURSES GENERAL ---------- */
      {
        id: "courses_general",
        patterns: [
          "courses", "course", "classes", "english classes", "english course",
          "english test", "language test", "test prep", "test preparation",
          "english preparation", "which test", "which course", "course options",
          "what courses do you offer",
        ],
        response: `📚 Courses at Visa Klub\n\nWe offer preparation courses for:\n\n• 🎯 IELTS (Academic & General Training)\n• 🎯 PTE Academic\n\nBoth available:\n• 💻 Online (live classes)\n• 🏫 On-Campus\n\nOur courses include mock tests, speaking practice, writing feedback, and personalized attention.\n\nWhich course would you like to know more about?`,
        followUps: [
          "Do you offer IELTS classes?",
          "Do you offer PTE classes?",
          "Online classes available?",
          "What are the course fees?",
        ],
      },
  
      /* ---------- IELTS ---------- */
      {
        id: "ielts",
        patterns: [
          "ielts", "ielts course", "ielts class", "ielts classes", "ielts preparation",
          "ielts academic", "ielts general", "ielts training", "ielts help",
          "do you offer ielts", "ielts online", "ielts test",
        ],
        response: `🎯 IELTS Preparation at Visa Klub\n\nWe offer comprehensive IELTS preparation:\n\n• IELTS Academic & General Training\n• Listening, Reading, Writing, Speaking\n• Mock tests & speaking practice\n• Writing feedback from instructors\n• Exam strategies & time management\n• Beginner to advanced levels\n\nAvailable: Online 💻 & On-Campus 🏫\n\n📅 For the latest schedule and fees, contact: WhatsApp +92 300 1234567`,
        followUps: [
          "Online IELTS classes?",
          "On-campus IELTS classes?",
          "What are the course fees?",
          "IELTS vs PTE — which is better?",
        ],
      },
  
      /* ---------- PTE ---------- */
      {
        id: "pte",
        patterns: [
          "pte", "pte course", "pte class", "pte classes", "pte preparation",
          "pte academic", "pte training", "pte help", "do you offer pte",
          "pte online", "pte test",
        ],
        response: `🎯 PTE Preparation at Visa Klub\n\nWe offer comprehensive PTE Academic preparation:\n\n• Speaking & Writing practice\n• Reading & Listening practice\n• Read Aloud, Describe Image, Retell Lecture\n• Essay & Summarize Written Text\n• Mock tests & question strategies\n• Pronunciation & vocabulary development\n\nAvailable: Online 💻 & On-Campus 🏫\n\n📅 For the latest schedule and fees, contact: WhatsApp +92 300 1234567`,
        followUps: [
          "Online PTE classes?",
          "On-campus PTE classes?",
          "What are the course fees?",
          "IELTS vs PTE — which is better?",
        ],
      },
  
      /* ---------- ONLINE CLASSES ---------- */
      {
        id: "online_classes",
        patterns: [
          "online classes", "online course", "online learning", "online mode",
          "study online", "learn online", "live online", "virtual classes",
          "from home", "remote classes", "ghar se",
        ],
        response: `💻 Online Classes at Visa Klub\n\nWe offer live instructor-led online classes for:\n\n• IELTS\n• PTE\n\nFeatures:\n• Live interaction with instructors\n• Flexible timings\n• Access from anywhere\n• Digital study material\n• Online mock tests\n• Recorded sessions (if applicable)\n\nPerfect for students outside Lahore or with busy schedules.\n\n📅 Contact for schedule: WhatsApp +92 300 1234567`,
        followUps: [
          "On-campus classes available?",
          "What are the course fees?",
          "Do you offer IELTS classes?",
          "Do you offer PTE classes?",
        ],
      },
  
      /* ---------- ON-CAMPUS CLASSES ---------- */
      {
        id: "on_campus",
        patterns: [
          "on campus", "oncampus", "in class", "physical class", "classroom",
          "in person", "in person classes", "visit campus", "attend class",
          "physical classes", "institute", "academy", "physical attendance",
        ],
        response: `🏫 On-Campus Classes at Visa Klub\n\nWe offer on-campus preparation for:\n\n• IELTS\n• PTE\n\nFeatures:\n• Interactive classroom environment\n• Direct instructor support\n• Speaking practice with classmates\n• Group activities\n• Regular assessments\n• Mock tests\n\nLocation: Gulberg III, Lahore\n\n📅 For schedule: WhatsApp +92 300 1234567`,
        followUps: [
          "Online classes available?",
          "What are the course fees?",
          "Where is your office?",
        ],
      },
  
      /* ---------- COURSE FEES ---------- */
      {
        id: "course_fees",
        patterns: [
          "course fee", "course fees", "ielts fee", "pte fee", "how much is ielts",
          "how much is pte", "course price", "course cost", "class fee",
          "class price", "how much for course", "fees of ielts", "fees of pte",
        ],
        response: `📅 Course Fees\n\nCourse fees vary depending on:\n\n• Course type (IELTS / PTE)\n• Mode (Online / On-Campus)\n• Duration & batch\n\nFor current fee structure and available batches, please contact:\n\n📞 +92 42 1234567\n💬 WhatsApp +92 300 1234567\n\nWe'll share full details including what's included.`,
        followUps: [
          "Do you offer IELTS classes?",
          "Do you offer PTE classes?",
          "Book a free assessment",
        ],
      },
  
      /* ---------- FREE ASSESSMENT ---------- */
      {
        id: "free_assessment",
        patterns: [
          "free assessment", "assessment", "test my english", "english level",
          "check my level", "what is my level", "my english level",
          "free test", "evaluate my english", "level test",
        ],
        response: `🎓 Free English Assessment\n\nWe offer a free assessment to:\n\n• Determine your current English level\n• Recommend the right course (IELTS / PTE)\n• Suggest target score strategy\n• Plan your preparation timeline\n\nNote: This is not an official IELTS/PTE score prediction.\n\nBook your assessment: WhatsApp +92 300 1234567`,
        followUps: [
          "Do you offer IELTS classes?",
          "Do you offer PTE classes?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRIES LIST ---------- */
      {
        id: "countries_list",
        patterns: [
          "which countries", "what countries", "study destinations", "destinations",
          "where can i study", "supported countries", "list of countries",
          "countries you support", "which country", "where can i go",
          "kis country", "kaunse countries",
        ],
        response: `🌍 Study Destinations\n\nWe provide student visa consultation for:\n\n• 🇬🇧 United Kingdom\n• 🇺🇸 United States\n• 🇦🇺 Australia\n• 🇨🇳 China\n• 🇷🇴 Romania\n• 🇬🇪 Georgia\n• 🇨🇾 Cyprus\n• 🇮🇹 Italy\n• 🇩🇪 Germany\n• 🇨🇦 Canada\n\nAsk about any specific country for more details!`,
        followUps: [
          "Study in UK",
          "Study in USA",
          "Study in Australia",
          "Study in China",
          "Study in Canada",
          "Study in Germany",
        ],
      },
  
      /* ---------- VISA PROCESSING TIME ---------- */
      {
        id: "visa_processing",
        patterns: [
          "how long visa", "visa processing time", "visa time", "visa duration",
          "how long for visa", "how many days visa", "how many weeks visa",
          "processing time", "visa timeline", "when will i get visa",
        ],
        response: `⏱️ Visa Processing Times\n\nProcessing times vary by country:\n\n• UK: ~3 weeks\n• USA: varies (interview-based)\n• Australia: ~4–6 weeks\n• China: ~2–4 weeks\n• Romania: ~4–8 weeks\n• Others: 2 weeks – 3 months\n\n⚠️ Timelines can change based on embassy workload and season. Always check current official timelines.\n\nWe help you prepare early to avoid delays.`,
        followUps: [
          "Do I need IELTS for visa?",
          "What documents are required for visa?",
          "Do you guarantee visa approval?",
        ],
      },
  
      /* ---------- IELTS REQUIREMENT ---------- */
      {
        id: "ielts_required",
        patterns: [
          "do i need ielts", "is ielts required", "ielts required for visa",
          "need ielts for visa", "must i take ielts", "is ielts mandatory",
          "english requirement", "language requirement",
        ],
        response: `🎯 Do You Need IELTS?\n\nIt depends on the country and university:\n\n• UK, USA, Australia: Usually YES\n• China, Romania, Georgia, Cyprus: Often alternatives available\n• Some universities accept PTE, TOEFL, or internal tests\n\nWe help you identify options that fit your profile — including pathways without IELTS.\n\nBook a consultation: +92 42 1234567`,
        followUps: [
          "Can I study without IELTS?",
          "Do you offer IELTS classes?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- WITHOUT IELTS ---------- */
      {
        id: "without_ielts",
        patterns: [
          "without ielts", "no ielts", "skip ielts", "avoid ielts",
          "study without ielts", "not take ielts", "can i study without ielts",
          "no english test", "without english test",
        ],
        response: `✅ Studying Without IELTS\n\nYes, in some cases! Options include:\n\n• Universities accepting PTE or TOEFL\n• Internal English assessments\n• Medium of Instruction (MOI) letter\n• Pre-sessional English programs\n\nCountries like China, Romania, Georgia, and Cyprus often have flexible options.\n\nWe'll help you find suitable pathways — book a consultation: +92 42 1234567`,
        followUps: [
          "Do you offer PTE classes?",
          "Study in China",
          "Study in Romania",
          "Book a free consultation",
        ],
      },
  
      /* ---------- LOW CGPA ---------- */
      {
        id: "low_cgpa",
        patterns: [
          "low cgpa", "low gpa", "weak grades", "bad grades", "low marks",
          "poor grades", "low percentage", "low score", "can i apply with low",
          "low cgpa study abroad", "cgpa 2", "cgpa 2.5", "cgpa below 3",
        ],
        response: `📊 Applying with Low CGPA\n\nYes, you can still study abroad! Options:\n\n• Some universities have flexible entry criteria\n• Certain countries accept lower CGPA (China, Romania, Georgia, Cyprus)\n• Consider diploma or pathway programs\n• Strong SOP & recommendation letters help\n• Relevant work experience can compensate\n\nWe'll help identify universities that match your profile.\n\nBook a consultation: +92 42 1234567`,
        followUps: [
          "Study in China",
          "Study in Romania",
          "Study in Georgia",
          "Book a free consultation",
        ],
      },
  
      /* ---------- VISA GUARANTEE ---------- */
      {
        id: "visa_guarantee",
        patterns: [
          "visa guarantee", "guaranteed visa", "sure visa", "100% visa",
          "guarantee approval", "will i get visa", "visa confirm", "visa surety",
          "guarantee admission", "guaranteed admission",
        ],
        response: `⚠️ Important Clarification\n\nNo consultancy can guarantee visa approval or admission — decisions are made solely by:\n\n• Immigration authorities (visas)\n• Universities (admissions)\n\nWhat we DO provide:\n✅ Expert guidance\n✅ Strong application preparation\n✅ Document review\n✅ Interview preparation\n\nWe help you submit the strongest possible application. That's our promise. 🤝`,
        followUps: [
          "Tell me about visa assistance",
          "Book a free consultation",
          "What documents are required?",
        ],
      },
  
      /* ---------- MULTIPLE UNIVERSITIES ---------- */
      {
        id: "multiple_universities",
        patterns: [
          "multiple universities", "many universities", "several applications",
          "apply to many", "how many universities", "apply multiple",
          "apply more than one", "several universities",
        ],
        response: `✅ Yes, You Can Apply to Multiple Universities!\n\nApplying to 3–6 universities is common and recommended. It increases your chances of receiving admission offers.\n\nWe recommend a balanced mix:\n• 1–2 Reach universities\n• 2–3 Match universities\n• 1–2 Safety universities\n\nWe help you build this list strategically.\n\nBook a consultation: +92 42 1234567`,
        followUps: [
          "Help me choose universities",
          "Book a free consultation",
          "What are the admission requirements?",
        ],
      },
  
      /* ---------- ADMISSION REQUIREMENTS ---------- */
      {
        id: "admission_requirements",
        patterns: [
          "admission requirements", "entry requirements", "eligibility", "criteria",
          "requirements for admission", "what do i need to apply", "admission criteria",
          "entry criteria", "minimum requirements",
        ],
        response: `📋 Admission Requirements (General)\n\nFor most programs you'll need:\n\n• Academic transcripts (high school / bachelor's)\n• English test scores (IELTS / PTE / TOEFL — depends)\n• Valid passport\n• Statement of Purpose (SOP)\n• Recommendation letters\n• Financial proof\n\n⚠️ Exact requirements vary by university and program.\n\nWe help you understand specific requirements during consultation.`,
        followUps: [
          "What documents are required?",
          "Do I need IELTS?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- APPLICATION TIME ---------- */
      {
        id: "application_time",
        patterns: [
          "how long admission", "admission time", "application time", "how long to apply",
          "how many months admission", "admission duration", "application duration",
          "when to apply", "when should i apply",
        ],
        response: `📅 Application Timeline\n\nGenerally, apply:\n\n• 6–8 months before intake (recommended)\n• 4 months minimum\n\nExample for Fall intake (Sept):\n• Start preparing: Jan–Feb\n• Apply to universities: Feb–Apr\n• Receive offers: Apr–Jun\n• Apply for visa: Jun–Jul\n• Depart: Aug–Sept\n\nWe help plan your specific timeline based on intake.\n\nBook consultation: +92 42 1234567`,
        followUps: [
          "What are the intakes?",
          "What are the admission requirements?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- INTAKES ---------- */
      {
        id: "intakes",
        patterns: [
          "intake", "intakes", "when can i start", "start dates", "semester",
          "fall intake", "spring intake", "winter intake", "when does university start",
          "when do classes start", "admission intake",
        ],
        response: `📅 Common Intakes\n\nMost universities offer:\n\n• 🍂 Fall Intake (Sept/Oct) — Main intake\n• 🌸 Spring Intake (Jan/Feb)\n• ☀️ Summer Intake (May/Jun) — Some universities\n\nYour best intake depends on:\n• Test score readiness\n• Application timeline\n• Scholarship deadlines\n\nWe help you pick the right intake for your profile.\n\nContact us: +92 42 1234567`,
        followUps: [
          "Book a free consultation",
          "When should I apply?",
          "Which countries do you support?",
        ],
      },
  
      /* ---------- COSTS ---------- */
      {
        id: "costs",
        patterns: [
          "cost", "costs", "how much", "fees", "tuition", "expensive", "affordable",
          "budget", "price", "money needed", "how much money", "total cost",
          "study cost", "cost of study", "kharche", "kitna paisa",
        ],
        response: `💵 Estimated Study Abroad Costs\n\nTuition (per year, approx):\n• 🇬🇧 UK: $15,000 – $35,000\n• 🇺🇸 USA: $20,000 – $50,000\n• 🇦🇺 Australia: $18,000 – $35,000\n• 🇨🇳 China: $3,000 – $8,000\n• 🇷🇴 Romania: $3,000 – $7,000\n• 🇬🇪 Georgia: $3,000 – $6,000\n• 🇨🇾 Cyprus: $5,000 – $12,000\n\nLiving costs: $3,000 – $15,000 per year depending on country.\n\nWe help you find affordable options & scholarships. Book a consultation: +92 42 1234567`,
        followUps: [
          "Do you help with scholarships?",
          "Which countries are affordable?",
          "Study in China",
          "Study in Romania",
        ],
      },
  
      /* ---------- IELTS VS PTE ---------- */
      {
        id: "ielts_vs_pte",
        patterns: [
          "ielts vs pte", "pte vs ielts", "difference between ielts and pte",
          "which is better ielts or pte", "ielts or pte", "pte or ielts",
          "compare ielts pte", "easier ielts or pte", "which test to take",
        ],
        response: `📊 IELTS vs PTE — Quick Comparison\n\n**Format:**\n• IELTS: Paper or computer-based\n• PTE: Fully computer-based\n\n**Speaking:**\n• IELTS: Face-to-face with examiner\n• PTE: Recorded via computer\n\n**Results:**\n• IELTS: ~13 days\n• PTE: Typically faster (few days)\n\n**Acceptance:**\nBoth accepted by many universities. Check your target university's requirement.\n\n**Best for:** Depends on your comfort — PTE suits those comfortable with computers, IELTS suits those preferring human interaction.\n\nNot sure? Book a free assessment: +92 300 1234567`,
        followUps: [
          "Do you offer IELTS classes?",
          "Do you offer PTE classes?",
          "Book a free assessment",
        ],
      },
  
      /* ---------- COUNTRY: UK ---------- */
      {
        id: "country_uk",
        patterns: [
          "uk", "united kingdom", "britain", "england", "london", "study in uk",
          "uk visa", "uk universities", "uk study", "uk student",
        ],
        response: `🇬🇧 Study in the United Kingdom\n\n**Why UK?**\n• World-class universities (Oxford, Cambridge, Imperial)\n• 3-year Bachelor's, 1-year Master's (saves time & money)\n• Post-study work visa (Graduate Route — 2 years)\n• Globally recognized degrees\n\n**Student Visa:** UK Student Visa (formerly Tier 4)\n**English:** IELTS typically 6.0–7.5\n**Intakes:** September, January\n\nWant to explore UK universities? Book a consultation: +92 42 1234567`,
        followUps: [
          "UK student visa process?",
          "UK scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: USA ---------- */
      {
        id: "country_usa",
        patterns: [
          "usa", "us", "united states", "america", "study in usa", "study in us",
          "usa visa", "f1 visa", "american universities", "us universities",
        ],
        response: `🇺🇸 Study in the United States\n\n**Why USA?**\n• Top-ranked universities (MIT, Harvard, Stanford)\n• Flexible education system\n• Optional Practical Training (OPT) — work after graduation\n• Huge variety of programs\n\n**Student Visa:** F-1 Student Visa\n**English:** TOEFL / IELTS / PTE / Duolingo\n**Intakes:** Fall (Aug), Spring (Jan)\n\nWant USA university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "USA student visa process?",
          "USA scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: AUSTRALIA ---------- */
      {
        id: "country_australia",
        patterns: [
          "australia", "aussie", "study in australia", "australian universities",
          "australia visa", "sydney", "melbourne", "study australia",
        ],
        response: `🇦🇺 Study in Australia\n\n**Why Australia?**\n• Globally ranked universities\n• Post-study work rights (Temporary Graduate Visa)\n• High quality of life\n• Multicultural & welcoming\n\n**Student Visa:** Subclass 500\n**English:** IELTS typically 6.0–7.0\n**Intakes:** February, July, November\n\nWant Australian university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Australia student visa process?",
          "Australia scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: CHINA ---------- */
      {
        id: "country_china",
        patterns: [
          "china", "chinese", "study in china", "chinese universities",
          "china visa", "beijing", "shanghai", "tsinghua", "peking university",
        ],
        response: `🇨🇳 Study in China\n\n**Why China?**\n• Affordable tuition (from $3,000/year)\n• Generous scholarships (Chinese Government Scholarship)\n• Rapidly rising global rankings\n• Growing job market\n\n**Student Visa:** X1 (long-term) / X2 (short-term)\n**English:** IELTS/TOEFL for English-taught; HSK for Chinese-taught\n**Intakes:** September, March\n\nWant China university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Chinese Government Scholarship?",
          "China student visa process?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: ROMANIA ---------- */
      {
        id: "country_romania",
        patterns: [
          "romania", "romanian", "study in romania", "romanian universities",
          "romania visa", "bucharest", "romania study",
        ],
        response: `🇷🇴 Study in Romania\n\n**Why Romania?**\n• Affordable European degrees\n• EU-recognized qualifications\n• English-taught programs available\n• Rich cultural experience\n\n**Student Visa:** Romanian Long-Stay Student Visa\n**English:** IELTS/TOEFL for English-taught programs\n**Intakes:** October, February\n\nWant Romania university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Romania student visa process?",
          "Romania scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: GEORGIA ---------- */
      {
        id: "country_georgia",
        patterns: [
          "georgia", "georgian", "study in georgia", "georgian universities",
          "georgia visa", "tbilisi", "georgia study", "study georgia",
        ],
        response: `🇬🇪 Study in Georgia\n\n**Why Georgia?**\n• Low cost of living\n• English-taught programs\n• Safe environment\n• Gateway between Europe & Asia\n• Affordable tuition\n\n**Student Visa:** Georgian Student Visa\n**English:** IELTS/TOEFL for English-taught; often flexible\n**Intakes:** September, February\n\nWant Georgia university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Georgia student visa process?",
          "Georgia scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: CYPRUS ---------- */
      {
        id: "country_cyprus",
        patterns: [
          "cyprus", "cypriot", "study in cyprus", "cyprus universities",
          "cyprus visa", "nicosia", "cyprus study", "study cyprus",
        ],
        response: `🇨🇾 Study in Cyprus\n\n**Why Cyprus?**\n• English-taught programs\n• Mediterranean lifestyle\n• European recognition\n• Affordable education\n• Safe environment\n\n**Student Visa:** Cyprus Student Visa\n**English:** IELTS/TOEFL for English-taught\n**Intakes:** September, February\n\nWant Cyprus university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Cyprus student visa process?",
          "Cyprus scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: ITALY ---------- */
      {
        id: "country_italy",
        patterns: [
          "italy", "italian", "study in italy", "italian universities",
          "italy visa", "rome", "milan", "study italy",
        ],
        response: `🇮🇹 Study in Italy\n\n**Why Italy?**\n• Historic universities (Bologna, Sapienza)\n• Affordable public education\n• Rich cultural heritage\n• EU-recognized degrees\n\n**Student Visa:** Italian Student Visa (Type D)\n**English:** IELTS/TOEFL for English-taught programs\n**Intakes:** September, February\n\nWant Italy university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Italy student visa process?",
          "Italy scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: GERMANY ---------- */
      {
        id: "country_germany",
        patterns: [
          "germany", "german", "study in germany", "german universities",
          "germany visa", "berlin", "munich", "study germany",
        ],
        response: `🇩🇪 Study in Germany\n\n**Why Germany?**\n• Very low or no tuition at public universities\n• Strong engineering & technology programs\n• Post-study work opportunities\n• Research excellence\n\n**Student Visa:** German Student Visa (National Visa)\n**English:** IELTS/TOEFL for English-taught; TestDaF for German-taught\n**Intakes:** October, April\n\nWant Germany university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Germany student visa process?",
          "Germany scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- COUNTRY: CANADA ---------- */
      {
        id: "country_canada",
        patterns: [
          "canada", "canadian", "study in canada", "canadian universities",
          "canada visa", "toronto", "vancouver", "study canada",
        ],
        response: `🇨🇦 Study in Canada\n\n**Why Canada?**\n• High-quality education\n• Post-graduation work permit (PGWP)\n• Immigration pathways after study\n• Safe, multicultural society\n\n**Student Visa:** Canadian Study Permit\n**English:** IELTS/TOEFL/PTE\n**Intakes:** September, January, May\n\nWant Canada university options? Book a consultation: +92 42 1234567`,
        followUps: [
          "Canada student visa process?",
          "Canada scholarships?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- NAMED SCHOLARSHIPS ---------- */
      {
        id: "chevening",
        patterns: ["chevening", "chevening scholarship", "chevening uk"],
        response: `🏆 Chevening Scholarship\n\n**Offered by:** UK Government\n**For:** Master's degree in the UK\n**Coverage:** Full tuition + living expenses + travel\n**Eligibility:** Bachelor's degree + 2+ years work experience\n**Deadline:** Varies annually (usually Oct–Nov)\n\nVery competitive — we help you prepare a strong application.\n\nLearn more: +92 300 1234567`,
        followUps: [
          "Study in UK",
          "Other scholarships available?",
          "Book a free consultation",
        ],
      },
      {
        id: "fulbright",
        patterns: ["fulbright", "fulbright scholarship", "fulbright usa"],
        response: `🏆 Fulbright Program\n\n**Offered by:** US Government\n**For:** Master's/PhD in the USA\n**Coverage:** Tuition + living + travel\n**Eligibility:** Bachelor's degree, strong academics\n**Deadline:** Varies by country\n\nHighly prestigious. We help you prepare.\n\nLearn more: +92 300 1234567`,
        followUps: [
          "Study in USA",
          "Other scholarships available?",
          "Book a free consultation",
        ],
      },
      {
        id: "csc",
        patterns: ["chinese government scholarship", "csc scholarship", "china scholarship"],
        response: `🏆 Chinese Government Scholarship (CSC)\n\n**Offered by:** Chinese Government\n**For:** Bachelor's/Master's/PhD in China\n**Coverage:** Tuition + accommodation + monthly stipend\n**Eligibility:** International applicants\n**Deadline:** Typically Jan–April\n\nOne of the most generous scholarships for studying in China.\n\nLearn more: +92 300 1234567`,
        followUps: [
          "Study in China",
          "Other scholarships available?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- HELP ---------- */
      {
        id: "help",
        patterns: [
          "help", "i need help", "can you help", "help me", "confused",
          "i don't know", "not sure", "guide me", "assist me", "support",
          "mujhe help chahiye",
        ],
        response: `I'm here to help! 😊\n\nYou can ask me about:\n\n• 🌍 Study destinations\n• 📚 IELTS & PTE preparation\n• 🛂 Student visas\n• 🎓 University admissions\n• 💰 Scholarships\n• 📞 Booking a consultation\n\nWhat would you like to know?`,
        followUps: [
          "Which countries do you support?",
          "What services do you offer?",
          "Do you offer IELTS classes?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- AGE ELIGIBILITY ---------- */
      {
        id: "age_eligibility",
        patterns: [
          "age limit", "how old", "minimum age", "age requirement", "am i too old",
          "age criteria", "age for study abroad",
        ],
        response: `🎂 Age for Study Abroad\n\nThere's no strict universal age limit for studying abroad. Most programs accept students of any age, though:\n\n• Undergraduate: Usually 17–25\n• Master's: Usually 20–35\n• PhD: Any age\n\nSome scholarships have age limits.\n\nWe'll help you find options matching your situation. Book a consultation: +92 42 1234567`,
        followUps: [
          "Book a free consultation",
          "Which countries do you support?",
        ],
      },
  
      /* ---------- WORK WHILE STUDYING ---------- */
      {
        id: "work_while_study",
        patterns: [
          "work while studying", "part time job", "part time work", "can i work",
          "job while study", "working abroad", "earn while study",
          "work rights", "student work",
        ],
        response: `💼 Working While Studying\n\nMost countries allow international students to work part-time:\n\n• 🇬🇧 UK: 20 hrs/week during term\n• 🇺🇸 USA: 20 hrs/week on-campus\n• 🇦🇺 Australia: 48 hrs/fortnight\n• 🇨🇦 Canada: 24 hrs/week\n• 🇨🇳 China: Limited, with permission\n\nRules vary — verify current regulations.\n\nWe guide you on work rights during consultation.`,
        followUps: [
          "Post-study work options?",
          "Book a free consultation",
        ],
      },
  
      /* ---------- POST STUDY WORK ---------- */
      {
        id: "post_study",
        patterns: [
          "post study work", "after graduation", "stay after study", "work after graduation",
          "post study visa", "graduate visa", "stay back", "work permit after study",
          "pr after study", "immigration after study",
        ],
        response: `🎓 Post-Study Work Options\n\nMany countries offer work visas after graduation:\n\n• 🇬🇧 UK: Graduate Route — 2 years\n• 🇺🇸 USA: OPT — 1–3 years\n• 🇦🇺 Australia: Temporary Graduate Visa — 2–4 years\n• 🇨🇦 Canada: PGWP — up to 3 years\n• 🇩🇪 Germany: 18 months job-seeking visa\n\nThese can lead to long-term work or PR pathways.\n\nBook a consultation for your specific plan: +92 42 1234567`,
        followUps: [
          "Study in UK",
          "Study in Canada",
          "Book a free consultation",
        ],
      },
  
      /* ---------- LANGUAGE SUPPORT ---------- */
      {
        id: "language_support",
        patterns: [
          "urdu", "hindi", "punjabi", "do you speak urdu", "urdu support",
          "speak urdu", "urdu mein", "punjabi mein",
        ],
        response: `🌐 Language Support\n\nOur team speaks both English and Urdu. You can communicate with us in the language you're most comfortable with.\n\n📞 +92 42 1234567\n💬 WhatsApp +92 300 1234567\n\nFeel free to reach out in Urdu or English!`,
        followUps: [
          "Book a free consultation",
          "How can I contact you?",
        ],
      },
  
      /* ---------- PARENTS ---------- */
      {
        id: "parents",
        patterns: [
          "parents", "my parents", "father", "mother", "family", "family concerns",
          "parents worried", "parents ask", "family approval",
        ],
        response: `👨‍👩‍👧 For Parents & Families\n\nWe understand studying abroad is a big family decision. We're happy to:\n\n• Meet with parents along with the student\n• Explain costs, safety, and support systems\n• Discuss visa reliability and timelines\n• Answer all family concerns transparently\n\nBook a family consultation: +92 42 1234567`,
        followUps: [
          "Book a free consultation",
          "Is consultation free?",
          "Where is your office?",
        ],
      },
  
      /* ---------- FALLBACK ---------- */
      {
        id: "fallback",
        patterns: [],
        response: `🤔 I'm not sure about that specific question.\n\nI can help with:\n\n• 🌍 Study destinations\n• 📚 IELTS & PTE courses\n• 🛂 Student visas\n• 🎓 University admissions\n• 💰 Scholarships\n• 📞 Booking a consultation\n\nCould you rephrase, or ask about one of these topics?\n\nFor detailed help, WhatsApp us directly: +92 300 1234567`,
        followUps: [
          "Which countries do you support?",
          "What services do you offer?",
          "Do you offer IELTS classes?",
          "Book a free consultation",
        ],
      },
    ],
  
    /* ========= SYNONYMS ========= */
    synonyms: {
      university: ["uni", "college", "institute", "school", "academy"],
      visa: ["student visa", "study visa", "permit", "visa application"],
      fees: ["fees", "fee", "cost", "costs", "price", "pricing", "charges", "tuition"],
      scholarship: ["scholarship", "scholarships", "funding", "grant", "financial aid", "waiver"],
      ielts: ["ielts", "ielts test", "ielts exam", "ielts course"],
      pte: ["pte", "pte test", "pte exam", "pte course"],
      online: ["online", "virtual", "remote", "live online", "online class", "online classes"],
      campus: ["campus", "on campus", "physical", "classroom", "in person"],
      consultation: ["consultation", "appointment", "meeting", "session", "advisory"],
      contact: ["contact", "reach", "call", "phone", "email", "whatsapp", "message"],
    },
  };
  
  /* ============================================
     MATCHING ENGINE
     ============================================ */
  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
  
  function expandWithSynonyms(text) {
    const normalized = normalizeText(text);
    const expansions = [normalized];
    if (normalized !== text.toLowerCase()) expansions.push(text.toLowerCase());
    Object.keys(knowledgeBase.synonyms).forEach((canonical) => {
      const synonyms = knowledgeBase.synonyms[canonical];
      synonyms.forEach((syn) => {
        if (normalized.includes(syn)) {
          const replaced = normalized.replace(new RegExp(`\\b${syn}\\b`, "g"), canonical);
          expansions.push(replaced);
        }
      });
    });
    return [...new Set(expansions)];
  }
  
  function fuzzyIncludes(haystack, needle) {
    const h = haystack.toLowerCase();
    const n = needle.toLowerCase();
    if (h.includes(n)) return true;
    const hWords = h.split(" ");
    const nWords = n.split(" ");
    if (nWords.length > 1) {
      return nWords.every((nw) =>
        hWords.some((hw) => {
          if (hw === nw) return true;
          if (nw.length < 4) return false;
          return levenshtein(hw, nw) <= 1;
        })
      );
    }
    if (n.length < 4) return false;
    return hWords.some((hw) => levenshtein(hw, n) <= 1);
  }
  
  function scoreIntent(query, intent) {
    const expansions = expandWithSynonyms(query);
    let bestScore = 0;
    intent.patterns.forEach((pattern) => {
      expansions.forEach((expandedQuery) => {
        const normalizedPattern = pattern.toLowerCase().trim();
        if (expandedQuery === normalizedPattern) {
          bestScore = Math.max(bestScore, 100);
          return;
        }
        if (expandedQuery.includes(normalizedPattern)) {
          const score = 40 + normalizedPattern.length;
          bestScore = Math.max(bestScore, score);
          return;
        }
        if (fuzzyIncludes(expandedQuery, normalizedPattern)) {
          const score = 15 + normalizedPattern.length * 0.5;
          bestScore = Math.max(bestScore, score);
        }
      });
    });
    return bestScore;
  }
  
  function resolveIntent(userQuery) {
    if (!userQuery || !userQuery.trim()) {
      const fb = knowledgeBase.intents.find((i) => i.id === "fallback");
      return { type: "fallback", answer: fb.response, followUps: fb.followUps };
    }
  
    const query = userQuery.trim();
    let bestIntent = null;
    let bestScore = 0;
  
    knowledgeBase.intents.forEach((intent) => {
      if (intent.id === "fallback") return;
      const score = scoreIntent(query, intent);
      if (score > bestScore) {
        bestScore = score;
        bestIntent = intent;
      }
    });
  
    const THRESHOLD = 12;
  
    if (bestIntent && bestScore >= THRESHOLD) {
      return {
        type: bestIntent.id,
        answer: bestIntent.response,
        followUps: bestIntent.followUps || [],
        confidence: bestScore,
      };
    }
  
    const fallback = knowledgeBase.intents.find((i) => i.id === "fallback");
    return {
      type: "fallback",
      answer: fallback.response,
      followUps: fallback.followUps || [],
      confidence: 0,
    };
  }
  
  window.knowledgeBase = knowledgeBase;
  window.resolveIntent = resolveIntent;
  window.normalizeText = normalizeText;