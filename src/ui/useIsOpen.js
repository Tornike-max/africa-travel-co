import { useState } from "react";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return { isOpen, close, handleOpen };
}

export default useIsOpen;
