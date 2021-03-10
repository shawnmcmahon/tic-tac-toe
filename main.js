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



//eventListeners

gameBoard.addEventListener('click', playerTakeSquare);

window.addEventListener('load', retrieveWins);


//variables

var newGame = new Game({heartTurn: true, starTurn: false,
                        gameArray: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
                        heartMoves:[], starMoves:[]});


//functions

function playerTakeSquare(event, square) {

  var square = event.target.id;


  if(newGame.heartTurn && !newGame.heartWinDeclared && !newGame.starWinDeclared) {
    referee.innerText = `It's ${newGame.playerHeart.token}'s turn`;
  } else if(newGame.starTurn && !newGame.heartWinDeclared && !newGame.starWinDeclared) {
    referee.innerText = `It's ${newGame.playerStar.token}'s turn`;
  }


  //var square = event.target.closest('.button');
  // use index of to locate the square in the gameArray
   if (newGame.heartTurn && newGame.gameArray.includes(square)) {
    var selectedSquareIndex = newGame.gameArray.indexOf(square);
  //using indexOF splice at position index
    newGame.gameArray.splice(selectedSquareIndex, 1);
    //console.log('game array', newGame.gameArray);
  //push b2 into heart/star array
    newGame.heartMoves.push(square);
  //change button style to player style
    document.getElementById(square).innerText = `${newGame.playerHeart.token}`;

  //check for a win using our checkForWinner function;
    newGame.checkForWinner();

    //  if (newGame.heartWinDeclared) {
    //   referee.innerText = `${newGame.playerHeart.token} won!`;
    //   newGame.resetGame();
    // }
  //switch turns
    newGame.heartTurn = false;
    newGame.starTurn = true;
  } else if(newGame.starTurn && newGame.gameArray.includes(square)) {
    var selectedSquareIndex = newGame.gameArray.indexOf(square);
  //using indexOF splice at position index
    newGame.gameArray.splice(selectedSquareIndex, 1);
  //push b2 into heart/star array
    newGame.starMoves.push(square);
    //change button style to player style
    document.getElementById(square).innerText = `${newGame.playerStar.token}`;
    //update the dom to reflect the data model
    //renderGameBoard();
  //check for a win using our checkForWinner function;
    newGame.checkForWinner();
    // if (newGame.starWinDeclared) {
    //   referee.innerText = `${newGame.playerStar.token} won!`;
    //   newGame.resetGame();
    // }
  //switch turns
    newGame.starTurn = false;
    newGame.heartTurn = true;
  } else if (!newGame.gameArray.includes(square)) {
    console.log('please pick an available square');
    return 'please pick an available square';
  }

  if (newGame.heartWinDeclared) {
   referee.innerText = `${newGame.playerHeart.token} won!`;
   newGame.resetGame();
  } else if (newGame.starWinDeclared) {
     referee.innerText = `${newGame.playerStar.token} won!`;
     newGame.resetGame();
  }



  renderGameBoard();

}

function retrieveWins() {
  var savedHeartWins = newGame.playerHeart.retrieveWinsFromStorage();
  var savedStarWins = newGame.playerStar.retrieveWinsFromStorage();
  console.log('saved heart wins', savedHeartWins);
  console.log('saved star wins', savedStarWins);

  newGame.playerHeart.wins = savedHeartWins;
  newGame.playerStar.wins = savedStarWins;

  heartScore.innerText = `${newGame.playerHeart.token} ${newGame.playerHeart.wins} wins`;
  starScore.innerText = `${newGame.playerStar.token} ${newGame.playerStar.wins} wins`;
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
   if (newGame.gameArray.includes(id)) {
     space.innerText = "";
   } else if (newGame.heartMoves.includes(id)) {
     space.innerText = newGame.playerHeart.token;
   } else if (newGame.starMoves.includes(id)) {
     space.innerText = newGame.playerStar.token;
   }
 }
