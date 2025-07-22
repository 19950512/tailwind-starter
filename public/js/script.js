const themeToggleBtn = document.getElementById('theme-toggle');
const iconMoon = '🌙';
const iconSun = '☀️';

function updateIcons() {
  if (document.documentElement.classList.contains('dark')) {
    themeToggleBtn.textContent = iconSun;
  } else {
    themeToggleBtn.textContent = iconMoon;
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateIcons();
}

(function initTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDarkScheme ? 'dark' : 'light');
  }
})();

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
