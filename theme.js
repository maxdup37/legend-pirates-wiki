// theme.js

function applyTheme(theme) {
    const body = document.body;
    const btn = document.getElementById("themeToggle");

    if (theme === "light") {
        body.classList.add("light-theme");
        if (btn) btn.innerText = "☀️ Mode clair";
    } else {
        body.classList.remove("light-theme");
        if (btn) btn.innerText = "🌙 Mode sombre";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("lp_wiki_theme") || "dark";
    applyTheme(savedTheme);

    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
        const current = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        const next = current === "light" ? "dark" : "light";
        localStorage.setItem("lp_wiki_theme", next);
        applyTheme(next);
    });
});
