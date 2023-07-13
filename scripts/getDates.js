const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentDate = new Date();
let Year = currentDate.getFullYear();
document.querySelector("#year").textContent = Year;

// Función del Botón de Hamburguesa
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;