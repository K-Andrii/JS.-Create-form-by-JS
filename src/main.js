import form from './CreateForm.js'
import collectProps from './CollectProps.js'
import emailValidation from './EmailValidation.js'

document.body.append(form)

form.addEventListener('submit', collectProps);

const emailInput = form.querySelector('input[name="email"]');

emailInput.addEventListener('input', emailValidation)