function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

document.getElementById('modeToggle').addEventListener('change', toggleMode);