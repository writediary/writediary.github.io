/* WriteDiary – main.js */
(function() {
  'use strict';

  const lang = localStorage.getItem('wd_lang') || 'en';

  // ── i18n content blocks ──
  const CONTENT = {
    en: {
      hero_badge: "Free Online Diary Writing",
      hero_title: "Your Private Space to <em>Write Diary</em> Online",
      hero_sub: "WriteDiary is the most elegant online diary writing website. Capture your daily thoughts, emotions, and memories in a beautiful, secure digital diary — completely free.",
      hero_cta_primary: "📝 Start Writing Today",
      hero_cta_secondary: "Explore Features",
      stat1: "Free Forever", stat2: "Languages Supported", stat3: "Daily Diary Entries",
      feat_label: "Why Choose WriteDiary",
      feat_heading: "Everything You Need for Daily Diary Writing",
      feat_sub: "A beautifully crafted online diary writing website with every feature you need to write, reflect, and grow.",
      hiw_label: "Simple & Intuitive",
      hiw_heading: "Start Writing Your Diary in 3 Easy Steps",
      hiw_sub: "No sign-up required. Open your online diary and start writing immediately.",
      about_label: "Why Write a Diary Online",
      about_heading: "The Benefits of Keeping a Daily Diary",
      about_quote: '"Writing in a diary is a way of making sense of the world and understanding yourself."',
      about_author: "— The Power of Daily Diary Writing",
      about_p1: "Daily diary writing is one of the most powerful habits you can build. An online diary offers the convenience of writing from any device — your phone, tablet, or computer — while keeping your thoughts private and organized.",
      about_p2: "WriteDiary is the diary to write your authentic story. Whether you're processing a difficult day, celebrating a milestone, or simply practicing gratitude, our diary writing website gives you the perfect space to do it.",
      guide_label: "Writing Tips", guide_heading: "Daily Diary Writing Tips for Beginners",
      guide_sub: "Start your online diary writing journey with these expert tips to make the most of every entry.",
      lang_label: "Global Diary Writing",
      lang_heading: "Write Your Diary in Your Language",
      lang_sub: "WriteDiary supports 5 languages so you can write your personal diary in the language closest to your heart.",
      whydiary_label: "Learn More",
      whydiary_heading: "Everything About Online Diary Writing",
      whydiary_sub: "Understand the power of a personal diary to write your daily thoughts and why it matters.",
      faq_label: "Common Questions", faq_heading: "Frequently Asked Questions",
      faq_sub: "Everything you need to know about WriteDiary — your free online diary writing website.",
      cta_label: "Start Today — It's Free",
      cta_title: "Ready to Write Your First Diary Entry?",
      cta_desc: "Join thousands who use WriteDiary as their trusted online diary writing website every day. No sign-up, no payment — just open and write.",
      cta_btn: "📖 Open My Diary Now",
      contact_label: "Get In Touch", contact_heading: "Contact Us",
      contact_desc: "Have a question or suggestion about our online diary writing platform? We'd love to hear from you.",
      label_name: "Your Name", label_email: "Email Address", label_subject: "Subject", label_message: "Message", submit_btn: "Send Message →",
    },
    es: {
      hero_badge: "Diario en Línea Gratis",
      hero_title: "Tu espacio privado para <em>escribir tu diario</em> en línea",
      hero_sub: "WriteDiary es el sitio web de escritura de diario más elegante. Captura tus pensamientos, emociones y recuerdos diarios en un diario digital seguro y hermoso — completamente gratis.",
      hero_cta_primary: "📝 Empezar Ahora",
      hero_cta_secondary: "Ver Funciones",
      stat1: "Gratis Para Siempre", stat2: "Idiomas Disponibles", stat3: "Entradas de Diario",
      feat_label: "Por qué elegir WriteDiary",
      feat_heading: "Todo lo que necesitas para escribir tu diario diario",
      feat_sub: "Un sitio web de escritura de diario bellamente diseñado con todas las funciones que necesitas.",
      hiw_label: "Simple e Intuitivo",
      hiw_heading: "Empieza a escribir tu diario en 3 sencillos pasos",
      hiw_sub: "Sin registro. Abre tu diario en línea y empieza a escribir de inmediato.",
      about_label: "Por qué escribir un diario en línea",
      about_heading: "Los beneficios de llevar un diario diario",
      about_quote: '"Escribir en un diario es una forma de darle sentido al mundo y comprenderte a ti mismo."',
      about_author: "— El poder de la escritura diaria",
      about_p1: "Escribir un diario diario es uno de los hábitos más poderosos que puedes desarrollar. Un diario en línea ofrece la comodidad de escribir desde cualquier dispositivo mientras mantienes tus pensamientos privados y organizados.",
      about_p2: "WriteDiary es el diario para escribir tu historia auténtica. Ya sea que estés procesando un día difícil, celebrando un hito o practicando la gratitud, nuestro sitio web de diarios te da el espacio perfecto.",
      guide_label: "Consejos de escritura", guide_heading: "Consejos para principiantes en diarios diarios",
      guide_sub: "Comienza tu viaje de escritura de diario en línea con estos consejos de expertos.",
      lang_label: "Diario en tu idioma",
      lang_heading: "Escribe tu diario en tu idioma",
      lang_sub: "WriteDiary admite 5 idiomas para que puedas escribir tu diario personal en el idioma más cercano a tu corazón.",
      whydiary_label: "Aprende más",
      whydiary_heading: "Todo sobre la escritura de diario en línea",
      whydiary_sub: "Comprende el poder de un diario personal para escribir tus pensamientos diarios.",
      faq_label: "Preguntas frecuentes", faq_heading: "Preguntas Frecuentes",
      faq_sub: "Todo lo que necesitas saber sobre WriteDiary — tu sitio web de diario en línea gratuito.",
      cta_label: "Empieza Hoy — Es Gratis",
      cta_title: "¿Listo para escribir tu primera entrada de diario?",
      cta_desc: "Únete a miles que usan WriteDiary como su sitio de escritura de diario en línea de confianza. Sin registro, sin pago.",
      cta_btn: "📖 Abrir Mi Diario Ahora",
      contact_label: "Contáctanos", contact_heading: "Contacto",
      contact_desc: "¿Tienes una pregunta o sugerencia sobre nuestra plataforma de diario en línea?",
      label_name: "Tu nombre", label_email: "Correo electrónico", label_subject: "Asunto", label_message: "Mensaje", submit_btn: "Enviar →",
    },
    pt: {
      hero_badge: "Diário Online Grátis",
      hero_title: "Seu espaço privado para <em>escrever seu diário</em> online",
      hero_sub: "WriteDiary é o site de escrita de diário mais elegante. Capture seus pensamentos, emoções e memórias diárias em um diário digital bonito e seguro — completamente grátis.",
      hero_cta_primary: "📝 Começar Agora",
      hero_cta_secondary: "Ver Recursos",
      stat1: "Grátis Para Sempre", stat2: "Idiomas Suportados", stat3: "Entradas de Diário",
      feat_label: "Por que escolher WriteDiary",
      feat_heading: "Tudo que você precisa para escrever seu diário diário",
      feat_sub: "Um site de escrita de diário lindamente projetado com todos os recursos.",
      hiw_label: "Simples e Intuitivo",
      hiw_heading: "Comece a escrever seu diário em 3 passos simples",
      hiw_sub: "Sem cadastro. Abra seu diário online e comece a escrever imediatamente.",
      about_label: "Por que escrever diário online",
      about_heading: "Os benefícios de manter um diário diário",
      about_quote: '"Escrever em um diário é uma forma de dar sentido ao mundo e entender a si mesmo."',
      about_author: "— O poder da escrita diária",
      about_p1: "Escrever um diário diário é um dos hábitos mais poderosos que você pode construir. Um diário online oferece a conveniência de escrever de qualquer dispositivo enquanto mantém seus pensamentos privados e organizados.",
      about_p2: "WriteDiary é o diário para escrever sua história autêntica. Seja processando um dia difícil, celebrando uma conquista ou praticando gratidão, nosso site de diário oferece o espaço perfeito.",
      guide_label: "Dicas de escrita", guide_heading: "Dicas de escrita de diário diário para iniciantes",
      guide_sub: "Comece sua jornada de escrita de diário online com estas dicas especializadas.",
      lang_label: "Diário no seu idioma",
      lang_heading: "Escreva seu diário no seu idioma",
      lang_sub: "WriteDiary suporta 5 idiomas para que você possa escrever seu diário pessoal no idioma mais próximo ao seu coração.",
      whydiary_label: "Saiba mais",
      whydiary_heading: "Tudo sobre escrita de diário online",
      whydiary_sub: "Entenda o poder de um diário pessoal para escrever seus pensamentos diários.",
      faq_label: "Perguntas comuns", faq_heading: "Perguntas Frequentes",
      faq_sub: "Tudo que você precisa saber sobre WriteDiary — seu site gratuito de escrita de diário online.",
      cta_label: "Comece Hoje — É Grátis",
      cta_title: "Pronto para escrever sua primeira entrada de diário?",
      cta_desc: "Junte-se a milhares que usam WriteDiary como seu site de escrita de diário online de confiança. Sem cadastro, sem pagamento.",
      cta_btn: "📖 Abrir Meu Diário Agora",
      contact_label: "Entre em Contato", contact_heading: "Contato",
      contact_desc: "Tem alguma dúvida ou sugestão sobre nossa plataforma de diário online?",
      label_name: "Seu nome", label_email: "E-mail", label_subject: "Assunto", label_message: "Mensagem", submit_btn: "Enviar →",
    },
    fr: {
      hero_badge: "Journal en Ligne Gratuit",
      hero_title: "Votre espace privé pour <em>écrire votre journal</em> en ligne",
      hero_sub: "WriteDiary est le site de journal en ligne le plus élégant. Capturez vos pensées, émotions et souvenirs quotidiens dans un journal numérique sécurisé — entièrement gratuit.",
      hero_cta_primary: "📝 Commencer Maintenant",
      hero_cta_secondary: "Voir les Fonctions",
      stat1: "Gratuit Pour Toujours", stat2: "Langues Supportées", stat3: "Entrées de Journal",
      feat_label: "Pourquoi choisir WriteDiary",
      feat_heading: "Tout ce dont vous avez besoin pour écrire votre journal quotidien",
      feat_sub: "Un site d'écriture de journal magnifiquement conçu avec toutes les fonctionnalités.",
      hiw_label: "Simple et Intuitif",
      hiw_heading: "Commencez à écrire votre journal en 3 étapes simples",
      hiw_sub: "Pas d'inscription. Ouvrez votre journal en ligne et commencez à écrire immédiatement.",
      about_label: "Pourquoi écrire un journal en ligne",
      about_heading: "Les avantages de tenir un journal quotidien",
      about_quote: '"Écrire dans un journal, c\'est donner du sens au monde et se comprendre soi-même."',
      about_author: "— Le pouvoir de l'écriture quotidienne",
      about_p1: "L'écriture d'un journal quotidien est l'une des habitudes les plus puissantes que vous puissiez développer. Un journal en ligne offre la commodité d'écrire depuis n'importe quel appareil tout en gardant vos pensées privées.",
      about_p2: "WriteDiary est le journal pour écrire votre histoire authentique. Que vous traitiez une journée difficile, célébriez une étape ou pratiquez la gratitude, notre site vous offre l'espace parfait.",
      guide_label: "Conseils d'écriture", guide_heading: "Conseils d'écriture de journal quotidien pour débutants",
      guide_sub: "Commencez votre parcours d'écriture de journal en ligne avec ces conseils d'experts.",
      lang_label: "Journal dans votre langue",
      lang_heading: "Écrivez votre journal dans votre langue",
      lang_sub: "WriteDiary prend en charge 5 langues pour que vous puissiez écrire votre journal dans la langue la plus proche de votre cœur.",
      whydiary_label: "En savoir plus",
      whydiary_heading: "Tout sur l'écriture de journal en ligne",
      whydiary_sub: "Comprendre le pouvoir d'un journal personnel pour écrire vos pensées quotidiennes.",
      faq_label: "Questions courantes", faq_heading: "Questions Fréquemment Posées",
      faq_sub: "Tout ce que vous devez savoir sur WriteDiary — votre site gratuit d'écriture de journal en ligne.",
      cta_label: "Commencez Aujourd'hui — C'est Gratuit",
      cta_title: "Prêt à écrire votre première entrée de journal?",
      cta_desc: "Rejoignez des milliers qui utilisent WriteDiary comme leur site d'écriture de journal en ligne de confiance. Sans inscription, sans paiement.",
      cta_btn: "📖 Ouvrir Mon Journal Maintenant",
      contact_label: "Contactez-nous", contact_heading: "Contact",
      contact_desc: "Vous avez une question ou une suggestion sur notre plateforme de journal en ligne?",
      label_name: "Votre nom", label_email: "Adresse e-mail", label_subject: "Sujet", label_message: "Message", submit_btn: "Envoyer →",
    },
    de: {
      hero_badge: "Kostenloses Online-Tagebuch",
      hero_title: "Ihr privater Raum zum <em>Tagebuch schreiben</em> online",
      hero_sub: "WriteDiary ist die eleganteste Tagebuch-Schreibwebsite. Erfassen Sie Ihre täglichen Gedanken, Gefühle und Erinnerungen in einem schönen, sicheren digitalen Tagebuch — völlig kostenlos.",
      hero_cta_primary: "📝 Jetzt Starten",
      hero_cta_secondary: "Funktionen Entdecken",
      stat1: "Für Immer Kostenlos", stat2: "Unterstützte Sprachen", stat3: "Tagebucheinträge",
      feat_label: "Warum WriteDiary wählen",
      feat_heading: "Alles für Ihr tägliches Tagebuchschreiben",
      feat_sub: "Eine wunderschön gestaltete Tagebuch-Schreibwebsite mit allen Funktionen, die Sie benötigen.",
      hiw_label: "Einfach & Intuitiv",
      hiw_heading: "In 3 einfachen Schritten mit dem Tagebuchschreiben beginnen",
      hiw_sub: "Keine Anmeldung erforderlich. Öffnen Sie Ihr Online-Tagebuch und beginnen Sie sofort.",
      about_label: "Warum online Tagebuch schreiben",
      about_heading: "Die Vorteile eines täglichen Tagebuchs",
      about_quote: '"Tagebuch zu schreiben ist ein Weg, die Welt zu verstehen und sich selbst zu begreifen."',
      about_author: "— Die Kraft des täglichen Schreibens",
      about_p1: "Tägliches Tagebuchschreiben ist eine der kraftvollsten Gewohnheiten, die Sie entwickeln können. Ein Online-Tagebuch bietet den Komfort des Schreibens von jedem Gerät.",
      about_p2: "WriteDiary ist das Tagebuch für Ihre authentische Geschichte. Ob Sie einen schwierigen Tag verarbeiten, einen Meilenstein feiern oder Dankbarkeit üben — unsere Tagebuch-Website gibt Ihnen den perfekten Raum.",
      guide_label: "Schreibtipps", guide_heading: "Tagebuchschreib-Tipps für Anfänger",
      guide_sub: "Beginnen Sie Ihre Online-Tagebuchschreib-Reise mit diesen Expertentipps.",
      lang_label: "Tagebuch in Ihrer Sprache",
      lang_heading: "Schreiben Sie Ihr Tagebuch in Ihrer Sprache",
      lang_sub: "WriteDiary unterstützt 5 Sprachen, damit Sie Ihr persönliches Tagebuch in der Sprache schreiben können, die Ihrem Herzen am nächsten ist.",
      whydiary_label: "Mehr erfahren",
      whydiary_heading: "Alles über Online-Tagebuchschreiben",
      whydiary_sub: "Verstehen Sie die Kraft eines persönlichen Tagebuchs für Ihre täglichen Gedanken.",
      faq_label: "Häufige Fragen", faq_heading: "Häufig Gestellte Fragen",
      faq_sub: "Alles, was Sie über WriteDiary wissen müssen — Ihre kostenlose Online-Tagebuch-Website.",
      cta_label: "Starten Sie Heute — Kostenlos",
      cta_title: "Bereit, Ihren ersten Tagebucheintrag zu schreiben?",
      cta_desc: "Schließen Sie sich Tausenden an, die WriteDiary täglich nutzen. Keine Anmeldung, keine Zahlung.",
      cta_btn: "📖 Mein Tagebuch Jetzt Öffnen",
      contact_label: "Kontakt aufnehmen", contact_heading: "Kontakt",
      contact_desc: "Haben Sie eine Frage oder einen Vorschlag zu unserer Online-Tagebuch-Plattform?",
      label_name: "Ihr Name", label_email: "E-Mail-Adresse", label_subject: "Betreff", label_message: "Nachricht", submit_btn: "Senden →",
    }
  };

  const FEATURES = {
    en: [
      { icon: "🔒", title: "Private & Secure", desc: "Your diary is stored only on your device. No cloud uploads, no data sharing — your thoughts remain completely private." },
      { icon: "📅", title: "Daily Diary Writing", desc: "Build the habit of daily diary writing with automatic date stamps and an intuitive editor designed for everyday use." },
      { icon: "🎨", title: "Rich Text Editor", desc: "Format your diary entries with bold, italic, and more. Make your online diary as expressive as your thoughts." },
      { icon: "😊", title: "Mood Tracker", desc: "Log how you feel each day alongside your diary entry. Track your emotional journey over time." },
      { icon: "🔍", title: "Search & Find", desc: "Instantly search through all your diary entries to find memories, ideas, and moments from the past." },
      { icon: "📤", title: "Export Diary", desc: "Download your diary entries as a text file anytime. Your stories, your way — always accessible offline." },
      { icon: "🌐", title: "5 Languages", desc: "Write diary in English, Spanish, Portuguese, French, or German. A truly global online diary writing website." },
      { icon: "📱", title: "Mobile Friendly", desc: "Write your diary on any device — smartphone, tablet, or desktop. Beautiful on every screen size." },
      { icon: "⚡", title: "Auto-Save", desc: "Never lose a thought. Your diary entries are automatically saved as you type, every single time." },
    ],
    es: [
      { icon: "🔒", title: "Privado y Seguro", desc: "Tu diario se almacena solo en tu dispositivo. Sin cargas en la nube, sin compartir datos." },
      { icon: "📅", title: "Escritura Diaria de Diario", desc: "Desarrolla el hábito de escribir en tu diario diario con marcas de fecha automáticas." },
      { icon: "🎨", title: "Editor de Texto Enriquecido", desc: "Formatea tus entradas con negrita, cursiva y más." },
      { icon: "😊", title: "Rastreador de Estado de Ánimo", desc: "Registra cómo te sientes cada día junto con tu entrada de diario." },
      { icon: "🔍", title: "Búsqueda y Encuentra", desc: "Busca instantáneamente todas tus entradas de diario." },
      { icon: "📤", title: "Exportar Diario", desc: "Descarga tus entradas de diario como archivo de texto en cualquier momento." },
      { icon: "🌐", title: "5 Idiomas", desc: "Escribe diario en inglés, español, portugués, francés o alemán." },
      { icon: "📱", title: "Compatible con Móviles", desc: "Escribe tu diario en cualquier dispositivo — teléfono, tableta o escritorio." },
      { icon: "⚡", title: "Guardado Automático", desc: "Nunca pierdas un pensamiento. Tus entradas se guardan automáticamente." },
    ],
    pt: [
      { icon: "🔒", title: "Privado e Seguro", desc: "Seu diário é armazenado apenas no seu dispositivo. Sem uploads na nuvem, sem compartilhamento de dados." },
      { icon: "📅", title: "Escrita Diária de Diário", desc: "Construa o hábito de escrever diário diariamente com carimbos de data automáticos." },
      { icon: "🎨", title: "Editor de Texto Rico", desc: "Formate suas entradas com negrito, itálico e mais." },
      { icon: "😊", title: "Rastreador de Humor", desc: "Registre como você se sente a cada dia junto com sua entrada de diário." },
      { icon: "🔍", title: "Pesquisar e Encontrar", desc: "Pesquise instantaneamente todas as suas entradas de diário." },
      { icon: "📤", title: "Exportar Diário", desc: "Baixe suas entradas de diário como arquivo de texto a qualquer momento." },
      { icon: "🌐", title: "5 Idiomas", desc: "Escreva diário em inglês, espanhol, português, francês ou alemão." },
      { icon: "📱", title: "Compatível com Celular", desc: "Escreva seu diário em qualquer dispositivo — smartphone, tablet ou desktop." },
      { icon: "⚡", title: "Salvamento Automático", desc: "Nunca perca um pensamento. Suas entradas são salvas automaticamente." },
    ],
    fr: [
      { icon: "🔒", title: "Privé et Sécurisé", desc: "Votre journal est stocké uniquement sur votre appareil. Pas de téléchargement cloud, pas de partage de données." },
      { icon: "📅", title: "Écriture Quotidienne de Journal", desc: "Développez l'habitude d'écrire votre journal quotidien avec des horodatages automatiques." },
      { icon: "🎨", title: "Éditeur de Texte Enrichi", desc: "Formatez vos entrées avec du gras, de l'italique et plus encore." },
      { icon: "😊", title: "Suivi d'Humeur", desc: "Enregistrez comment vous vous sentez chaque jour avec votre entrée de journal." },
      { icon: "🔍", title: "Rechercher et Trouver", desc: "Recherchez instantanément toutes vos entrées de journal." },
      { icon: "📤", title: "Exporter le Journal", desc: "Téléchargez vos entrées de journal sous forme de fichier texte à tout moment." },
      { icon: "🌐", title: "5 Langues", desc: "Écrivez un journal en anglais, espagnol, portugais, français ou allemand." },
      { icon: "📱", title: "Compatible Mobile", desc: "Écrivez votre journal sur n'importe quel appareil — smartphone, tablette ou ordinateur." },
      { icon: "⚡", title: "Sauvegarde Automatique", desc: "Ne perdez jamais une pensée. Vos entrées sont automatiquement sauvegardées." },
    ],
    de: [
      { icon: "🔒", title: "Privat & Sicher", desc: "Ihr Tagebuch wird nur auf Ihrem Gerät gespeichert. Kein Cloud-Upload, keine Datenweitergabe." },
      { icon: "📅", title: "Tägliches Tagebuchschreiben", desc: "Entwickeln Sie die Gewohnheit des täglichen Tagebuchschreibens mit automatischen Datumsstempeln." },
      { icon: "🎨", title: "Rich-Text-Editor", desc: "Formatieren Sie Ihre Einträge mit Fett, Kursiv und mehr." },
      { icon: "😊", title: "Stimmungsverfolgung", desc: "Notieren Sie täglich Ihre Stimmung zusammen mit Ihrem Tagebucheintrag." },
      { icon: "🔍", title: "Suchen & Finden", desc: "Durchsuchen Sie sofort alle Ihre Tagebucheinträge." },
      { icon: "📤", title: "Tagebuch Exportieren", desc: "Laden Sie Ihre Tagebucheinträge jederzeit als Textdatei herunter." },
      { icon: "🌐", title: "5 Sprachen", desc: "Tagebuch schreiben auf Englisch, Spanisch, Portugiesisch, Französisch oder Deutsch." },
      { icon: "📱", title: "Mobilfreundlich", desc: "Schreiben Sie Ihr Tagebuch auf jedem Gerät — Smartphone, Tablet oder Desktop." },
      { icon: "⚡", title: "Automatisches Speichern", desc: "Verlieren Sie niemals einen Gedanken. Ihre Einträge werden automatisch gespeichert." },
    ]
  };

  const STEPS = {
    en: [
      { num: "1", title: "Open Your Online Diary", desc: "Visit WriteDiary on any device. No account needed — your diary is ready instantly." },
      { num: "2", title: "Write Your Diary Entry", desc: "Click 'New Entry', pick a mood, write your thoughts. Daily diary writing made effortless." },
      { num: "3", title: "Save & Reflect", desc: "Your entry is saved automatically. Come back anytime to read, search, or add more." },
      { num: "4", title: "Grow Through Writing", desc: "Build a daily diary habit. Track your moods, export your diary, and rediscover your story." }
    ],
    es: [
      { num: "1", title: "Abre tu diario en línea", desc: "Visita WriteDiary en cualquier dispositivo. Sin cuenta, tu diario está listo al instante." },
      { num: "2", title: "Escribe tu entrada de diario", desc: "Haz clic en 'Nueva Entrada', elige un estado de ánimo, escribe tus pensamientos." },
      { num: "3", title: "Guarda y reflexiona", desc: "Tu entrada se guarda automáticamente. Vuelve cuando quieras a leer o añadir más." },
      { num: "4", title: "Crece a través de la escritura", desc: "Desarrolla el hábito del diario diario. Sigue tu humor y exporta tu diario." }
    ],
    pt: [
      { num: "1", title: "Abra seu diário online", desc: "Visite WriteDiary em qualquer dispositivo. Sem conta, seu diário está pronto imediatamente." },
      { num: "2", title: "Escreva sua entrada de diário", desc: "Clique em 'Nova Entrada', escolha um humor, escreva seus pensamentos." },
      { num: "3", title: "Salve e reflita", desc: "Sua entrada é salva automaticamente. Volte a qualquer momento para ler ou adicionar mais." },
      { num: "4", title: "Cresça através da escrita", desc: "Construa um hábito de diário diário. Rastreie seus humores e exporte seu diário." }
    ],
    fr: [
      { num: "1", title: "Ouvrez votre journal en ligne", desc: "Visitez WriteDiary sur n'importe quel appareil. Sans compte, votre journal est prêt instantanément." },
      { num: "2", title: "Écrivez votre entrée de journal", desc: "Cliquez sur 'Nouvelle Entrée', choisissez une humeur, écrivez vos pensées." },
      { num: "3", title: "Enregistrez et réfléchissez", desc: "Votre entrée est automatiquement sauvegardée. Revenez à tout moment pour lire ou ajouter." },
      { num: "4", title: "Grandissez grâce à l'écriture", desc: "Développez une habitude de journal quotidien. Suivez vos humeurs et exportez votre journal." }
    ],
    de: [
      { num: "1", title: "Öffnen Sie Ihr Online-Tagebuch", desc: "Besuchen Sie WriteDiary auf jedem Gerät. Kein Konto erforderlich." },
      { num: "2", title: "Schreiben Sie Ihren Tagebucheintrag", desc: "Klicken Sie auf 'Neuer Eintrag', wählen Sie eine Stimmung, schreiben Sie Ihre Gedanken." },
      { num: "3", title: "Speichern und nachdenken", desc: "Ihr Eintrag wird automatisch gespeichert. Kommen Sie jederzeit zurück." },
      { num: "4", title: "Durch Schreiben wachsen", desc: "Entwickeln Sie eine tägliche Tagebuchgewohnheit. Verfolgen Sie Ihre Stimmungen." }
    ]
  };

  const TIPS = {
    en: [
      { num: "01", title: "Write at the Same Time Daily", desc: "Choose a consistent time — morning or night — to write your diary. Routine makes daily diary writing sustainable." },
      { num: "02", title: "Start With Today's Highlight", desc: "Begin each diary entry with one thing that stood out. Even a small detail makes a great start for your online diary." },
      { num: "03", title: "Be Honest & Authentic", desc: "Your diary is private. Write honestly without judgment. Authentic diary writing is the most healing form of self-expression." },
      { num: "04", title: "Use Prompts When Stuck", desc: "Can't find words? Try prompts like 'Today I felt…' or 'I'm grateful for…' to kickstart your diary entry." },
      { num: "05", title: "Track Your Mood", desc: "Use WriteDiary's mood tracker with each entry. Reviewing moods over time reveals powerful insights about yourself." },
      { num: "06", title: "Don't Skip — Catch Up", desc: "Missed a day? Write a catch-up entry. The best diary to write is an imperfect one done consistently." }
    ],
    es: [
      { num: "01", title: "Escribe a la misma hora diariamente", desc: "Elige una hora consistente para escribir en tu diario. La rutina hace que la escritura diaria sea sostenible." },
      { num: "02", title: "Empieza con lo más destacado del día", desc: "Comienza cada entrada con algo que se haya destacado. Incluso un pequeño detalle es un gran comienzo." },
      { num: "03", title: "Sé honesto y auténtico", desc: "Tu diario es privado. Escribe honestamente sin juzgarte." },
      { num: "04", title: "Usa prompts cuando estés bloqueado", desc: "¿No encuentras palabras? Prueba 'Hoy me sentí…' o 'Estoy agradecido/a por…'" },
      { num: "05", title: "Rastrea tu estado de ánimo", desc: "Usa el rastreador de humor de WriteDiary con cada entrada." },
      { num: "06", title: "No te saltes, ponte al día", desc: "¿Olvidaste un día? Escribe una entrada de recuperación." }
    ],
    pt: [
      { num: "01", title: "Escreva no mesmo horário diariamente", desc: "Escolha um horário consistente para escrever seu diário. A rotina torna a escrita diária sustentável." },
      { num: "02", title: "Comece com o destaque do dia", desc: "Comece cada entrada com algo que se destacou. Até um pequeno detalhe é um ótimo começo." },
      { num: "03", title: "Seja honesto e autêntico", desc: "Seu diário é privado. Escreva honestamente sem julgamentos." },
      { num: "04", title: "Use prompts quando travado", desc: "Sem palavras? Tente 'Hoje eu senti…' ou 'Sou grato(a) por…'" },
      { num: "05", title: "Acompanhe seu humor", desc: "Use o rastreador de humor do WriteDiary com cada entrada." },
      { num: "06", title: "Não pule — acompanhe", desc: "Perdeu um dia? Escreva uma entrada de recuperação." }
    ],
    fr: [
      { num: "01", title: "Écrivez à la même heure chaque jour", desc: "Choisissez une heure régulière pour écrire votre journal. La routine rend l'écriture quotidienne durable." },
      { num: "02", title: "Commencez par le moment fort du jour", desc: "Commencez chaque entrée par quelque chose qui s'est démarqué. Même un petit détail est un bon début." },
      { num: "03", title: "Soyez honnête et authentique", desc: "Votre journal est privé. Écrivez honnêtement sans jugement." },
      { num: "04", title: "Utilisez des amorces quand vous êtes bloqué", desc: "Sans mots? Essayez 'Aujourd'hui je me suis senti…' ou 'Je suis reconnaissant(e) pour…'" },
      { num: "05", title: "Suivez votre humeur", desc: "Utilisez le suivi d'humeur de WriteDiary avec chaque entrée." },
      { num: "06", title: "Ne sautez pas — rattrapez", desc: "Manqué un jour? Écrivez une entrée de rattrapage." }
    ],
    de: [
      { num: "01", title: "Täglich zur gleichen Zeit schreiben", desc: "Wählen Sie eine feste Zeit zum Tagebuchschreiben. Routine macht das tägliche Schreiben nachhaltig." },
      { num: "02", title: "Mit dem Highlight des Tages beginnen", desc: "Beginnen Sie jeden Eintrag mit etwas, das aufgefallen ist. Selbst ein kleines Detail ist ein guter Start." },
      { num: "03", title: "Ehrlich und authentisch sein", desc: "Ihr Tagebuch ist privat. Schreiben Sie ehrlich ohne Urteile." },
      { num: "04", title: "Schreibanreize nutzen", desc: "Keine Worte? Versuchen Sie 'Heute fühlte ich mich…' oder 'Ich bin dankbar für…'" },
      { num: "05", title: "Stimmung verfolgen", desc: "Nutzen Sie WriteDiarys Stimmungsverfolgung mit jedem Eintrag." },
      { num: "06", title: "Nicht überspringen — nachholen", desc: "Einen Tag verpasst? Schreiben Sie einen Nachholbeitrag." }
    ]
  };

  const BENEFITS = {
    en: ["Reduces stress and anxiety through expressive writing","Improves self-awareness and emotional intelligence","Helps set and track personal goals over time","Strengthens memory by recording daily experiences","Provides a private, judgement-free space for your thoughts"],
    es: ["Reduce el estrés y la ansiedad mediante la escritura expresiva","Mejora la autoconciencia y la inteligencia emocional","Ayuda a establecer y rastrear metas personales","Fortalece la memoria registrando experiencias diarias","Proporciona un espacio privado para tus pensamientos"],
    pt: ["Reduz estresse e ansiedade através da escrita expressiva","Melhora a autoconsciência e a inteligência emocional","Ajuda a definir e acompanhar objetivos pessoais","Fortalece a memória registrando experiências diárias","Fornece um espaço privado para seus pensamentos"],
    fr: ["Réduit le stress et l'anxiété grâce à l'écriture expressive","Améliore la conscience de soi et l'intelligence émotionnelle","Aide à définir et à suivre des objectifs personnels","Renforce la mémoire en enregistrant les expériences quotidiennes","Fournit un espace privé pour vos pensées"],
    de: ["Reduziert Stress und Angst durch expressives Schreiben","Verbessert Selbstbewusstsein und emotionale Intelligenz","Hilft beim Setzen und Verfolgen persönlicher Ziele","Stärkt das Gedächtnis durch Aufzeichnung täglicher Erlebnisse","Bietet einen privaten Raum für Ihre Gedanken"]
  };

  const LANGS_DATA = [
    { flag: "🇬🇧", name: "English", native: "English", code: "en" },
    { flag: "🇪🇸", name: "Spanish", native: "Español", code: "es" },
    { flag: "🇧🇷", name: "Portuguese", native: "Português", code: "pt" },
    { flag: "🇫🇷", name: "French", native: "Français", code: "fr" },
    { flag: "🇩🇪", name: "German", native: "Deutsch", code: "de" }
  ];

  const FAQ_DATA = {
    en: [
      { q: "Is WriteDiary completely free?", a: "Yes! WriteDiary is 100% free with no hidden costs. Write unlimited diary entries without any subscription or payment required." },
      { q: "Do I need to create an account to write my diary online?", a: "No account or sign-up is needed. Simply open WriteDiary in your browser and start writing your diary immediately. Your entries are stored locally on your device." },
      { q: "Is my diary private and secure?", a: "Absolutely. Your diary entries are stored locally using your browser's storage. They never leave your device — no cloud uploads, no third-party access. Your private diary stays private." },
      { q: "Can I write in my diary every day?", a: "Yes! WriteDiary is designed specifically for daily diary writing. Each entry is automatically date-stamped, making it perfect for building a daily journaling habit." },
      { q: "What languages does this diary writing website support?", a: "WriteDiary currently supports English, Spanish (Español), Portuguese (Português), French (Français), and German (Deutsch). You can switch languages anytime from the navigation bar." },
      { q: "Can I export or download my diary entries?", a: "Yes. You can export your diary entries as a text file at any time from the diary app. Your stories belong to you." },
      { q: "Does WriteDiary work on mobile phones?", a: "WriteDiary is fully responsive and works beautifully on smartphones, tablets, and desktop computers. Write your diary from any device, anywhere." },
      { q: "What if I lose my diary entries?", a: "Your entries are stored in your browser's local storage. We recommend using the export feature regularly to back up your diary entries as a text file." }
    ],
    es: [
      { q: "¿WriteDiary es completamente gratuito?", a: "¡Sí! WriteDiary es 100% gratuito sin costos ocultos. Escribe entradas de diario ilimitadas sin suscripción." },
      { q: "¿Necesito crear una cuenta para escribir mi diario en línea?", a: "No se necesita cuenta. Simplemente abre WriteDiary en tu navegador y empieza a escribir de inmediato." },
      { q: "¿Mi diario es privado y seguro?", a: "Absolutamente. Tus entradas se almacenan localmente en tu dispositivo. Nunca salen de tu dispositivo." },
      { q: "¿Puedo escribir en mi diario todos los días?", a: "¡Sí! WriteDiary está diseñado específicamente para la escritura diaria de diario." },
      { q: "¿Qué idiomas soporta este sitio web de diarios?", a: "WriteDiary soporta inglés, español, portugués, francés y alemán." },
      { q: "¿Puedo exportar mis entradas de diario?", a: "Sí. Puedes exportar tus entradas como archivo de texto en cualquier momento." },
      { q: "¿WriteDiary funciona en teléfonos móviles?", a: "WriteDiary es totalmente responsivo y funciona en smartphones, tabletas y computadoras." },
      { q: "¿Qué pasa si pierdo mis entradas de diario?", a: "Te recomendamos usar la función de exportación regularmente para hacer copias de seguridad." }
    ],
    pt: [
      { q: "WriteDiary é completamente gratuito?", a: "Sim! WriteDiary é 100% gratuito sem custos ocultos. Escreva entradas de diário ilimitadas sem assinatura." },
      { q: "Preciso criar uma conta para escrever meu diário online?", a: "Não é necessária nenhuma conta. Simplesmente abra WriteDiary no seu navegador e comece a escrever imediatamente." },
      { q: "Meu diário é privado e seguro?", a: "Com certeza. Suas entradas são armazenadas localmente no seu dispositivo. Elas nunca saem do seu dispositivo." },
      { q: "Posso escrever no meu diário todos os dias?", a: "Sim! WriteDiary é projetado especificamente para escrita diária de diário." },
      { q: "Quais idiomas este site de escrita de diário suporta?", a: "WriteDiary suporta inglês, espanhol, português, francês e alemão." },
      { q: "Posso exportar minhas entradas de diário?", a: "Sim. Você pode exportar suas entradas como arquivo de texto a qualquer momento." },
      { q: "WriteDiary funciona em celulares?", a: "WriteDiary é totalmente responsivo e funciona em smartphones, tablets e computadores." },
      { q: "O que acontece se eu perder minhas entradas de diário?", a: "Recomendamos usar o recurso de exportação regularmente para fazer backup das suas entradas." }
    ],
    fr: [
      { q: "WriteDiary est-il entièrement gratuit?", a: "Oui! WriteDiary est 100% gratuit sans frais cachés. Écrivez des entrées de journal illimitées sans abonnement." },
      { q: "Dois-je créer un compte pour écrire mon journal en ligne?", a: "Aucun compte n'est nécessaire. Ouvrez simplement WriteDiary dans votre navigateur et commencez à écrire." },
      { q: "Mon journal est-il privé et sécurisé?", a: "Absolument. Vos entrées sont stockées localement sur votre appareil. Elles ne quittent jamais votre appareil." },
      { q: "Puis-je écrire dans mon journal tous les jours?", a: "Oui! WriteDiary est conçu spécifiquement pour l'écriture quotidienne de journal." },
      { q: "Quelles langues ce site de journal prend-il en charge?", a: "WriteDiary prend en charge l'anglais, l'espagnol, le portugais, le français et l'allemand." },
      { q: "Puis-je exporter mes entrées de journal?", a: "Oui. Vous pouvez exporter vos entrées sous forme de fichier texte à tout moment." },
      { q: "WriteDiary fonctionne-t-il sur les téléphones mobiles?", a: "WriteDiary est entièrement responsive et fonctionne sur smartphones, tablettes et ordinateurs." },
      { q: "Que se passe-t-il si je perds mes entrées?", a: "Nous vous recommandons d'utiliser régulièrement la fonction d'exportation pour sauvegarder vos entrées." }
    ],
    de: [
      { q: "Ist WriteDiary völlig kostenlos?", a: "Ja! WriteDiary ist 100% kostenlos ohne versteckte Kosten. Schreiben Sie unbegrenzt Tagebucheinträge ohne Abonnement." },
      { q: "Muss ich ein Konto erstellen, um online Tagebuch zu schreiben?", a: "Kein Konto erforderlich. Öffnen Sie einfach WriteDiary in Ihrem Browser und beginnen Sie sofort." },
      { q: "Ist mein Tagebuch privat und sicher?", a: "Absolut. Ihre Einträge werden lokal auf Ihrem Gerät gespeichert. Sie verlassen niemals Ihr Gerät." },
      { q: "Kann ich täglich in mein Tagebuch schreiben?", a: "Ja! WriteDiary ist speziell für das tägliche Tagebuchschreiben konzipiert." },
      { q: "Welche Sprachen unterstützt diese Tagebuch-Website?", a: "WriteDiary unterstützt Englisch, Spanisch, Portugiesisch, Französisch und Deutsch." },
      { q: "Kann ich meine Tagebucheinträge exportieren?", a: "Ja. Sie können Ihre Einträge jederzeit als Textdatei exportieren." },
      { q: "Funktioniert WriteDiary auf Mobiltelefonen?", a: "WriteDiary ist vollständig responsive und funktioniert auf Smartphones, Tablets und Computern." },
      { q: "Was passiert, wenn ich meine Einträge verliere?", a: "Wir empfehlen, die Exportfunktion regelmäßig zu nutzen, um Ihre Einträge zu sichern." }
    ]
  };

  const CONTENT_COLS = {
    en: [
      { h: "What Is Online Diary Writing?", p: "Online diary writing is the practice of keeping a personal diary on the internet or through a web application. Unlike paper diaries, an online diary writing website like WriteDiary lets you write, search, and organize your diary entries from any device, anytime." },
      { h: "Why Keep a Diary to Write Daily?", p: "Keeping a diary to write in daily helps you process emotions, track personal growth, and create a lasting record of your life. Research shows that daily diary writing reduces stress, improves clarity of thought, and boosts emotional resilience over time." },
      { h: "Benefits of a Diary Writing Website", p: "A diary writing website offers convenience over paper: no lost notebooks, searchable entries, automatic date stamps, and the ability to write from any location. WriteDiary is designed as the most intuitive diary to write in, every single day." },
      { h: "How Daily Diary Writing Transforms You", p: "The habit of writing in your diary every day builds extraordinary self-awareness. Over weeks and months of daily diary writing, patterns emerge — in your mood, thoughts, and reactions — that you'd never notice otherwise. It becomes a mirror of your inner world." }
    ],
    es: [
      { h: "¿Qué es la escritura de diario en línea?", p: "La escritura de diario en línea es la práctica de llevar un diario personal en internet. A diferencia de los diarios en papel, un sitio web de escritura de diario en línea te permite escribir, buscar y organizar tus entradas desde cualquier dispositivo." },
      { h: "¿Por qué llevar un diario para escribir diariamente?", p: "Llevar un diario para escribir diariamente te ayuda a procesar emociones, rastrear el crecimiento personal y crear un registro duradero de tu vida." },
      { h: "Beneficios de un sitio web de escritura de diario", p: "Un sitio web de escritura de diario ofrece comodidad sobre el papel: sin cuadernos perdidos, entradas buscables y sellos de fecha automáticos." },
      { h: "Cómo la escritura diaria de diario te transforma", p: "El hábito de escribir en tu diario todos los días construye una autoconciencia extraordinaria. A lo largo de semanas y meses, emergen patrones que nunca habrías notado de otra manera." }
    ],
    pt: [
      { h: "O que é escrita de diário online?", p: "A escrita de diário online é a prática de manter um diário pessoal na internet. Ao contrário dos diários em papel, um site de escrita de diário online permite que você escreva, pesquise e organize suas entradas de qualquer dispositivo." },
      { h: "Por que manter um diário para escrever diariamente?", p: "Manter um diário para escrever diariamente ajuda você a processar emoções, acompanhar o crescimento pessoal e criar um registro duradouro da sua vida." },
      { h: "Benefícios de um site de escrita de diário", p: "Um site de escrita de diário oferece conveniência sobre o papel: sem cadernos perdidos, entradas pesquisáveis e carimbos de data automáticos." },
      { h: "Como a escrita diária de diário transforma você", p: "O hábito de escrever no seu diário todos os dias constrói uma autoconsciência extraordinária. Ao longo de semanas e meses, padrões emergem que você nunca notaria de outra forma." }
    ],
    fr: [
      { h: "Qu'est-ce que l'écriture de journal en ligne?", p: "L'écriture de journal en ligne est la pratique de tenir un journal personnel sur Internet. Contrairement aux journaux papier, un site de journal en ligne vous permet d'écrire, de rechercher et d'organiser vos entrées depuis n'importe quel appareil." },
      { h: "Pourquoi tenir un journal à écrire quotidiennement?", p: "Tenir un journal à écrire quotidiennement vous aide à traiter les émotions, à suivre la croissance personnelle et à créer un enregistrement durable de votre vie." },
      { h: "Avantages d'un site de journal", p: "Un site de journal offre la commodité par rapport au papier: pas de carnets perdus, des entrées consultables et des horodatages automatiques." },
      { h: "Comment l'écriture quotidienne vous transforme", p: "L'habitude d'écrire dans votre journal chaque jour construit une conscience de soi extraordinaire. Des modèles émergent que vous n'auriez jamais remarqués autrement." }
    ],
    de: [
      { h: "Was ist Online-Tagebuchschreiben?", p: "Online-Tagebuchschreiben ist die Praxis, ein persönliches Tagebuch im Internet zu führen. Im Gegensatz zu Papiertagebüchern können Sie mit einer Online-Tagebuch-Website Einträge von jedem Gerät aus schreiben, suchen und organisieren." },
      { h: "Warum täglich Tagebuch schreiben?", p: "Täglich Tagebuch zu schreiben hilft Ihnen, Emotionen zu verarbeiten, persönliches Wachstum zu verfolgen und einen dauerhaften Aufzeichnung Ihres Lebens zu erstellen." },
      { h: "Vorteile einer Tagebuch-Website", p: "Eine Tagebuch-Website bietet Vorteile gegenüber Papier: keine verlorenen Notizbücher, durchsuchbare Einträge und automatische Datumsstempel." },
      { h: "Wie tägliches Tagebuchschreiben Sie verändert", p: "Die Gewohnheit, täglich in Ihr Tagebuch zu schreiben, baut außergewöhnliches Selbstbewusstsein auf. Im Laufe der Zeit tauchen Muster auf, die Sie sonst nie bemerkt hätten." }
    ]
  };

  const c = CONTENT[lang] || CONTENT.en;

  // ── Apply text content ──
  function setText(id, html, isHtml) {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHtml) el.innerHTML = html;
    else el.textContent = html;
  }

  function applyContent() {
    setText('hero-badge-text', c.hero_badge);
    setText('hero-title', c.hero_title, true);
    setText('hero-subtitle', c.hero_sub);
    setText('hero-cta-primary', c.hero_cta_primary);
    setText('hero-cta-secondary', c.hero_cta_secondary);
    setText('stat1-label', c.stat1);
    setText('stat2-label', c.stat2);
    setText('stat3-label', c.stat3);
    setText('feat-label', c.feat_label);
    setText('features-heading', c.feat_heading);
    setText('feat-subtitle', c.feat_sub);
    setText('hiw-label', c.hiw_label);
    setText('hiw-heading', c.hiw_heading);
    setText('hiw-subtitle', c.hiw_sub);
    setText('about-label', c.about_label);
    setText('about-heading', c.about_heading);
    setText('about-quote', c.about_quote);
    setText('about-author', c.about_author);
    setText('about-p1', c.about_p1);
    setText('about-p2', c.about_p2);
    setText('guide-label', c.guide_label);
    setText('guide-heading', c.guide_heading);
    setText('guide-subtitle', c.guide_sub);
    setText('lang-label', c.lang_label);
    setText('lang-heading', c.lang_heading);
    setText('lang-subtitle', c.lang_sub);
    setText('whydiary-label', c.whydiary_label);
    setText('whydiary-heading', c.whydiary_heading);
    setText('whydiary-subtitle', c.whydiary_sub);
    setText('faq-label', c.faq_label);
    setText('faq-heading', c.faq_heading);
    setText('faq-subtitle', c.faq_sub);
    setText('cta-label', c.cta_label);
    setText('cta-title', c.cta_title);
    setText('cta-desc', c.cta_desc);
    setText('cta-btn', c.cta_btn);
    setText('contact-label', c.contact_label);
    setText('contact-heading', c.contact_heading);
    setText('contact-desc', c.contact_desc);
    setText('label-name', c.label_name);
    setText('label-email', c.label_email);
    setText('label-subject', c.label_subject);
    setText('label-message', c.label_message);
    setText('submit-btn', c.submit_btn);
  }

  // ── Build Features ──
  function buildFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;
    const feats = FEATURES[lang] || FEATURES.en;
    grid.innerHTML = feats.map((f, i) => `
      <article class="feature-card reveal reveal-delay-${(i % 4) + 1}" aria-label="${f.title}">
        <div class="feature-icon" aria-hidden="true">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </article>
    `).join('');
  }

  // ── Build Steps ──
  function buildSteps() {
    const grid = document.getElementById('steps-grid');
    if (!grid) return;
    const steps = STEPS[lang] || STEPS.en;
    grid.innerHTML = steps.map((s, i) => `
      <div class="step-card reveal reveal-delay-${i + 1}">
        <div class="step-num" aria-hidden="true">${s.num}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  // ── Build Benefits ──
  function buildBenefits() {
    const el = document.getElementById('about-benefits');
    if (!el) return;
    const benefits = BENEFITS[lang] || BENEFITS.en;
    el.innerHTML = benefits.map(b => `
      <div class="about-benefit">
        <span class="benefit-check" aria-hidden="true">✓</span>
        <span>${b}</span>
      </div>
    `).join('');
  }

  // ── Build Tips ──
  function buildTips() {
    const grid = document.getElementById('tips-grid');
    if (!grid) return;
    const tips = TIPS[lang] || TIPS.en;
    grid.innerHTML = tips.map((t, i) => `
      <div class="tip-card reveal reveal-delay-${(i % 3) + 1}">
        <div class="tip-num" aria-hidden="true">${t.num}</div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
    `).join('');
  }

  // ── Build Languages ──
  function buildLangs() {
    const grid = document.getElementById('lang-grid');
    if (!grid) return;
    grid.innerHTML = LANGS_DATA.map((l, i) => `
      <div class="lang-card reveal reveal-delay-${(i % 4) + 1}" role="article" aria-label="${l.name} language support">
        <div class="lang-flag-big" aria-hidden="true">${l.flag}</div>
        <h3>${l.native}</h3>
        <p>${l.name}</p>
      </div>
    `).join('');
  }

  // ── Build Content Columns ──
  function buildContentCols() {
    const el = document.getElementById('content-cols');
    if (!el) return;
    const cols = CONTENT_COLS[lang] || CONTENT_COLS.en;
    el.innerHTML = cols.map(col => `
      <div class="content-col reveal">
        <h3>${col.h}</h3>
        <p>${col.p}</p>
      </div>
    `).join('');
  }

  // ── Build FAQ ──
  function buildFAQ() {
    const grid = document.getElementById('faq-grid');
    if (!grid) return;
    const faqs = FAQ_DATA[lang] || FAQ_DATA.en;
    grid.innerHTML = faqs.map((f, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}">
          ${f.q}
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-ans-${i}" role="region">
          <p>${f.a}</p>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const item = this.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        grid.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        grid.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          item.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── Diary Mockup ──
  function setupMockup() {
    const dateEl = document.getElementById('mockup-date');
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = now.toLocaleDateString(lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'pt' ? 'pt-BR' : 'en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    }
    const lines = document.getElementById('diary-lines-mockup');
    if (!lines) return;
    const sample = [
      "Today I woke up feeling grateful for...",
      "The morning light was soft and golden",
      "I had coffee and thought about my goals",
      "This online diary helps me reflect daily",
      ""
    ];
    lines.innerHTML = sample.map((t, i) => `
      <div class="diary-line ${t ? 'has-text' : ''}" data-text="${t}">${i === sample.length - 1 ? '<span class="diary-cursor" aria-hidden="true"></span>' : ''}</div>
    `).join('');
  }

  // ── Contact form ──
  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const success = document.getElementById('formSuccess');
      if (success) {
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 5000);
      }
    });
  }

  // ── Scroll Reveal ──
  function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ── Smooth anchor scrolling ──
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function() {
    applyContent();
    buildFeatures();
    buildSteps();
    buildBenefits();
    buildTips();
    buildLangs();
    buildContentCols();
    buildFAQ();
    setupMockup();
    setupContactForm();
    setTimeout(setupReveal, 100);
    setupSmoothScroll();
  });

})();
