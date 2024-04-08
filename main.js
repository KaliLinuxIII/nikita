let submitBox = document.getElementById('submitBox');
let submitButton = document.getElementById('submitButton');
let display = document.getElementById('display');

function checkPassword() {
    if (submitBox.value.toLowerCase() == 'fortnite') {
        display.innerHTML = 'Nikita is gay';
    } else {
        display.innerHTML = 'Wrong password';
    };
};

submitButton.addEventListener('click', checkPassword);