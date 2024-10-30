import { validateForm } from "./modules/validation.js";

function createForm() {
    const container = document.querySelector('#container');

    // create a form
    const form = document.createElement('form');
    form.noValidate = 'true';
    container.appendChild(form);

    const disclaimer = document.createElement('span');
    disclaimer.classList.add('disclaimer');
    disclaimer.innerText = '* Please do not use any real information. This made for testing only. Thank you! *'
    form.appendChild(disclaimer);

    // create an email input
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.innerText = 'Email';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.id = 'email';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = 'true';
    emailInput.minLength = '8';
    form.appendChild(emailInput);

    const emailError = document.createElement('span');
    emailError.classList.add('error');
    emailError.classList.add('hide');
    form.appendChild(emailError);

    // create a zip code input
    const zipcodeLabel = document.createElement('label');
    zipcodeLabel.htmlFor = 'zipcode';
    zipcodeLabel.innerText = 'ZIP Code';
    form.appendChild(zipcodeLabel);

    const zipcodeInput = document.createElement('input');
    zipcodeInput.id = 'zipcode';
    zipcodeInput.type = 'text';
    zipcodeInput.name = 'zipcode';
    zipcodeInput.required = 'true';
    zipcodeInput.pattern = '^[0-9]{5}(-[0-9]{4})?$';
    form.appendChild(zipcodeInput);

    const zipcodeError = document.createElement('span');
    zipcodeError.classList.add('error');
    zipcodeError.classList.add('hide');
    form.appendChild(zipcodeError);

    // create a password input
    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.innerText = 'Password';
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.required = 'true';
    passwordInput.pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
    form.appendChild(passwordInput);

    const passwordError = document.createElement('span');
    passwordError.classList.add('error');
    passwordError.classList.add('hide');
    form.appendChild(passwordError);

    //create a confirm password input
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.htmlFor = 'confirm-password';
    confirmPasswordLabel.innerText = 'Confirm Password';
    form.appendChild(confirmPasswordLabel);

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.id = 'confirm-password';
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.name = 'confirm-password';
    confirmPasswordInput.required = 'required';
    confirmPasswordInput.pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
    form.appendChild(confirmPasswordInput);

    const confirmPasswordError = document.createElement('span');
    confirmPasswordError.classList.add('error');
    confirmPasswordError.classList.add('hide');
    form.appendChild(confirmPasswordError);

    // create submit and clear button
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    form.appendChild(buttonContainer);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.innerText = 'Submit';
    buttonContainer.appendChild(submitButton);

    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-button');
    clearButton.innerText = 'Clear';
    buttonContainer.appendChild(clearButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    })

    clearForm();
}

function clearForm() {
    const form = document.querySelector('form');
    const clearButton = document.querySelector('.clear-button');

    clearButton.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
    });
}

createForm();