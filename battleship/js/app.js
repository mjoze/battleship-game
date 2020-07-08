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
    const direction = Math.round(Math.random());
    let number = Math.floor(Math.random() * 100);
    let shipCol = 1;
    let shipRow = 10;
    console.log("available");
    for (let i = 0; i < this.length; i++) {
      if (!Boards.shipOnBoards.includes(number)) {
        this.position.push(number);
        if (direction === 1) {
          number += shipCol;
        } else {
          if (number > 90) {
            number -= shipCol;
          } else {
            number += shipRow;
          }
        }
      } else {
        console.log("error");
      }
    }
    // if (this.player === "player") {
    //   Boards.playerShips.push([this.position]);
    // } else {
    //   Boards.compShips.push([this.position]);
    // }
  }
}

class Controller {
  firePlayer(Boards, target) {
    // for (const el of Boards.compShips) {
    //   for (const i of el) {
    //     for (const index of i) {
    //       if (index === target) {
    //         console.log("hit");
    //       } else {
    //         console.log("miss");
    //       }
    //     }
    //   }
    // }
  }
  fireComp(Boards, boards) {
    const target = Math.floor(Math.random() * 100);
    // for (const el of Boards.playerShips) {
    //   for (const i of el) {
    //     for (const index of i) {
    //       if (index === target) {
    //         console.log("hit");
    //         boards[target - 1].style.backgroundColor = "black";
    //       } else {
    //         console.log("miss");
    //       }
    //     }
    //   }
    // }
  }
}

const battle = (Boards, Controller) => {
  console.log("let's play");
  let game = 5;

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
const s2 = new Ships(4, [], [], "player");

const board = new Boards([s], [s2]);

s.generateShip(board);
s.displayShip(boards, board);
s2.generateShip(board);
s2.displayShip(boards, board);
const game = new Controller();

battle(board, game);
