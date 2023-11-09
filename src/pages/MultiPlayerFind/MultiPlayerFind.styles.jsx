import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 0 15px;
  max-width: 984px;
  margin: 0 auto;
  margin-top: 32px;
  h2 {
    text-align: center;
    color: #0e1118;
    text-align: center;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 83.2px;
  }
  .event-content {
    margin-top: 32px;
  }
`;
export const EventWrap = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #afb4b9;
  margin-bottom: 27px;
`;

export const EventItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .event-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & div {
    width: calc(100% / 5);
  }
  & div:has(button) {
    text-align: right;
  }
   button {
    border-radius: 4px;
    background: #004ea3;
    display: flex;
    height: 42px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #fff;
  }
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  & input {
    background-color: transparent;
  }
  input[type="date"] {
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    width: 100%;
    padding: 9px 16px;
    background-color: transparent;
    border: 1px solid #afb4b9;
    border-radius: 4px;
    font-size: 16px;
    line-height: 27px;
    min-height: 56px;
  }
  & div {
    width: 100%;
    max-width: 345px;
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;