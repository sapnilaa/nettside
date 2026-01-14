import { useEffect, useRef } from "react"
import InfoButton from "../../components/InfoButton/InfoButton"
import DVDLogo from "../../assets/images/DVD_logo.svg.png"
import FlashcardButton from "../../components/FlashCardButton/FlashcardButton"

function HomePage() {
    const buttonStyle = { 
        button: "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500 mb-4",
    }

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const logo = document.getElementById("dvd-logo");
        const section = sectionRef.current;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        if (!logo || !section ) return;

        const logoWidth = logo.offsetWidth;
        const logoHeight = logo.offsetHeight;
        const sectionRect = section.getBoundingClientRect();

        const topBarHeight = 48; // 48 pixels

        let x: number;
        let y: number;

        do {
            x = Math.random() * (screenWidth - logoWidth);
            y = Math.random() * (screenHeight - logoHeight - topBarHeight) + topBarHeight; // Doesnt spawn inside navbar
        } while (x + logoWidth > sectionRect.left && x < sectionRect.right && y + logoHeight > sectionRect.top && y < sectionRect.bottom);

        let dx = Math.random() > 0.5 ? 2 : -2;
        let dy = Math.random() > 0.5 ? 2 : -2;

        const moveLogo = () => {
            x += dx;
            y += dy;

            if (x + logo.offsetWidth >= screenWidth || x < 0) {
                dx *= -1;
            }

            if (y + logo.offsetHeight >= screenHeight || y < topBarHeight) { // Doesnt overlap navbar
                dy *= -1;
            }

            logo.classList.remove("hidden");

            const overlapX = x + logoWidth >= sectionRect.left && x <= sectionRect.right;
            const overlapY = y + logoHeight >= sectionRect.top && y <= sectionRect.bottom;

            if (overlapX && overlapY) {
                const logoCenterX = x + logoWidth / 2;
                const logoCenterY = y + logoHeight / 2;
                const sectionCenterX = sectionRect.left + sectionRect.width / 2;
                const sectionCenterY = sectionRect.top + sectionRect.height / 2;

                const deltaX = logoCenterX - sectionCenterX;
                const deltaY = logoCenterY - sectionCenterY;

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    dx *= -1;
                } else {
                    dy *= -1;
                }
            }

            logo.style.left = `${x}px`;
            logo.style.top = `${y}px`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    }, []);

    return (
        <main className="flex justify-center items-center h-[100vh]">
            <img id="dvd-logo" className="absolute w-24 h-12 hidden" src={DVDLogo} alt="DVD-logo"></img>

            <section ref={sectionRef} className="flex fixed flex-col border-b-2 border-l-2 rounded-xl m-5 px-20 py-10">
                <InfoButton style={ buttonStyle.button } /> 
                {/* <GitHubButton style={ buttonStyle.button }/> */}
                {/* <FlashcardButton style={ buttonStyle.button } /> */}
            </section>
        </main>
    )
}

export default HomePage