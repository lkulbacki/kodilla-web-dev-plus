var computerMove = function () {
    var move = (Math.ceil(Math.random()*3));
    if (move === 1) {
        return 'paper';
    }
    else if (move ===2) {
        return 'rock';
    }
    else return 'scissors';
};

var writeResultToOutput = function (result, playerSymbol, computerSymbol) {
    document.getElementById('output').insertAdjacentHTML('afterbegin', (result + ': you played ' + playerSymbol + ', computer played ' + computerSymbol + '<br>'));
};

var getResult = function (playerSymbol, computerSymbol) {
    if (playerSymbol === computerSymbol) {
        return 'DRAW';
    }
    else if ((playerSymbol === 'paper' && computerSymbol === 'rock') ||
        (playerSymbol === 'rock' && computerSymbol === 'scissors') ||
        (playerSymbol === 'scissors' && computerSymbol === 'paper')) {
        return 'YOU WON';
    }
    else return 'YOU LOST';
};

var playerMove = function(event) {
    var playerSymbol = event.currentTarget.symbol;
    var computerSymbol = computerMove();
    var result = getResult(playerSymbol, computerSymbol);
    console.log(playerSymbol);
    console.log(computerSymbol);
    console.log(result);
    writeResultToOutput(result, playerSymbol, computerSymbol);

};

var btnScissors = document.querySelector('#btn-scissors');
var btnRock = document.querySelector('#btn-rock');
var btnPaper = document.querySelector('#btn-paper');

btnScissors.addEventListener('click', playerMove);
btnRock.addEventListener('click', playerMove);
btnPaper.addEventListener('click', playerMove);

btnScissors.symbol = 'scissors';
btnRock.symbol = 'rock';
btnPaper.symbol = 'paper';

