export function saveInfoToLocalStorage() {
    let arr = JSON.parse(localStorage.getItem('user-info')) || [];

    const email = document.querySelector('#email').value;
    const zipcode = document.querySelector('#zipcode').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    arr.push({
        id: Date.now().toString(),
        email,
        zipcode,
        password,
        confirmPassword
    });

    localStorage.setItem('user-info', JSON.stringify(arr));
}