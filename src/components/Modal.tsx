import { Link } from "react-router-dom";



function Modal() {
    return (
        <main className = "fixed left-[50%] top-[50%] rounded-md bg-green-700 bg-opacity-85 px-4 py-2">
            <Link to="/info">Info</Link>
        </main>
    )
    
}

export default Modal;