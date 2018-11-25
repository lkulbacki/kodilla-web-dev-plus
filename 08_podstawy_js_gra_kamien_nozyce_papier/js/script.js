var params = Object;
var elements = Object;

elements.btnNewGame = document.querySelector('#btn-newgame');

elements.outputText = document.getElementById('output');
elements.outputResult = document.getElementById('result');
elements.outputResultModal = document.querySelector('#modal-results');
elements.outputResultModalText = document.querySelector('#modal-results p');

params.resultPlayer = 0;
params.resultComputer = 0;
params.gamesPlayed = 0; // games counter
params.gamesLimit = 5; // initial value of games limit

params.gameOn = true;

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
    elements.outputText.insertAdjacentHTML('afterbegin', (result + ': you played ' + playerSymbol.toUpperCase() + ', computer played ' + computerSymbol.toUpperCase() + '<br>'));
};

var writeToOutput = function (text) {
    elements.outputText.insertAdjacentHTML('afterbegin', text);
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
      params.resultPlayer += 1;
  }
  else if (result === 'YOU LOST') {
      params.resultComputer += 1;
  }
    elements.outputResult.innerHTML = 'P:C --> ' + params.resultPlayer + ':' + params.resultComputer;
};

var playerMove = function(event) {
    if (params.gameOn === true) {
        params.playerSymbol = event.currentTarget.getAttribute('data-move');
        params.computerSymbol = computerMove();
        params.result = getResult(params.playerSymbol, params.computerSymbol);
        console.log("P: " + params.playerSymbol + " | C: " + params.computerSymbol + " | " + params.result);
        writeResultToOutput(params.result, params.playerSymbol, params.computerSymbol);
        increaseCounters(params.result);
        if (params.resultPlayer === params.gamesLimit) {
            writeToOutput("YOU WON THE ENTIRE GAME!!!<br>");
            displayResultModal(params.resultPlayer + ":" + params.resultComputer, "YOU WON THE ENTIRE GAME!!!<br>");
            params.gameOn = false;
        }
        else if (params.resultComputer === params.gamesLimit) {
            writeToOutput("YOU LOST THE ENTIRE GAME!!!<br>");
            displayResultModal(params.resultPlayer + ":" + params.resultComputer, "YOU LOST THE ENTIRE GAME!!!<br>");
            params.gameOn = false;
        }
    }
    else {
        writeToOutput('GAME OVER, press New Game button to begin again<br>');
    }
};

// helper function for initiating a new game
var convertToInteger = function (text) {
    inputNumber = parseInt(text);
    if (typeof(inputNumber) === 'number' && !isNaN(inputNumber)) {
        return inputNumber;
    }
    else {
        alert('Wrong value! Not a number mate.')
    }
};

// function handling initiating a new game
var beginNewGame = function(event) {
    params.gamesLimit = convertToInteger(window.prompt('How many rounds to play?'));
    if (params.gamesLimit !== 'undefined') {
        params.gameOn = true;
        params.gamesPlayed = 0;
        params.resultPlayer = 0;
        params.resultComputer = 0;
        elements.outputText.innerHTML = '';
        elements.outputResult.innerHTML = 'P:C --> 0:0';
        document.getElementById('winningResult').innerHTML = "Winning rounds required: " + params.gamesLimit;
    }
    console.log('games limit:' + params.gamesLimit);
};

var showModalById = function(modalId){
    document.querySelector('#modal-overlay').classList.add('show');
    var targetModal = document.querySelector(modalId);
    targetModal.classList.add('show');
};

var displayResultModal = function (result, text) {
    elements.outputResultModalText.insertAdjacentHTML('afterbegin', (result + " | " + text));
    showModalById('#modal-results');
};

elements.gameButtons = document.querySelectorAll('.buttons--moves .btn');

for(var i=0; i < elements.gameButtons.length; i++){
    elements.gameButtons[i].addEventListener('click', playerMove);
}
elements.btnNewGame.addEventListener('click', beginNewGame);

elements.outputResult.innerHTML = 'P:C --> 0:0';
document.getElementById('winningResult').innerHTML = "<br>Winning rounds required: " + params.gamesLimit;
