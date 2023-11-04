import { useEffect, useRef } from "react";

export function SmallModal({ isOpen, children, closeModal, position }) {
    const modalRef = useRef(null);

    const closeModalOnOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', closeModalOnOutsideClick);
        } else {
            document.removeEventListener('mousedown', closeModalOnOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', closeModalOnOutsideClick);
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const modalStyles = {
        top: position.top + 'px',
        left: position.left + 'px',
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute" style={modalStyles} ref={modalRef}>
                <div className="rounded-md shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SmallModal