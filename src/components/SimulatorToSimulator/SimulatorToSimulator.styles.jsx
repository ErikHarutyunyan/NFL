import styled from "styled-components";

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
  flex-wrap: wrap;
    gap: 34px;
    justify-content: center;
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


export const TeamChange = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap:20px;
  max-width: 350px;
`
export const ImgWrap = styled.div`
  width: 100%;
  max-width: 60px;
  & img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const PlayerInfo = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #195FAC;
  & p:first-child {
    margin-bottom: 5px;
  }
`;