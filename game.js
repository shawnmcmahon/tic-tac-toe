class Game {
  constructor(details) {
    this.heartTurn = details.heartTurn;
    this.starWins = details.starWins;
    this.heartWins = details.heartWins || 0;
    this.starWins = details.starWins || 0;
    this.heartMoves = details.heartMoves || [];
    this.starMoves = details.starMoves || [];

  }

  switchTurn() {

  }

  declareWinner() {
    if(heartMoves.includes("a1") && heartMoves.includes("a2") && heartMoves.includes("a3") ||
       heartMoves.includes("b1") && heartMoves.includes("b2") && heartMoves.includes("b3") ||
       heartMoves.includes("c1") && heartMoves.includes("c2") && heartMoves.includes("c3") ||
       heartMoves.includes("a1") && heartMoves.includes("b1") && heartMoves.includes("c1") ||
       heartMoves.includes("a2") && heartMoves.includes("b2") && heartMoves.includes("c2") ||
       heartMoves.includes("a3") && heartMoves.includes("b3") && heartMoves.includes("c3") ||
       heartMoves.includes("a1") && heartMoves.includes("b2") && heartMoves.includes("c3") ||
       heartMoves.includes("c1") && heartMoves.includes("b2") && heartMoves.includes("a3") {
         this.heartWins++;
         //(need to send message to h1 that heart wins)
       } else if (starMoves.includes("a1") && starMoves.includes("a2") && starMoves.includes("a3") ||
          starMoves.includes("b1") && starMoves.includes("b2") && starMoves.includes("b3") ||
          starMoves.includes("c1") && starMoves.includes("c2") && starMoves.includes("c3") ||
          starMoves.includes("a1") && starMoves.includes("b1") && starMoves.includes("c1") ||
          starMoves.includes("a2") && starMoves.includes("b2") && starMoves.includes("c2") ||
          starMoves.includes("a3") && starMoves.includes("b3") && starMoves.includes("c3") ||
          starMoves.includes("a1") && starMoves.includes("b2") && starMoves.includes("c3") ||
          starMoves.includes("c1") && starMoves.includes("b2") && starMoves.includes("a3") {
            this.starWins++;
            //(need to send message to h1 that star wins)
          }
  }

  resetGame() {
    this.heartMoves = [];
    this.starMoves = [];

    //Need to reset the startofGameArray


  }


}

var playerHeart = new Player({"heart","heart-img"});
console.log(playerHeart);
var playerStar = new Player({"star","star-img"});
console.log(playerStart);





module.exports = Game;
