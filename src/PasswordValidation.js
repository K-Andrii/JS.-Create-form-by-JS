export default function passwordValidation() {
    const passInput = document.querySelector('input[name="password"]')
    const confirmInput = document.querySelector('input[name="passwordConfirm"]')
    const btnSubmit = document.querySelector('button[type="submit"]')
    const errorElem = confirmInput.nextElementSibling

    if (confirmInput.value === '') {
        if (errorElem && errorElem.classList.contains('password-error')) {
            errorElem.remove();
        }
        if(btnSubmit) btnSubmit.disabled = true;
        return false;
    }

    const isValid = passInput.value === confirmInput.value;

    if (isValid) {
        if (errorElem && errorElem.classList.contains('password-error')) {
            errorElem.remove();
        }
        if(btnSubmit) btnSubmit.disabled = false;
        return true;
    }

    if (!errorElem || !errorElem.classList.contains('password-error')) {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('password-error');
        errorMsg.innerText = 'Passwords are not equal';

        errorMsg.style.top = `${confirmInput.offsetTop + confirmInput.offsetHeight + 2}px`;
        errorMsg.style.left = `${confirmInput.offsetLeft}px`;
        errorMsg.style.width = `${confirmInput.offsetWidth}px`;

        confirmInput.after(errorMsg);
    }
    if(btnSubmit) btnSubmit.disabled = true;

    return false;
}