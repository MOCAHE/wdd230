const Update = document.lastModified
document.querySelector("#update").textContent = Update;

let currentDate = new Date();
let Year = currentDate.getFullYear();
document.querySelector("#year").textContent = Year;


// JOIN PAGE
document.addEventListener('DOMContentLoaded', function() {
var currentDate = new Date();

document.getElementById('date').value = currentDate.toISOString().slice(0, 10);
document.getElementById('time').value = currentDate.toTimeString().slice(0, 8);
document.getElementById('timestamp').value = currentDate.toISOString();
});