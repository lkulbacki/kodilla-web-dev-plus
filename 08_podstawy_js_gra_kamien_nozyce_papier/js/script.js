var btnScissors = document.querySelector('#btn-scissors');
var btnRock = document.querySelector('#btn-rock');
var btnPaper = document.querySelector('#btn-paper');
var btnNewGame = document.querySelector('#btn-newgame');

var outputText = document.getElementById('output');
var outputResult = document.getElementById('result');

var resultPlayer = 0;
var resultComputer = 0;
var gamesPlayed = 0;
var gamesLimit = 5;

var gameOn = true;

var computerMove = function () {
    var move = (Math.ceil(Math.random()*3));
    if (move === 1) {
        return 'paper';
    }
    else if (move === 2) {
        return 'rock';
    }
    else return 'scissors';
};

var writeResultToOutput = function (result, playerSymbol, computerSymbol) {
    outputText.insertAdjacentHTML('afterbegin', (result + ': you played ' + playerSymbol.toUpperCase() + ', computer played ' + computerSymbol.toUpperCase() + '<br>'));
};

var writeToOutput = function (text) {
    outputText.insertAdjacentHTML('afterbegin', text);
}

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
    if (gameOn === true) {
        var playerSymbol = event.currentTarget.symbol;
        var computerSymbol = computerMove();
        var result = getResult(playerSymbol, computerSymbol);
        console.log(playerSymbol);
        console.log(computerSymbol);
        console.log(result);
        writeResultToOutput(result, playerSymbol, computerSymbol);
        increaseCounters(result);
        if (resultPlayer === gamesLimit) {
            writeToOutput("YOU WON THE ENTIRE GAME!!!<br>");
            gameOn = false;
        }
        else if (resultComputer === gamesLimit) {
            writeToOutput("YOU LOST THE ENTIRE GAME!!!<br>");
            gameOn = false;
        };
    }
    else {
        writeToOutput('GAME OVER, press New Game button to begin again<br>');
    };
};

var convertToInteger = function (text) {
    inputNumber = parseInt(text);
    if (typeof(inputNumber) === 'number' && !isNaN(inputNumber)) {
        return inputNumber;
    }
    else {
        alert('Wrong value! Not a numer mate.')
    }
};

var beginNewGame = function(event) {
    gamesLimit = convertToInteger(window.prompt('How many rounds to play?'));
    if (gamesLimit !== 'undefined') {
        gameOn = true;
        gamesPlayed = 0;
        resultPlayer = 0;
        resultComputer = 0;
        outputText.innerHTML = '';
        outputResult.innerHTML = 'P:C --> 0:0';
        document.getElementById('winningResult').innerHTML = "Winning rounds required: " + gamesLimit;
    };
    console.log('games limit:' + gamesLimit);
};

btnScissors.addEventListener('click', playerMove);
btnRock.addEventListener('click', playerMove);
btnPaper.addEventListener('click', playerMove);
btnNewGame.addEventListener('click', beginNewGame);

btnScissors.symbol = 'scissors';
btnRock.symbol = 'rock';
btnPaper.symbol = 'paper';

outputResult.innerHTML = 'P:C --> 0:0';
document.getElementById('winningResult').innerHTML = "<br>Winning rounds required: " + gamesLimit;
