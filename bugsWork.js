function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('selectedTheme', theme); // Save theme preference
}

// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
};
