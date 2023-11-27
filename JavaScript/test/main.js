const number = 20;
const price = 20.5;

// Infinity => 1.797693134862315E+308
// -Infinity => -1.797693134862316E+308
// NaN

console.log ('Stała number = ' + number)
console.log('Typ zmiennej number to:' + typeof number)

let maksymalnaLiczba = Number.MAX_VALUE;
console.log(maksymalnaLiczba);
maksymalnaLiczba = maksymalnaLiczba + 10e1000;
console.log(maksymalnaLiczba);
let firstName;

const elem = document.querySelector(".section-1");

// console.log(firstName);
console.log(elem);
const isLoggedIn = false;

if(isLoggedIn) {
    console.log("Zalogowano");
} else {
    console.log("Nie zalogowano");
}

// Wartości fałszywe
// false, 0, "", null, undefined, NaN

const value = "";

if(value) {
    console.log("Ta wartość nie jest fałszywa");
}