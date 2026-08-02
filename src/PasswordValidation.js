export default function passwordValidation() {
    const passInput = document.querySelector('input[name="password"]')
    const confirmInput = document.querySelector('input[name="passwordConfirm"]')
    const errorElem = confirmInput.nextElementSibling

    if (confirmInput.value === '') {
        if (errorElem && errorElem.classList.contains('password-error')) {
            errorElem.remove();
        }
        return;
    }

    const isValid = passInput.value === confirmInput.value;

    if(isValid && errorElem && errorElem.classList.contains('password-error')) {
        errorElem.remove()
    } else{
        if(!errorElem || !errorElem.classList.contains('password-error')){
            const errorMsg = document.createElement('p');
            errorMsg.classList.add('password-error');
            errorMsg.innerText = 'Passwords are not equal'

            errorMsg.style.top = `${confirmInput.offsetTop + confirmInput.offsetHeight + 2}px`
            errorMsg.style.left = `${confirmInput.offsetLeft}px`
            errorMsg.style.width = `${confirmInput.offsetWidth}px`

            confirmInput.after(errorMsg);
        }
    }
}