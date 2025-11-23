const modeToggleButton = document.getElementById('mode-toggle');
const bodyElement = document.querySelector('body');

function toggleMode() {
  bodyElement.classList.toggle('dark-mode');
}

modeToggleButton.addEventListener('click', toggleMode);