/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 12);

console.log('Jonas');
console.log(23);


let firstName = "Math";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonasMatilda = "JM";
let PI = 3.1415;
let $function = 27;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


//not correct like this below
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null)

let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';


// Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

//concatenate multiple strings with +
const firstName = 'Jonas';
const lasName = 'Schmedtmann';
console.log(firstName + ' ' + lasName);

// Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x - 1 = 100
x--; // x - 1 = 99
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // same as ageJonas > ageSarah



// 14. Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//defining two variables at the same time
let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// 17. Strings and Template Literals
const firstName = 'Cristhian';
const job = 'teacher';
const birthYear = 1994;
const year = 2037;

const cristhian = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(cristhian);

const cristhianNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(cristhianNew)
console.log(`Just a regular string...`)

// new lines
console.log('String with \n\
    multiple \n\
    lines');


// 18. Taking Decisions
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// 20. Type Conversion and Coercion 

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN, invalid number
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//Type coercion
console.log('I am ' + 23 + ' years old.')
console.log('23' - '10' - 5) //8
console.log('23' + '10' + 3) //23103
console.log('23' * '2') //46
console.log('10' / '2') //10

let n = '1' + 1; //11
n = n - 1; //10
console.log(n);


// 21. Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 10; //true (falsy value) //const money = 0 //false
if (money) {
    console.log("Dont't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height; //false (falsy value)
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED')
}


//22. Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');


let favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
}

//more if,else statements with 'else if'
favourite = Number(favourite)
if (favourite === 23) { // Number('23') === 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite == 7) {
    console.log('7 is also a cool number')
} else if (favourite == 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

//diferent operator
if (favourite !== 23) console.log('Why not 23?')



// 23. Boolean Logic
// 24. Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision

//if (shouldDrive) {
//    console.log('Sarah is able to drive!');
//} else {
//    console.log('Someone else should drive...');
//}

//adding another boolean value
const isTired = false; //C
//console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// 26. The switch Statement

const day = 'thursday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
        break;
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        break;
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}


//27. Statements and Expressions
// Expressions - produce a value
3 + 4;
1994;
// Statements -- does not produce a value
if (23 > 10) {
    const str = '23 is bigger';
}

notExpression = 'Here can not go an if statement for example'
console.log(`I'm ${2037 - 1991} years old... (${notExpression})`)


//28. The Conditional (Ternary) Operator

const age = 28;
age >= 18 ? console.log('I like to drink wine') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


// using it in a template-literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}... Log, working using Ternary operator on Templade-literal`)

*/

