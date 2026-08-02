import form from './CreateForm.js'
import collectProps from './CollectProps.js'
import emailValidation from './EmailValidation.js'
import passwordValidation from './PasswordValidation.js'

document.body.append(form)

form.addEventListener('submit', collectProps);

const emailInput = form.querySelector('input[name="email"]');
emailInput.addEventListener('input', emailValidation)

const passInput = document.querySelector('input[name="password"]')
const confirmInput = document.querySelector('input[name="passwordConfirm"]')
if(passInput && confirmInput) {
    passInput.addEventListener('input', passwordValidation)
    confirmInput.addEventListener('input', passwordValidation)
}