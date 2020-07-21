import "../sass/style.scss";

const exclusionBoard = []


class Game {
  constructor(playerShips, computerShips) {
    this.playerShips = playerShips
    this.computerShips = computerShips
    this.result = {}
  }
  fire(shoot, boards, player) {
    for (const el of player) {
      el.getHurt(shoot, boards)
      this.result[el.player] = el.score
    }

  }
}


class Ship {
  constructor(length, player) {
    this.location = []
    this.hits = []
    this.score = 0
    this.length = length
    this.player = player
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
      if (this.player === 'player') {
        boards[this.location[el]].textContent = "P";
      } else if (this.player === 'computer') {
        boards[this.location[el]].textContent = "C";
      }
      boards[this.location[el]].style.backgroundColor = shipColor;
    }
  }
  getHurt(shoot, boards) {
    if (this.location === this.hits) {
      console.log("sunken ship");
      return
    } else {
      for (const el of this.location) {
        if (el === shoot) {
          this.hits.push(el)
          boards[el].style.backgroundColor = 'gray';
          boards[el].textContent = 'X';
          this.score += 1
          console.log("hit");
        } else {
          console.log("miss");
        }
      }
    }
  }
}



const boards = [...document.querySelectorAll('p')]

const ship1 = new Ship(4, 'player')
ship1.generateNumber(exclusionBoard)
ship1.displayShip(boards, 'red')

const ship2 = new Ship(4, 'player')
ship2.generateNumber(exclusionBoard)
ship2.displayShip(boards, 'red')

const ship3 = new Ship(4, 'player')
ship3.generateNumber(exclusionBoard)
ship3.displayShip(boards, 'red')

const ship4 = new Ship(4, 'computer')
ship4.generateNumber(exclusionBoard)
ship4.displayShip(boards, 'green')

const ship5 = new Ship(4, 'computer')
ship5.generateNumber(exclusionBoard)
ship5.displayShip(boards, 'green')



console.log(ship5.location);
console.log(ship4.location);
console.log(ship3.location);
console.log(ship2.location);
console.log(ship1.location);

const playerShips = [ship1, ship2, ship3]
const computerShips = [ship4, ship5]
const newGame = new Game(playerShips, computerShips)
console.log(newGame);
newGame.fire(20, boards, playerShips)
newGame.fire(40, boards, computerShips)