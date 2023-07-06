import styled, { css } from "styled-components";

export const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #ffffff; */
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  border: none;
  outline: none;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 35px;
  width: 100%;
  background: linear-gradient(0deg, #50647b, #50647b), #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  h2 {
    color: #ebedef;
    font-weight: 600;
    font-size: 28px;
    line-height: 60px;
  }
  svg {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  padding: 24px 35px;
  background-color: #fff;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ModalBodyItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const ModalBodyItem = styled.div`
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3e464f;
  }
  div.line {
    width: 2px;
    background-color: #cad2da;
    height: 100%;
  }
`;

export const PickItems = styled.div`
  margin: 24px 0;
`;

export const PickItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;

  &:not(:first-child) {
    margin-top: 24px;
  }
  .year {
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    color: #50647b;
  }
  .pick-index-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 430px;
    width: 100%;
  }
  .pick-index {
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid #989ea4;
    border-radius: 4px;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    &.active {
      border: 2px solid #004ea3;
    }
  }
  .pick-change {
    display: flex;
    align-items: center;
    width: 38px;
    height: auto;
    border: 2px solid #004ea3;
    border-radius: 4px;
    justify-content: center;
    cursor: pointer;
    user-select: none;
  }
`;
export const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 10px;
  .player {
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    color: #50647b;
  }
  .player-name {
    display: flex;
    gap: 10px;
    span {
      color: #004ea3;
      font-weight: 700;
    }
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  button {
    cursor: pointer;
    background: #004ea3;
    border-radius: 4px;
    font-weight: 400;
    font-size: 19px;
    line-height: 31px;
    color: #ffffff;
    padding: 5px 15px;
    opacity: 0.9;
    transition: all 0.3s ease;
    :hover {
      opacity: 1;
    }
  }
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ModalStatus = styled.div`
  background-color: #ea274a;
  padding: 5px 0 5px 24px;
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  line-height: 60px;
  border-radius: 4px;
  margin-bottom: 35px;
  ${({ status }) =>
    status &&
    css`
      background-color: #acfec4;
      color: #3e464f;
    `}
`;
export const TradeTeamItem = styled.div`
  max-width: 400px;
  width: 100%;
`;
export const TradeTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  img {
    width: 50px;
  }
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #004ea3;
`;
