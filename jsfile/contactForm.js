const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById("message");
const alert1 = document.getElementById('alert1');
const alert2 = document.getElementById('alert2');
const alert3 = document.getElementById('alert3');
const alert4 = document.getElementById("alert4");

const checkREGEX = /^[a-zA-Z]+$/;
const checkEmailREGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
let checkboxItems = document.querySelectorAll('input[type="checkbox"]');
let checkboxAlert = document.getElementById('checkboxAlert');
let checkboxFieldset = document.getElementById('checkboxFieldset');
let radioFieldset = document.getElementById('radioFieldset');
let radioAlert = document.getElementById('radioAlert');
let radioItems = document.querySelectorAll('input[type="radio"]');

let inputValid = (input, warning) => {
    let inputValue = input.value.trim();
    input.classList.toggle('borderAlert', false);
    warning.classList.toggle('hideAlert', true);
    let noError = true;
    if (!(inputValue.length >= 2 && checkREGEX.test(inputValue))) {
        input.classList.add('borderAlert', true);
        warning.classList.toggle('hideAlert', false);
        noError = false;
    }
    return noError;
};

let messageValid = (input, warning) => {
    let inputValue = input.value.trim();
    input.classList.toggle('borderAlert', false);
    warning.classList.toggle('hideAlert', true);
    let noError = true;
    if (inputValue.length < 5) {
        input.classList.add('borderAlert', true);
        warning.classList.toggle('hideAlert', false);
        noError = false;
    }
    return noError;
};

let emailValid = (input, warning) => {
    let inputValue = input.value.trim();
    input.classList.toggle('borderAlert', false);
    warning.classList.toggle('hideAlert', true);
    let noError = true;
    if (!checkEmailREGEX.test(inputValue)) {
        input.classList.add('borderAlert', true);
        warning.classList.toggle('hideAlert', false);
        noError = false;
    }
    return noError;
};

let chooseValid = (items, alert, fieldset) => {
    let noError = true;
    alert.classList.toggle('hideAlert', true);
    fieldset.classList.toggle('borderAlert', false);
    for (let index = 0; index < items.length; index++) {
        if (items[index].checked) {
            return noError;
        }
    }
    noError = false;
    alert.classList.toggle('hideAlert', false);
    fieldset.classList.toggle('borderAlert', true);
    return noError;
};

let ifValid = () => {
    let noError = true;
    if (!inputValid(firstName, alert1)) {
        noError = false;
    }
    if (!inputValid(lastName, alert2)) {
        noError = false;
    }
    if (!emailValid(email, alert3)) {
        noError = false;
    }
    if (!messageValid(message, alert4)) {
        noError = false;
    }
    if (!chooseValid(checkboxItems, checkboxAlert, checkboxFieldset)) {
        noError = false;
    }
    if (!chooseValid(radioItems, radioAlert, radioFieldset)) {
        noError = false;
    }
    return noError;
};

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submit').addEventListener('click', function (event) {
        event.preventDefault();
        if (ifValid() === true) {
            let successM = document.getElementById('success-message');
            document.getElementById('contact-form').style.display = "none";
            successM.style.display = "inline";
            successM.innerText = "Thank you for submitting!";
        }
    });
}
);