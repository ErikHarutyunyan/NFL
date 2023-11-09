import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 640px;
  width: 100%;
  background: #e8ebef;
  border-radius: 10px 10px 0px 0px;
  .queue-head {
    background: #e8ebef;
    padding: 12px 0;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
  }
  h2 {
    color: #0e1118;
    text-align: center;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 41.6px;
  }
`;

export const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 20px;
  &:nth-child(even) {
    background: #e8ebef;
  }
  .player-info {
    display: flex;
    align-items: center;
    gap: 8px;
    button {
      display: flex;
      cursor: pointer;
    }
    p {
      color: #0e1118;
      text-align: center;
      font-family: "Saira Semi Condensed", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      user-select: none;
    }
  }
`;
export const DragWrap = styled.div`
  background-color: #fff;
  &:nth-child(even) {
    background-color: #e8ebef;
  }
`;



