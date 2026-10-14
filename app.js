// ==========================================================================
// PLAN ZAJĘĆ DLA ZUZI ❤️ - LOGIKA APLIKACJI
// ==========================================================================

const STORAGE_KEY = 'zuzia_schedule_events_v1';

// Początkowe dane załadowane z rzeczywistego planu Zuzi z października 2026
const DEFAULT_EVENTS = [
  // 6 Października 2026
  {
    id: 'evt-2026-10-06-1',
    date: '2026-10-06',
    startTime: '08:00',
    endTime: '11:45',
    subject: 'POZ',
    type: 'sem.',
    location: 'CD s. 211',
    notes: '',
    color: '#06b6d4'
  },
  // 8 Października 2026
  {
    id: 'evt-2026-10-08-1',
    date: '2026-10-08',
    startTime: '15:00',
    endTime: '16:30',
    subject: 'Chirurgia',
    type: 'W.',
    location: 'Aula B',
    notes: 'Wykład z chirurgii',
    color: '#3b82f6'
  },
  // 9 Października 2026
  {
    id: 'evt-2026-10-09-1',
    date: '2026-10-09',
    startTime: '16:00',
    endTime: '18:45',
    subject: 'POZ',
    type: 'sem.',
    location: 'Pato, Litewska 14/16 s. 101',
    notes: '',
    color: '#06b6d4'
  },
  // 12 Października 2026
  {
    id: 'evt-2026-10-12-1',
    date: '2026-10-12',
    startTime: '11:15',
    endTime: '14:15',
    subject: 'Podstawy Rehab.',
    type: 'ćw.',
    location: 'Ciołka 27 s. 101',
    notes: '',
    color: '#10b981'
  },
  {
    id: 'evt-2026-10-12-2',
    date: '2026-10-12',
    startTime: '16:30',
    endTime: '18:00',
    subject: 'Angielski',
    type: 'ćw.',
    location: 'Studium Języków Obcych',
    notes: '',
    color: '#f59e0b'
  },
  // 13 Października 2026
  {
    id: 'evt-2026-10-13-1',
    date: '2026-10-13',
    startTime: '15:00',
    endTime: '17:15',
    subject: 'Farmakologia',
    type: 'W.',
    location: 'Aula B',
    notes: 'Wykład',
    color: '#8b5cf6'
  },
  // 14 Października 2026
  {
    id: 'evt-2026-10-14-1',
    date: '2026-10-14',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Podstawy Rehab.',
    type: 'ćw.',
    location: 'Ciołka 27 s. 101',
    notes: '',
    color: '#10b981'
  },
  // 15 Października 2026
  {
    id: 'evt-2026-10-15-1',
    date: '2026-10-15',
    startTime: '15:00',
    endTime: '16:30',
    subject: 'Chirurgia',
    type: 'W.',
    location: 'Aula B',
    notes: 'Wykład',
    color: '#3b82f6'
  },
  // 16 Października 2026
  {
    id: 'evt-2026-10-16-1',
    date: '2026-10-16',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Podstawy Rehab.',
    type: 'ćw.',
    location: 'Ciołka 27 s. 101',
    notes: '',
    color: '#10b981'
  },
  {
    id: 'evt-2026-10-16-2',
    date: '2026-10-16',
    startTime: '15:15',
    endTime: '19:00',
    subject: 'Chirurgia',
    type: 'sem.',
    location: 'sala sem. 128, WUM, Nowogrodzka 59 pawilon 2A',
    notes: '',
    color: '#3b82f6'
  },
  // 19 Października 2026
  {
    id: 'evt-2026-10-19-1',
    date: '2026-10-19',
    startTime: '10:15',
    endTime: '14:00',
    subject: 'Farmakologia',
    type: 'sem.',
    location: 'CD s. 206',
    notes: '',
    color: '#8b5cf6'
  },
  {
    id: 'evt-2026-10-19-2',
    date: '2026-10-19',
    startTime: '16:30',
    endTime: '18:00',
    subject: 'Angielski',
    type: 'ćw.',
    location: 'Studium Języków Obcych',
    notes: '',
    color: '#f59e0b'
  },
  // 20 Października 2026
  {
    id: 'evt-2026-10-20-1',
    date: '2026-10-20',
    startTime: '10:15',
    endTime: '14:00',
    subject: 'Farmakologia',
    type: 'sem.',
    location: 'ul. Pawińskiego 3C, s. 7 niski parter',
    notes: '',
    color: '#8b5cf6'
  },
  // 21 Października 2026
  {
    id: 'evt-2026-10-21-1',
    date: '2026-10-21',
    startTime: '15:00',
    endTime: '18:45',
    subject: 'Promocja zdrowia',
    type: 'sem.',
    location: 'CBI s. 113',
    notes: '',
    color: '#ec4899'
  },
  // 23 Października 2026
  {
    id: 'evt-2026-10-23-1',
    date: '2026-10-23',
    startTime: '15:15',
    endTime: '19:00',
    subject: 'Pediatria WZYN',
    type: 'sem.',
    location: 'sala seminaryjna w klinice, ul. Żwirki i Wigury 63A',
    notes: '',
    color: '#ec4899'
  },
  // Blok Chirurgiczny 26-30 Października 2026
  {
    id: 'evt-2026-10-26-1',
    date: '2026-10-26',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Chirurgia i blok op.',
    type: 'blok op.',
    location: 'Banacha 1a',
    notes: 'zajęcia praktyczne Prof. Z. Gałązka',
    color: '#3b82f6'
  },
  {
    id: 'evt-2026-10-26-2',
    date: '2026-10-26',
    startTime: '16:30',
    endTime: '18:00',
    subject: 'Angielski',
    type: 'ćw.',
    location: 'Studium Języków Obcych',
    notes: '',
    color: '#f59e0b'
  },
  {
    id: 'evt-2026-10-27-1',
    date: '2026-10-27',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Chirurgia i blok op.',
    type: 'blok op.',
    location: 'Banacha 1a',
    notes: 'Centrum Symulacji Banacha 1a / Prof. Z. Gałązka',
    color: '#3b82f6'
  },
  {
    id: 'evt-2026-10-27-2',
    date: '2026-10-27',
    startTime: '15:00',
    endTime: '17:15',
    subject: 'Pediatria',
    type: 'W.',
    location: 'Aula B',
    notes: 'Wykład',
    color: '#ec4899'
  },
  {
    id: 'evt-2026-10-28-1',
    date: '2026-10-28',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Chirurgia i blok op.',
    type: 'blok op.',
    location: 'Banacha 1a',
    notes: 'Prof. Z. Gałązka',
    color: '#3b82f6'
  },
  {
    id: 'evt-2026-10-29-1',
    date: '2026-10-29',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Chirurgia i blok op.',
    type: 'blok op.',
    location: 'Banacha 1a',
    notes: 'Prof. Z. Gałązka',
    color: '#3b82f6'
  },
  {
    id: 'evt-2026-10-29-2',
    date: '2026-10-29',
    startTime: '15:00',
    endTime: '16:30',
    subject: 'Chirurgia',
    type: 'W.',
    location: 'Aula B',
    notes: 'Wykład',
    color: '#3b82f6'
  },
  {
    id: 'evt-2026-10-30-1',
    date: '2026-10-30',
    startTime: '08:00',
    endTime: '14:00',
    subject: 'Chirurgia i blok op.',
    type: 'blok op.',
    location: 'Banacha 1a',
    notes: 'Prof. Z. Gałązka',
    color: '#3b82f6'
  }
];

