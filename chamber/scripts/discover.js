document.addEventListener('DOMContentLoaded', function() {
    const displayMessage = document.querySelector('.visit h2');
    let numVisits = Number(localStorage.getItem('numVisits')) || 0;
    let dateOfVisit = Date.now();
    let dayLastVisit = Number(localStorage.getItem('dayLastVisit'));

    if (numVisits === 0) {
        displayMessage.textContent = 'Welcome! Let us know if you have any questions.';
        localStorage.setItem('dayLastVisit', dateOfVisit);
    } else {
        if (dateOfVisit - dayLastVisit < 86400000) {
            displayMessage.textContent = 'Back so soon! Awesome!';
        } else {
            let days = Math.ceil((dateOfVisit - dayLastVisit) / 86400000);
            displayMessage.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
        }
        localStorage.setItem('dayLastVisit', dateOfVisit);
    }

    numVisits++;
    localStorage.setItem('numVisits', numVisits);
});