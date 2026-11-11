import Casilla from "./Casilla.jsx"

export default function Board(props){
    return(
        <div>
          {

            props.values.map((valoresRow, rowIndex) => {

              let row = valoresRow.map((value, colIndex) => {
                return <Casilla rowIndex={rowIndex} colIndex={colIndex} key={rowIndex + "-" + colIndex} value={value} boardClick={props.appClick}/>
              });

              return(<div key={"row" + rowIndex}>{row}</div>);

            })

          }
        </div>
    )
}