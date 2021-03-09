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
  //var square = event.target.closest('.button');
  // use index of to locate the square in the gameArray
   if (newGame.heartTurn && newGame.gameArray.includes(square)) {
    var selectedSquareIndex = newGame.gameArray.indexOf(square);



  //using indexOF splice at position index
    newGame.gameArray.splice(selectedSquareIndex, 1);
    //console.log('game array', newGame.gameArray);

  //push b2 into heart/star array
    newGame.heartMoves.push(square);

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




//   if (newGame.heartTurn) {
//     for (var i = 0; i < newGame.gameArray.length; i++) {
//       if (newGame.gameArray[i] === square) {
//         var playersChoosenSquare = newGame.gameArray.splice(i , 1);
//         console.log(playersChoosenSquare);
//         var stringPlayersChoice = playersChoosenSquare.toString();
//         newGame.heartMoves.push(stringPlayersChoice);
//         //square.innerText = "HHH";
//         console.log('Heart squares are', newGame.heartMoves)
//         newGame.heartTurn = false;
//         newGame.starTurn = true;
//       } else {
//         return "Pick an available square Heart Player";
//       }
//     }
//   } else if (newGame.starTurn) {
//       for (var i = 0; i < newGame.gameArray.length; i++) {
//         if (newGame.gameArray.includes(square)) {
//           var playersChoosenSquare = newGame.gameArray.splice(i , 1);
//           var stringPlayersChoice = playersChoosenSquare.toString();
//           newGame.starMoves.push(stringPlayersChoice);
//           console.log('Star squares are', newGame.starMoves)
//           //square.innerText = "SSS";
//           newGame.starTurn = false;
//           newGame.heartTurn = true;
//       } else {
//         return "Pick an available square Star Player";
//       }
//     }
//
//
//
//
// }
//   //checkForWinner();
// }

  //event target.
  // var clickedSquare = event.target.closest('.button');
  // playTurn(clickedSquare);
  // if (game.heartTurn) {
  //   clickedSquare.innerText = "❤️";
  // } else if (game.starTurn) {
  //   clickedSquare.innerText = "⭐️";
  // }
  // declareWinner();

//run win check after the turn.
