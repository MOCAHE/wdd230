// JOIN PAGE NO ESTOY SEGURO DE HABERLO OCUPADO
document.addEventListener('DOMContentLoaded', function() {
var currentDate = new Date();

document.getElementById('date').value = currentDate.toISOString().slice(0, 10);
document.getElementById('time').value = currentDate.toTimeString().slice(0, 8);
document.getElementById('timestamp').value = currentDate.toISOString();
});
// MARCA UN ERROR EN EL NAV, PERO NO SE PORQUÉ 