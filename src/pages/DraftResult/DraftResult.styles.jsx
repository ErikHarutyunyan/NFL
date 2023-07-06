import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  &.main-container {
    margin-top: 44px;
  }
  & .draftResultTitle {
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 57px;
    color: #000000;
  }
  & .share-draft-wrap {
    margin: 24px 0;
  }
  & .share-draft {
    display: flex;
    align-items: center;
    gap: 24px;
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #000000;
    }
  }
`;

export const DraftResultShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .enter-draft-btn {
    margin: 0;
  }
`;
export const DraftResultWrap = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 480px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 100px;
  min-height: 963px;
`;

export const DraftResultHead = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  background: #16181a;
  border-radius: 10px 10px 0px 0px;
  padding-right: 16px;
  flex-wrap: wrap;
`;
export const DraftTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const DraftTeamName = styled.div`
  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;
export const DraftLogoTeam = styled.div`
  padding: 12px 60px;
  background-color: ${(props) => props.backColor || "transparent"};
  border-radius: 4px 0px 0px 0px;
  img {
    width: 100%;
    max-width: 94px;
    object-fit: cover;
  }
`;

export const DraftResultRound = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cad2da;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-wrap: wrap;
`;

export const DraftResultRoundItem = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #0e1118;
  padding: 15px 16px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: #004ea3;
      color: #fff;
    `}
`;
export const DraftResultFull = styled.div`
  display: flex;
  gap: 21px;
  align-items: flex-start;
`;
export const DraftResultTeam = styled.div`
  background-image: url(${(props) => props.backImg || ""});
  background-position: center;
  background-repeat: repeat-y;
  height: 992px;
  overflow-x: auto;
  background-size: 70% 46%;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #205a98;
  }
  ::-webkit-scrollbar-thumb:hover {
  }
`;

export const DraftResultTeamItem = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  border-bottom: 1px solid #e8ebef;
  padding: 16px;

  /* & div {
    width: calc(100% / 6);
    text-align: center;
  } */
`;
export const DraftResultTeamCol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  :last-child {
    margin-top: 28px;
  }
  .draft-result-team {
    &-round {
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      color: #3e464f;
    }
    &-adp {
      color: #50647b;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
    &-log {
      display: flex;
      align-items: center;
      gap: 20px;
      img {
        width: 50px;
        height: auto;
      }
      p {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #004ea3;
      }
    }
    &-rating {
      display: flex;
      align-items: center;
      gap: 5px;
      padding-right: 22px;
      justify-content: flex-end;
    }
    &-college {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 31px;
      color: #46484a;
      margin-right: 50px;
    }
    &-pos {
      padding: 4px 16px;
      background-color: ${(props) => props.posColor || ""};
      border-radius: 4px;
    }
  }
`;
export const GradeBox = styled.p`
  width: 14px;
  height: 14px;
  background: ${({ color }) => (color ? `${color}` : "#3adf00")};
`;
export const DraftResultPick = styled.div`
  width: 100%;
  max-width: 953px;
  & > div {
    margin-bottom: 30px;
  }
`;
export const DraftResultPickWrap = styled.div`
  width: 100%;
  background-image: url(${(props) => props.backImg || ""});
  background-size: 60%;
  background-position: center;
  background-repeat: repeat-y;
  background-color: #fff;
  overflow: hidden;
  & .draft-result-pick {
    &-logo {
      display: flex;
      align-items: center;
      color: #fff;
      gap: 20px;
      & img {
        display: block;
        width: 50px;
        height: auto;
      }
    }
    &-item {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      flex-wrap: wrap;
      /* background: #ffffff; */
      padding: 30px 16px;
      border: 1px solid #e8ebef;

      &-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 27px;
        margin-bottom: 26px;
      }
      &-text {
        display: flex;
        align-items: center;
        gap: 35px;
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }
    &-round {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #3e464f;
      max-width: 60px;
      width: 100%;
    }
    &-adp {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #004ea3;
      max-width: 60px;
      width: 100%;
    }
    &-name {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #0e1118;
      max-width: 200px;
      width: 100%;
      p:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #989ea4;
      }
    }
    &-pos {
      border-radius: 4px;
      padding: 4px 16px;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #0e1118;
      }
    }
    &-rating {
      color: #46484a;
      > p {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    }
    &-rating-item {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #46484a;
      gap: 5px;
      max-width: 60px;
      width: 100%;
      justify-content: flex-end;
      &-block {
        width: 14px;
        height: 14px;
        background: #3adf00;
      }
      p {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #46484a;
      }
    }
  }
`;
export const DraftResultPickFooter = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  background-color: #fff;
  .draft-now {
    display: flex;
    background: #0e1118;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    flex: 50%;
    padding: 8px 0px 8px 32px;
    gap: 5px;
    align-items: center;
    a {
      color: inherit;
      text-decoration: underline;
    }
  }
  .draft-overall {
    display: flex;
    gap: 20px;
    flex: 50%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
    > p {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #989ea4;
    }
    &-grade {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #46484a;
    }
  }
`;
export const DraftResultPos = styled.div`
  background-color: ${(props) => props.posColor || ""};
`;
export const DraftResultFooter = styled.div`
  background: #cad2da;
  border-radius: 0px 0px 10px 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #022142;
  text-align: center;
  padding: 12px 0;
`;

export const BadgesItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 30px;
  flex-wrap: wrap;
  row-gap: 10px;
  background: #16181a;
  border-radius: 10px 10px 0px 0px;
  margin-top: 24px;
  padding: 8px 25px;
`;
export const MySelectWrap = styled.div`
  /* width: 100%;
  max-width: 432px; */
`;

export const TradesWrap = styled.div`
  background-color: #fff;
`;
export const TradesItems = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  padding: 40px 32px;
  .line {
    width: 2px;
    background-color: #cad2da;
  }
`;
export const TradesItem = styled.div`
  font-size: 14px;
  flex: 1;
  :last-child {
    margin-left: 40px;
  }
  img {
    width: 70px;
    height: auto;
  }
  .trades {
    &-player {
      margin-bottom: 8px;
      h6 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #0e1118;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #0e1118;
      }
    }
    &-pick {
      margin-bottom: 24px;
      h6 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #0e1118;
      }
      span {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #0e1118;
      }
    }
    &-years {
      h6 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #0e1118;
      }
      span {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #0e1118;
      }
    }
  }
  & > div:not(:first-child, :nth-child(2)) {
    margin-top: 16px;
  }
`;

export const MockDraftWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-bottom: 23px;
  .downland-btn {
    display: flex;
    align-items: center;
    color: #004ea3;
    gap: 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #004ea3;
    cursor: pointer;
  }
  .downland-copy {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #004ea3;
    cursor: pointer;
  }
`;
