class Game {
  constructor(details) {
    this.heartTurn = details.heartTurn;
    this.starWins = details.starWins;
    this.heartWins = details.heartWins || 0;
    this.starWins = details.starWins || 0;
    this.heartMoves = details.heartMoves || [];
    this.starMoves = details.starWins || [];

  }

  switchTurn() {

  }

  declareWinner() {


    //if condition to clear draw
  }

  resetGame() {
    
  }


}

var playerHeart = new Player({"heart","heart-img"});
console.log(playerHeart);
var playerStart = new Player({"start","star-img"});
console.log(playerStart);





module.exports = Game;
