// Toggle the navbar on mobile view
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle-btn');
  const navItems = document.querySelector('.nav-items');

  toggleBtn.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
});

// Optional: Smoothly reveal sections as they scroll into view
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  observer.observe(section);
});
