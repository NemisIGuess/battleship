import React from 'react';
import './App.css';
import Gameboard from './components/gameboard/gameboardFactory';
import Player from './components/player/playerFactory';
import Game from './components/game/Game';

// Handles creation of the game state (players, board, ships) and passes it to the Game component

function App() {
  const [gameIsOn, setGameIsOn] = React.useState(false);
  const [playerName, setPlayerName] = React.useState('');

  const [match, setMatch] = React.useState([]);

  // Controla el nombre del jugador
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  // Cuando cargamos la pagina se genera los componentes del player1 y los guardamos en la variable match
  React.useEffect(() => {
    const player1Board = new Gameboard();
    player1Board.createBoard();
    const player1 = new Player(playerName, player1Board);
    const player2Board = new Gameboard();
    player2Board.createBoard();
    const player2 = new Player('IA', player2Board);
    setMatch([player1, player2]);
  }, []);

  //Si pulsamos el boton cambiamos la variable que renderiza la creacion del juego o el juego
  const handleClick = () => {
    if (playerName === '') {
      return;
    }
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
