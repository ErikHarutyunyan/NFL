import React, { useEffect, useState } from "react";
// Styles
import { BtnWrap, Container, ContainerChildren, Wrapper } from "./ModalCustom.styles";
// import { CloseIcon } from "../Icons/Icons";
const ModalCustom = ({ children, closeModal, isOpen=false }) => {
  const [show, setShow] = useState(false)
  useEffect(()=> {
    if(isOpen) {
      setTimeout(() => {
        setShow(true)
        
      }, 1);
    }
  },[isOpen])
  return (
    <Wrapper isOpen={show} >
      <Container className="modalContainer">
        <ContainerChildren isOpen={show}>
          {children}
        </ContainerChildren>
      </Container>
    </Wrapper>
  );
};

export default ModalCustom;
