const icons = document.querySelectorAll('.icon');

icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const theme = icon.dataset.theme;
        if (theme) {
            setTheme(theme);
        }
    });
});

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('selectedTheme', theme);
}

window.onload = function () {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
};
