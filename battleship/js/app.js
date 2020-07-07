import "../sass/style.scss";

class Boards {
  constructor(boards) {
    this.boards = [...document.querySelectorAll(boards)];
    this.shipOnBoards = [];
  }
}

class Ships {
  constructor(length, boards, position, hits) {
    this.length = length;
    this.boards = boards;
    this.position = position;
    this.hits = hits;
  }
  displayShip(Boards) {
    for (const el of this.position) {
      this.boards[el - 1].style.backgroundColor = "pink";
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
  }
}
const boards = new Boards(".ships");
const s1 = new Ships(5, boards.boards, [53, 43], [0, 0]);
s1.generateShip(boards);
s1.displayShip(boards);
console.log(s1);
console.log(boards);
