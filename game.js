class Game {
  constructor(details) {
    this.heartTurn = details.heartTurn || true;
    this.starTurn = details.starTurn || false;
    this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    this.heartMoves = details.heartMoves || [];
    this.starMoves = details.starMoves || [];

  }

  playTurn(square) {
    if (this.heartTurn) {
      for (var i = 0; i < this.gameArray.length; i++) {
        if (this.gameArray.includes(square)) {
          var playersChoosenSqaure = this.gameArray.splice(i , 1);
          this.heartMoves.push(playersChoosenSqaure);
          console.log('Heart squares are', this.heartMoves)
          this.heartTurn = false;
          this.StarTurn = true;
        } else {
          return "Pick an available square Heart Player";
        }
      }
    } else if (this.starTurn) {
        for (var i = 0; i < this.gameArray.length; i++) {
          if (this.gameArray.includes(square)) {
            var playersChoosenSqaure = this.gameArray.splice(i , 1);
            this.starMoves.push(playersChoosenSqaure);
            console.log('Star squares are', this.starMoves)
            this.starTurn = false;
            this.heartTurn = true;
        } else {
          return "Pick an available square Star Player";
        }
      }



    }


  }

  declareWinner() {
    if(this.heartMoves.includes("a1") && this.heartMoves.includes("a2") && this.heartMoves.includes("a3") ||
       this.heartMoves.includes("b1") && this.heartMoves.includes("b2") && this.heartMoves.includes("b3") ||
       this.heartMoves.includes("c1") && this.heartMoves.includes("c2") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("a1") && this.heartMoves.includes("b1") && this.heartMoves.includes("c1") ||
       this.heartMoves.includes("a2") && this.heartMoves.includes("b2") && this.heartMoves.includes("c2") ||
       this.heartMoves.includes("a3") && this.heartMoves.includes("b3") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("a1") && this.heartMoves.includes("b2") && this.heartMoves.includes("c3") ||
       this.heartMoves.includes("c1") && this.heartMoves.includes("b2") && this.heartMoves.includes("a3") {
         playerHeart.wins++;
         console.log('Heart player wins!');
         //(need to send message to h1 that heart wins)
         resetGame();
       } else if (this.starMoves.includes("a1") && this.starMoves.includes("a2") && this.starMoves.includes("a3") ||
          this.starMoves.includes("b1") && this.starMoves.includes("b2") && this.starMoves.includes("b3") ||
          this.starMoves.includes("c1") && this.starMoves.includes("c2") && this.starMoves.includes("c3") ||
          this.starMoves.includes("a1") && this.starMoves.includes("b1") && this.starMoves.includes("c1") ||
          this.starMoves.includes("a2") && this.starMoves.includes("b2") && this.starMoves.includes("c2") ||
          this.starMoves.includes("a3") && this.starMoves.includes("b3") && this.starMoves.includes("c3") ||
          this.starMoves.includes("a1") && this.starMoves.includes("b2") && this.starMoves.includes("c3") ||
          this.starMoves.includes("c1") && this.starMoves.includes("b2") && this.starMoves.includes("a3") {
            playerStar.wins++;
            console.log('Star player wins');
            //(need to send message to h1 that star wins)
            resetGame();
          } else if(this.gameArray === []) {
            console.log('The game is a tie!')
            resetGame();
          }
  }

  resetGame() {
    this.heartMoves = [];
    this.starMoves = [];
    this.GameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

  }


}

var playerHeart = new Player({playerID: "heart", token: "❤️"});
console.log(playerHeart);
var playerStar = new Player({playerID: "star", token: "⭐️"});
console.log(playerStart);




module.exports = Game;
