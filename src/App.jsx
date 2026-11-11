import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from "./Reset.jsx"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

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
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971")
      const data = await res.json();
      console.log(data);
      setTurn(data.turn);
      setValues(data.values);
      setMoves(data.moves);
    }
    fetchData();
    setLoading(false);
  }, [])

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
        {loading ? <h1>"LOADING..."</h1> : 
        <div>
          <Header turn={turn}/>
          <Board values={values} appClick={appClick}/>
          <h3> Número de movimientos: {moves} </h3>
          <Reset clickReset = {clickReset}/>
        </div>}
    </div>
  );
}

