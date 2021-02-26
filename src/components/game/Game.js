import './Game.css';
import React from 'react';
import Ship from '../ships/shipFactory';

//Handles the turns of the players and if someone has won

function Game(props) {
  let player1 = props.match[0];
  let player2 = props.match[1];

  let [gameboard, setGameboard] = React.useState(player1.board.board);
  // let [gameMode, setGameMode] = React.useState(props.match[3]);

  const handleCellClick = (e) => {
    console.log(player1);
    // No hace nada si haces click en una casilla que ya estaba clickada
    if (player1.board.board[e.target.id].isHit === true) {
      return;
    }
    player1.board.receiveAttack(e.target.id);
    setGameboard([...gameboard, (gameboard[e.target.id].isHit = true)]);
  };

  return (
    <section>
      <h1>Game is ON!</h1>
      <h3>
        <em>
          {player1.name} VS {player2.name}
        </em>
      </h3>
      <div className="player-gameboard">
        {player1.board.board.map((element, index) => {
          if (element.isHit) {
            return (
              <div
                key={index}
                id={index}
                onClick={handleCellClick}
                className="cell already-clicked"
              ></div>
            );
          } else if (!element.isHit) {
            return (
              <div
                key={index}
                id={index}
                onClick={handleCellClick}
                className="cell"
              ></div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Game;
