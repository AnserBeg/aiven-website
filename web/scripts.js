const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Improve submenu interaction: open on click and keep open while moving cursor
const featureMenu = document.querySelector('.nav .has-submenu > a');
const featureItem = document.querySelector('.nav .has-submenu');
if (featureMenu && featureItem) {
  featureMenu.addEventListener('click', (e) => {
    e.preventDefault();
    featureItem.classList.toggle('open');
  });
  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!featureItem.contains(e.target)) {
      featureItem.classList.remove('open');
    }
  });
}
