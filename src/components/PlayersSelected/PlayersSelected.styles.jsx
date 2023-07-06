import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background: #f5faff;
  border-radius: 4px;
  margin-top: 32px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #0e1118;
    flex:1;
  }
`;
export const PlayerFilter = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
`;
export const PlayerFilterItems = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: space-between;
gap:8px;

`
export const PlayerItems = styled.div`
  .react-horizontal-scrolling-menu--inner-wrapper {
    padding-bottom: 24px;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    gap: 16px;
    padding-bottom: 10px;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      /* background-color: #00438b; */
      background: linear-gradient(
        80deg,
        #00438b 0%,
        #07c93e 0.01%,
        #1da945 13.54%,
        #20a446 15.63%,
        #3c7b4e 32.81%,
        #00438b 58.85%,
        rgba(0, 67, 139, 0.76) 94.27%
      );
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    }
  }
`;

export const PlayerPos = styled.div`
  white-space: nowrap;
  user-select: none;
  padding: 10px;
  min-width: 50px;
  text-align: center;
  border-radius: 4px;
  background-color: ${(props) =>
    props.backColor ? `${props.backColor}` : "#fff"};
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
`;
export const PlayerItemWrap = styled.div`
  background-color: #ececec;
  border-radius: 10px;
  padding: 8px 12px;
  max-width: 280px;
  width: 100%;
  user-select: none;
`;
export const PlayerItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 50px;
  justify-content: space-around;
  img {
    display: block;
    object-fit: cover;
    width: 32px;
  }
  .player {
    &-name {
      white-space: nowrap;
      user-select: none;
    }
  }
`;


export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 442px;
  label {
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translate(0, -50%);
  }
  input {
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 400;
    width: 100%;
    padding: 9px 16px;
    background: transparent;
    border: 1px solid #afb4b9;
    border-radius: 4px;
    font-size: 16px;
    line-height: 27px;
    min-height: 60px;
    width: 442px;
    ::placeholder {
      color: #3e464f;
      font-weight: 400;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      color: #3e464f;
    }
    :focus-visible {
      outline-color: #1976d2;
    }
  }
`;


export const SelectWrap=styled.div`
display: flex;
align-items: center;
gap:16px;
  .team-select {
    width: 190px;
  }
  .position-select {
    width: 190px;
  }
  .search-player {
    max-width: 442px;
  }
`;

export const TeamNeed = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px 24px;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #0e1118;
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