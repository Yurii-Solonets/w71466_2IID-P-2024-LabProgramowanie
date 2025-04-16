//Zadanie 1

const book = {
    title: "Tytuł",
    author: "Author",
    publishYear: 2019
};

function getInfo(element){
    return `${element.title} - ${element.author} (${book.publishYear})`;
}

console.log(getInfo(book));

//Zadanie 2

const student = {
    name: "Dariusz",
    surname: "Nowak",
    albumNumb: "w74814",
    grades: {
        math: 4, 
        historia: 5,
        informatyka: 4
    }
};
//console.log((student.grades.math + student.grades.historia + student.math.informatyka) / 3);

console.log(Object.values(student.grades).reduce((a, b) => a + b) / Object.keys(student.grades).length);

//Zadanie 3

function Car(mark, model, productionYear, color, speed){
    this.mark = mark;
    this.model = model;
    this.productionYear = productionYear; 
    this.color = color;
    this.speed = speed;
    this.increaseSpeed = (value) => this.speed += value;
    this.decreaseSpeed = function(value) {
        this.speed -= value;
    }
    this.getAge = () => {
        const date = new Date();
        return date.getFullYear() - this.productionYear;
    }
}

const car = new Car("Audi", "RS7", 2018, "czarny", 25);
car.increaseSpeed(10);
console.log(car.speed);
car.getAge(car.productionYear)

class car2{
    constructor(mark, model, productionYear, color, speed){
        this.mark = mark;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;
        this.speed = speed;
    }
    increaseSpeed(value){
        this.speed += this.speed
    }
}

//Zadanie 5 
function Prostokat(a, b){
    this.a = a;
    this.b = b;
    this.calcPerimetr = () => 2*a + 2*b;
    this.calcArea = () => a * b;
    this.isProstok = () => a == b;
}

const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const result = document.getElementById("result");

//Zadanie 6
function create(){
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const prostokat = new Prostokat(a, b);

    result.innerHTML = `${prostokat.isProstok()? "Kwadrat": "Prostokąt"} o obwodzie ${prostokat.calcPerimetr()} i polu ${prostokat.calcArea()}`
}