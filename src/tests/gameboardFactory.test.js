import gameboardFactory from '../components/gameboardFactory';
import shipFactory from '../components/shipFactory';

describe('Creates a board', () => {
  let board1;
  beforeEach(() => {
    board1 = gameboardFactory();
  });

  test('returns an empty board', () => {
    expect(board1.board).toEqual([]);
  });

  test('create a 10x10 array of objects', () => {
    board1.createBoard();
    expect(board1.board.length).toBe(100);
    expect(board1.board[37].hasShip).toBe(false);
    expect(board1.board[37].isHit).toBe(false);
  });
});

describe('Board methods work', () => {
  let board1;

  beforeEach(() => {
    board1 = gameboardFactory();
  });

  test('can place a ship with index', () => {
    board1.createBoard();
    board1.setShipPosition(16, 3, 'y');
    expect(board1.board[16].hasShip).toBe(true);
  });

  test('can receive a shot with index', () => {
    board1.createBoard();
    board1.receiveAttack(73);
    expect(board1.board[73].isHit).toBe(true);
  });

  test('can set a ship', () => {
    board1.createBoard();
    let ship1 = shipFactory('destroyer', 3);
    ship1.setPosition(17);
    board1.setShipPosition(17, ship1.length, ship1.axis);
    board1.setShips(ship1);
    expect(board1.ships).toEqual([
      {
        name: 'destroyer',
        hits: 3,
        position: [17, 18, 19],
        length: 3,
        axis: 'x',
        isSunk: false,
      },
    ]);
    expect(board1.board[17].hasShip).toBe(true);
    expect(board1.board[18].hasShip).toBe(true);
    expect(board1.board[19].hasShip).toBe(true);
  });

  test('can say when someone has won', () => {
    board1.createBoard();
    let ship1 = shipFactory('destroyer', 3);
    ship1.setPosition(17);
    board1.setShipPosition(17, ship1.length, ship1.axis);
    board1.setShips(ship1);
    board1.receiveAttack(17);
    ship1.isHit();
    board1.receiveAttack(18);
    ship1.isHit();
    board1.receiveAttack(19);
    ship1.isHit();
    board1.hasSomeoneWon();
    expect(board1.won).toBe(true);
  });
});
