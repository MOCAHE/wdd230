const fecha = new Date();
const dia = fecha.getDay();

if (dia == 1 || dia == 2 || dia == 3) {
    document.querySelector(".date").textContent = fecha.toLocaleDateString();
    document.querySelector(".banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
} else {
    const reminder = document.querySelector(".banner");
    reminder.remove();
}

