class Game {
  constructor() {
    this.heartTurn = true;
    this.starTurn = false;
    this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    this.heartMoves = [];
    this.starMoves = [];
    this.playerHeart = new Player({playerID: "heart", token: "Heart", wins: 0});
    this.playerStar = new Player({playerID: "star", token: "Star", wins: 0});

  }

  //playTurn(square) {
    // if (this.heartTurn) {
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






  //}

  checkForWinner() {
    var heartScore = document.querySelector('#heartWins');
    var starScore = document.querySelector('#starWins');
    var referee = document.querySelector('#referee');

    if(this.heartMoves.includes("a1") && this.heartMoves.includes("a2") && this.heartMoves.includes("a3") ||
       this.heartMoves.includes("b1") && this.heartMoves.includes("b2") && this.heartMoves.includes("b3") ||
       this.heartMoves.includes("c1") && this.heartMoves.includes("c2") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("a1") && this.heartMoves.includes("b1") && this.heartMoves.includes("c1") ||
       this.heartMoves.includes("a2") && this.heartMoves.includes("b2") && this.heartMoves.includes("c2") ||
       this.heartMoves.includes("a3") && this.heartMoves.includes("b3") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("a1") && this.heartMoves.includes("b2") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("c1") && this.heartMoves.includes("b2") && this.heartMoves.includes("a3")) {
         this.playerHeart.wins++;
         console.log('Heart player wins!');
         heartScore.innerHTML = `Heart player has ${this.playerHeart.wins} wins`;
         referee.innerHTML = `${this.playerHeart.token} won!`;
         //reset game
         this.heartMoves = [];
         this.starMoves = [];
         this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
       } else if (this.starMoves.includes("a1") && this.starMoves.includes("a2") && this.starMoves.includes("a3") ||
          this.starMoves.includes("b1") && this.starMoves.includes("b2") && this.starMoves.includes("b3") ||
          this.starMoves.includes("c1") && this.starMoves.includes("c2") && this.starMoves.includes("c3") ||
          this.starMoves.includes("a1") && this.starMoves.includes("b1") && this.starMoves.includes("c1") ||
          this.starMoves.includes("a2") && this.starMoves.includes("b2") && this.starMoves.includes("c2") ||
          this.starMoves.includes("a3") && this.starMoves.includes("b3") && this.starMoves.includes("c3") ||
          this.starMoves.includes("a1") && this.starMoves.includes("b2") && this.starMoves.includes("c3") ||
          this.starMoves.includes("c1") && this.starMoves.includes("b2") && this.starMoves.includes("a3")) {
            this.playerStar.wins++;
            console.log('Star player wins');
            referee.innerHTML = `${this.playerStar.token} won!`;
            starScore.innerHTML = `Star player has ${this.playerStar.wins} wins`;
            //reset game
            this.heartMoves = [];
            this.starMoves = [];
            this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
          } else if(this.gameArray.length === 0) {
            console.log('The game is a tie!')
            this.heartMoves = [];
            this.starMoves = [];
            this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
          }
  }
}

  function resetGame() {
    this.heartMoves = [];
    this.starMoves = [];
    this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

  }




// var playerHeart = new Player({playerID: "heart", token: "❤️"});
// console.log(playerHeart);
// var playerStar = new Player({playerID: "star", token: "⭐"});
// console.log(playerStar);
