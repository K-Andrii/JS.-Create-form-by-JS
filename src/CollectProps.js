class Person {
    constructor({password, passwordConfirm, ...props}){
        Object.assign(this, props);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formDataObj = Object.fromEntries((new FormData(form)))
    const person = new Person(formDataObj)

    if(person.lastName) localStorage.setItem(person.lastName, JSON.stringify(person))
});
