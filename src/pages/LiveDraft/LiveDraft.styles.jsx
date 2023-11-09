import styled from "styled-components";

export const Wrapper = styled.section``;

export const Overflow = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #21252a80;
  opacity: 1;
  transition: opacity 0.1s linear;
`;
