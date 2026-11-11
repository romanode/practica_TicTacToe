import { useState } from 'react'
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from "./Reset.jsx"
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
  const [moves, setMoves]= useState(0);

  function appClick(rowNumber, colNumber){
    console.log("Click en " + rowNumber + colNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? "X" : "0";
    valuesCopy[rowNumber][colNumber] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves => moves + 1)
  }

  function clickReset(){
    console.log("RESET");
    setTurn(PLAYERX);
    setValues([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
    ]);
    setMoves(0);
  }

  return (
    <div className="App" >

        <h2>TicTacToe</h2>
        <Header turn={turn}/>
        <Board values={values} appClick={appClick}/>
        <h3> Número de movimientos: {moves} </h3>
        <Reset clickReset = {clickReset}/>

    </div>
  );
}

