// Переключение темы

const toggleThemeBtn = document.querySelector('#toggle-theme-btn');
const moonSvg = document.querySelector('#moon-svg');
const sunSvg = document.querySelector('#sun-svg');

function setDarkTheme() {
    document.body.classList.add('dark');
    moonSvg.classList.add('none');
    sunSvg.classList.remove('none');
    localStorage.theme = 'dark';
}

function setLightmTheme() {
    document.body.classList.remove('dark');
    sunSvg.classList.add('none');
    moonSvg.classList.remove('none');
    localStorage.theme = 'light';
}

toggleThemeBtn.addEventListener('click', function () {
    if (document.body.classList.contains('dark')) {
        setLightmTheme();
    } else {
        setDarkTheme();
    }
})

if (localStorage.theme === 'dark') {
    setDarkTheme();
}



