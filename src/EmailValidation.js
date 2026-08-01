const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function emailValidation(event){
    const input = event.target;
    const isValid = emailRegex.test(input.value);

    const errorElem = input.nextElementSibling

    if(isValid || input.value === ''){
        if(errorElem && errorElem.classList.contains('email-error')) errorElem.remove()
    } else{
        if(!errorElem || !errorElem.classList.contains('email-error')) {
            let errorMsg = document.createElement('p');
            errorMsg.classList.add('email-error');
            errorMsg.innerText = 'Invalid email - example@gmail.com';

            input.parentElement.style.position = 'relative';

            input.after(errorMsg);

            errorMsg.style.top = `${input.offsetTop + input.offsetHeight + 2}px`;
            errorMsg.style.left = `${input.offsetLeft}px`;
            errorMsg.style.width = `${input.offsetWidth}px`;
        }
    }
}

