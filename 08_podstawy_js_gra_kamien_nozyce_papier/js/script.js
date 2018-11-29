'use strict';
(function(window){

var params = {
    resultPlayer: 0, // player game score
    resultComputer: 0, // computer game score
    gamesPlayed: 0, // finished rounds/games counter
    gamesLimit: 2, // initial value of rounds/games limit
    playerName: 'Player', // initial value of player name
    gameOn: true, // parameter indicating if game is active (i.e. not finished)
    progress: [] // array storing history of rounds
};

var elements = {};

elements.btnNewGame = document.querySelector('#btn-newgame');
elements.btnNewGameStart = document.querySelector('#btn-newgame-start');
elements.inputPlayerName = document.querySelector('#player-name');
elements.inputGamesNumber = document.querySelector('#games-number');

elements.outputText = document.getElementById('output');
elements.outputResult = document.getElementById('result');
elements.outputResultModal = document.querySelector('#modal-results');
elements.outputResultModalText = document.querySelector('#modal-results p');

// function simulating computer choice
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
    elements.outputText.insertAdjacentHTML('afterbegin', (result + ': ' + params.playerName + ' played '
        + playerSymbol.toUpperCase() + ', computer played ' + computerSymbol.toUpperCase() + '<br>'));
};

var writeToOutput = function (text) {
    elements.outputText.insertAdjacentHTML('afterbegin', text);
};

// function comparing player and computer move and returning round result
var getResult = function (playerSymbol, computerSymbol) {
    if (playerSymbol === computerSymbol) {
        return 'DRAW';
    }
    else if ((playerSymbol === 'paper' && computerSymbol === 'rock') ||
        (playerSymbol === 'rock' && computerSymbol === 'scissors') ||
        (playerSymbol === 'scissors' && computerSymbol === 'paper')) {
        return 'WON';
    }
    else return 'LOST';
};

// helper function increasing game results counters
var increaseCounters = function (result) {
  if (result === 'WON') {
      params.resultPlayer += 1;
  }
  else if (result === 'LOST') {
      params.resultComputer += 1;
  }
    elements.outputResult.innerHTML = params.playerName + ':Computer | ' + params.resultPlayer + ':'
        + params.resultComputer;
};

// function executed to simulate player move and log all proceedings; bind main game logic
var playerMove = function(event) {
    if (params.gameOn === true) {
        params.playerSymbol = event.currentTarget.getAttribute('data-move');
        params.computerSymbol = computerMove();
        params.result = getResult(params.playerSymbol, params.computerSymbol);
        params.gamesPlayed++;
        console.log(params.playerName + ": " + params.playerSymbol + " | Computer: " + params.computerSymbol + " | "
            + params.result);
        writeResultToOutput(params.result, params.playerSymbol, params.computerSymbol);
        increaseCounters(params.result);
        params.progress.push({
            gamesPlayed: params.gamesPlayed,
            playerSymbol: params.playerSymbol,
            computerSymbol: params.computerSymbol,
            roundResult: params.result,
            gameResult: params.resultPlayer + ":" + params.resultComputer
        });
        if (params.resultPlayer === params.gamesLimit) {
            writeToOutput('<span class="green">' + params.playerName + ' WON THE ENTIRE GAME!!!<br></span>');
            displayResultModal(params.resultPlayer + ":" + params.resultComputer,
                '<span class="green">YOU WON THE ENTIRE GAME!!!<br></span>', constructProgressTable());
            params.gameOn = false;
        }
        else if (params.resultComputer === params.gamesLimit) {
            writeToOutput('<span class="red">' + params.playerName + ' LOST THE ENTIRE GAME!!!<br></span>');
            displayResultModal(params.resultPlayer + ":" + params.resultComputer,
                '<span class="red">YOU LOST THE ENTIRE GAME!!!<br></span>', constructProgressTable());
            params.gameOn = false;
        }
    }
    else {
        writeToOutput('<span class="red">GAME OVER</span>, press New Game button to begin again<br>');
    }
};

// HTML code generation with game progress using params.progress object
var constructProgressTable = function () {
  var progressTableHtml = '<div class="table-wrapper"><div class="table-row table-header"><div>#</div>' +
      '<div>Player</div><div>Computer</div><div>Result</div><div>Game result</div></div>';
  for(var i=0; i<params.progress.length; i++){
      progressTableHtml = progressTableHtml + '<div class="table-row"><div>' +
          params.progress[i].gamesPlayed + '</div><div>' +
          params.progress[i].playerSymbol + '</div><div>' +
          params.progress[i].computerSymbol + '</div><div>' +
          params.progress[i].roundResult + '</div><div>' +
          params.progress[i].gameResult + '</div></div>';
  }
    progressTableHtml = progressTableHtml + '</div>';
  return progressTableHtml;
};

// helper function for initiating a new game - converting input value to integer
var convertToInteger = function (text) {
    var inputNumber = parseInt(text);
    if (typeof(inputNumber) === 'number' && !isNaN(inputNumber)) {
        return inputNumber;
    }
    else {
        alert('Wrong value! Not a proper games number. Setting 5 rounds.');
        return 5;
    }
};

// function handling initiating a new game
// actions like resetting counters, outputs, setting up new parameters
var beginNewGame = function(event) {
    event.preventDefault();
    params.gamesLimit = convertToInteger(elements.inputGamesNumber.value);
    if (elements.inputPlayerName.value !== 'undefined' && elements.inputPlayerName.value !== '') {
        params.playerName = elements.inputPlayerName.value;
    } else {
        params.playerName = 'Player';
    }
    if (params.gamesLimit !== 'undefined') {
        params.gameOn = true;
        params.gamesPlayed = 0;
        params.resultPlayer = 0;
        params.resultComputer = 0;
        elements.outputText.innerHTML = '';
        elements.outputResult.innerHTML = params.playerName + ':Computer | 0:0';
        document.querySelector("#modal-results .content").innerHTML = "<p></p>";
        elements.outputResultModalText = document.querySelector('#modal-results p');
        document.getElementById('winningResult').innerHTML = "Winning rounds required: " + params.gamesLimit;
        params.progress = [];
    }
    window.modals.closeModalById('#modal-newgame');
};


var displayResultModal = function (result, text, progressTable) {
    elements.outputResultModalText.insertAdjacentHTML('afterbegin', (result + " | " + text));
    elements.outputResultModalText.insertAdjacentHTML('afterend', progressTable);
    window.modals.showModalById('#modal-results');
};

elements.gameButtons = document.querySelectorAll('.buttons--moves .btn');

for(var i=0; i < elements.gameButtons.length; i++){
    elements.gameButtons[i].addEventListener('click', playerMove);
}

elements.btnNewGame.addEventListener('click', window.modals.showModal);
elements.btnNewGameStart.addEventListener('click', beginNewGame);

elements.outputResult.innerHTML = params.playerName + ':Computer | 0:0';
document.getElementById('winningResult').innerHTML = "<br>Winning rounds required: " + params.gamesLimit;

})(window);