// Szablony szybkiego dodawania
const PRESET_SUBJECTS = [
  { name: 'Chirurgia i blok op.', type: 'blok op.', location: 'Banacha 1a, blok operacyjny', color: '#3b82f6' },
  { name: 'Podstawy Rehab.', type: 'ćw.', location: 'Ciołka 27 s. 101', color: '#10b981' },
  { name: 'Farmakologia', type: 'sem.', location: 'CD s. 206', color: '#8b5cf6' },
  { name: 'Pediatria', type: 'sem.', location: 'Żwirki i Wigury 63A', color: '#ec4899' },
  { name: 'POZ', type: 'sem.', location: 'Pato, Litewska 14/16 s. 101', color: '#06b6d4' },
  { name: 'Angielski', type: 'ćw.', location: 'Studium Języków Obcych', color: '#f59e0b' },
  { name: 'Promocja zdrowia', type: 'sem.', location: 'CBI s. 113', color: '#ec4899' },
  { name: 'W. Chirurgia', type: 'W.', location: 'Aula B', color: '#3b82f6' }
];

// ==========================================================================
// STATE
// ==========================================================================
let events = [];
let currentDate = new Date(2026, 9, 1); // Październik 2026 (miesiące 0-indeksowane)
let currentView = 'month';
let activeFilterSubject = null;
let searchQuery = '';

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadEvents();
  initQuickTemplates();
  initEventListeners();
  renderApp();
});

