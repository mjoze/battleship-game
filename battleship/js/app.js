import "../sass/style.scss";

const columns = document.querySelectorAll('.columns')


class Game {
  constructor(playerShips, computerShips) {
    this.playerShips = playerShips
    this.computerShips = computerShips
    this.result = {}
  }
  fire(shoot, Ship) {
    Ship.getHurt(shoot)
  }
}


class Ship {
  constructor(length) {
    this.length = length
    this.location = []
    this.row = 0
    this.hits = 0
  }
  generateShip() {
    const ship = []
    const direction = Math.round(Math.random());
    let number = Math.floor(Math.random() * 10);
    if (this.length === 4 && number >= 7) {
      number = 7
    }
    for (let i = 0; i < this.length; i++) {
      ship.push(number)
      number++
    }
    if (direction === 1) {
      this.row = Math.floor(Math.random() * 10);
      this.location.push(ship)
      console.log("columns:" + this.location, "row:" + this.row);
    } else {
      this.row = ship
      this.location = Math.floor(Math.random() * 10);
      console.log("column:" + this.row, "rows:" + this.location);
    }
  }
  getHurt(shoot) {
    for (const el of this.location) {
      if (el === shoot) {
        this.hits += 1
        console.log("hit");
      } else {
        console.log("miss");
      }
    }
  }
  isSunk() {
    if (this.hits === this.length) {
      console.log("ship is sunk");
    }
  }
}

const ship1 = new Ship(4)
ship1.generateShip()