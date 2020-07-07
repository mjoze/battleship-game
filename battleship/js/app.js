import "../sass/style.scss";

class Boards {
  constructor(boards) {
    this.boards = [...document.querySelectorAll(boards)];
    this.shipOnBoards = [];
    this.playerShips = [];
    this.compShips = [];
  }
}

class Ships {
  constructor(length, boards, position, hits, player) {
    this.length = length;
    this.boards = boards;
    this.position = position;
    this.hits = hits;
    this.player = player;
  }

  displayShip(Boards) {
    let color = "blue";
    for (const el of this.position) {
      if (this.player === "player") {
        color = "red";
      } else {
        color = "pink";
      }
      this.boards[el - 1].style.backgroundColor = color;
      Boards.shipOnBoards.push(el);
    }
  }
  generateShip(Boards) {
    let number = Math.floor(Math.random() * 100);
    const direction = Math.round(Math.random());
    let shipCol = 1;
    let shipRow = 10;
    if (!Boards.shipOnBoards.includes(number)) {
      console.log("available");
      for (let i = 0; i < this.length; i++) {
        if (direction === 1) {
          if (number === (10 || 20 || 30 || 40 || 50 || 60 || 70 || 80 || 90)) {
            shipCol += 10;
          } else if (
            number + 3 ===
            (10 || 20 || 30 || 40 || 50 || 60 || 70 || 80 || 90)
          ) {
          } else {
            shipCol += 1;
          }
          this.position.push(number + shipCol);
        } else {
          if (number > 80) {
            number -= 20;
          } else if (number > 70) {
            number -= 10;
          }
          this.position.push(number + shipRow);

          shipRow += 10;
        }
      }
    } else {
      console.log("error");
    }
    if (this.player === "player") {
      Boards.playerShips.push([this.position]);
    } else {
      Boards.compShips.push([this.position]);
    }
  }
}

class Controller {
  // constructor() {}
  fire(Boards, target) {
    for (const el of Boards.compShips) {
      for (const i of el) {
        for (const index of i) {
          if (index === target) {
            console.log("hit");
          } else {
            console.log("miss");
          }
        }
      }
    }
  }
}
const boards = new Boards(".ships");
const s = new Ships(3, boards.boards, [], [], "computer");

const s2 = new Ships(4, boards.boards, [], [], "player");

s.generateShip(boards);

const game = new Controller();

game.fire(boards, 33);
