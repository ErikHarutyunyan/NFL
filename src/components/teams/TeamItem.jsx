import React from "react";
import { useDispatch } from "react-redux";
import { saveTeams } from "../../app/features/draftConfig/draftConfigSlice";
import { TeamItemDiv } from "./Teams.styles";

export const TeamItem = ({
  teams,
  num,
  teamName,
  teamLogo,
  isChecked,
  item,
  fanaticChallenge,
  teamSelectId
}) => {
  const dispatch = useDispatch();
  const handleClick = (team) => {
    if (fanaticChallenge.length !== 0) {
      if(teamSelectId.includes(team.id) || teamSelectId.length === 0) {
        dispatch(saveTeams(team));
      }
    } else {
       dispatch(saveTeams(team));
    }
  };
  return (
    <TeamItemDiv
      onClick={() => handleClick(item)}
      className={`team-item ${isChecked ? "active" : ""}`}
    >
      <div>
        <span className="num">{item.selection}</span>
        <p className="name">{teamName}</p>
      </div>
      <img src={teamLogo} alt={teamName} />
    </TeamItemDiv>
  );
};
