import styled from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #21252a80;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.1s linear;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 100px;

`;

export const ContainerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  transform: scale(${(props) => (props.isOpen ? 1 : 0.8)});
  transition: transform 0.3s linear;
  flex: 1;
  align-items: center;
`;

