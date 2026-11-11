import { useState } from 'react'
import Header from './Header.jsx';
import Board from './Board.jsx';
import './App.css';

const PLAYERX = "Player 1 - Xs"
const PLAYER0 = "Player 2 - 0s"

export default function App() {

  const [turn, setTurn] = useState(PLAYER0);
  const [values, setValues] = useState ([
    ["X", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  return (
    <div className="App" >

        <h2>TicTacToe</h2>
        <Header turn={turn}/>
        <Board values={values}/>

    </div>
  );
}

