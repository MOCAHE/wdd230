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

// Controlador para cambio de tamaño de ventana
function handleWindowSizeChange() {
    const nav = document.getElementById("primaryNav");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    if (window.innerWidth > 500) { // Asumiendo 500px como umbral para pantallas móviles
        nav.classList.remove("open");
        hamburgerBtn.classList.remove("open");
    }
}

// Asignar eventos
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// Escuchar cambios en el tamaño de la ventana
window.onresize = handleWindowSizeChange;
