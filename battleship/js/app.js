import "../sass/style.scss";


// game
// ships in the game
// player's ships
// computer ships
class Game {
  constructor(playerShips, computerShips) {
    this.ships = []
    this.playerShips = playerShips
    this.computerShips = computerShips
  }
  addShips() {
    this.ships = [this.playerShips, this.computerShips]
  }
}
// ship
// location
// hits
class Ship {
  constructor(length) {
    this.length = length
    this.location = []
    this.hits = 0
  }
}
// controller
// result
// fire
class controller {
  constructor() {
    this.result = {}

  }
  fire() {}

}