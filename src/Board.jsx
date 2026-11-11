export default function Board(props){
    return(
        <div>
          {

            props.values.map((valoresRow, index) => {

              let row = valoresRow.map((value, colIndex) => {
                return <button>{value}</button>
              });

              return(<div>{row}</div>);

            })

          }
        </div>
    )
}