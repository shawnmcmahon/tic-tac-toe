//querySelectors
var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');
var gameBoard = document.querySelector('#gameBoard');
var heartScore = document.querySelector('#heartWins');
var starScore = document.querySelector('#starWins');
var referee = document.querySelector('#referee');
//variables
var newGame = new Game({heartTurn: true, starTurn: false,
                        gameArray: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
                        heartMoves:[], starMoves:[]});

//eventListeners
gameBoard.addEventListener('click', playerTakeSquare);
window.addEventListener('load', retrieveWins);

//functions
function playerTakeSquare(event, square) {
  var square = event.target.id;
  renderGameBoard();
  updateReferee();
  if (newGame.heartTurn && newGame.gameArray.includes(square)) {
    var selectedSquareIndex = newGame.gameArray.indexOf(square);
    newGame.gameArray.splice(selectedSquareIndex, 1);
    newGame.heartMoves.push(square);
    document.getElementById(square).innerText = `${newGame.playerHeart.token}`;
    newGame.checkForWinner();
    newGame.heartTurn = false;
    newGame.starTurn = true;
  } else if(newGame.starTurn && newGame.gameArray.includes(square)) {
    var selectedSquareIndex = newGame.gameArray.indexOf(square);
    newGame.gameArray.splice(selectedSquareIndex, 1);
    newGame.starMoves.push(square);
    document.getElementById(square).innerText = `${newGame.playerStar.token}`;
    newGame.checkForWinner();
    newGame.starTurn = false;
    newGame.heartTurn = true;
  } else if (!newGame.gameArray.includes(square)) {
    return 'please pick an available square';
  }

  // if (newGame.heartWinDeclared) {
  //  referee.innerText = `${newGame.playerHeart.token} won!`;
  //  newGame.resetGame();
  // } else if (newGame.starWinDeclared) {
  //    referee.innerText = `${newGame.playerStar.token} won!`;
  //    newGame.resetGame();
  // } else if (!newGame.gameArray && !newGame.heartWinDeclared && !newGame.starWinDeclared){
  //   newGame.resetGame();
  //   referee.innerText = "It's a tie!";
  //   //newGame.resetGame();
  // }

  declareResult();
  retrieveWins();

}

function retrieveWins() {
  var savedHeartWins = newGame.playerHeart.retrieveWinsFromStorage();
  var savedStarWins = newGame.playerStar.retrieveWinsFromStorage();

  newGame.playerHeart.wins = savedHeartWins;
  newGame.playerStar.wins = savedStarWins;

  heartScore.innerText = `${newGame.playerHeart.wins} wins`;
  starScore.innerText = `${newGame.playerStar.wins} wins`;

  if(newGame.playerHeart.wins === null) {
    heartScore.innerText = `0 wins`;
  }
  if (newGame.playerStar.wins === null) {
    starScore.innerText = `0 wins`;
  }
 }

 function renderGameBoard() {
   checkSpaceValue(a1, "a1");
   checkSpaceValue(a2, "a2");
   checkSpaceValue(a3, "a3");
   checkSpaceValue(b1, "b1");
   checkSpaceValue(b2, "b2");
   checkSpaceValue(b3, "b3");
   checkSpaceValue(c1, "c1");
   checkSpaceValue(c2, "c2");
   checkSpaceValue(c3, "c3");
 }

 function checkSpaceValue(space, id) {
   space.innerText = newGame.playerStar.token;
   if (newGame.gameArray.includes(id)) {
     space.innerText = "";
   } else if (newGame.heartMoves.includes(id)) {
     space.innerText = newGame.playerHeart.token;
   } else if (newGame.starMoves.includes(id)) {
     space.innerText = newGame.playerStar.token;
   }
 }

function updateReferee() {
  if(!newGame.gameArray && !newGame.heartWinDeclared && !newGame.starWinDeclared) {
    referee.innerText = `It's a tie!`;
  } else if(newGame.heartTurn && !newGame.heartWinDeclared && !newGame.starWinDeclared) {
    console.log("heart");
    referee.innerText = `It's ${newGame.playerStar.token}'s turn`;
  } else if(newGame.starTurn && !newGame.heartWinDeclared && !newGame.starWinDeclared) {
    referee.innerText = `It's ${newGame.playerHeart.token}'s turn`;
    console.log("star");
  }
}

function declareResult() {
  if (newGame.heartWinDeclared) {
   referee.innerText = `${newGame.playerHeart.token} won!`;
   newGame.resetGame();
  } else if (newGame.starWinDeclared) {
     referee.innerText = `${newGame.playerStar.token} won!`;
     newGame.resetGame();
  } else if (newGame.gameArray.length === 0){
    newGame.resetGame();
    referee.innerText = "It's a tie!";
    //newGame.resetGame();
  }
}
