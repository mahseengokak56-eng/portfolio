// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

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

// Scroll-reveal, staggered via CSS transition-delay on grouped elements
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}
