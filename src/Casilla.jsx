
const casillaStyke = {
    height: "100px",
    width: "100px"
}
export default function Casilla(props){
    return (
    <button style={casillaStyke} onClick={() => props.boardClick(props.rowIndex, props.colIndex)}>
        {props.value}</button>);
}