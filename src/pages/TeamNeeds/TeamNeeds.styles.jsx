import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  &.main-container {
    margin-top: 40px;
    margin-bottom: 68px;
  }
`;

export const AccordionWrapper = styled.article`
  margin-bottom: 24px;
`;

export const TeamSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const TeamInfo = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 27px;
  border-radius: 4px 0px 0px 4px;
  width: 166px;
  .tema-info-name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: #fff;
    &-loc {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
    }
    &-need {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
    }
  }
`;
export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #fff;
  }
  img {
    width: 50px;
    height: 50px;
    display: block;
    object-fit: cover;
  }
`;
export const TeamPosition = styled.ul`
  display: flex;
  align-items: center;
`;
export const TeamPositionItem = styled.li`
  padding: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3e464f;
  ${(props) =>
    props.primary &&
    css`
      color: #004ea3;
    `};
`;

export const PlayerList = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 48px;
  gap: 8px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #004ea3;
  }
`;
