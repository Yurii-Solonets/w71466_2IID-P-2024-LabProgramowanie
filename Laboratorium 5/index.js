// switch (new Date().getDay()){
//     case 4:
//     case 5:
//         tekst = "Soon it's Weekend"
//     case 0:
//     case 6:
//         tekst = "It's Weekend"
//         break;
//     default:
//         tekst = "Looking forward to the Weekend"
// }        

// if (new Date().getDate == 4 || new Date().getDate == 5){
//     text = "Soon it's Weekend";
// }
// else if (new Date().getDate == 0 || new Date().getDate == 6)
// {
//     text = "It's Weekend";
// }   
// else{
//     text = "Looking forward to the Weekend";
// }


//Zadanie 1
function Ask(){
    wiek = Number(prompt("Podaj swój wiek"));
    if(wiek >= 18){
        console.log("Jesteś pełnoletnim");
        
    }
    else{
        console.log("Jesteś niepełnoletnim.");
    }
    console.log(wiek >= 18? "Jesteś pełnoletnim": "jesteś niepełnoletnim");
}

//Zadanie 2

function convert(cel){
    return (cel * 1.8) + 32;    
}
console.log(convert(10));

//Zadanie 3

const arr = [1, 2, 3]
const arr1 = [4, 5, 6]
const arr2 = [7, 8, 9]

for (let i = 0; i < 100; i++){
    arr.push(Math.ceil(Math.random()* 10));
}
console.log(arr)

//Łączenie tablic 
const polonczonaTablica  = arr1.concat(arr2)
console.log(polonczonaTablica)

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

//Suma
const sum1 = arr.reduce((a, b) => a + b, 0);
console.log(sum1);

//Parzyste liczbę 
console.log("Parzyste: ", arr.filter(x => x % 2 ===0));

//Razy 3 
console.log("Razy 3:", arr.map(x => x * 3));

//Index 
console.log("Index 2:", arr.findIndex(x => x ===2));

//Średnia
console.log("Średnia: ", sum1/arr.length);

//Największa
// let max = 0;
// arr.forEach((value) => {
//     if (max < value){
//         max > value;
//     }
// });

// console.log(max, Math.max(...arr));

//Ilość występien
console.log("Ilość: ", arr.filter(x => x === 100).length);

//Zadanie 4 
const fib = [0, 1];

for (let i = 2; i < 100; i++){
    fib.push(fib[i - 1] + fib [i -2]);
}
console.log("Fibonacci: ", fib);