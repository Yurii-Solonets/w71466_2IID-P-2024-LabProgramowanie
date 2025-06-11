const form = document.querySelector('form');

//Zadanie 2
const nameInput = document.querySelector("#name")
const nameDisplay = document.querySelector("#nameDisplay")
const nameError = document.querySelector("#nameError")
nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
    checkMinimalLength(nameInput, nameError);
})

//Zadanie 3
const showHidePassword = document.querySelector("#showHidePassword")
const passwordInput = document.querySelector("#password")
const passwordConfirmInput = document.querySelector("#confirmedPassword")

showHidePassword.addEventListener("change", () =>{
   passwordInput.type = showHidePassword.checked? "text": "password";
})


//Zadanie 4
const hobbiesList = document.querySelector('ul');
function hobbies(){
    hobbiesList.replaceChildren()
    const selectedHobbies = document.querySelectorAll('input[name = "hobbies"]:checked')

    selectedHobbies.forEach(hobby => {
        const item = document.createElement('li')
        item.textContent = hobby.value;
        hobbiesList.appendChild(item)
    })
}

form.addEventListener("submit", event => {
    event.preventDefault();

    hobbies();
})

//Zadanie 5

const phoneContainer = document.querySelector('#phone-container')
const showHidePhone = document.querySelector("#showHidePhone")
showHidePhone.addEventListener("change", () => {
    phoneContainer.hidden = showHidePhone.checked;
})

//Zadanie 6 
const countrySelect = document.querySelector("#country")
const franceOption = new Option("Francja", "FR");
countrySelect.add(franceOption)

const surnameInput = document.querySelector("#surname")
const surnameError = document.querySelector("#surnameError")
surnameInput.addEventListener('blur', () => {
    checkMinimalLength(surnameInput, surnameError);
})

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError")

emailInput.addEventListener('blur', function() { 
    checkEmail(emailInput, emailError);
}); 

const passwordError = document.querySelector("#passwordError")

passwordInput.addEventListener('blur', function() { 
    checkPassword(passwordInput.value, passwordError);
}); 

const passwordConfirmError = document.querySelector("#passwordConfirmError")

passwordInput.addEventListener('blur', function() { 
    checkPassword(passwordConfirmInput.value, passwordConfirmError);
}); 


function formIsValid(){
    let valid = true;

    // valid = valid && checkMinimalLength(nameInput, nameError);
    // valid = valid && checkMinimalLength(surnameInput, surnameError);
    // valid = valid && checkEmail(emailInput, emailError);

    valid = checkMinimalLength(nameInput, nameError) && valid;
    valid = checkMinimalLength(surnameInput, surnameError) && valid;
    valid = checkEmail(emailInput, emailError) && valid;
    valid = checkPassword(passwordInput.value, passwordError) && valid;

    return valid;
}

form.addEventListener("submit", event =>{
    event.preventDefault();
    hobbies();

    const isValid = formIsValid();

    if (isValid){
        alert("Formularz poprawny")
    }
    else{
        console.log("Błędy");
    }
})

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('keypress', function(event){
    if(event.key > 0 && event.key <= 9)
        return true;

    event.preventDefault();
    return false;
})