import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const SelectTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  .team {
    display: flex;
    align-items: center;
    gap: 30px;
    
  }
  .team img {
    width: 80px;
    height: 80px;
  }
  button {
    width: 100%;
    padding: 13px 27px;
    background: #004ea3;
    border-radius: 4px;
    font-family: "Saira Semi Condensed",sans-serif;
    font-weight: 600;
    border: none;
    color: white;
    margin-top: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
    svg {
      font-size: 20px;
    }
  }
`;

export const TeamPickIndex = styled.p`
  display: flex;
  flex-wrap: wrap;
`;

export const PicksInfo = styled.div`
  background: #e8ebef;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #0e1118;
  padding: 8px 16px;
  max-width: 450px;
  margin-bottom: 30px;
  width: 100%;
  text-align: left;
`;
export const NumWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  .trades-btn button{
    background: #004ea3;
    border-radius: 4px;
    padding: 12px 24px;
    font-weight: 400;
    border: none;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    justify-content: center;
  }
`;
export const NumItem = styled.div`
  width: 53.12px;
  height: 32px;
  border: 1px solid #989ea4;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 14px;
  ${(props) =>
    props.backColor &&
    css`
      background-color: ${(props) => props.backColor};
      border: none;
    `}

  &.active {
    border: 2px solid #004ea3;
  }
  span {
    color: #0e1118;
    font-size: 18px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
  }
`;

export const DraftPlayerWrapper = styled.div`
  .player-draft-btn-wrap {
    margin-top: 30px;
  }
  .player-draft-btn {
    background: #004ea3;
    border-radius: 4px;
    padding: 12px 24px;
    font-weight: 400;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    justify-content: center;
  }
  .player-draft-btn:disabled,
  .player-draft-btn[disabled] {
    opacity: 0.5;
  }
`;

export const DraftPlayerItems = styled.ul`
  width: 100%;
`;

export const DraftPlayerItem = styled.li`
  border-bottom: 1px solid #e8ebef;
  padding-bottom: 16px;
  background-color: ${(props) => (props.backColor ? `${props.backColor}` : "#fff")};
  :first-child {
    margin-top: 20px;
  }
  .player-td {
    text-align: center;
    width: calc(100% / 8);
  }
  .player-draft {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .player-rank,
  .player-adp {
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 31px;
      color: #46484a;
    }
    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #000000;
    }
  }
  .player-name {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #004ea3;
  }
  .player-position {
    border: 1px solid #004ea3;
    border-radius: 4px;
    padding: 5px 16px;
    color: #0e1118;
  }
  .player-college {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #46484a;
  }
`;
