// 1. Theme Toggle Functionality (ponytail.dev dry senior dev responses)
const funnyLightModeQuotes = [
    "Nice try. Real devs don't stare into flashbangs at 3 AM.",
    "Light mode is YAGNI (You Ain't Gonna Need It).",
    "Error: Light mode blocked by SOC security policy. Maximum luminosity exceeded.",
    "54% less code, 0% light mode. The code still compiles fine in dark.",
    "Light mode requires a 120-line CSS class you don't need.",
    "Access Denied: Staring directly into white background causes memory leaks.",
    "Light mode feature request deferred to Sprint 99.",
    "Think of the OLED pixels. He says nothing. He keeps it dark."
];

let quoteIndex = 0;

function toggleTheme() {
    const themeText = document.getElementById('themeText');
    const themeIcon = document.getElementById('themeIcon');
    const notice = document.getElementById('lightModeNotice');
    const noticeMsg = document.getElementById('lightModeMsg');

    const msg = funnyLightModeQuotes[quoteIndex % funnyLightModeQuotes.length];
    quoteIndex++;

    document.documentElement.classList.add('dark');

    themeText.textContent = '* denied';
    themeIcon.textContent = '🚫';

    noticeMsg.textContent = msg;
    notice.classList.remove('hidden');

    setTimeout(() => {
        themeText.textContent = '* light mode';
        themeIcon.textContent = '☀️';
    }, 1800);

    setTimeout(() => {
        notice.classList.add('hidden');
    }, 3800);
}
