import Player from '../components/playerFactory';

describe('can create players', () => {
  test('asigns name correctlyl', () => {
    expect(new Player('paquito', [])).toEqual({
      name: 'paquito',
      board: [],
    });
  });
});
