import { Link } from "react-router-dom";




function TopBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center shadow z-10 bg-white">
            <div className="flex justify-between w-full">
                <Link to="/">
                    <button className="">
                        <h1 className="text-2xl ml-4 hover:text-gray-500">Sapnil Ayman</h1>
                    </button>
                </Link>
                <section>
                    <button className="px-4 py-2">Test</button>
                    <button className="px-4 py-2">Test</button>
                </section>
            </div>
        </nav>
    );
}

export default TopBar;