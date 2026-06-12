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
        if (icon) {
          icon.className = `bi ${iconClass} fs-5`;
        }
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

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardContainer = card.closest('.col-12, .col-md-6, .col-lg-4') || card;
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          cardContainer.classList.remove('d-none');
        } else {
          cardContainer.classList.add('d-none');
        }
      });
    });
  });

  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});