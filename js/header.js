const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_features: "Features", nav_write: "Write Diary",
    nav_about: "About", nav_faq: "FAQ", nav_contact: "Contact",
    cta_start: "Start Writing Free", cta_open: "Open My Diary",
    lang_label: "Language"
  },
  es: {
    nav_home: "Inicio", nav_features: "Funciones", nav_write: "Escribir Diario",
    nav_about: "Acerca de", nav_faq: "Preguntas", nav_contact: "Contacto",
    cta_start: "Comenzar Gratis", cta_open: "Abrir Mi Diario",
    lang_label: "Idioma"
  },
  pt: {
    nav_home: "Início", nav_features: "Recursos", nav_write: "Escrever Diário",
    nav_about: "Sobre", nav_faq: "FAQ", nav_contact: "Contato",
    cta_start: "Começar Grátis", cta_open: "Abrir Meu Diário",
    lang_label: "Idioma"
  },
  fr: {
    nav_home: "Accueil", nav_features: "Fonctions", nav_write: "Écrire Journal",
    nav_about: "À Propos", nav_faq: "FAQ", nav_contact: "Contact",
    cta_start: "Commencer Gratuitement", cta_open: "Ouvrir Mon Journal",
    lang_label: "Langue"
  },
  de: {
    nav_home: "Startseite", nav_features: "Funktionen", nav_write: "Tagebuch Schreiben",
    nav_about: "Über uns", nav_faq: "FAQ", nav_contact: "Kontakt",
    cta_start: "Kostenlos Starten", cta_open: "Mein Tagebuch Öffnen",
    lang_label: "Sprache"
  }
};

window.TRANSLATIONS = TRANSLATIONS;

function renderHeader() {
  const lang = localStorage.getItem('wd_lang') || 'en';
  const t = TRANSLATIONS[lang];
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="/" class="logo" aria-label="WriteDiary Home">
          <span class="logo-icon">📖</span>
          <span class="logo-text">Write<span class="logo-accent">Diary</span></span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks" role="list">
          <li><a href="/#home" data-i18n="nav_home">${t.nav_home}</a></li>
          <li><a href="/#features" data-i18n="nav_features">${t.nav_features}</a></li>
          <li><a href="/#diary" data-i18n="nav_write">${t.nav_write}</a></li>
          <li><a href="/about" data-i18n="nav_about">${t.nav_about}</a></li>
          <li><a href="/#faq" data-i18n="nav_faq">${t.nav_faq}</a></li>
          <li><a href="/#contact" data-i18n="nav_contact">${t.nav_contact}</a></li>
        </ul>
        <div class="nav-actions">
          <div class="lang-selector" role="navigation" aria-label="Language selection">
            <button class="lang-btn" id="langBtn" aria-haspopup="listbox" aria-expanded="false">
              <span class="lang-flag">${getLangFlag(lang)}</span>
              <span class="lang-code">${lang.toUpperCase()}</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
            <ul class="lang-dropdown" id="langDropdown" role="listbox" aria-label="${t.lang_label}">
              <li role="option" data-lang="en" ${lang==='en'?'aria-selected="true"':''}>🇬🇧 English</li>
              <li role="option" data-lang="es" ${lang==='es'?'aria-selected="true"':''}>🇪🇸 Español</li>
              <li role="option" data-lang="pt" ${lang==='pt'?'aria-selected="true"':''}>🇧🇷 Português</li>
              <li role="option" data-lang="fr" ${lang==='fr'?'aria-selected="true"':''}>🇫🇷 Français</li>
              <li role="option" data-lang="de" ${lang==='de'?'aria-selected="true"':''}>🇩🇪 Deutsch</li>
            </ul>
          </div>
          <a href="/#diary" class="btn-primary nav-cta" data-i18n="cta_start">${t.cta_start}</a>
        </div>
      </div>
    </nav>
  `;

  // Toggle mobile nav
  document.getElementById('navToggle').addEventListener('click', function() {
    const nl = document.getElementById('navLinks');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nl.classList.toggle('open');
    this.classList.toggle('active');
  });

  // Language switcher
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = langBtn.getAttribute('aria-expanded') === 'true';
    langBtn.setAttribute('aria-expanded', String(!expanded));
    langDropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  });
  langDropdown.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      const newLang = li.dataset.lang;
      localStorage.setItem('wd_lang', newLang);
      location.reload();
    });
  });

  // Scroll shrink
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function getLangFlag(lang) {
  const flags = { en: '🇬🇧', es: '🇪🇸', pt: '🇧🇷', fr: '🇫🇷', de: '🇩🇪' };
  return flags[lang] || '🌐';
}

document.addEventListener('DOMContentLoaded', renderHeader);
