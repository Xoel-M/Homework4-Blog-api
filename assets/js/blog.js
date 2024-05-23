function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function goBack() {
    window.location.href = 'index.html';
}

document.getElementById('modeToggle').addEventListener('change', toggleMode);
document.getElementById('backButton').addEventListener('click', goBack);