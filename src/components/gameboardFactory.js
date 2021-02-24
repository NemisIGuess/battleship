const gameboardFactory = () => {
  class Gameboard {
    constructor() {
      this.ships = [];
      this.board = [];
    }

    createBoard() {}

    receiveAttack(coordinate) {}

    setShipPosition() {}

    setShips(ships) {
      this.ships = ships;
    }
  }

  return new Gameboard();
};

export default gameboardFactory;
