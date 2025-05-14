// <<--Zadanie 1 -->> 
function silnia(n){
    return n > 1? n * silnia(n - 1): 1;
}
// const m = prompt("Podaj liczbę dla silnii: ");
console.log(silnia(5));

// <<--Zadanie 2 -->>
const btns = document.querySelectorAll("button");
let selectedBtn = null;
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("selected");
        if(selectedBtn){
            selectedBtn.classList.remove("selected")   
        }
        selectedBtn = btn;
    })
})

// <<--Zadanie 3 -->>
const spanToHide = document.querySelector("span")
const btn = document.querySelector("#secretBtn")

btn.addEventListener("click", toogleVisibility);

function toogleVisibility(){
    spanToHide.style.visibility = spanToHide.style.visibility === 'hidden'? "visible" : "hidden";
}

// <<-- Zadanie 4 -->>
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname")
const saveBtn = document.querySelector("#save")
const list = document.querySelector(".list")
const table = document.querySelector("table")


saveBtn.addEventListener("click", () => {
    const name = nameInput.value;

    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li)

    // <<-- Zadanie 5 -->>
    const surname = surnameInput.value;
    const newRow = table.insertRow();
    const nameCall = newRow.insertCell();
    nameCall.textContent = name;
    const surnameCall = newRow.insertCell();
    surnameCall.textContent = surname;
    li.textContent = name + " " + surname
})  