function loadEvents() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      events = JSON.parse(stored);
    } catch (e) {
      console.error('Błąd parsowania zapisanych danych, używam domyślnych:', e);
      events = [...DEFAULT_EVENTS];
    }
  } else {
    events = [...DEFAULT_EVENTS];
    saveEvents();
  }
}

function saveEvents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function initQuickTemplates() {
  const container = document.getElementById('quickTemplatesList');
  if (!container) return;

  container.innerHTML = '';
  PRESET_SUBJECTS.forEach(preset => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'template-pill';
    pill.textContent = `+ ${preset.name}`;
    pill.addEventListener('click', () => {
      document.getElementById('eventSubject').value = preset.name;
      document.getElementById('eventType').value = preset.type;
      document.getElementById('eventLocation').value = preset.location;
      selectColorRadio('eventColor', preset.color);
    });
    container.appendChild(pill);
  });
}

function selectColorRadio(name, colorHex) {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  for (const r of radios) {
    if (r.value === colorHex) {
      r.checked = true;
      break;
    }
  }
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function initEventListeners() {
  // Nawigacja miesięcy
  document.getElementById('prevMonthBtn').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderApp();
  });

  document.getElementById('nextMonthBtn').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderApp();
  });

  document.getElementById('todayBtn').addEventListener('click', () => {
    // Jeśli w danych mamy październik 2026, przejdź do 2026-10, albo do dzisiejszego realnego dnia
    const realToday = new Date();
    // Jeśli mamy zajęcia w 2026-10, a dzisiaj jesteśmy w innym roku, dajemy wygodny powrót:
    currentDate = new Date(2026, 9, 14);
    renderApp();
    showToast('Przejście do planu Zuzi (Październik 2026)');
  });

  // Przełączanie widoków (Miesiąc / Tydzień / Agenda)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentView = e.target.getAttribute('data-view');
      renderView();
    });
  });

  // Wyszukiwarka
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderView();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderView();
  });

  // Menu "Więcej opcji"
  const moreBtn = document.getElementById('moreActionsBtn');
  const moreMenu = document.getElementById('moreActionsMenu');
  moreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    moreMenu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    moreMenu.classList.remove('show');
  });

  // Akcje w menu
  document.getElementById('exportIcsBtn').addEventListener('click', exportToIcs);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('exportJsonBtn').addEventListener('click', exportToJson);
  document.getElementById('importJsonBtn').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
  });
  document.getElementById('importFileInput').addEventListener('change', importFromJson);
  document.getElementById('resetDataBtn').addEventListener('click', () => {
    if (confirm('Czy na pewno chcesz przywrócić oryginalny plan Zuzi z października 2026? Twoje własne zmiany w tym planie zostaną zresetowane.')) {
      events = [...DEFAULT_EVENTS];
      saveEvents();
      currentDate = new Date(2026, 9, 1);
      renderApp();
      showToast('Przywrócono oryginalny plan');
    }
  });

  // Modal: Pojedyncze zajęcia
  document.getElementById('addEventBtn').addEventListener('click', () => {
    openEventModal();
  });
  document.getElementById('closeEventModalBtn').addEventListener('click', closeEventModal);
  document.getElementById('cancelEventModalBtn').addEventListener('click', closeEventModal);
  document.getElementById('eventForm').addEventListener('submit', handleEventFormSubmit);
  document.getElementById('deleteEventBtn').addEventListener('click', handleEventDelete);

  // Modal: Blok wielodniowy
  document.getElementById('addBlockBtn').addEventListener('click', openBlockModal);
  document.getElementById('closeBlockModalBtn').addEventListener('click', closeBlockModal);
  document.getElementById('cancelBlockModalBtn').addEventListener('click', closeBlockModal);
  document.getElementById('blockForm').addEventListener('submit', handleBlockFormSubmit);

  // Zamykanie modali klawiszem ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEventModal();
      closeBlockModal();
    }
  });
}

