/* WriteDiary – app.js */
(function() {
  'use strict';

  const lang = localStorage.getItem('wd_lang') || 'en';
  const STORAGE_KEY = 'writediary_entries';

  // i18n
  const APP_I18N = {
    en: {
      sidebar_title: "My Diary",
      btn_new: "+ New",
      btn_export: "📤 Export Diary",
      no_entries: "No entries yet.\nStart writing your diary!",
      word_count: (n) => `${n} word${n !== 1 ? 's' : ''}`,
      char_count: (n) => `${n} char${n !== 1 ? 's' : ''}`,
      saved: "✓ Saved",
      saving: "Saving...",
      untitled: "Untitled Entry",
      placeholder_title: "Title your diary entry...",
      placeholder_content: "Begin writing your diary... What happened today? How are you feeling? What are you grateful for?",
      delete_confirm: "Delete this diary entry? This cannot be undone.",
      export_filename: "my-diary.txt",
      entry_label: (date) => date,
    },
    es: {
      sidebar_title: "Mi Diario",
      btn_new: "+ Nuevo",
      btn_export: "📤 Exportar Diario",
      no_entries: "Sin entradas aún.\n¡Empieza a escribir tu diario!",
      word_count: (n) => `${n} palabra${n !== 1 ? 's' : ''}`,
      char_count: (n) => `${n} carácte${n !== 1 ? 'res' : 'r'}`,
      saved: "✓ Guardado",
      saving: "Guardando...",
      untitled: "Entrada Sin Título",
      placeholder_title: "Titula tu entrada de diario...",
      placeholder_content: "Empieza a escribir tu diario... ¿Qué pasó hoy? ¿Cómo te sientes? ¿Por qué estás agradecido/a?",
      delete_confirm: "¿Eliminar esta entrada de diario? Esto no se puede deshacer.",
      export_filename: "mi-diario.txt",
      entry_label: (date) => date,
    },
    pt: {
      sidebar_title: "Meu Diário",
      btn_new: "+ Novo",
      btn_export: "📤 Exportar Diário",
      no_entries: "Sem entradas ainda.\nComece a escrever seu diário!",
      word_count: (n) => `${n} palavra${n !== 1 ? 's' : ''}`,
      char_count: (n) => `${n} carácte${n !== 1 ? 'res' : 'r'}`,
      saved: "✓ Salvo",
      saving: "Salvando...",
      untitled: "Entrada Sem Título",
      placeholder_title: "Titulo sua entrada de diário...",
      placeholder_content: "Comece a escrever seu diário... O que aconteceu hoje? Como você está se sentindo? Pelo que você é grato(a)?",
      delete_confirm: "Excluir esta entrada do diário? Isso não pode ser desfeito.",
      export_filename: "meu-diario.txt",
      entry_label: (date) => date,
    },
    fr: {
      sidebar_title: "Mon Journal",
      btn_new: "+ Nouveau",
      btn_export: "📤 Exporter le Journal",
      no_entries: "Aucune entrée encore.\nCommencez à écrire votre journal!",
      word_count: (n) => `${n} mot${n !== 1 ? 's' : ''}`,
      char_count: (n) => `${n} caractère${n !== 1 ? 's' : ''}`,
      saved: "✓ Enregistré",
      saving: "Enregistrement...",
      untitled: "Entrée Sans Titre",
      placeholder_title: "Titrez votre entrée de journal...",
      placeholder_content: "Commencez à écrire votre journal... Que s'est-il passé aujourd'hui? Comment vous sentez-vous? De quoi êtes-vous reconnaissant(e)?",
      delete_confirm: "Supprimer cette entrée de journal? Cela ne peut pas être annulé.",
      export_filename: "mon-journal.txt",
      entry_label: (date) => date,
    },
    de: {
      sidebar_title: "Mein Tagebuch",
      btn_new: "+ Neu",
      btn_export: "📤 Tagebuch Exportieren",
      no_entries: "Noch keine Einträge.\nFangen Sie an, Ihr Tagebuch zu schreiben!",
      word_count: (n) => `${n} Wort${n !== 1 ? 'e' : ''}`,
      char_count: (n) => `${n} Zeiche${n !== 1 ? 'n' : 'n'}`,
      saved: "✓ Gespeichert",
      saving: "Speichert...",
      untitled: "Unbenannter Eintrag",
      placeholder_title: "Betiteln Sie Ihren Tagebucheintrag...",
      placeholder_content: "Beginnen Sie mit dem Schreiben Ihres Tagebuchs... Was ist heute passiert? Wie fühlen Sie sich? Wofür sind Sie dankbar?",
      delete_confirm: "Diesen Tagebucheintrag löschen? Dies kann nicht rückgängig gemacht werden.",
      export_filename: "mein-tagebuch.txt",
      entry_label: (date) => date,
    }
  };

  const t = APP_I18N[lang] || APP_I18N.en;

  // State
  let entries = [];
  let currentId = null;
  let selectedMood = '';
  let saveTimer = null;

  // DOM refs
  const entryList = document.getElementById('entryList');
  const noEntries = document.getElementById('noEntries');
  const entryTitle = document.getElementById('entryTitle');
  const entryContent = document.getElementById('entryContent');
  const entryDate = document.getElementById('entryDate');
  const entryMoodDisplay = document.getElementById('entryMoodDisplay');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  const saveStatus = document.getElementById('saveStatus');
  const sidebarTitle = document.getElementById('sidebar-title');
  const btnNew = document.getElementById('btnNewEntry');
  const btnSave = document.getElementById('btnSave');
  const btnDelete = document.getElementById('btnDelete');
  const btnExport = document.getElementById('btnExport');

  // ── Apply i18n ──
  function applyI18n() {
    if (sidebarTitle) sidebarTitle.textContent = t.sidebar_title;
    if (btnNew) btnNew.textContent = t.btn_new;
    if (btnExport) btnExport.textContent = t.btn_export;
    if (noEntries) noEntries.innerHTML = t.no_entries.replace('\n', '<br/>');
    if (entryTitle) entryTitle.placeholder = t.placeholder_title;
    if (entryContent) entryContent.placeholder = t.placeholder_content;
  }

  // ── Storage ──
  function loadEntries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      entries = raw ? JSON.parse(raw) : [];
    } catch(e) { entries = []; }
  }

  function saveEntries() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); } catch(e) {}
  }

  function genId() { return 'wd_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6); }

  // ── Format date ──
  function formatDate(iso) {
    const d = new Date(iso);
    const locales = { en: 'en-US', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', de: 'de-DE' };
    return d.toLocaleDateString(locales[lang] || 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  function formatShortDate(iso) {
    const d = new Date(iso);
    const locales = { en: 'en-US', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', de: 'de-DE' };
    return d.toLocaleDateString(locales[lang] || 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  // ── Render sidebar ──
  function renderList() {
    if (!entryList) return;
    const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sorted.length === 0) {
      entryList.innerHTML = `<p class="no-entries">${t.no_entries.replace('\n', '<br/>')}</p>`;
      return;
    }
    entryList.innerHTML = sorted.map(e => `
      <div class="entry-item ${e.id === currentId ? 'active' : ''}" data-id="${e.id}" role="listitem" tabindex="0" aria-label="${e.title || t.untitled}, ${formatShortDate(e.date)}">
        <div class="entry-item-date">${formatShortDate(e.date)} ${e.mood || ''}</div>
        <div class="entry-item-title">${escHtml(e.title || t.untitled)}</div>
        <div class="entry-item-preview">${escHtml((e.content || '').substring(0, 60))}</div>
      </div>
    `).join('');
    entryList.querySelectorAll('.entry-item').forEach(item => {
      item.addEventListener('click', () => loadEntry(item.dataset.id));
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') loadEntry(item.dataset.id); });
    });
  }

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Load entry into editor ──
  function loadEntry(id) {
    const entry = entries.find(e => e.id === id);
    if (!entry) return;
    currentId = id;
    selectedMood = entry.mood || '';
    if (entryTitle) entryTitle.value = entry.title || '';
    if (entryContent) entryContent.value = entry.content || '';
    if (entryDate) entryDate.textContent = formatDate(entry.date);
    if (entryMoodDisplay) entryMoodDisplay.textContent = selectedMood;
    updateMoodButtons();
    updateCounts();
    renderList();
    if (window.innerWidth < 768) {
      document.querySelector('.editor-area').scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ── New entry ──
  function newEntry() {
    const now = new Date().toISOString();
    const entry = { id: genId(), date: now, title: '', content: '', mood: '' };
    entries.unshift(entry);
    saveEntries();
    loadEntry(entry.id);
    renderList();
    if (entryTitle) { entryTitle.value = ''; entryTitle.focus(); }
    if (saveStatus) { saveStatus.textContent = ''; }
  }

  // ── Save current ──
  function saveCurrentEntry() {
    if (!currentId) return;
    const idx = entries.findIndex(e => e.id === currentId);
    if (idx === -1) return;
    entries[idx].title = entryTitle ? entryTitle.value : '';
    entries[idx].content = entryContent ? entryContent.value : '';
    entries[idx].mood = selectedMood;
    saveEntries();
    renderList();
    if (saveStatus) {
      saveStatus.textContent = t.saved;
      setTimeout(() => { if (saveStatus) saveStatus.textContent = ''; }, 3000);
    }
  }

  // ── Delete ──
  function deleteEntry() {
    if (!currentId) return;
    if (!confirm(t.delete_confirm)) return;
    entries = entries.filter(e => e.id !== currentId);
    saveEntries();
    currentId = null;
    selectedMood = '';
    if (entryTitle) entryTitle.value = '';
    if (entryContent) entryContent.value = '';
    if (entryDate) entryDate.textContent = '';
    if (entryMoodDisplay) entryMoodDisplay.textContent = '';
    if (saveStatus) saveStatus.textContent = '';
    updateCounts();
    renderList();
    if (entries.length > 0) loadEntry(entries[0].id);
  }

  // ── Export ──
  function exportDiary() {
    const sorted = [...entries].sort((a,b) => new Date(a.date) - new Date(b.date));
    if (sorted.length === 0) return;
    const text = sorted.map(e =>
      `═══════════════════════════\n${formatDate(e.date)}${e.mood ? ' ' + e.mood : ''}\n${'─'.repeat(27)}\n${e.title ? e.title + '\n' + '─'.repeat(27) + '\n' : ''}${e.content || ''}\n`
    ).join('\n');
    const header = `WriteDiary – My Online Diary\nExported: ${new Date().toLocaleDateString()}\n${'═'.repeat(30)}\n\n`;
    const blob = new Blob([header + text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = t.export_filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  // ── Word/char count ──
  function updateCounts() {
    const text = entryContent ? entryContent.value : '';
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    if (wordCount) wordCount.textContent = t.word_count(words);
    if (charCount) charCount.textContent = t.char_count(chars);
  }

  // ── Mood buttons ──
  function updateMoodButtons() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mood === selectedMood);
    });
  }

  // ── Auto-save on typing ──
  function scheduleAutoSave() {
    clearTimeout(saveTimer);
    if (saveStatus) saveStatus.textContent = t.saving;
    saveTimer = setTimeout(() => {
      saveCurrentEntry();
    }, 1500);
  }

  // ── Set today's date in editor header ──
  function setEditorDate() {
    if (!entryDate) return;
    const now = new Date().toISOString();
    entryDate.textContent = formatDate(now);
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function() {
    applyI18n();
    loadEntries();
    setEditorDate();

    // Load first entry or prep blank
    if (entries.length > 0) {
      const sorted = [...entries].sort((a,b) => new Date(b.date) - new Date(a.date));
      loadEntry(sorted[0].id);
    } else {
      renderList();
      updateCounts();
    }

    // New entry button
    if (btnNew) btnNew.addEventListener('click', newEntry);

    // Save button
    if (btnSave) btnSave.addEventListener('click', saveCurrentEntry);

    // Delete button
    if (btnDelete) btnDelete.addEventListener('click', deleteEntry);

    // Export button
    if (btnExport) btnExport.addEventListener('click', exportDiary);

    // Editor inputs
    if (entryTitle) entryTitle.addEventListener('input', scheduleAutoSave);
    if (entryContent) {
      entryContent.addEventListener('input', function() {
        updateCounts();
        scheduleAutoSave();
      });
    }

    // Mood buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (selectedMood === this.dataset.mood) {
          selectedMood = '';
        } else {
          selectedMood = this.dataset.mood;
        }
        if (entryMoodDisplay) entryMoodDisplay.textContent = selectedMood;
        updateMoodButtons();
        scheduleAutoSave();
      });
    });

    // Toolbar formatting (works for textarea by wrapping selected text)
    function wrapSelection(before, after) {
      if (!entryContent) return;
      const start = entryContent.selectionStart;
      const end = entryContent.selectionEnd;
      const val = entryContent.value;
      const selected = val.slice(start, end);
      entryContent.value = val.slice(0, start) + before + selected + after + val.slice(end);
      entryContent.selectionStart = start + before.length;
      entryContent.selectionEnd = end + before.length;
      entryContent.focus();
      scheduleAutoSave();
    }
    const tbBold = document.getElementById('tbBold');
    const tbItalic = document.getElementById('tbItalic');
    const tbUnderline = document.getElementById('tbUnderline');
    if (tbBold) tbBold.addEventListener('click', () => wrapSelection('**', '**'));
    if (tbItalic) tbItalic.addEventListener('click', () => wrapSelection('_', '_'));
    if (tbUnderline) tbUnderline.addEventListener('click', () => wrapSelection('__', '__'));

    // Keyboard shortcut: Ctrl+S / Cmd+S
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentEntry();
      }
    });
  });

})();
