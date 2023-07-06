import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 588px;
  height: 100%;
  max-height: 1450px;

  ul {
    overflow-x: hidden;
    max-height: 1450px;
    position: relative;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      /* background:#1B90D2 */
      background: #20a446;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    }
  }
  ul li {
    position: relative;
    height: 75px;
  }
  .round {
    padding: 15px 0px 15px 16px;
    color: #3e464f;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    background: #cad2da;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .pick {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .player-dashed {
    color: #989ea4;
    font-size: 25px;
  }
  .player-team {
    display: flex;
    align-items: center;
    gap: 25px;
    border-bottom: 1px solid #afb4b9;
    background-color: #fff;
    padding: 12px 21px 12px 13px;
    &.active {
      border-left: 9px solid #2d7341;
    }
  }
  .player-team-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;
export const PlayerPos = styled.div`
  font-size: 16px;
  line-height: 27px;
  color: #0e1118;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.backColor || ""};
`;

export const PlayerName = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #004ea3;
`;