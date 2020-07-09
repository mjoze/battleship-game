import "../sass/style.scss";

class Boards {
  constructor(playerShips, compShips) {
    this.shipOnBoards = [];
    this.playerShips = playerShips;
    this.compShips = compShips;
  }
}

class Ships {
  constructor(length, position, hits, player) {
    this.length = length;
    this.position = position;
    this.hits = hits;
    this.player = player;
  }

  displayShip(boards, Boards) {
    let color = "blue";
    if (this.player === "player") {
      color = "red";
    } else {
      color = "pink";
    }
    for (const el of this.position) {
      boards[el - 1].style.backgroundColor = color;
      Boards.shipOnBoards.push(el);
    }
  }
  generateShip(Boards) {
    // const direction = Math.round(Math.random());
    const direction = 1;

    let number = Math.floor(Math.random() * 100);
    let shipCol = 1;
    let shipRow = 10;
    console.log("available");
    for (let i = 0; i < this.length; i++) {
      if (!Boards.shipOnBoards.includes(number)) {
        this.position.push(number);
        if (direction === 1) {
          if (this.length === 4) {
            if (
              number >= 8 ||
              18 ||
              28 ||
              38 ||
              48 ||
              58 ||
              68 ||
              78 ||
              88 ||
              98
            ) {
              number -= shipCol;
            } else {
              number += shipCol;
            }
          }
          if (this.length === 3) {
            if (
              number >= 9 ||
              19 ||
              29 ||
              39 ||
              49 ||
              59 ||
              69 ||
              79 ||
              89 ||
              99
            ) {
              number -= shipCol;
            } else {
              number += shipCol;
            }
          }
          if (this.length === 2) {
            if (
              number === 10 ||
              20 ||
              30 ||
              40 ||
              50 ||
              60 ||
              70 ||
              80 ||
              90 ||
              100
            ) {
              number -= shipCol;
            } else {
              number += shipCol;
            }
          }
        } else {
          number += shipRow;
        }
      } else {
        console.log("error");
      }
    }
  }
}

class Controller {
  firePlayer(Boards, target) {
    for (const el of Boards.compShips) {
      for (const item of el.position) {
        if (target === item) {
          console.log("hit");
          boards[item - 1].style.backgroundColor = "black";
        } else {
          console.log("miss");
        }
      }
    }
  }
  fireComp(Boards, boards) {
    const target = Math.floor(Math.random() * 100);
    for (const el of Boards.playerShips) {
      for (const i of el.position) {
        console.log(i);
        if (i === target) {
          console.log("hit");
          boards[i - 1].style.backgroundColor = "black";
        } else {
          console.log("miss");
        }
      }
    }
  }
}

const battle = (Boards, Controller) => {
  console.log("let's play");
  let game = 1;

  while (game > 0) {
    let target = Math.floor(Math.random() * 100);

    if (Boards.playerShips.length === 0) {
      console.log("comp win");
      return false;
    }
    if (Boards.compShips.length === 0) {
      console.log("player win");
      return false;
    }
    Controller.firePlayer(Boards, target);
    console.log(target);
    Controller.fireComp(Boards, boards);
    game -= 1;
  }
};
const boards = [...document.querySelectorAll(".ships")];
const s = new Ships(3, [], [], "computer");
const s1 = new Ships(3, [], [], "computer");

const s2 = new Ships(4, [], [], "player");
const s3 = new Ships(4, [], [], "player");

const board = new Boards([s2, s3], [s, s1]);

s.generateShip(board);
s.displayShip(boards, board);
s1.generateShip(board);
s1.displayShip(boards, board);

s2.generateShip(board);
s2.displayShip(boards, board);
const game = new Controller();

battle(board, game);
console.log(board);
