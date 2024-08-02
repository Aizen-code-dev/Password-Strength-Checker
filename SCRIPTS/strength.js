function passStrength() {
    const passInput = document.getElementById('password');
    const passLabel = document.getElementById('pass-label');
    const passwordValue = passInput.value;

    const hasSpecialChars = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(passwordValue);
    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasLowercase = /[a-z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasCommonPass = [
        '123456789',
        '9876543210',
        '0987654321',
        'password123',
        'abc123',
        '123456',
        '111111',
        '222222',
        '333333',
        '444444',
        '555555',
        '666666',
        '777777',
        '888888',
        '999999'
    ].some(commonPass => passwordValue.includes(commonPass));

    if (hasCommonPass) {
        passLabel.style.backgroundColor = 'red';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Very common ';
    } else if (passwordValue.length < 8) {
        passLabel.style.backgroundColor = 'red';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Weak';
    } else if (hasSpecialChars && !hasUppercase && !hasLowercase && !hasNumber && passwordValue.length > 8) {
        passLabel.style.backgroundColor = 'blue';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Excellent';
    } else if (!hasSpecialChars && (hasUppercase || hasLowercase || hasNumber)) {
        passLabel.style.backgroundColor = 'orange';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Medium';
    } else if (passwordValue.length >= 15 && hasUppercase && hasLowercase && hasNumber && hasSpecialChars) {
        passLabel.style.backgroundColor = 'green';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Super Strong';
    } else if (passwordValue.length >= 12 && hasUppercase && hasLowercase && hasNumber && hasSpecialChars) {
        passLabel.style.backgroundColor = 'green';
        passLabel.style.color = 'white';
        passLabel.innerHTML = 'Strong';
    } else {

        passLabel.innerHTML = 'Use a mix of characters to make strong';
    }
}

document.getElementById('password').addEventListener('input', passStrength);