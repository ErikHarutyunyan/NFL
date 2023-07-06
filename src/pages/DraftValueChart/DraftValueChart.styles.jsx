import styled from "styled-components";

export const Wrapper = styled.section`
  &.main-container {
    margin-top: 40px;
  margin-bottom: 170px;
  }
`;

export const DraftValueContent = styled.article`
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  gap:5px;
`;
export const RoundColumn = styled.div`
  width: 100%;
  max-width: 195px;

  table {
    border-collapse: collapse;
    width: 100%;
    background: #e1edfb;
  }
  td,
  th {
    border: 1px solid #989ea4;
    border-top-width: 0px;
    border-left-width: 0px;
    /* border-right-width: 0px; */
  }
  tr th:last-child {
    border: 0px;
  }
  tr {
    height: 27px;
  }
  tr th {
    background: #e8ebef;
    color: #2d7341;
    font-weight: 600;
    font-size: 16px;
  }
  tr td {
    text-align: center;
    padding: 4px 0;
    border: 1px solid #989ea4;
  }
  tr td:first-child {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
  }
  tr td:last-child {
    color: #333333;
    background: #f5faff;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const RoundColumnHead = styled.div`
  background: linear-gradient(
    97.81deg,
    #00438b 0%,
    #07c93e 0.01%,
    #00438b 0.02%,
    #00438b 58.85%,
    rgba(0, 67, 139, 0.76) 94.27%
  );
  text-align: center;
  padding: 8px 65px;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  p {
    text-transform: capitalize;
  }
`;
