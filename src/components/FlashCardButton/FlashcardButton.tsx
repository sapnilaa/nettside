import { Link } from "react-router-dom";

type ButtonStyle = {
    style: string
}

function FlashcardButton({ style }: ButtonStyle) {
    return (
        <Link to="/flashcards">
            <button className={ style }>Flashcards</button>
        </Link>
    )
}

export default FlashcardButton;