import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

function NextUiModal({ children, resourceName }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState('blur')

    const backdrops = ["blur"];

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {backdrops.map((b) => (
                    <Button
                        key={b}
                        variant="flat"
                        color="warning"
                        onPress={() => handleOpen(b)}
                        className="capitalize"
                    >
                        {b}
                    </Button>
                ))}
            </div>
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} className='fixed top-0 left-0 w-screen h-screen '>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{resourceName}</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default NextUiModal
