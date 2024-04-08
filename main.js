let submitBox = document.getElementById('submitBox');
let submitButton = document.getElementById('submitButton');
let display = document.getElementById('display');

function checkPassword() {
    if (submitBox.value.toLowerCase() == 'fortnite') {
        display.innerHTML = 'Vlad is NOT good at fortnite';
    } else if (submitbox.value.toLowerCase() == 'battlepass') {
        display.innerHTML = 'You like men';
    } else {
        display.innerHTML = 'Wrong password!';
};

submitButton.addEventListener('click', checkPassword);