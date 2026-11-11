import Card from "react-bootstrap/Card" //Se tiene en su api todo explicado

export default function Header(props){
    return <header className="myheader"> 
        Turn of {props.turn} 
    </header>
}