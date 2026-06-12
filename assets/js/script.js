// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

document.addEventListener('DOMContentLoaded', () => {
  const toggleMobile = document.getElementById('theme-toggle-mobile');
  const toggleDesktop = document.getElementById('theme-toggle-desktop');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    updateIcons('dark');
  }

  function updateIcons(theme) {
    const iconClass = theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill';
    [toggleMobile, toggleDesktop].forEach(btn => {
      if (btn) {
        const icon = btn.querySelector('i');
        icon.className = `bi ${iconClass} fs-5`;
      }
    });
  }

  function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      updateIcons('light');
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      updateIcons('dark');
    }
  }

  if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);
  if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
});