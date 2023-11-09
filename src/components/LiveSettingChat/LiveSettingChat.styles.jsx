import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1836px;
  width: 100%;
  margin: 24px auto;
 
`;

export const SettingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button.settings {
    padding: 4px 24px;
    border-radius: 4px;
    border: 1px solid #004ea3;
    color: #004ea3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Saira Semi Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
  }
  button.chat {
    padding: 4px 24px;
    border-radius: 4px;
    background-color: #004ea3;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: "Saira Semi Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;
  }
`;

export const SettingWrap = styled.div`
  max-width: 466px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  padding: 32px 0;
  text-align: center;
  h2 {
    color: #0E1118;
    text-align: center;
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 41.6px; 
  }
`;
export const ChatWrap = styled.div`
  max-width: 910px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  padding: 32px 0;
  text-align: center;
  h2 {
    color: #0e1118;
    text-align: center;
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 41.6px;
  }
`;

export const BtnWrap = styled.div`
button {

  cursor: pointer;
    border-radius: 4px;
    border: 1px solid #004ea3;
    padding: 13px 25px;
    background-color: #fff;
    max-width: 108px;
    width: 100%;
    margin: 0 auto;
    color: #004EA3;
    font-family: "Saira Semi Condensed";
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
}
`;