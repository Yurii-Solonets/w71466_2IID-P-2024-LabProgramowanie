const form = document.querySelector('form');

//Zadanie 2
const nameInput = document.querySelector("#name")
const nameDisplay = document.querySelector("#nameDisplay")
nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
})

//Zadanie 3
const showHidePassword = document.querySelector("#showHidePassword")
const passwordInput = document.querySelector("#password")

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