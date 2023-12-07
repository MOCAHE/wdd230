const currentDate = document.querySelector(".current-date");/*CAMBIAR*/
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
const DaysLi = document.querySelector(".days"); /*CAMBIAR*/
const buttons = document.querySelectorAll(".icons span"); /*CAMBIAR*/

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

function displayCalendar(){
    let firstDayoftMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayoftMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let listItems = '';

    for (let i = firstDayoftMonth; i > 0; i--) {
        listItems += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ?
            "active" : "";
        listItems += `<li class='${isToday}'>${i}</li>`
    }

    for (let i = lastDayoftMonth; i < 6; i++) {
        listItems += `<li class='inactive'>${i - lastDayoftMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    DaysLi.innerHTML = listItems;
}

displayCalendar();

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        currMonth = button.id === "prev" ? currMonth - 1 : currMonth + 1
        if (currMonth > 11) {
            currMonth = 0;
            currYear += 1;
        }else if(currMonth < 0){
            currMonth = 11;
            currYear-=1;
        }
        displayCalendar();
    })
})