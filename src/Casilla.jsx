
const casillaStyle = {
    height: "100px",
    width: "100px"
}
export default function Casilla(props){

    function casillaClick(){
        if(props.value === "-"){
        props.boardClick(props.rowIndex, props.colIndex)
        }
        else{console.log("No puedes pulsar en esta casilla")}
    }

    let ClickableClass = props.value==="-" ? "clickable": "no_clickable"
    return (
    <button style={casillaStyle} onClick={casillaClick} className={ClickableClass}> {props.value}</button>
    );
}