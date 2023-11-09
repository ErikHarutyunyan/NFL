import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  font-family: "Saira Semi Condensed";
`;
export const Content = styled.div`
  padding: 24px;
`;

export const LivePickHead = styled.div`
  border-radius: 10px 10px 0px 0px;
  background: #022142;
  padding: 24px 0 24px 24px;
  & > div {
    display: flex;
    align-items: center;
    gap:12px;

  }
  img {
    max-width: 71px;
    width: 100%;
  }
  h2 {
    color: #fff;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
  }
`;


export const DraftNeeds = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const PositionWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  .trades-btn button {
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

export const PositionItem = styled.div`
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


export const PlayerPick = styled.div`
  margin-top: 27px;
  overflow-x: auto;
  height: 485px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #022142;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    background: #f3f5f7;
    border-radius: 10px 10px 0px 0px;
  }
  thead th {
    padding: 12px 16px;
  }
  thead th:first-child {
    border-radius: 10px 0px 0px 0px;
  }
  thead th:last-child {
    border-radius: 0px 10px 0px 0px;
  }

  tbody tr:last-child td:first-child {
    border-radius: 0px 0px 0px 10px;
  }
  tbody tr:last-child td:last-child {
    border-radius: 0px 0px 10px 0px;
  }
  /* tbody tr td:first-child {
    border-left: 1px solid #ddd;
  }
  tbody tr td:last-child {
    border-right: 1px solid #ddd;
  } */
  td,
  th {
    text-align: left;
    padding: 8px;
    color: #0e1118;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 14px;

    border-bottom: 1px solid #dddddd;
  }

  tr td {
    font-weight: 400;
  }

  tr:nth-child(even) {
    background: #f3f5f7;
  }
`;