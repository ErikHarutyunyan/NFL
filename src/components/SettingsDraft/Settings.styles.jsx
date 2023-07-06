import styled from "styled-components";

export const SettingItem = styled.div`
  display: flex;
  gap: 17px;
  align-items: flex-start;
  padding-bottom: 28px;
  border-bottom: 1px solid #ebedef;
  justify-content: space-between;

  h2 {
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: #3e464f;
    margin-bottom: 0;
  }
  .setting-desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #989ea4;
  }
  & .MuiSlider-root {
    color: #00438b;
  }
  label {
    font-size: 16px;
    color: #3e464f;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  &.setting-goriz {
    flex-direction: column;
    gap: 0;
  }

  & .setting-check {
    display: flex;
    align-items: center;
    label {
      position: relative;
    }
    svg {
      display: none;
      position: absolute;
      width: 18px;
      height: 18px;
    }
  }
  & .setting-check input.checked + svg {
    display: block;
    fill: #004ea3;
  }
  & .setting-check input {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 0.15em;
    margin-right: 0.5em;
    border: 2px solid #989ea4;
    outline: none;
    cursor: pointer;
  }

  & .setting-check input.checked {
    position: relative;
    border: 2px solid #004ea3;
    cursor: pointer;
  }
  &.setting-round-check {
    margin-top: 12px;
    justify-content: flex-start;
    font-size: 18px;
    line-height: 27px;
    color: #3e464f;
  }
  &.setting-fan {
    flex-direction: column;
  }
  & .setting-fan-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    p {
      
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      color: #0e1118;
    }
  }
`;
export const NumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  align-items: center;
`;
export const NumItem = styled.div`
  width: 42px;
  height: 37px;
  border: 1px solid #004ea3;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active-round {
    background: #004ea3;
    span {
      color: #ffffff;
    }
  }

  span {
    color: #004ea3;
    font-size: 18px;
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    line-height: 27px;
  }
`;
export const Speed = styled.div`
  width: 100%;
  input {
    width: 350px;
    background: linear-gradient(97.81deg, #00438b 0%, #0059b9 100%);
    border-radius: 10px;
    height: 4px;
  }
`;
export const SettingMarks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #989ea4;
  }
`;
