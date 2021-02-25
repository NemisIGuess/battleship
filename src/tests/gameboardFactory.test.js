import Gameboard from '../components/gameboardFactory';
import Ship from '../components/shipFactory';

describe('Creates a board', () => {
  let testBoard;
  beforeEach(() => {
    testBoard = new Gameboard();
  });

  test('returns an empty board', () => {
    expect(testBoard.board).toEqual([]);
  });

  test('create a 10x10 array of objects', () => {
    testBoard.createBoard();
    expect(testBoard.board.length).toBe(100);
    expect(testBoard.board[37].hasShip).toBe(false);
    expect(testBoard.board[37].isHit).toBe(false);
  });
});

describe('Board methods work', () => {
  let testBoard;

  beforeEach(() => {
    testBoard = new Gameboard();
  });

  test('can place a ship with index', () => {
    testBoard.createBoard();
    testBoard.setShipPosition(16, 3, 'y');
    expect(testBoard.board[16].hasShip).toBe(true);
  });

  test('can receive a shot with index', () => {
    testBoard.createBoard();
    testBoard.receiveAttack(73);
    expect(testBoard.board[73].isHit).toBe(true);
  });

  test('can set a ship', () => {
    testBoard.createBoard();
    let testShip = new Ship('destroyer', 3);
    testShip.setPosition(17);
    testBoard.setShipPosition(17, testShip.length, testShip.axis);
    testBoard.setShips(testShip);
    expect(testBoard.ships).toEqual([
      {
        name: 'destroyer',
        hits: 3,
        position: [17, 18, 19],
        length: 3,
        axis: 'x',
        isSunk: false,
      },
    ]);
    expect(testBoard.board[17].hasShip).toBe(true);
    expect(testBoard.board[18].hasShip).toBe(true);
    expect(testBoard.board[19].hasShip).toBe(true);
  });

  test('can say when someone has won', () => {
    testBoard.createBoard();
    let testShip = new Ship('destroyer', 3);
    testShip.setPosition(17);
    testBoard.setShipPosition(17, testShip.length, testShip.axis);
    testBoard.setShips(testShip);
    testBoard.receiveAttack(17);
    testShip.isHit();
    testBoard.receiveAttack(18);
    testShip.isHit();
    testBoard.receiveAttack(19);
    testShip.isHit();
    testBoard.mayday();
    expect(testBoard.shipsSunk).toBe(true);
  });
});
