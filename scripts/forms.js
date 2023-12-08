const message =  document.querySelector('#formMessage');
const password = document.querySelector('#pwd');
const confirmPass = document.querySelector('#conPwd');
const rangeValue = document.querySelector('#rangevalue');
const range = document.querySelector('#r');


confirmPass.addEventListener("focusout", ()=>{
    if(password.value !== confirmPass.value){
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.display = "block";
        password.style.backgroundColor = "#d4d4d4"
        password.value = "";
        confirmPass.value= "";
        password.focus();
    }else{
        message.style.display= "none";
        password.style.background = "#fff"
    }
});

range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}