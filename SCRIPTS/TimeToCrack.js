function calculateCrackingTime(passwordValue) {
    const hasSpecialChars = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(passwordValue);
    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasLowercase = /[a-z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);

    let charSetSize = 0;
    if (hasUppercase) charSetSize += 26; // 26 uppercase letters
    if (hasLowercase) charSetSize += 26; // 26 lowercase letters
    if (hasNumber) charSetSize += 10; // 10 digits
    if (hasSpecialChars) charSetSize += 32; // 32 special characters

    // Calculate the number of unique characters used
    const uniqueChars = new Set(passwordValue).size;

    // Calculate the entropy based on the character set size, unique characters, and password length
    let entropy = 0;
    for (let i = 0; i < passwordValue.length; i++) {
        const char = passwordValue[i];
        if (char.match(/[a-z]/)) {
            entropy += 4.7; // 26 lowercase letters
        } else if (char.match(/[A-Z]/)) {
            entropy += 4.7; // 26 uppercase letters
        } else if (char.match(/[0-9]/)) {
            entropy += 3.3; // 10 digits
        } else if (char.match(/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/)) {
            entropy += 5.5; // 32 special characters
        }
    }

    // Apply a penalty for common patterns or sequences
    const patterns = [/abc/, /123/, /qwerty/];
    for (const pattern of patterns) {
        if (pattern.test(passwordValue)) {
            entropy -= 10; // Apply a penalty of 10 bits for common patterns
        }
    }

    let crackingTime;
    if (entropy < 28) {
        crackingTime = 'less than 1 second';
    } else if (entropy < 36) {
        crackingTime = 'less than 1 minute';
    } else if (entropy < 44) {
        crackingTime = 'less than 1 hour';
    } else if (entropy < 52) {
        crackingTime = 'less than 1 day';
    } else if (entropy < 60) {
        crackingTime = 'less than 1 week';
    } else if (entropy < 68) {
        crackingTime = 'less than 1 month';
    } else if (entropy < 76) {
        crackingTime = 'less than 1 year';
    } else if (entropy < 84) {
        crackingTime = 'less than 10 years';
    } else {
        crackingTime = 'more than 10 years';
    }

    document.getElementById('time-to-crack').innerHTML = `<i class="fa-regular fa-clock fa-bounce" style="color: #63E6BE;"></i> ${crackingTime}`;
}

document.getElementById('password').addEventListener('input', function() {
    calculateCrackingTime(this.value);
});