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
    this.hits = 0
  }
  generateShip() {
    const direction = Math.round(Math.random());
    let number = Math.floor(Math.random() * 10);
    for (let i = 0; i < this.length; i++) {
      if (direction === 1) {
        if (this.length === 4) {}
        if (this.length === 3) {}
        if (this.length === 2) {}
        console.log("rows", number++);
      } else {
        console.log("columns", number);
      }
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