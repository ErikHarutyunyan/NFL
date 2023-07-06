import styled from "styled-components";

export const Btn = styled.button`
  &.start-draft {
    max-width: 442px;
    width: 100%;
    padding: 13px 0;
    background: #004ea3;
    border-radius: 4px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    border: none;
    color: white;
    margin-top: 25px;
    cursor: pointer;
  }
  &[disabled]{
    opacity: 0.6;
  }
  &.enter-draft-btn {
    background-color: #004ea3;
    padding: 5px 24px;
    color: white;
    font-size: 20px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    border-radius: 4px;
    border: none;
    margin-left: auto;
    display: block;
    margin-top: 40px;
    cursor: pointer;
    
    img {
      margin-left: 13px;
    }
  }
`;
export const RegisterBtn = styled.button`
  &.submit-button {
    width: 100%;
    background: #004ea3;
    padding: 13px 0;
    color: white;
    font-size: 20px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

`;
