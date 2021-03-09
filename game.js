class Game {
  constructor() {
    this.heartTurn = true;
    this.starTurn = false;
    this.gameArray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    this.heartMoves = [];
    this.starMoves = [];
    this.playerHeart = new Player({playerID: "heart", token: 	"hhh", wins: 0});
    this.playerStar = new Player({playerID: "star", token: "sss", wins: 0});

  }

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
         //playerHeart.saveToStorage();
         console.log('Heart player wins!');
         //all dom manipulation has to be inside main.js
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
            //playerStar.saveToStorage();
            console.log('Star player wins');
            //all dom manipulation has to be inside main.js
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
