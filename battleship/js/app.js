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
    if (this.player === "player") {
      Boards.playerShips.push([this.position]);
    } else {
      Boards.compShips.push([this.position]);
    }
  }
}

class Controller {
  firePlayer(Boards, target) {
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
  fireComp(Boards) {
    const target = Math.floor(Math.random() * 100);
    for (const el of Boards.playerShips) {
      for (const i of el) {
        for (const index of i) {
          if (index === target) {
            console.log("hit");
            Boards.boards[target - 1].style.backgroundColor = "black";
          } else {
            console.log("miss");
          }
        }
      }
    }
  }
}

const battle = (Boards, Controller) => {
  console.log("gramy");
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
    Controller.fireComp(Boards);
    game -= 1;
  }
};

const boards = new Boards(".ships");
const s = new Ships(3, boards.boards, [], [], "computer");
const s2 = new Ships(4, boards.boards, [], [], "player");
s.generateShip(boards);
s.displayShip(boards);
s2.generateShip(boards);
s2.displayShip(boards);
const game = new Controller();
game.fireComp(boards);
console.log(boards);

battle(boards, game);
