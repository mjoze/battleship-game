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
  generateNumber(exclusionBoard) {
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
    const drawShip = Math.floor(Math.random() * 10)
    const testShip = []
    for (let i = 0; i < this.length; i++) {
      // change the repetition
      if (direction === 1) {
        const numberRandom = ((10 * drawShip) + number++)
        if (!exclusionBoard.includes(numberRandom)) {
          testShip.push(numberRandom)
          exclusionBoard.push(numberRandom)
        } else {
          return this.generateNumber(exclusionBoard)
        }
      } else {
        const numberRandom = (number += 10);
        if (!exclusionBoard.includes(numberRandom)) {
          testShip.push(numberRandom)
          exclusionBoard.push(numberRandom)
        } else {
          return this.generateNumber(exclusionBoard)
        }
      }
    }
    return this.location = testShip

  }

  displayShip(boards, color) {
    const shipColor = color
    for (const el in this.location) {
      boards[this.location[el]].style.backgroundColor = shipColor;
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

// const ship1 = new Ship(4)
// ship1.generateNumber(exclusionBoard)
// ship1.displayShip(boards, 'black')

// const ship2 = new Ship(4)
// ship2.generateNumber(exclusionBoard)
// ship2.displayShip(boards, 'orange')

// const ship3 = new Ship(4)
// ship3.generateNumber(exclusionBoard)
// ship3.displayShip(boards, 'purple')

// const ship4 = new Ship(4)
// ship4.generateNumber(exclusionBoard)
// ship4.displayShip(boards, 'green')

// const ship5 = new Ship(4)
// ship5.generateNumber(exclusionBoard)
// ship5.displayShip(boards, 'red')

// console.log(ship5.location);
// console.log(ship4.location);
// console.log(ship3.location);
// console.log(ship2.location);
// console.log(ship1.location);