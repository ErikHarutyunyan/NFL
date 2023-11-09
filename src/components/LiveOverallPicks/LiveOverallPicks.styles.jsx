import styled from "styled-components";

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
  h2 {
    color: #fff;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 41.6px;
  }
`;

export const FilterByTeam = styled.div`
  display: flex;
  align-items: center;
  gap:16px;
  justify-content: space-between;
  & .MuiFormControl-root {
    width: 100%;
    max-width: 400px;
    min-width: auto;
  }
  & .MuiSelect-select {
    padding: 0;
    padding-left: 10px;
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