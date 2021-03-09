var newWinArray = [];

class Player {
  constructor(details) {
    this.playerID = details.playerID;
    this.token = details.token;
    this.wins = details.wins || 0;
  }

  saveWinstoStore() {
    localStorage.setItem(this.playerID, this.wins);
  }

  retrieveWinsFromStorage() {
    var retrieveWins = localStorage.getItem(this.playerID);
    return retrieveWins;
  }
}
