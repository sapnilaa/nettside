import { Link } from "react-router-dom";

type ButtonStyle = {
    style: string
}

function InfoButton({ style }: ButtonStyle) {

    return (
        <Link to="/info">
            <button className={ style }>Om meg</button>
        </Link>
    )
    
}

export default InfoButton;