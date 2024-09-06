const inputField = document.querySelector('#val');
const vald1 = document.querySelector('.vald1');
const vald2 = document.querySelector('.vald2');
const vald3 = document.querySelector('.vald3');
const vald4 = document.querySelector('.vald4');

inputField.addEventListener('input', function () {
    const password = inputField.value;
    if (password.length > 8) {
        vald1.style.color = 'green';
    } else {
        vald1.style.color = 'red';
    }

    if (/\d/.test(password)) {
        vald2.style.color = 'green';
    } else {
        vald2.style.color = 'red';
    }

    if (/[\W_]/.test(password)) {
        vald3.style.color = 'green';
    } else {
        vald3.style.color = 'red';
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        vald4.style.color = 'green';
    } else {
        vald4.style.color = 'red';
    }
});
