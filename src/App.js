import React from 'react';
import './App.css';
import Gameboard from './components/gameboard/gameboardFactory';
import Player from './components/player/playerFactory';
import Game from './components/game/Game';
import Ship from './components/ships/shipFactory';

// Handles creation of the game state (players, board, ships) and passes it to the Game component

function App() {
  const [gameIsOn, setGameIsOn] = React.useState(false);
  const [playerName, setPlayerName] = React.useState('');

  const [match, setMatch] = React.useState([]);

  // Controla el nombre del jugador
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  //Si pulsamos el boton cambiamos la variable que renderiza la creacion del juego o el juego
  const handleClick = () => {
    if (playerName === '') {
      return;
    }
    const player1Board = new Gameboard();
    player1Board.createBoard();
    player1Board.setShip(new Ship('carrier', 5));
    player1Board.setShip(new Ship('battleship', 4));
    player1Board.setShip(new Ship('destroyer', 3));
    player1Board.setShip(new Ship('submarine', 3));
    player1Board.setShip(new Ship('patrol boat', 2));
    const player1 = new Player(playerName, player1Board);
    console.log(player1);
    const player2Board = new Gameboard();
    player2Board.createBoard();
    const player2 = new Player('IA', player2Board);
    setMatch([player1, player2]);
    setGameIsOn(true);
  };

  // Renderizamos condicionalmente la creacion del juego o el juego, dependiendo de la variable gameIsOn
  return (
    <main className="App">
      {gameIsOn && <Game match={match} />}
      {!gameIsOn && (
        <section>
          <input
            onChange={handleNameChange}
            value={playerName}
            type="text"
            placeholder="Introduce your name"
          ></input>
          <button onClick={handleClick} type="submit" className="submit-btn">
            Click me ! (To start the game)
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
