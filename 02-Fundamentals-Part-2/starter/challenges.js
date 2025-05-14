'use strict';

/*
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const scoreDolphins = calcAverage(20, 10, 2);
const scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = function (avgTeam1, avgTeam2) {
    if (avgTeam1 / 2 >= avgTeam2) {
        console.log(`Team1 with ${avgTeam1} average points Wins!`)
    }
    else if (avgTeam2 / 2 >= avgTeam1) {
        console.log(`Team2 with ${avgTeam2} average points Wins!`)
    }
    else { console.log(`No team wins!!`) }
}

checkWinner(scoreDolphins, scoreKoalas)



const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.2
    return tip
}

console.log(calcTip(100))

const bills = [125, 555, 44]
console.log(bills)

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)

const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
console.log(totals)
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

console.log(mark.calcBMI())