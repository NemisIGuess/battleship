import Player from './playerFactory';

describe('can create players', () => {
  test('asigns name correctly', () => {
    expect(new Player('paquito', [])).toEqual({
      name: 'paquito',
      board: [],
    });
  });
});
