const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentDate = new Date();
let Year = currentDate.getFullYear();
document.querySelector("#year").textContent = Year;