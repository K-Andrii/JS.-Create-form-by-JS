"use strict";

//=======================
//Templates
//=======================
function createInput({type = 'text', id, className, name, placeholder, required = false, checked = false}){
    const input = document.createElement('input');
    input.type = type;

    if(id) input.id = id;
    if(className) input.classList.add(className);
    if(name) input.name = name;
    if(placeholder) input.placeholder = placeholder;
    if(required) input.required = true;
    if(checked) input.checked = checked;
    
    return input;
}

function createContainer(className){
    const div = document.createElement('div');
    if(className) div.classList.add(className);

    return div;
}

function createButton({type = 'submit', textContent, className}){
    const btn = document.createElement('button');
    btn.type = type;

    if(textContent) btn.textContent = textContent;
    if(className) btn.classList.add(className);

    return btn;
}

//==========================
//Create form
//==========================
const form = document.createElement("form");

const mainTitle = document.createElement("h2");
mainTitle.classList.add("main-tittle");
mainTitle.textContent = 'Create an account';

const subTitle = document.createElement("p");
subTitle.classList.add("sub-tittle");
subTitle.textContent = 'We always keep your name and email address private.';

//======Inputs=========
const inputFirstName = createInput({id: "first-name", name:"firstName", placeholder: "First name", required: true});
const inputLastName = createInput({id: "last-name", name:"lastName", placeholder: "Last name", required: true});
const inputsContainer1 = createContainer('inputs-container');
inputsContainer1.append(inputFirstName, inputLastName);

const inputDisplayName = createInput({id: "display-name", name:'displayName', placeholder: "Display Name", required: true});
const inputEmail = createInput({type:'email', id: "email", name:'email',  placeholder: "Email Addres", required: true});
const inputsContainer2 = createContainer('inputs-container');
inputsContainer2.append(inputDisplayName, inputEmail);

const inputPassword = createInput({type:'password', id: "password", name:'password', placeholder: "Password", required: true});
const inputPasswordConfirm = createInput({type:'password', id: "password-confirm", name:'passwordConfirm', placeholder: "Password Confirmation", required: true});
const inputsContainer3 = createContainer('inputs-container');
inputsContainer3.append(inputPassword, inputPasswordConfirm);

const inputsSection = createContainer('inputs-section');
inputsSection.append(inputsContainer1, inputsContainer2, inputsContainer3);


//==========Radio-Container========
//1
const radioTitle1 = document.createElement("label");
radioTitle1.classList.add("radio-title");
radioTitle1.setAttribute("for", "buyer");
radioTitle1.textContent = 'Join As a Buyer';

const radioDescription1 = document.createElement("p");
radioDescription1.classList.add("radio-description");
radioDescription1.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';

const radioText1 = createContainer('radio-text');
radioText1.append(radioTitle1, radioDescription1);

const inputRadio1 = createInput({type: 'radio', name:'join', id: 'buyer', checked:true});

const radioItem1 = createContainer('radio-item');
radioItem1.append(inputRadio1, radioText1);

//2
const radioTitle2 = document.createElement("label");
radioTitle2.classList.add("radio-title");
radioTitle2.setAttribute("for", "seller");
radioTitle2.textContent = 'Join As a Creative or Marketplace Seller';

const radioDescription2 = document.createElement("p");
radioDescription2.classList.add("radio-description");
radioDescription2.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';

const radioText2 = createContainer('radio-text');
radioText2.append(radioTitle2, radioDescription2);

const inputRadio2 = createInput({type: 'radio', name:'join', id: 'seller'});

const radioItem2 = createContainer('radio-item');
radioItem2.append(inputRadio2, radioText2);


const radioContainer = createContainer('radio-container');
radioContainer.append(radioItem1, radioItem2);


//=====checkbox====
const allowOffersInput = createInput({type: 'checkbox', name: 'allowOffer', id: 'allow-offers'});

const allowOffersLabel = document.createElement("label");
allowOffersLabel.setAttribute("for", "allow-offers");
allowOffersLabel.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

const checkboxContainer = createContainer('checkbox-container');
checkboxContainer.append(allowOffersInput, allowOffersLabel)

//btn
const btn = createButton({textContent: 'Create account'});


//======== Append =======
form.append(mainTitle, subTitle, inputsSection, radioContainer, checkboxContainer, btn);

//=======Export======
export default form