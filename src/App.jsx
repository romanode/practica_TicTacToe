import { useState } from 'react'
import Header from './Header.jsx';
import Board from './Board.jsx';
import './App.css';

const PLAYERX = "Player 1 - Xs"
const PLAYER0 = "Player 2 - 0s"

export default function App() {

  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState ([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  function appClick(rowNumber, colNumber){
      console.log("Click en " + rowNumber + colNumber);
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? "X" : "0";
      valuesCopy[rowNumber][colNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
  }

  return (
    <div className="App" >

        <h2>TicTacToe</h2>
        <Header turn={turn}/>
        <Board values={values} appClick={appClick}/>

    </div>
  );
}

