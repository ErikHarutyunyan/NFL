import React from 'react'

import {
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { POSITIONS_COLOR } from '../../utils/constants';
import { PlayerItemInfo, PlayerItems, PlayerItemWrap, PlayerPos } from './PlayersSelected.styles'

const PlayerCards = ({ draft }) => {
  
  function Arrow({ children, disabled, onClick }) {
    if (!draft.length) {
      return null;
    }
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          right: "1%",
          opacity: disabled ? "0" : "1",
          userSelect: "none",
          fontSize: "30px",
        }}
      >
        {children}
      </button>
    );
  }
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
    
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <MdOutlineKeyboardArrowLeft />
      </Arrow>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <MdOutlineKeyboardArrowRight />
      </Arrow>
    );
  }
  return (
    <PlayerItems>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {draft.map((item) => {
          const {
            round: { logo },
            player,
          } = item;
          
            return (
              <PlayerItemWrap>
                <PlayerItemInfo>
                  <div className="img-wrap">
                    <img src={logo} alt="team" />
                  </div>
                  <div className="player-name">{player.player}</div>
                  <PlayerPos
                    backColor={POSITIONS_COLOR[player.position]}
                    className="player-position"
                  >
                    {player.position}
                  </PlayerPos>
                </PlayerItemInfo>
              </PlayerItemWrap>
            );

         
        })}
      </ScrollMenu>
    </PlayerItems>
  );
};

export default PlayerCards;