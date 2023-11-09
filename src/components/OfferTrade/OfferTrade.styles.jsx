import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 640px;
  width: 100%;
  background-color: #fff;
  height: 743px;
  overflow-x: auto;
  border-radius: 10px 10px 0px 0px;
`;
export const OfferHead = styled.div`
  background: #e8ebef;
  padding: 12px 24px;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    color: #0e1118;
    text-align: center;
    font-family: "Saira Semi Condensed", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 41.6px;
  }
  button {
    border-radius: 4px;
    background: #004ea3;
    display: inline-flex;
    height: 42px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #fff;
    font-family: "Saira Semi Condensed";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const OfferSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #0e1118;
    font-family: "Saira Semi Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  & .MuiFormControl-root {
    width: 100%;
    max-width: 400px;
    min-width: auto;
  }
  & .MuiSelect-select {
    padding: 0;
  }
`;

export const OfferBody = styled.div`
  background-color: #fff;
  padding: 24px 23px;
`;

export const OfferPick = styled.div`
  margin-top: 16px;
  .offer-pick-head {
    display: flex;
    background-color: #030303;
    border-radius: 10px 10px 0px 0px;
    background: #0e1118;
    padding: 8px 24px;
    gap: 24px;
  }
  .offer-pick-team {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    img {
      width: 100%;
      max-width: 32px;
      height: auto;
      object-fit: cover;
    }
    p {
      color: #fff;
      font-family: "Saira Semi Condensed";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .line {
    width: 1px;
    background-color: #fff;
  }
`;

export const OfferPickTableWrap = styled.div`
  display: flex;

  table {
    max-width: 296px;
    width: 100%;
    font-family: "Saira Semi Condensed";
    border-collapse: collapse;
  }
  tr th {
    text-align: left;

    background-color: #f4f5f7;
    color: #989ea4;

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px 0 8px 24px;
  }
  tr:nth-child(even) {
    background-color: #f4f5f7;
  }
`;

export const OfferPending = styled.div`
  .offer-pending-head {
    background: #e8ebef;
    padding: 12px 24px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #0e1118;
      text-align: center;
      font-family: "Saira Semi Condensed", sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 41.6px;
    }
  }
`;
