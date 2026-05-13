function renderFooter() {
  const lang = localStorage.getItem('wd_lang') || 'en';
  const t = window.TRANSLATIONS ? window.TRANSLATIONS[lang] : {};
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const footerContent = {
    en: {
      tagline: "Your private space to write, reflect, and grow every day.",
      quicklinks: "Quick Links", features: "Features", about: "About", faq: "FAQ",
      diary_tools: "Diary Tools", write: "Write Diary", daily: "Daily Writing", guide: "Writing Guide",
      support: "Support", contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Use",
      copyright: "© 2026 WriteDiary. All rights reserved.",
      rights: "Your stories, your privacy, always protected.",
      desc_title: "Online Diary Writing Platform"
    },
    es: {
      tagline: "Tu espacio privado para escribir, reflexionar y crecer cada día.",
      quicklinks: "Enlaces rápidos", features: "Funciones", about: "Acerca de", faq: "Preguntas",
      diary_tools: "Herramientas", write: "Escribir Diario", daily: "Escritura Diaria", guide: "Guía",
      support: "Soporte", contact: "Contacto", privacy: "Privacidad", terms: "Términos",
      copyright: "© 2026 WriteDiary. Todos los derechos reservados.",
      rights: "Tus historias, tu privacidad, siempre protegidas.",
      desc_title: "Plataforma de Diario en Línea"
    },
    pt: {
      tagline: "Seu espaço privado para escrever, refletir e crescer todo dia.",
      quicklinks: "Links Rápidos", features: "Recursos", about: "Sobre", faq: "FAQ",
      diary_tools: "Ferramentas", write: "Escrever Diário", daily: "Escrita Diária", guide: "Guia",
      support: "Suporte", contact: "Contato", privacy: "Privacidade", terms: "Termos",
      copyright: "© 2026 WriteDiary. Todos os direitos reservados.",
      rights: "Suas histórias, sua privacidade, sempre protegidas.",
      desc_title: "Plataforma de Diário Online"
    },
    fr: {
      tagline: "Votre espace privé pour écrire, réfléchir et grandir chaque jour.",
      quicklinks: "Liens Rapides", features: "Fonctions", about: "À Propos", faq: "FAQ",
      diary_tools: "Outils Journal", write: "Écrire Journal", daily: "Écriture Quotidienne", guide: "Guide",
      support: "Assistance", contact: "Contact", privacy: "Confidentialité", terms: "Conditions",
      copyright: "© 2026 WriteDiary. Tous droits réservés.",
      rights: "Vos histoires, votre confidentialité, toujours protégées.",
      desc_title: "Plateforme de Journal en Ligne"
    },
    de: {
      tagline: "Ihr privater Raum zum Schreiben, Nachdenken und Wachsen.",
      quicklinks: "Schnelllinks", features: "Funktionen", about: "Über uns", faq: "FAQ",
      diary_tools: "Tagebuch-Tools", write: "Tagebuch Schreiben", daily: "Tägliches Schreiben", guide: "Leitfaden",
      support: "Support", contact: "Kontakt", privacy: "Datenschutz", terms: "Nutzungsbedingungen",
      copyright: "© 2026 WriteDiary. Alle Rechte vorbehalten.",
      rights: "Ihre Geschichten, Ihre Privatsphäre, immer geschützt.",
      desc_title: "Online-Tagebuch-Plattform"
    }
  };
  const ft = footerContent[lang] || footerContent.en;

  footer.innerHTML = `
    <div class="footer-body">
      <div class="footer-brand">
        <a href="/" class="logo" aria-label="WriteDiary">
          <span class="logo-icon">📖</span>
          <span class="logo-text">Write<span class="logo-accent">Diary</span></span>
        </a>
        <p class="footer-tagline">${ft.tagline}</p>
        
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h3>${ft.quicklinks}</h3>
          <ul>
            <li><a href="/#features">${ft.features}</a></li>
            <li><a href="/#about">${ft.about}</a></li>
            <li><a href="/#faq">${ft.faq}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>${ft.diary_tools}</h3>
          <ul>
            <li><a href="/#diary">${ft.write}</a></li>
            <li><a href="/#diary">${ft.daily}</a></li>
            <li><a href="/#guide">${ft.guide}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>${ft.pages}</h3>
          <ul>
            <li><a href="/contact">${ft.contact}</a></li>
            <li><a href="/about">${ft.about}</a></li>
            <li><a href="/privacy">${ft.privacy}</a></li>
            <li><a href="/terms">${ft.terms}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>${ft.copyright}</p>
      <p class="footer-rights">${ft.rights}</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderFooter);
