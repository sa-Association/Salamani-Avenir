// MENU RESPONSIVE
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ANIMATION SCROLL
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

if (darkToggle) {
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

    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            darkToggle.textContent = "☀️";
        }
    });
}

// ACTUALITÉS
const container = document.getElementById("liste-actualites");

if (container) {
    fetch('actualites.json')
    .then(response => response.json())
    .then(data => {

        data.reverse().forEach(article => {

            const card = document.createElement("div");
            card.classList.add("carte");

            card.innerHTML = `
              <h2>${article.titre}</h2>
              <small>${article.date}</small>
              <p>${article.contenu}</p>
            `;

            container.appendChild(card);
        });

    });
}


// GALERIE LIGHTBOX
const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (images.length > 0) {
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});




