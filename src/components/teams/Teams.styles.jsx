import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const AllTeams = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  
`;

export const TeamItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 213px;
  width: 100%;
  align-items: center;
  border: 2px solid #989ea4;
  box-shadow: 0px 0px 9px -4px rgb(0 0 0 / 25%);
  border-radius: 4px;
  padding: 5px 20px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    border: 2px solid #004ea3;
    box-shadow: 0px 0px 3px 0px #004ea3;
  }
  &.active {
    border: 2px solid #004ea3;
    box-shadow: 0px 0px 3px 0px #004ea3;
  }
  .num {
    font-size: 20px;
    color: #000;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
  }
  img {
    width: 50px;
    height: 50px;
  }
  @media ${device.tablet} {
    max-width: 100%;
  }
`;