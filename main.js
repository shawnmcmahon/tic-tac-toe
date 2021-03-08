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


//eventListeners
a1.addEventListener('click', playerTakeSquare);
a2.addEventListener('click', playerTakeSquare);
a3.addEventListener('click', playerTakeSquare);
b1.addEventListener('click', playerTakeSquare);
b2.addEventListener('click', playerTakeSquare);
b3.addEventListener('click', playerTakeSquare);
c1.addEventListener('click', playerTakeSquare);
c2.addEventListener('click', playerTakeSquare);
c3.addEventListener('click', playerTakeSquare);


//variables

var newGame = new Game();


//functions

function playerTakeSquare(square) {
  if (this.heartTurn) {
  //   for (var i = 0; i < this.gameArray.length; i++) {
  //     if (this.gameArray.includes(square)) {
  //       var playersChoosenSquare = this.gameArray.splice(i , 1);
  //       this.heartMoves.push(playersChoosenSquare);
  //       console.log('Heart squares are', this.heartMoves)
  //       this.heartTurn = false;
  //       this.StarTurn = true;
  //     } else {
  //       return "Pick an available square Heart Player";
  //     }
  //   }
  // } else if (this.starTurn) {
  //     for (var i = 0; i < this.gameArray.length; i++) {
  //       if (this.gameArray.includes(square)) {
  //         var playersChoosenSquare = this.gameArray.splice(i , 1);
  //         this.starMoves.push(playersChoosenSquare);
  //         console.log('Star squares are', this.starMoves)
  //         this.starTurn = false;
  //         this.heartTurn = true;
  //     } else {
  //       return "Pick an available square Star Player";
  //     }
  //   }


  checkForWinner();



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


}
