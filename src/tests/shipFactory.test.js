import '../components/shipFactory';
import shipFactory from '../components/shipFactory';

describe('Creates ships depending on what is asked', () => {
  test('returns a Carrier', () => {
    expect(shipFactory('carrier')).toEqual({
      name: 'carrier',
      hits: [],
      position: [],
      length: 5,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Battleship', () => {
    expect(shipFactory('battleship')).toEqual({
      name: 'battleship',
      hits: [],
      position: [],
      length: 4,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Destroyer', () => {
    expect(shipFactory('destroyer')).toEqual({
      name: 'destroyer',
      hits: [],
      position: [],
      length: 3,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Patrol Boat', () => {
    expect(shipFactory('patrol boat')).toEqual({
      name: 'patrol boat',
      hits: [],
      position: [],
      length: 2,
      axis: 'x',
      isSunk: false,
    });
  });
  test('returns a Fishing Boat', () => {
    expect(shipFactory('fishing boat')).toEqual({
      name: 'fishing boat',
      hits: [],
      position: [],
      length: 1,
      axis: 'x',
      isSunk: false,
    });
  });
});

// describe('Ships can be hit', () => {
//   let ship1;
//   beforeEach(() => {
//     ship1 = shipFactory('carrier');
//   });

//   test('can recieve a hit and store it', () => {
//     expect(s)
//   })
// });
