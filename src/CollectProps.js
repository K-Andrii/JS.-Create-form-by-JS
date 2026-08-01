class Person {
    constructor(inputsData){
        inputsData.forEach((input)=>{
            if(input.type === 'password' || input.type === 'checkbox' || input.type === 'radio' || !input.name) return

            this[input.name] = input.value;
        })
    }
}

function collectProps(event){
    event.preventDefault();

    const inputsData = event.target.querySelectorAll("input");
    const person = new Person(inputsData)

    if(person.lastName) localStorage.setItem(person.lastName, JSON.stringify(person))
}

export default collectProps;
