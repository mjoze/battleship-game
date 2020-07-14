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
    const shipDrawing = []
    const locationShip = []
    const direction = Math.round(Math.random());
    let number = Math.floor(Math.random() * 10);
    if (!exclusionBoard.includes(number)) {
      if (this.length === 4 && number >= 7) {
        number = 7
      }
      if (this.length === 3 && number >= 8) {
        number = 8
      }
      if (this.length === 2 && number >= 9) {
        number = 9
      }
      for (let i = 0; i < this.length; i++) {
        shipDrawing.push(number)
        number++
      }
      if (direction === 1) {
        const numberDirect = Math.floor(Math.random() * 10);
        for (const el of shipDrawing) {
          const shipNumber = numberDirect * 10 + el
          locationShip.push(shipNumber)
          exclusionBoard.push(shipNumber)
        }
      } else {
        for (let i = 0; i < this.length; i++) {
          const shipNumber = number += 10
          locationShip.push(shipNumber)
          exclusionBoard.push(shipNumber)
        }
      }
    }
    this.location = locationShip
  }

  displayShip(playerShips) {}
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



const columns = document.querySelectorAll('.columns')


const ship1 = new Ship(4)
const ship2 = new Ship(4)

ship1.generateShip()
ship2.generateShip()