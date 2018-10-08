var btnScissors = document.querySelector('#btn-scissors');
var btnRock = document.querySelector('#btn-rock');
var btnPaper = document.querySelector('#btn-paper');

var outputText = document.getElementById('output');
var outputResult = document.getElementById('result');

var resultPlayer = 0;
var resultComputer = 0;

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
    outputText.insertAdjacentHTML('afterbegin', (result + ': you played ' + playerSymbol.toUpperCase() + ', computer played ' + computerSymbol.toUpperCase() + '<br>'));
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

var increaseCounters = function (result) {
  if (result === 'YOU WON') {
      resultPlayer += 1;
  }
  else if (result === 'YOU LOST') {
      resultComputer += 1;
  };
    outputResult.innerHTML = 'P:C --> ' + resultPlayer + ':' + resultComputer;
};

var playerMove = function(event) {
    var playerSymbol = event.currentTarget.symbol;
    var computerSymbol = computerMove();
    var result = getResult(playerSymbol, computerSymbol);
    console.log(playerSymbol);
    console.log(computerSymbol);
    console.log(result);
    writeResultToOutput(result, playerSymbol, computerSymbol);
    increaseCounters(result);

};

btnScissors.addEventListener('click', playerMove);
btnRock.addEventListener('click', playerMove);
btnPaper.addEventListener('click', playerMove);

btnScissors.symbol = 'scissors';
btnRock.symbol = 'rock';
btnPaper.symbol = 'paper';

