import { saveInfoToLocalStorage } from "./localStorage.js";

window.onload = () => {
    document.querySelector('#email').oninput = checkEmail;
    document.querySelector('#zipcode').oninput = checkZipcode;
    document.querySelector('#password').oninput = checkPassword;
    document.querySelector('#confirm-password').oninput = checkConfirmPassword;
}

export function validateForm() {
    const form = document.querySelector('form');

    let isValid = false;

    isValid = form.checkValidity();

    if (isValid) {
        saveInfoToLocalStorage();
        alert('High Five! Info saved to local storage.');
        form.reset();
    } else {
        checkEmail();
        checkZipcode();
        checkPassword();
        checkConfirmPassword();
    }
    //}
}

function checkEmail() {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('#email + span.error');

    if (!email.validity.valid) {
        emailErrorMessages(email, emailError);
    } else {
        emailError.innerText = '';
        emailError.className = 'error';
        emailError.classList.add('hide');
    }
}

function emailErrorMessages(email, emailError) {
    if (email.validity.valueMissing) {
        emailError.innerText = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.innerText = "Please enter a valid email address.";
    } else if (email.validity.tooShort) {
        emailError.innerText = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = 'error active';
}

function checkZipcode() {
    const zipcode = document.querySelector('#zipcode');
    const zipcodeError = document.querySelector('#zipcode + span.error');

    if (!zipcode.validity.valid) {
        zipcodeErrorMessages(zipcode, zipcodeError);
    } else {
        zipcodeError.innerText = '';
        zipcodeError.className = 'error';
        zipcodeError.classList.add('hide');
    }
}

function zipcodeErrorMessages(zipcode, zipcodeError) {
    if (zipcode.validity.valueMissing) {
        zipcodeError.innerText = "You need to enter a ZIP code.";
    } else if (zipcode.validity.patternMismatch) {
        zipcodeError.innerText = 'Please enter a valid ZIP code.';
    }

    zipcodeError.className = 'error active';
}

function checkPassword() {
    const password = document.querySelector('#password');
    const passwordError = document.querySelector('#password + span.error');

    if (!password.validity.valid) {
        passwordErrorMessages(password, passwordError);
    } else {
        passwordError.innerText = '';
        passwordError.className = 'error';
        passwordError.classList.add('hide');
    }
}

function passwordErrorMessages(password, passwordError) {
    if (password.validity.patternMismatch) {
        passwordError.innerText = 'Password must be at least 8 characters and has one number.';
    } else if (password.validity.valueMissing) {
        passwordError.innerText = 'You need to enter a password. Password must be at least 8 characters and has one number.'
    }
    passwordError.className = 'error active';
}

function checkConfirmPassword() {
    const confirmPassword = document.querySelector('#confirm-password');
    const confirmPasswordError = document.querySelector('#confirm-password + span.error');

    if (!confirmPassword.validity.valid) {
        confirmPasswordErrorMessages(confirmPassword, confirmPasswordError);
    } else {
        confirmPasswordError.innerText = '';
        confirmPasswordError.className = 'error';
        confirmPasswordError.classList.add('hide');
    }
}

function confirmPasswordErrorMessages(confirmPassword, confirmPasswordError) {
    const passwordError = document.querySelector('#password + span.error');
    const password = document.querySelector('#password');

    if (confirmPassword.value === '') {
        confirmPasswordError.innerText = 'You must confirm your password.';
        confirmPasswordError.className = 'error active';
    }
    else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = 'Confirm password does not match.';
        passwordError.innerText = 'Passwords mismatch. Please make sure that the two passwords are matching.';
        passwordError.className = 'error active';
        confirmPasswordError.className = 'error active';
        password.setCustomValidity('Invalid');
        confirmPassword.setCustomValidity('Invalid');
    } else if (confirmPassword.value === password.value) {
        passwordError.innerText = '';
        confirmPasswordError.innerText = '';
        passwordError.className = 'error';
        confirmPasswordError.className = 'error';
        passwordError.classList.add('hide');
        confirmPasswordError.classList.add('hide');
        password.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
}