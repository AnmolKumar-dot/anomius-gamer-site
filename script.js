// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scroll Animations for Cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

// Hero Parallax (only on index.html)
if (document.querySelector('.hero-content')) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScroll > 16) {
      // Throttle to ~60fps
      lastScroll = now;
      const heroContent = document.querySelector('.hero-content');
      const scrollPosition = window.scrollY;
      heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
  });
}
