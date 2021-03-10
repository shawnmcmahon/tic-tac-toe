class Game {
  constructor() {
    this.heartTurn = true;
    this.starTurn = false;
    this.gameArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    this.heartMoves = [];
    this.starMoves = [];
    this.playerHeart = new Player({playerID: 'heart', token: '❤️', wins: 0});
    this.playerStar = new Player({playerID: 'star', token: '⭐', wins: 0});
    this.heartWinDeclared = false;
    this.starWinDeclared = false;
  }

  checkForWinner() {
    if (this.heartMoves.includes('a1') && this.heartMoves.includes('a2') && this.heartMoves.includes('a3') ||
       this.heartMoves.includes('b1') && this.heartMoves.includes('b2') && this.heartMoves.includes('b3') ||
       this.heartMoves.includes('c1') && this.heartMoves.includes('c2') && this.heartMoves.includes('c3') ||
       this.heartMoves.includes('a1') && this.heartMoves.includes('b1') && this.heartMoves.includes('c1') ||
       this.heartMoves.includes('a2') && this.heartMoves.includes('b2') && this.heartMoves.includes('c2') ||
       this.heartMoves.includes('a3') && this.heartMoves.includes('b3') && this.heartMoves.includes('c3') ||
       this.heartMoves.includes('a1') && this.heartMoves.includes('b2') && this.heartMoves.includes('c3') ||
       this.heartMoves.includes('c1') && this.heartMoves.includes('b2') && this.heartMoves.includes('a3')) {
       this.playerHeart.wins++;
       this.playerHeart.saveWinsToStorage();
       this.heartWinDeclared = true;
     } else if (this.starMoves.includes('a1') && this.starMoves.includes('a2') && this.starMoves.includes('a3') ||
       this.starMoves.includes('b1') && this.starMoves.includes('b2') && this.starMoves.includes('b3') ||
       this.starMoves.includes('c1') && this.starMoves.includes('c2') && this.starMoves.includes('c3') ||
       this.starMoves.includes('a1') && this.starMoves.includes('b1') && this.starMoves.includes('c1') ||
       this.starMoves.includes('a2') && this.starMoves.includes('b2') && this.starMoves.includes('c2') ||
       this.starMoves.includes('a3') && this.starMoves.includes('b3') && this.starMoves.includes('c3') ||
       this.starMoves.includes('a1') && this.starMoves.includes('b2') && this.starMoves.includes('c3') ||
       this.starMoves.includes('c1') && this.starMoves.includes('b2') && this.starMoves.includes('a3')) {
       this.playerStar.wins++;
       this.playerStar.saveWinsToStorage();
       this.starWinDeclared = true;
  }

}

  resetGame() {
    this.heartMoves = [];
    this.starMoves = [];
    this.gameArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    this.heartWinDeclared = false;
    this.starWinDeclared = false;
  }

}
