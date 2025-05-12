'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');



// 34. Functions
function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking the function / executing the function
//logger();
//logger();
//logger();

//use descriptive function names
function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// direct logging to the console
console.log(fruitProcessor(5, 0)); //but here we don't capture the value of the function

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// 35. Function Declarations vs. Expressions
//Function Declaration
const age1 = calcAge1(1994);

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age11 = calcAge1(1994);
//Function Expression ... Annonymus function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1994);
console.log(age1, age2);

//36. Arrow Functions
//Using the most simple case, one argument, one calculation
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994)
console.log(age3)

//A bit more complex version
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1994, 'Bob'));


// 37. Function Calling other functions

function cutFruitPieces(fruit) {
    return fruit = 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice
}

console.log(fruitProcessor(2, 3));

*/

//40. Introduction to Arrays
