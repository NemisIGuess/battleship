const gameboardFactory = () => {
  class Gameboard {
    constructor() {
      this.ships = [];
      this.board = [];
      this.won = false;
    }

    createBoard() {
      for (let i = 0; i < 100; i++) {
        this.board.push({
          hasShip: false,
          isHit: false,
        });
      }
    }

    receiveAttack(index) {
      this.board[index].isHit = true;
    }

    setShipPosition(index, length, axis) {
      switch (axis) {
        case 'y':
          // Comprueba si la posicion es valida en el eje Y
          if (index + (length - 1) * 10 > 99) {
            return;
          }
          // Cambia la propiedad hasShip del objeto en index del array board para el eje Y
          for (let i = 0; i < length; i++) {
            this.board[index + 10 * i].hasShip = true;
          }
          break;
        case 'x':
          // Comprueba si la posicion es valida en el eje X
          if (
            (index < 9 && index + length - 1 > 9) ||
            (index > 9 && index < 19 && index + length - 1 > 19) ||
            (index > 19 && index < 29 && index + length - 1 > 29) ||
            (index > 29 && index < 39 && index + length - 1 > 39) ||
            (index > 39 && index < 49 && index + length - 1 > 49) ||
            (index > 49 && index < 59 && index + length - 1 > 59) ||
            (index > 59 && index < 69 && index + length - 1 > 69) ||
            (index > 69 && index < 79 && index + length - 1 > 79) ||
            (index > 79 && index < 89 && index + length - 1 > 89) ||
            (index > 89 && index < 99 && index + length - 1 > 99)
          ) {
            return;
          }
          // Cambia la propiedad hasShip del objeto en index del array board para el eje X
          for (let i = 0; i < length; i++) {
            this.board[index + i].hasShip = true;
          }
          break;
        default:
          break;
      }
    }

    setShips(ships) {
      this.ships = [...this.ships, ships];
    }

    hasSomeoneWon() {
      if (this.ships.every((ship) => ship.isSunk === true)) {
        this.won = true;
      }
    }
  }

  return new Gameboard();
};

export default gameboardFactory;
