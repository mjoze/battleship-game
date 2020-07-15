import "../sass/style.scss";

const exclusionBoard = []


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
    this.location = []
    this.length = length
  }
  generateShip() {
    const direction = Math.round(Math.random());
    let number = Math.floor(Math.random() * 10);
    if (this.length === 4 && number >= 6) {
      number = 6
    }
    if (this.length === 3 && number >= 7) {
      number = 7
    }
    if (this.length === 2 && number >= 8) {
      number = 8
    }
    if (direction === 1) {}
  }

  displayShip(boards) {
    for (const el in this.location) {
      boards[this.location[el]].style.backgroundColor = 'red';
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



const boards = [...document.querySelectorAll('p')]
const ship1 = new Ship(4)
const ship2 = new Ship(3)
const ship3 = new Ship(2)
ship1.generateShip()
ship1.displayShip(boards)
ship2.generateShip()
ship2.displayShip(boards)
ship3.generateShip()
ship3.displayShip(boards)