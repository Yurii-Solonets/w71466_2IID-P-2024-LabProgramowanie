// const car = {
//     marka: "Toyota", 
//     model: "camaro", 
//     Year: 2011, 
//     color: "red", 
//     speed: 250
// }
// console.log(`${car.marka}, ${car.model}, ${car.Year}, Kolor: ${car.color}, Speed: ${car.speed}`)

// let speed1 = prompt("Podaj prędkość samochodu: ")
// console.log(speed1)

// const zmiana = car.speed - speed1; 
// console.log(zmiana)


// -- Zadanie 2 --
class car {
    constructor(marka, model, year, kolor, speed = 200){
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.kolor = kolor;
        this.speed = speed;
    }


zwiekszPredkosc(wartosc) {
    this.speed += wartosc;
    this.wyswietlInfo();
} 

zmniejszPredkosc(wartosc) { 
    this.speed -= wartosc;
    if (this.speed < 0){
        this.speed = 0;
    }
    this.wyswietlInfo();
}

infoAboutCar(){
    return `${this.marka} ${this.model} (${this.year}), Kolor: ${this.kolor}, Prędkość: ${this.speed} km/h`;
}

wyswietlInfo() {    
    document.getElementById("info").textContent = this.infoAboutCar();
    }
}
const samochod = new car("Toyota", "Corolla", 2020, "Czerwony");
samochod.wyswietlInfo();

const samochody = [
  new car("Toyota", "Corolla", 2020, "Czerwony", 100),
  new car("Ford", "Focus", 2019, "Niebieski", 80),
  new car("BMW", "X5", 2020, "Czarny", 120),
  new car("Audi", "A4", 2021, "Srebrny", 90),
  new car("Honda", "Civic", 2020, "Biały", 110)
];

const sumaSpeed = samochody.reduce((suma, auto) => suma + auto.speed, 0);
const średnia = sumaSpeed/samochody.length

console.log(`Średnia: ${średnia.toFixed(2)} km/h`)

const chooseYear = 2020;
console.log(chooseYear);

samochody.forEach(auto => {
    if(auto.year === chooseYear ){
        console.log(`-${auto.marka} ${auto.model}`)
    }
})

const nameInput = document.querySelector("#name")
const nameDisplay = document.querySelector("#nameDisplay")
const nameError = document.querySelector("#nameError")
nameInput.addEventListener('input', () => {
    nameDisplay.textContent = nameInput.value;
})