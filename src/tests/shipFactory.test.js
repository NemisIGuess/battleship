import shipFactory from '../components/shipFactory';

describe('Creates ships depending on what is asked', () => {
  test('returns a Carrier', () => {
    expect(shipFactory('carrier', 5)).toEqual({
      name: 'carrier',
      hits: 5,
      position: [],
      length: 5,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Battleship', () => {
    expect(shipFactory('battleship', 4)).toEqual({
      name: 'battleship',
      hits: 4,
      position: [],
      length: 4,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Destroyer', () => {
    expect(shipFactory('destroyer', 3)).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [],
      length: 3,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Patrol Boat', () => {
    expect(shipFactory('patrol boat', 2)).toEqual({
      name: 'patrol boat',
      hits: 2,
      position: [],
      length: 2,
      axis: 'x',
      isSunk: false,
    });
  });
});

describe('ship methods work', () => {
  let ship1;
  beforeEach(() => {
    ship1 = shipFactory('destroyer', 3);
  });

  test('ship has been hit', () => {
    ship1.isHit();
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 2,
      position: [],
      length: 3,
      axis: 'x',
      isSunk: false,
    });
  });

  test('ship has been set on axis Y', () => {
    ship1.changeAxis();
    ship1.setPosition(13);
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [13, 23, 33],
      length: 3,
      axis: 'y',
      isSunk: false,
    });
  });

  test('ship wont set if is out of bounds on axis Y', () => {
    ship1.changeAxis();
    ship1.setPosition(83);
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [],
      length: 3,
      axis: 'y',
      isSunk: false,
    });
  });

  test('ship has been set on axis X', () => {
    ship1.setPosition(52);
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [52, 53, 54],
      length: 3,
      axis: 'x',
      isSunk: false,
    });
  });

  test('ship wont set if is out of bounds on axis X', () => {
    ship1.setPosition(78);
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [],
      length: 3,
      axis: 'x',
      isSunk: false,
    });
  });

  test('ship changes axis', () => {
    ship1.changeAxis();
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 3,
      position: [],
      length: 3,
      axis: 'y',
      isSunk: false,
    });
  });

  test('ship has been sunk', () => {
    ship1.setPosition(13);
    ship1.isHit();
    ship1.isHit();
    ship1.isHit();
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 0,
      position: [13, 14, 15],
      length: 3,
      axis: 'x',
      isSunk: true,
    });
  });

  test('ship sinks even if hits are out of order', () => {
    ship1.setPosition(13);
    ship1.isHit();
    ship1.isHit();
    ship1.isHit();
    expect(ship1).toEqual({
      name: 'destroyer',
      hits: 0,
      position: [13, 14, 15],
      length: 3,
      axis: 'x',
      isSunk: true,
    });
  });
});
