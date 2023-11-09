import React from 'react'
// Styles
import {
  Wrapper,
  TradeTeam,
  TradeTeamItem,
  TradeAction,
} from "./LivePendingCard.styles";
import teamImg from "../../assets/img/team.png"
const LivePendingCard = () => {
  return (
    <Wrapper>
      <TradeTeam>
        <TradeTeamItem>
          <div className="team-head">
            <img src={teamImg} alt="" />
            <p>Lorem</p>
          </div>
          <h3>Receives</h3>
          <div className="team-pick">
            <p>1:77</p>
            <p>1:77</p>
            <p>1:77</p>
          </div>
          <hr className="line" />
          <div className="team-status">
            <div>
              <p>Pending</p>
            </div>
          </div>
        </TradeTeamItem>
        <hr className="line" />
        <TradeTeamItem>
          <div className="team-head">
            <img src={teamImg} alt="" />
            <p>Lorem</p>
          </div>
          <h3>Receives</h3>
          <div className="team-pick">
            <p>1:77</p>
            <p>1:77</p>
            <p>1:77</p>
          </div>
          <hr className="line" />
          <div className="team-status">
            <div>
              <p>Pending</p>
            </div>
          </div>
        </TradeTeamItem>
      </TradeTeam>
      <TradeAction>
        <button>Accept</button>
        <button>Reject</button>
      </TradeAction>
    </Wrapper>
  );
}

export default LivePendingCard