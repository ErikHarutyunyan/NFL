import { useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  
  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style = 'overflow:hidden'
  },[]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style = "";
  },[]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
