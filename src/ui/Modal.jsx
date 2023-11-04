import { useOutsideClick } from "./useOutsideClick";

export function Modal({ isOpen, children, closeModal }) {
    const { ref } = useOutsideClick(closeModal)
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-opacity-70 bg-gray-900 modal-overlay">
            <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
                <div ref={ref} className="bg-white p-2 rounded-md shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal