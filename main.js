let submitBox = document.getElementById('submitBox');
let paswordForm = document.getElementById('passwordForm');
let display = document.getElementById('display');

function checkPassword(event) {
    event.preventDefault();
    if (submitBox.value.toLowerCase() == 'fortnite') {
        display.innerHTML = 'Vlad is NOT good at fortnite';
    } else if (submitBox.value.toLowerCase() == 'battlepass') {
        display.innerHTML = 'You like men';
    } else {
        display.innerHTML = 'Wrong password!';
        };
};

passwordForm.addEventListener('click', checkPassword);
