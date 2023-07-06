import styled from "styled-components";

export const MySelectPhotoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 40px;
    height: auto;
  }
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #004ea3;
  }
`;
export const PlayerName = styled.div`
display: flex;
align-items: center;
gap: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #3e464f;
  & > span {
    color: #004ea3;
    font-weight: 700;
  }
`;