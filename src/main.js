import form from './CreateForm.js'
import collectProps from './CollectProps.js'

document.body.append(form)
form.addEventListener('submit', collectProps);