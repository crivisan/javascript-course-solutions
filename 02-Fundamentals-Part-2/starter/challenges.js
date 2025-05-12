'use strict';

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