// Fade in elements when they enter the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: Only fade in once
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// Navigation handler for category clicks
function navigateTo(section) {
  if (section === 'workouts') {
    window.location.href = './workouts.html';
  } else if (section === 'diet') {
    window.location.href = './diet.html';
  } else if (section === 'calorie-calculator') {
    alert("Let's calculate your calories!");
    window.location.href = './calorie-calculator.html';
  } else {
    console.warn('No navigation defined for:', section);
  }
}
