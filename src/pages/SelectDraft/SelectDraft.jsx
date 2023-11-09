import React from "react";
import { Link } from "react-router-dom";
// styles
import {
  ArrowDiv,
  InfoDiv,
  MultiColumn,
  MultiRow,
  SelectColumn,
  SelectColumns,
  Wrapper,
} from "./SelectDraft.styles";
// images
import infoImg from "../../assets/img/info2.png" 
import { useState } from "react";
import { MULTI_PLAYER_FIND, MULTI_PLAYER_JOIN_TEAM, PROFILE_DRAFT_EVENTS, PROFILE_DRAFT_EVENTS_CREATE } from "../../router/route-path";
function SelectDraft() {
  const [infoHover,setInfoHover] = useState(false)
  const onMouseEnter = () => {
    setInfoHover(true);
  };

  const onMouseLeave = () => {
    setInfoHover(false);
  };

  return (
    <Wrapper>
      <h1>Select Draft Mode</h1>
      <SelectColumns>
        <SelectColumn>
          <h2>Single Player Draft</h2>
          <Link to="/draft-configuration">Single Player</Link>
        </SelectColumn>
        <SelectColumn>
          <h2>Multi-Player Draft</h2>
          <MultiColumn>
            <MultiRow>
              <Link to={MULTI_PLAYER_JOIN_TEAM}>Join Multi-User draft</Link>
              <form action="">
                <input type="number" placeholder="Enter Session Id To Join" />
                <button type="submit">Join</button>
              </form>
            </MultiRow>

            <MultiRow>
              <Link to={PROFILE_DRAFT_EVENTS_CREATE}>
                Create Multi-User draft
              </Link>
              <InfoDiv>
                <img
                  src={infoImg}
                  alt="info"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                ></img>
                <ArrowDiv infoHover={infoHover}>
                  Paid premium members only $29.95
                </ArrowDiv>
              </InfoDiv>
            </MultiRow>
            <MultiRow>
              <Link to={MULTI_PLAYER_FIND}>Find Multi-User drafts</Link>
            </MultiRow>
          </MultiColumn>
        </SelectColumn>
      </SelectColumns>
    </Wrapper>
  );
}

export default SelectDraft;
