const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('show-password');
const hidePasswordIcon = document.getElementById('hide-password');

showPasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    showPasswordIcon.style.display = 'none';

    hidePasswordIcon.style.display = 'inline-block';
});
hidePasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    showPasswordIcon.style.display = 'inline-block';
    hidePasswordIcon.style.display = 'none';
});