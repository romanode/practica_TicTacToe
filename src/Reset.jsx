import  Button  from "react-bootstrap/Button";

export default function Reset(props){
 return (
    <Button variant="danger" onClick={props.clickReset}>Reset</Button>
 );
}