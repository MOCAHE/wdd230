const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentDate = new Date();
let Year = currentDate.getFullYear();
document.querySelector("#year").textContent = Year;


// Función para la fecha
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Función del Botón de Hamburguesa
function toggleMenu (){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;
