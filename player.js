

class Player {
  constructor(details) {
    this.playerID = details.playerID;
    this.token = details.token;
    this.wins = details.wins || 0;
  }

  saveWinsToStorage() {
    //var stringOfPlayer = JSON.stringify(Player);
    localStorage.setItem(this.playerID, this.wins);

  }

  retrieveWinsFromStorage() {
    var retrieveWins = localStorage.getItem(this.playerID, this.wins);
  //  console.log(retrieveWinsFromStorage);
    return retrieveWins;
  }
}
