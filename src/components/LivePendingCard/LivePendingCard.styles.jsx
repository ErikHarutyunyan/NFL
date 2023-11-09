import styled from "styled-components";
export const Wrapper = styled.div`

  background-color:  #0e1118;
  border-radius: 10px;
  width: 100%;
  max-width: 592px;
  margin: 12px auto;
  padding: 12px 24px 6px 24px;

`;

export const TradeTeam = styled.div`
  display: flex;
  gap: 24px;
`;

export const TradeTeamItem = styled.div`
  max-width: 248px;
  width: 100%;
  color: #fff;
  font-family: "Saira Semi Condensed";
  .team-head {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    img {
      width: 100%;
      max-width: 32px;
      height: auto;
      object-fit: cover;
    }
  }
  h3 {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
  .team-pick {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 12px;
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .line {
    border-color: #fff;
  }
  .team-status {
    margin-top: 12px;
    margin-bottom: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const TradeAction = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
  button {
    max-width: 90px;
    width: 100%;
    padding: 13px 0;
    border-radius: 4px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    border: none;
    color: white;
    margin-top: 25px;
    cursor: pointer;
  }
  button:first-child {
    background: #004ea3;
  }
`;