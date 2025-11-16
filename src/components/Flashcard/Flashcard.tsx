import { useState } from "react";

type FlashCardProps = {
    title: string,
    description: string
};

function FlashCard({ title, description }: FlashCardProps) {
    const cardStyle = "flex-col justify-center items-center border-b-2 border-l-2 rounded-xl m-5 p-5";
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(prev => !prev);
    };

    console.log("Card is flipped: ", isFlipped);

    return (
        <section onClick={() => handleFlip()} className={cardStyle}>
            {isFlipped ? (
                <h3 className="text-2xl font-medium">{title}</h3>
            ) : (
               <p>{description}</p> 
            )}          
        </section>
    )
};

export default FlashCard;