// ==========================================================================
// RENDER GLOWNY
// ==========================================================================
function renderApp() {
  updatePeriodLabel();
  renderFilterChips();
  renderTodayBanner();
  renderView();
}

function updatePeriodLabel() {
  const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ];
  const label = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  document.getElementById('currentMonthYearLabel').textContent = label;
}

function renderFilterChips() {
  const container = document.getElementById('chipsContainer');
  if (!container) return;

  // Znajdź unikalne przedmioty
  const subjectMap = new Map();
  events.forEach(ev => {
    if (!subjectMap.has(ev.subject)) {
      subjectMap.set(ev.subject, ev.color || '#3b82f6');
    }
  });

  container.innerHTML = '';

  // Przycisk "Wszystkie"
  const allChip = document.createElement('div');
  allChip.className = `filter-chip ${activeFilterSubject === null ? 'active' : ''}`;
  allChip.textContent = 'Wszystkie';
  allChip.addEventListener('click', () => {
    activeFilterSubject = null;
    renderFilterChips();
    renderView();
  });
  container.appendChild(allChip);

  subjectMap.forEach((color, subject) => {
    const chip = document.createElement('div');
    chip.className = `filter-chip ${activeFilterSubject === subject ? 'active' : ''}`;
    chip.innerHTML = `<span class="chip-dot" style="background-color: ${color};"></span> ${escapeHtml(subject)}`;
    chip.addEventListener('click', () => {
      if (activeFilterSubject === subject) {
        activeFilterSubject = null;
      } else {
        activeFilterSubject = subject;
      }
      renderFilterChips();
      renderView();
    });
    container.appendChild(chip);
  });
}

function renderTodayBanner() {
  const banner = document.getElementById('todayBanner');
  if (!banner) return;

  // Format YYYY-MM-DD dla "dzisiaj" lub 14 października 2026
  const sampleDateStr = formatDateKey(currentDate);
  const todaysEvents = events
    .filter(e => e.date === sampleDateStr)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  if (todaysEvents.length > 0) {
    const listStr = todaysEvents.map(e => `<strong>${e.startTime}-${e.endTime}</strong> ${e.subject} (${e.location || 'Brak sali'})`).join(' • ');
    banner.style.display = 'flex';
    banner.innerHTML = `
      <div class="today-banner-content">
        <span class="today-banner-badge">Wybrany dzień</span>
        <span class="today-banner-text">${formatReadableDate(currentDate)}: ${listStr}</span>
      </div>
      <button class="btn btn-pill" onclick="openEventModal('${sampleDateStr}')">+ Dodaj do tego dnia</button>
    `;
  } else {
    banner.style.display = 'none';
  }
}

function renderView() {
  document.getElementById('monthView').classList.toggle('active', currentView === 'month');
  document.getElementById('weekView').classList.toggle('active', currentView === 'week');
  document.getElementById('agendaView').classList.toggle('active', currentView === 'agenda');

  if (currentView === 'month') {
    renderMonthView();
  } else if (currentView === 'week') {
    renderWeekView();
  } else if (currentView === 'agenda') {
    renderAgendaView();
  }
}

// ==========================================================================
// RENDER MIESIĘCZNY (MIESIĄC JAK W PLAN ZUZI.JPEG)
// ==========================================================================
function renderMonthView() {
  const grid = document.getElementById('calendarDaysGrid');
  grid.innerHTML = '';

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Pierwszy dzień miesiąca (0 = Niedz, 1 = Pon, ...)
  const firstDay = new Date(year, month, 1);
  let startingDayOfWeek = firstDay.getDay(); // 0 is Sunday
  // Konwersja na standard europejski (Poniedziałek = 0, Niedziela = 6)
  let offset = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const totalDaysInPrevMonth = new Date(year, month, 0).getDate();

  const filteredEvents = getFilteredEvents();

  // 1. Dni z poprzedniego miesiąca dopełniające pierwszy tydzień
  for (let i = offset - 1; i >= 0; i--) {
    const dayNum = totalDaysInPrevMonth - i;
    const prevMonthDate = new Date(year, month - 1, dayNum);
    const dateStr = formatDateKey(prevMonthDate);
    const cell = createDayCell(dayNum, dateStr, true, filteredEvents);
    grid.appendChild(cell);
  }

  // 2. Dni bieżącego miesiąca
  for (let d = 1; d <= totalDaysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const dateStr = formatDateKey(dateObj);
    const cell = createDayCell(d, dateStr, false, filteredEvents);
    grid.appendChild(cell);
  }

  // 3. Dni z następnego miesiąca dopełniające siatkę (wielokrotność 7)
  const totalCellsRendered = offset + totalDaysInMonth;
  const remainingCells = (7 - (totalCellsRendered % 7)) % 7;
  for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
    const nextMonthDate = new Date(year, month + 1, nextDay);
    const dateStr = formatDateKey(nextMonthDate);
    const cell = createDayCell(nextDay, dateStr, true, filteredEvents);
    grid.appendChild(cell);
  }
}

