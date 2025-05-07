/*
const country = 'Ecuador';
const continent = 'America';
let population = 18;
const isIsland = false;
const language = 'Spanish';



console.log(country);
console.log(continent);
console.log(population);


console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


const country = 'Ecuador';
const continent = 'America';
let populationEcuador = 18;
const language = 'Spanish';


populationEcuador++;
console.log(populationEcuador);
let populationFinland = 6;

console.log(populationEcuador > populationFinland);

let avgPopulation = 33;
console.log(populationEcuador < avgPopulation);

const description = country + ' is in ' + continent + ', and its ' + populationEcuador + ' million people speak ' + language
console.log(description)


//ASSIGNMENT 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

//console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
//console.log(markHigherBMI);

//ASSIGNMENT 2
if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

//console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
//console.log(markHigherBMI);


//ASSIGNMENT 2
if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// Coding Challenge #3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('"Dolphins win the trophy"');
} else if (scoreDolphins < scoreKoalas) {
    console.log('"Koalas win the trophy"');
} else {
    console.log("Both win the trophy");
}
*/

// Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);