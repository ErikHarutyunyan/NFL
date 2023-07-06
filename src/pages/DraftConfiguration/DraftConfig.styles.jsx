import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const DraftConfigWrap = styled.section`
  margin-top: 25px;
  margin-bottom: 200px;
  .line {
    margin-top: 0px;
  }
`;
export const DraftContainer = styled.div`
  
`;
export const DraftHeading = styled.div`
  margin-bottom: 23px;
  .title {
    color: #000000;
    font-size: 36px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    margin-bottom: 0;
  }
  p {
    color: #3E464F;
    font-size: 20px;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-weight: 400;
    }
`;
export const SelectTeams = styled.div`
  display: flex;
  border-radius: 10px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const DraftTeams = styled.div`
  max-width: 956px;
  width: 100%;
  background-color: white;
  height: auto;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  p {
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #989ea4;
  }
  .select-all {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    color: #3e464f;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    font-size: 16px;
    input {
      margin-right: 12px;
    }
  }
  .teams-title {
    font-size: 20px;
    color: #3e464f;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    margin-bottom: 0;
  }
  .select-all {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
      margin-right: 12px;
    }
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
    .select-teams {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
export const TeamsSettings = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: white;
  height: auto;
  border-left: 1px solid #ebedef;
  padding: 24px 32px 24px 24px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media ${device.tablet} {
    max-width: 100%;
    margin-left: 0;
  }
`;