function createDayCell(dayNumber, dateStr, isOtherMonth, filteredEvents) {
  const cell = document.createElement('div');
  cell.className = `day-cell ${isOtherMonth ? 'other-month' : ''}`;

  // Sprawdź czy to "dziś"
  const todayStr = formatDateKey(new Date());
  if (dateStr === todayStr) {
    cell.classList.add('is-today');
  }

  // Nagłówek dnia (numer + przycisk +)
  const header = document.createElement('div');
  header.className = 'day-header';
  header.innerHTML = `
    <span class="day-number">${dayNumber}</span>
    <button class="add-event-quick-btn" title="Dodaj zajęcia na ${dateStr}">＋</button>
  `;

  header.querySelector('.add-event-quick-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openEventModal(dateStr);
  });

  cell.appendChild(header);

  // Lista zajęć na ten dzień
  const eventsList = document.createElement('div');
  eventsList.className = 'day-events-list';

  const dayEvents = filteredEvents
    .filter(ev => ev.date === dateStr)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  dayEvents.forEach(ev => {
    const tile = document.createElement('div');
    tile.className = 'event-tile';
    tile.style.borderLeftColor = ev.color || '#3b82f6';
    tile.style.backgroundColor = getSubtleBgColor(ev.color || '#3b82f6');

    tile.innerHTML = `
      <div class="event-time">
        <span>${ev.startTime} - ${ev.endTime}</span>
        ${ev.type ? `<span class="event-type-badge">${escapeHtml(ev.type)}</span>` : ''}
      </div>
      <div class="event-title">${escapeHtml(ev.subject)}</div>
      ${ev.location ? `<div class="event-location">📍 ${escapeHtml(ev.location)}</div>` : ''}
    `;

    tile.addEventListener('click', (e) => {
      e.stopPropagation();
      openEventModal(null, ev.id);
    });

    eventsList.appendChild(tile);
  });

  cell.appendChild(eventsList);

  // Kliknięcie w pusty obszar komórki dodaje zajęcia
  cell.addEventListener('click', () => {
    openEventModal(dateStr);
  });

  return cell;
}

