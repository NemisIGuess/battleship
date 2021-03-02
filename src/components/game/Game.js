import './Game.css';
import React from 'react';
import Ship from '../ships/shipFactory';

//Handles the turns of the players and if someone has won

function Game(props) {
  let player1 = props.match[0];
  let player2 = props.match[1];

  const [gameboard, setGameboard] = React.useState(player1.board.board);
  const [ships, setShips] = React.useState(player1.board.ships);

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
      <div className="player-ships">
        {ships.map((ship, index) => {
          const counterArr = [];
          for (let i = 0; i < ship.length; i++) {
            counterArr.push(i);
          }
          if (ship.axis === 'y') {
            return (
              <div
                style={{ gridTemplateRows: `repeat(${ship.length}, 30px)` }}
                onClick={ship.changeAxis.bind(ship)}
                className="ship-container"
                key={index}
              >
                {counterArr.map((element, index) => {
                  return <div key={index} className="ship-block"></div>;
                })}
              </div>
            );
          } else if (ship.axis === 'x') {
            return (
              <div
                style={{ gridTemplateColumns: `repeat(${ship.length}, 30px)` }}
                onClick={ship.changeAxis()}
                className="ship-container"
                key={index}
              >
                {counterArr.map((element, index) => {
                  return <div key={index} className="ship-block"></div>;
                })}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Game;
