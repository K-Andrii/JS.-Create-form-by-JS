import passwordValidation from './passwordValidation.js';

class Person {
    constructor(data){
        Object.assign(this, data);
    }
}

function collectProps(event){
    event.preventDefault();

    if(!passwordValidation()) return false;

    const inputsData = event.target.querySelectorAll("input");
    const cleanData = {}

    inputsData.forEach(input => {
        if (input.name && input.type !== 'password' && input.type !== 'checkbox' && input.type !== 'radio') {
            cleanData[input.name] = input.value;
        }
    })


    const person = new Person(cleanData)

    if(person.lastName) localStorage.setItem(person.lastName, JSON.stringify(person))
}

export default collectProps;