// ==========================================================================
// RENDER TYGODNIOWY
// ==========================================================================
function renderWeekView() {
  const container = document.getElementById('weekDaysContainer');
  container.innerHTML = '';

  const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  const filteredEvents = getFilteredEvents();

  // Znajdź poniedziałek dla aktualnie wybranego dnia
  const curr = new Date(currentDate);
  const day = curr.getDay();
  const diffToMonday = curr.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(curr.setDate(diffToMonday));

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(monday);
    dayDate.setDate(monday.getDate() + i);
    const dateStr = formatDateKey(dayDate);

    const col = document.createElement('div');
    col.className = 'week-day-column';
    if (dateStr === formatDateKey(new Date())) {
      col.classList.add('is-today');
    }

    col.innerHTML = `
      <div class="week-day-header">
        <div class="week-day-name">${dayNames[i]}</div>
        <div class="week-day-date">${dayDate.getDate()}</div>
      </div>
      <div class="week-events-list" id="weekList-${dateStr}"></div>
    `;

    const listContainer = col.querySelector('.week-events-list');
    const dayEvents = filteredEvents
      .filter(ev => ev.date === dateStr)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    if (dayEvents.length === 0) {
      listContainer.innerHTML = `<div style="color: var(--text-light); font-size: 0.8rem; text-align: center; margin-top: 1rem;">Brak zajęć</div>`;
    } else {
      dayEvents.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-tile';
        card.style.borderLeftColor = ev.color || '#3b82f6';
        card.style.backgroundColor = getSubtleBgColor(ev.color || '#3b82f6');
        card.style.padding = '0.6rem';
        card.innerHTML = `
          <div class="event-time" style="font-size: 0.8rem;">
            <span>${ev.startTime} - ${ev.endTime}</span>
            ${ev.type ? `<span class="event-type-badge">${escapeHtml(ev.type)}</span>` : ''}
          </div>
          <div class="event-title" style="font-size: 0.92rem; margin: 0.2rem 0;">${escapeHtml(ev.subject)}</div>
          ${ev.location ? `<div class="event-location" style="display: flex;">📍 ${escapeHtml(ev.location)}</div>` : ''}
          ${ev.notes ? `<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">📝 ${escapeHtml(ev.notes)}</div>` : ''}
        `;
        card.addEventListener('click', () => openEventModal(null, ev.id));
        listContainer.appendChild(card);
      });
    }

    container.appendChild(col);
  }
}

// ==========================================================================
// RENDER AGENDA (LISTA CHRONOLOGICZNA)
// ==========================================================================
function renderAgendaView() {
  const container = document.getElementById('agendaListContainer');
  container.innerHTML = '';

  const filteredEvents = getFilteredEvents()
    .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));

  if (filteredEvents.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 3rem; color: var(--text-muted); font-size: 1rem;">Brak zaplanowanych zajęć dla wybranych filtrów.</div>`;
    return;
  }

  // Pogrupuj po datach
  const groups = new Map();
  filteredEvents.forEach(ev => {
    if (!groups.has(ev.date)) {
      groups.set(ev.date, []);
    }
    groups.get(ev.date).push(ev);
  });

  groups.forEach((evList, dateStr) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'agenda-day-group';

    const [year, month, day] = dateStr.split('-');
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    groupEl.innerHTML = `
      <div class="agenda-day-title">
        📅 ${formatReadableDate(dateObj)}
      </div>
      <div class="agenda-cards-list"></div>
    `;

    const cardsList = groupEl.querySelector('.agenda-cards-list');
    evList.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'agenda-card';
      card.innerHTML = `
        <div class="agenda-time-pill" style="border-left: 4px solid ${ev.color || '#3b82f6'};">
          <span>${ev.startTime}</span>
          <span style="font-weight: 400; font-size: 0.75rem; color: var(--text-muted);">do</span>
          <span>${ev.endTime}</span>
        </div>
        <div class="agenda-card-body">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem;">
            <strong style="font-size: 1rem;">${escapeHtml(ev.subject)}</strong>
            ${ev.type ? `<span class="event-type-badge">${escapeHtml(ev.type)}</span>` : ''}
          </div>
          ${ev.location ? `<div style="font-size: 0.85rem; color: var(--text-muted);">📍 <strong>Sala/Szpital:</strong> ${escapeHtml(ev.location)}</div>` : ''}
          ${ev.notes ? `<div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">📝 ${escapeHtml(ev.notes)}</div>` : ''}
        </div>
      `;
      card.addEventListener('click', () => openEventModal(null, ev.id));
      cardsList.appendChild(card);
    });

    container.appendChild(groupEl);
  });
}

// ==========================================================================
// FILTROWANIE
// ==========================================================================
function getFilteredEvents() {
  return events.filter(ev => {
    // Filtr przedmiotu
    if (activeFilterSubject && ev.subject !== activeFilterSubject) {
      return false;
    }
    // Wyszukiwarka
    if (searchQuery) {
      const targetStr = `${ev.subject} ${ev.location || ''} ${ev.notes || ''} ${ev.type || ''}`.toLowerCase();
      if (!targetStr.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });
}

// ==========================================================================
// MODAL OBSŁUGA: POJEDYNCZE ZAJĘCIA
// ==========================================================================
function openEventModal(defaultDate = null, editEventId = null) {
  const modal = document.getElementById('eventModal');
  const form = document.getElementById('eventForm');
  const deleteBtn = document.getElementById('deleteEventBtn');
  const title = document.getElementById('modalTitle');

  form.reset();

  if (editEventId) {
    const ev = events.find(e => e.id === editEventId);
    if (!ev) return;

    title.textContent = 'Edytuj zajęcia';
    document.getElementById('eventId').value = ev.id;
    document.getElementById('eventSubject').value = ev.subject;
    document.getElementById('eventType').value = ev.type || 'ćw.';
    document.getElementById('eventDate').value = ev.date;
    document.getElementById('eventStartTime').value = ev.startTime;
    document.getElementById('eventEndTime').value = ev.endTime;
    document.getElementById('eventLocation').value = ev.location || '';
    document.getElementById('eventNotes').value = ev.notes || '';
    selectColorRadio('eventColor', ev.color || '#3b82f6');

    deleteBtn.style.display = 'block';
  } else {
    title.textContent = 'Dodaj nowe zajęcia';
    document.getElementById('eventId').value = '';
    document.getElementById('eventDate').value = defaultDate || formatDateKey(currentDate);
    document.getElementById('eventStartTime').value = '08:00';
    document.getElementById('eventEndTime').value = '14:00';
    selectColorRadio('eventColor', '#3b82f6');

    deleteBtn.style.display = 'none';
  }

  modal.style.display = 'flex';
}

function closeEventModal() {
  document.getElementById('eventModal').style.display = 'none';
}

function handleEventFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('eventId').value;
  const subject = document.getElementById('eventSubject').value.trim();
  const type = document.getElementById('eventType').value;
  const date = document.getElementById('eventDate').value;
  const startTime = document.getElementById('eventStartTime').value;
  const endTime = document.getElementById('eventEndTime').value;
  const location = document.getElementById('eventLocation').value.trim();
  const notes = document.getElementById('eventNotes').value.trim();
  const colorRadio = document.querySelector('input[name="eventColor"]:checked');
  const color = colorRadio ? colorRadio.value : '#3b82f6';

  if (!subject || !date || !startTime || !endTime) {
    alert('Proszę wypełnić wymagane pola: Przedmiot, Data i Godziny.');
    return;
  }

  if (id) {
    // Edycja
    const index = events.findIndex(ev => ev.id === id);
    if (index !== -1) {
      events[index] = { id, subject, type, date, startTime, endTime, location, notes, color };
      showToast('Zaktualizowano zajęcia');
    }
  } else {
    // Nowe
    const newEvent = {
      id: 'evt-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      subject,
      type,
      date,
      startTime,
      endTime,
      location,
      notes,
      color
    };
    events.push(newEvent);
    showToast('Dodano nowe zajęcia');
  }

  saveEvents();
  closeEventModal();
  renderApp();
}

function handleEventDelete() {
  const id = document.getElementById('eventId').value;
  if (!id) return;

  if (confirm('Czy na pewno chcesz usunąć te zajęcia?')) {
    events = events.filter(e => e.id !== id);
    saveEvents();
    closeEventModal();
    renderApp();
    showToast('Usunięto zajęcia');
  }
}

// ==========================================================================
// MODAL OBSŁUGA: BLOK WIELODNIOWY (DLA STUDIÓW MEDYCZNYCH)
// ==========================================================================
function openBlockModal() {
  const modal = document.getElementById('blockModal');
  const form = document.getElementById('blockForm');
  form.reset();

  // Domyślne daty dla wygody
  const start = new Date(currentDate);
  document.getElementById('blockStartDate').value = formatDateKey(start);

  const end = new Date(currentDate);
  end.setDate(end.getDate() + 4); // +4 dni (poniedziałek -> piątek)
  document.getElementById('blockEndDate').value = formatDateKey(end);

  document.getElementById('blockStartTime').value = '08:00';
  document.getElementById('blockEndTime').value = '14:00';
  selectColorRadio('blockColor', '#3b82f6');

  // Ustaw domyślnie zaznaczone dni robocze (1, 2, 3, 4, 5)
  document.querySelectorAll('input[name="blockDays"]').forEach(cb => {
    cb.checked = (cb.value >= '1' && cb.value <= '5');
  });

  modal.style.display = 'flex';
}

function closeBlockModal() {
  document.getElementById('blockModal').style.display = 'none';
}

function handleBlockFormSubmit(e) {
  e.preventDefault();

  const subject = document.getElementById('blockSubject').value.trim();
  const type = document.getElementById('blockType').value;
  const startDateStr = document.getElementById('blockStartDate').value;
  const endDateStr = document.getElementById('blockEndDate').value;
  const startTime = document.getElementById('blockStartTime').value;
  const endTime = document.getElementById('blockEndTime').value;
  const location = document.getElementById('blockLocation').value.trim();
  const notes = document.getElementById('blockNotes').value.trim();
  const colorRadio = document.querySelector('input[name="blockColor"]:checked');
  const color = colorRadio ? colorRadio.value : '#3b82f6';

  const selectedDays = Array.from(document.querySelectorAll('input[name="blockDays"]:checked'))
    .map(cb => parseInt(cb.value));

  if (!subject || !startDateStr || !endDateStr || !startTime || !endTime) {
    alert('Wypełnij wszystkie wymagane pola.');
    return;
  }

  if (selectedDays.length === 0) {
    alert('Wybierz przynajmniej jeden dzień tygodnia.');
    return;
  }

  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  if (start > end) {
    alert('Data początkowa nie może być późniejsza niż data końcowa.');
    return;
  }

  let count = 0;
  const current = new Date(start);

  while (current <= end) {
    const dayOfWeek = current.getDay(); // 0 is Sunday, 1 is Monday...
    if (selectedDays.includes(dayOfWeek)) {
      const dateKey = formatDateKey(current);
      events.push({
        id: 'evt-block-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        subject,
        type,
        date: dateKey,
        startTime,
        endTime,
        location,
        notes,
        color
      });
      count++;
    }
    current.setDate(current.getDate() + 1);
  }

  saveEvents();
  closeBlockModal();
  renderApp();
  showToast(`⚡ Wygenerowano pomyślnie ${count} zajęć w bloku!`);
}

// ==========================================================================
// EKSPORT DO KALENDARZA .ICS (APPLE CALENDAR / GOOGLE CALENDAR)
// ==========================================================================
function exportToIcs() {
  if (events.length === 0) {
    alert('Brak zajęć do wyeksportowania.');
    return;
  }

  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Zuzia Schedule Planner//PL',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Plan Zajęć Zuzi',
    'X-WR-TIMEZONE:Europe/Warsaw'
  ];

  events.forEach(ev => {
    const [year, month, day] = ev.date.split('-');
    const [startH, startM] = ev.startTime.split(':');
    const [endH, endM] = ev.endTime.split(':');

    // Format YYYYMMDDTHHMMSS
    const dtStart = `${year}${month}${day}T${startH}${startM}00`;
    const dtEnd = `${year}${month}${day}T${endH}${endM}00`;

    icsContent.push('BEGIN:VEVENT');
    icsContent.push(`UID:${ev.id}@zuziaschedule.local`);
    icsContent.push(`DTSTAMP:${formatIcsDate(new Date())}`);
    icsContent.push(`DTSTART;TZID=Europe/Warsaw:${dtStart}`);
    icsContent.push(`DTEND;TZID=Europe/Warsaw:${dtEnd}`);
    icsContent.push(`SUMMARY:${escapeIcs(ev.subject + (ev.type ? ` [${ev.type}]` : ''))}`);
    if (ev.location) {
      icsContent.push(`LOCATION:${escapeIcs(ev.location)}`);
    }
    if (ev.notes) {
      icsContent.push(`DESCRIPTION:${escapeIcs(ev.notes)}`);
    }
    icsContent.push('END:VEVENT');
  });

  icsContent.push('END:VCALENDAR');

  const blob = new Blob([icsContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Plan_Zajec_Zuzi.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Pobrano plik .ics! Kliknij go, by dodać do Kalendarza.');
}

function escapeIcs(str) {
  return str.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// ==========================================================================
// BACKUP / JSON EXPORT & IMPORT
// ==========================================================================
function exportToJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(events, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `plan_zajec_zuzia_backup_${formatDateKey(new Date())}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Pobrano kopię zapasową JSON');
}

function importFromJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        events = imported;
        saveEvents();
        renderApp();
        showToast('Pomyślnie wczytano kopię zapasową!');
      } else {
        alert('Nieprawidłowy format pliku kopii zapasowej.');
      }
    } catch (err) {
      alert('Błąd podczas odczytu pliku JSON.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ==========================================================================
// POMOCNICZE / UTILS
// ==========================================================================
function formatDateKey(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatReadableDate(dateObj) {
  const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  return `${days[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}

function getSubtleBgColor(hexColor) {
  // Zwraca bardzo jasną, pastelową wersję koloru z przezroczystością
  return hexColor + '18'; // 10% opacity in hex
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
