import { Link } from "react-router-dom";



function Modal() {

    const modalStyle="fixed left-[50%] top-[50%] rounded-md bg-opacity-85 px-4 py-2 border-b-2 border-l-2 active:border-0"

    return (
        <main className={modalStyle}>
            <Link to="/info">Info</Link>
        </main>
    )
    
}

export default Modal;