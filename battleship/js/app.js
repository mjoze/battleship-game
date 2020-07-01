import "../sass/style.scss";

const ships = [...document.querySelectorAll(".ships")];
ships.forEach((ship) => {
  ship.addEventListener("click", () => {
    console.log(ship.textContent);
  });
});

class Ships {
  constructor(length, boards) {
    this.length = length;
    this.boards = boards;
    this.ship = [];
  }
  shipMaker(player = "red") {
    let number = Math.floor(Math.random() * 100);
    const direction = Math.round(Math.random());
    const shipArr = [];
    let shipCol = 1;
    let shipRow = 10;

    for (let i = 0; i < this.length; i++) {
      if (this.ship.includes(number)) {
        number = Math.floor(Math.random() * 100);
      }
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
        shipArr.push(number + shipCol);
      } else {
        if (number > 80) {
          number -= 20;
        } else if (number > 70) {
          number -= 10;
        }
        shipArr.push(number + shipRow);

        shipRow += 10;
      }
    }
    this.ship.push(shipArr);
    for (let i in shipArr) {
      const a = this.boards[shipArr[i]];
      a.style.backgroundColor = player;
    }
  }
}

const a = new Ships(3, ships);
a.shipMaker();
a.shipMaker();
const b = new Ships(3, ships);
b.shipMaker("green");
b.shipMaker("green");

console.log(a.ship);
