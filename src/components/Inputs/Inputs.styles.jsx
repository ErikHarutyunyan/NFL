import styled from "styled-components";

export const RegisterWrap = styled.div`
  margin-bottom: 24px;
  input {
    width: 100%;
    padding-left: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    border: 1px solid #afb4b9;
    border-radius: 4px;
    outline: none;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    color: #0e1118;
    font-size: 16px;
  }
`;
export const CheckBoxWrap = styled.div`
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  input {
    margin-right: 16px;
    outline: none;
    width: 22px;
  }
  span {
    color: #0e1118;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
  }
  span a {
    color: #004ea3;
    text-decoration: none;
  }
`;