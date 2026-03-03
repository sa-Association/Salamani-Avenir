const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", appearOnScroll);
window.addEventListener("load", appearOnScroll);


// MODE SOMBRE
const darkToggle = document.getElementById("dark-mode-toggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkToggle.textContent = "🌙";
    }
});

// Sauvegarde du thème
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkToggle.textContent = "☀️";
    }
});





