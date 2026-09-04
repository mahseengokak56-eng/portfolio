// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Fallback: if the real photo (assets/avatar.jpg) exists, swap it in automatically.
// Until then this silently keeps the placeholder SVG — no error, no broken image.
(function tryLoadRealAvatar() {
  const img = document.getElementById('avatarImg');
  const probe = new Image();
  probe.onload = () => { img.src = 'assets/avatar.jpg'; };
  probe.onerror = () => {}; // keep placeholder
  probe.src = 'assets/avatar.jpg';
})();
