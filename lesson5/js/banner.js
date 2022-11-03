const fecha = new Date();
const dia = fecha.getDay();

if (dia == 1 || dia == 2) {
    document.querySelector(".banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
} else {
    let reminder = document.querySelector(".banner");
    reminder.remove();
}