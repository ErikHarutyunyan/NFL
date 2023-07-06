import styled from "styled-components";

export const InputWrap = styled.div`
  position:relative;
  width:100%;
  label {
    display: flex;
    align-items: center;
    position:absolute;
    right:12px;
    top:50%;
    transform:translate(0,-50%)
  }
  input {
    font-family: 'Saira Semi Condensed',sans-serif;
    font-weight: 400;
    width: 100%;
    padding: 9px 16px;
    background: #FFFFFF;
    border: 1px solid #AFB4B9;
    border-radius: 4px;
    font-size: 16px;
    line-height: 27px;
    min-height: 56px;
    ::placeholder {
      color: #3E464F;
      font-weight: 400;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      color: #3E464F;

    }
    :focus-visible {
      outline-color: #1976d2;
    }
  }
`;

