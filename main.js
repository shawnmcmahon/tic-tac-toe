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


//variables

var newGame = new Game({heartTurn: true, starTurn: false,
                        gameArray: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],
                        heartMoves:[], starMoves:[]});


//functions

function playerTakeSquare(event, square) {
  console.log(event.target);
  var square = event.target.id;
  console.log(square);



  if(newGame.heartTurn) {
    referee.innerText = `It's ${newGame.playerHeart.token}'s turn`;
  } else if(newGame.starTurn) {
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

  //changer innerText if taken square


  //check for a win using our checkForWinner function;
  newGame.checkForWinner();

  //switch turns
    newGame.heartTurn = false;
    newGame.starTurn = true;


  } else if(newGame.starTurn && newGame.gameArray.includes(square)) {
    //console.log("hey");
    var selectedSquareIndex = newGame.gameArray.indexOf(square);
    //console.log('selectedSquareIndex', selectedSquareIndex);


  //using indexOF splice at position index
    newGame.gameArray.splice(selectedSquareIndex, 1);
    //console.log('game array', newGame.gameArray);

  //push b2 into heart/star array
    newGame.starMoves.push(square);
    //console.log('starMoves', newGame.starMoves);

    //change button style to player style
    document.getElementById(square).innerText = `${newGame.playerStar.token}`;


  //check for a win using our checkForWinner function;
    newGame.checkForWinner();

    //changer innerText if taken square


  //switch turns
    newGame.starTurn = false;
    newGame.heartTurn = true;
  } else if (!newGame.gameArray.includes(square)) {
    console.log('please pick an available square');
    return 'please pick an available square';
  }

}
