import styled, { css } from "styled-components";

export const AuthWrap = styled.section`
  background: #022142;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const AuthContent = styled.div`
  box-shadow: 0px 0px 20px rgba(96, 106, 117, 0.2);
  border-radius: 10px;
  background-color: white;
  padding: 40px 80px;
  max-width: 540px;
  width: 100%;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
    color: #0e1118;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
  }
  h2.forgot-pass {
    margin-bottom: 0;
  }
  h3 {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  img {
    display: block;
    max-width: 91px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  button {
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #004ea3;
  }
`;

export const Divider = styled.div`
  color: #0e1118;
  font-size: 16px;
  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 400;
  margin-bottom: 22px;
  position: relative;
  text-align: center;
  ::before {
    content: "";
    border: 1px solid #afb4b9;
    position: absolute;
    left: 0;
    width: 188px;
    top: 50%;
    transform: translateY(-50%);
  }
  ::after {
    content: "";
    border: 1px solid #afb4b9;
    position: absolute;
    right: 0;
    width: 188px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const SocialMediaList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  li:not(:first-child) {
    margin-left: 24px;
  }
`;
export const NavigationList = styled.ul`
  list-style-type: none;
  text-align: center;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  li a {
    color: #004ea3;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  li a.forgot-pass {
    color: #004ea3 !important;
    font-family: "Poppins", sans-serif !important;
    font-weight: 400 !important;
    text-decoration: none !important;
  }
`;

export const Error = styled.p`
  color: #d83333;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  line-height: 25.5px;
  text-transform: capitalize;
  ${({ message }) =>
    message &&
    css`
      opacity: 1;
    `}
`;

export const InputWrap = styled.div`
  input {
    padding: 12px 16px 11px 16px;
    outline: none;
    border: 1px solid #afb4b9;
    border-radius: 4px;
    width: 100%;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 27px;
    }
  }
  > div {
    position: relative;
    .pass-eye {
      position: absolute;
      top: 50%;
      transform: translate(-150%, -40%);
      cursor: pointer;
      margin: 0;
      display: inline-block;
      svg {
        height: 17px;
      }
    }
  }
`;
export const BtnWrap = styled.div`
  button {
    display: block;
    color: #fff;
    background: #004ea3;
    border-radius: 4px;
    padding: 13px 5px;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    width: 100%;
    margin-top: 24px;
    cursor: pointer;
  }
  button.forgot-submit {
    margin-top: 0;
  }
`;

export const CheckWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  &.sign-up-checkwrap {
    gap: 5px;
    justify-content: flex-start;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    text-decoration-color: #004ea3;
    color: #004ea3;
    cursor: pointer;
  }
`;
