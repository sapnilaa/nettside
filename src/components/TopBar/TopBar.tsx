import { Link } from "react-router-dom";



function TopBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center shadow z-10 bg-white">
            <div className="flex justify-between w-full">
                <Link to="/">
                    <button className="hover:text-gray-500">
                        <h1 className="text-2xl mb-2 mt-2 ml-4">Sapnil Ayman</h1>
                    </button>
                </Link>
                <button className="hover:text-gray-500">
                    <a className="text-xl mb-2 mt-2 mr-4" href="https://www.github.com/sapnilaa" rel="noopener noreferrer" target="_blank">GitHub</a>
                </button>
            </div>
        </nav>
    );
}

export default TopBar;