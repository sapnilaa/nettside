import { useEffect, useRef } from "react"
import GitHubButton from "../../components/GitHubButton/GitHubButton"
import InfoButton from "../../components/InfoButton/InfoButton"

function HomePage() {
    const buttonStyle = { 
        info: "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500 mb-4",
        github: "rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0 hover:text-gray-500"
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

        let x: number;
        let y: number;

        do {
            x = Math.random() * (screenWidth - logoWidth);
            y = Math.random() * (screenHeight - 48 - logoHeight); // Doesnt spawn inside navbar
        } while (x + logoWidth > sectionRect.left && x < sectionRect.right && y + logoHeight > sectionRect.top && y < sectionRect.bottom);

        let dx = Math.random() > 0.5 ? 2 : -2;
        let dy = Math.random() > 0.5 ? 2 : -2;

        const moveLogo = () => {
            x += dx;
            y += dy;

            if (x + logo.offsetWidth >= screenWidth || x < 0) {
                dx *= -1;
            }

            if (y + logo.offsetHeight >= screenHeight || y < 48) { // Doesnt overlap navbar
                dy *= -1;
            }

            logo.classList.remove("hidden");

            const logoRect = {
                left: x,
                right: x + logo.offsetWidth,
                top: y,
                bottom: y + logo.offsetHeight,
            };

            const overlapX = logoRect.right >= sectionRect.left && logoRect.left <= sectionRect.right;
            const overlapY = logoRect.bottom >= sectionRect.top && logoRect.top <= sectionRect.bottom;

            if (overlapX && overlapY) {
                dx *= -1;
                dy *= -1;
            }

            logo.style.left = `${x}px`;
            logo.style.top = `${y}px`;

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    }, []);

    return (
        <main className="flex justify-center items-center h-[100vh]">
            <div id="dvd-logo" className="absolute w-24 h-12 bg-black rounded-lg hidden"></div>

            <section ref={sectionRef} className="flex fixed flex-col border-b-2 border-l-2 rounded-xl m-5 px-20 py-10">
                <InfoButton style={ buttonStyle.info } /> 
                <GitHubButton style={ buttonStyle.github }/>
            </section>
        </main>
    )
}

export default HomePage