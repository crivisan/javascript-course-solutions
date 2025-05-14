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



//40. Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(years[2]);

console.log(years.length);
console.log(friends[friends.length - 2]);

//mutate the array
friends[2] = 'Jay'; // still able to change the values, because the arrays are not primitive values
console.log(friends[2]);

// NOT possible though --> friends = ['assds', 'sdfdf'], not possible to replace the whole array

const firstName = 'Cris'
const cris = [firstName, 'San', 2037 - 1994, friends]
console.log(cris)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const years2 = [1990, 1967, 2002, 2010, 2018]
console.log(calcAge(years2)) // --> NaN as result

const ageA = calcAge(years[0]);
const ageB = calcAge(years[1]);
const ageC = calcAge(years[years.length - 1]);
const ageD = calcAge(years[years.length - 2]);
console.log(ageA, ageB, ageC, ageD);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])]
console.log(ages)



// 41. Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];
// Push Method --> to add an element at teh end of the array
friends.push('Jay'); //add an element
console.log(friends);
const newLength = friends.push('Charles'); //add element and retrieve new lenght of array
console.log(friends);
console.log(newLength);
// Unshift method --> add elelement at the beginning
friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop(); // Last Element removed by default
const popped = friends.pop(); // It does not return the new lenght but the removed element
console.log(popped);
console.log(friends);

friends.shift(); // First elelment removed by default, also returns the removed element
console.log(friends);

// Get the index of a specific element
console.log(friends.indexOf('Steven')); //
console.log(friends.indexOf('BOOOOB')); // -1 since it is not in the array

// Returns True/ False if elelment in the array,
console.log(friends.includes('Steven')); //
console.log(friends.includes('BOOOOB')); //
//useful to write conditionals
if (friends.includes('Steven')) {
    console.log('YOU HAVE A FRIEND CALLED STEVEN')
}


// 43. Introduction to Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


//we dont know the 
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas)

//challenge 
// "Jonas has 3 friends, and hos best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


*/

// 45. Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this)
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver license"

const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this)
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas2.getSummary());
