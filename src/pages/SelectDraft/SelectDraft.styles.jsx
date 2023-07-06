
import styled, { css } from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.div`
  max-width: 1226px;
  padding: 0 10px;
  margin: 165px auto;
  text-align: center;
  h2 {
    font-family: "Saira Semi Condensed", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    color: #0e1118;
  }
  @media ${device.tablet} {
    h2 {
      font-size: 40px;
    }
  }
`;

export const SelectColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const SelectColumn = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  max-width: 588px;
  width: 100%;
  text-align: left;
  h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #0e1118;
    margin-bottom: 24px;
  }
  a {
    padding: 5.5px 24px;
    background-color: #004ea3;
    font-family: "Saira Semi Condensed", sans-serif;
    color: #ffffff;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    border-radius: 4px;
    opacity: 0.9;
    transition: all 0.3s ease;
    :hover {
      opacity: 1;
    }
  }
  @media ${device.tablet} {
  }
`;

export const MultiColumn = styled.div`
`
export const MultiRow = styled.div`
  display: flex;
  gap: 18px;
  
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  a {
    display: block;
    width: 100%;
    max-width: 246px;
    opacity: 0.9;
    transition: all 0.3s ease;
    :hover {
      opacity: 1;
    }
  }
  form {
    display: flex;
    align-items: center;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input {
      background: #ffffff;
      border: 1px solid #e8ebef;
      border-radius: 4px;
      outline: none;
      padding: 12px 5px 12px 16px;
      -webkit-appearance: none;
      ::placeholder {
        color: #0e1118;
      }
    }

    button {
      background-color: #fff;
      border: none;
      padding: 5px 24px;
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #004ea3;
      outline: 1px solid #004ea3;
      border-radius: 4px;
      transform: translate(-5px, 0);
    }
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap:12px;
  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
export const ArrowDiv = styled.div`
  position: relative;
  font-family: "Saira Semi Condensed", sans-serif;
  max-width: 119px;
  width: 100%;
  padding: 4px;
  background: #d9d9d9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #0e1118;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.infoHover &&
    css`
      opacity: 1;
    `}
  ::before {
    content: "";
    position: absolute;
    border-bottom: 9px solid transparent;
    border-right: 9px solid #d9d9d9;
    border-top: 9px solid transparent;
    height: 0px;
    width: 0px;
    transform: translate(-13px, 8px);
  }
`;