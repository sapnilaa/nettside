import GitHubButton from "../../components/GitHubButton/GitHubButton"
import InfoButton from "../../components/InfoButton/InfoButton"

function HomePage() {
    const buttonStyle = { 
        info: "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500 mb-4",
        github: "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500"
    }

    return (
        <main className="flex justify-center items-center h-[100vh]">
            <section className="flex flex-col border-b-2 border-l-2 rounded-xl m-5 px-20 py-10">
                <InfoButton style={ buttonStyle.info } /> 
                <GitHubButton style={ buttonStyle.github }/>
            </section>
        </main>
    )
}

export default HomePage