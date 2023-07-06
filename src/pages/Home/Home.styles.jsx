import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const HomeWrap = styled.section`
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 100px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: calc(100vh - 198px);
  button {
    font-size: 18px;
  }
  img {
    max-width: 179px;
    width: 100%;
    margin: 15px 0;
  }
  h1 {
    font-size: 55px;
    color: #004ea3;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;

  }
  p {
    font-size: 30px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    line-height: 35px;
    color: #46484a;
    margin-bottom: 13px;
  }
  @media ${device.laptop} {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
`;