import { useEffect, useRef } from "react";

export function useOutsideClick(closeModal) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal?.();
        console.log("click");
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [closeModal]);

  return { ref };
}
