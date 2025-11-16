import FlashCard from "../../components/Flashcard/Flashcard";


export function FlashcardPage() {
    const sectionCardStyle = "flex-col justify-center items-center border-b-2 border-l-2 rounded-xl m-5 p-5";
    const buttonStyle = "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500 mb-4";

    return (
        <main>
            <h2 className="text-3xl font-medium mt-6">Flashcards</h2>

            <article>
                <h3 className="text-2xl font-medium mt-6">Mine flashcards</h3>

                <section className={sectionCardStyle}>
                    <p>Flashcards vises her</p>

                    <FlashCard title="Title" description="Description" />
                </section>

                <h3 className="text-2xl font-medium mt-6">Lag flashcards</h3>
                
                <button className={buttonStyle}>Opprett</button>
            </article>
        </main>
    )
};