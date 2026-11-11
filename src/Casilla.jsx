
const casillaStyke = {
    height: "100px",
    width: "100px"
}
export default function Casilla(props){
    return (<button style={casillaStyke}>{props.value}</button>);
}