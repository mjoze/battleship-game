import "../sass/style.scss";


class Board {

    constructor(boardsSize) {

        this.boardsSize = boardsSize
        this.board = []
        this.boards = []
    }

    generateBoard(place) {
        for (let i = 1; i <= this.boardsSize; i++) {
            const div = document.createElement('div')
            div.className = i
            div.textContent = i
            place.appendChild(div)
            this.board.push(i)
        }
        this.boards = [...document.querySelectorAll('div')]

    }
}

class Ships {

    constructor() {
        this.shipsNumber = 0
        this.ships = {

        }
        this.shipNumber = 0

    }
    generateShip(Board) {
        const randomNumber = (Math.floor(Math.random() * Board.board.length) + 1);
        this.ships[this.shipNumber] = randomNumber
        this.shipNumber++
        const filteredBoard = Board.board.filter(element => {
            return element !== randomNumber
        })
        Board.board = filteredBoard
    }
    generateShipOnBoard(Board) {
        for (let i in this.ships) {
            Board.boards[this.ships[i] - 1].style.backgroundColor = 'blue'
        }
    }
}

class Controller {
    constructor() {}
    fire(Board, Ships) {
        Board.boards.forEach(board => board.addEventListener('click', () => {
            for (let i in Ships.ships) {
                console.log(board.className, Ships.ships[i])
                if (board.className == Ships.ships[i]) {
                    console.log("trafione")
                    Ships.ships[i] = ''
                    console.log(Ships.ships)
                }
            }
        }))
    }
}
const gameDiv = document.querySelector('.game')
const game = new Board(30)
const ship = new Ships()
const controller = new Controller()
game.generateBoard(gameDiv)
ship.generateShip(game);


// console.log(game.board)
// console.log(game.ships)
ship.generateShipOnBoard(game)
controller.fire(game, ship)