// Toggle tema claro/escuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Carrega tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  toggleThemeBtn.textContent = '☀️';
}

// Alterna tema ao clicar
toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  
  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    toggleThemeBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'dark');
    toggleThemeBtn.textContent = '🌙';
  }
});

ScrollReveal().reveal('.card', {
  interval: 200,
  duration: 1200,
  origin: 'bottom',
  distance: '30px'
});
