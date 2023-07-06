import React, { useMemo, useState } from "react";

import { useSelector } from "react-redux";
import { selectDraftConfig } from "../../app/features/draftConfig/draftConfigSlice";
import { selectGroup } from "../../app/features/group/groupSlice";


import PlayerCards from "./PlayerCards";
import PlayerSearch from "./PlayerSearch";
import {
  PlayerFilter,
  PlayerFilterItems,
  SelectWrap,
  TeamNeed,
  TeamPosition,
  TeamPositionItem,
  Wrapper,
} from "./PlayersSelected.styles";
import TeamSelect from "./TeamSelect";

const PlayersSelected = ({ draftPlayers, teamSelect }) => {
  const { teamPickIndexControl } = useSelector(selectDraftConfig);
  const { positions } = useSelector(selectGroup);
  const {tradeValue} = useSelector(selectDraftConfig)

  const [value, setValue] = useState("");
  const [team, setTeam] = useState("All Team");
  const [position, setPosition] = useState("All Positions");
  const teamName = teamSelect.map((item) => item.name);
  const filterDraft = useMemo(() => {
    const myDraft = draftPlayers.filter((item) =>
      teamPickIndexControl.includes(item.index)
    );
    let draftData;
    if (value) {
      draftData = myDraft.filter((item) => {
        return item.player.player.toLowerCase().includes(value.toLowerCase());
      });
    }
    
    if (position !== "All Positions") {
      draftData = myDraft.filter((item) => {
        return item.player.position.toLowerCase() === position.toLowerCase();
      });
    }
    if (team !== "All Team") {
      draftData = myDraft.filter((item) => {
        return item.round.name.toLowerCase() === team.toLowerCase();
      });
    }
    if (team !== "All Team" && position !== "All Positions") {
      draftData = myDraft.filter((item) => {
        return (
          item.round.name.toLowerCase() === team.toLowerCase() &&
          item.player.position.toLowerCase() === position.toLowerCase()
        );
      });
    }

    return draftData ?? myDraft;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team, position, value, draftPlayers]);

  const needsData = team !== 'All Team' ? [tradeValue.results.find(item => {
    return item.team_neads_info.round.name === team;
  })] : []
  
  const handleSearch = (e) => {
    const name = e.target.value;
    setValue(name);
    
    // eslint-disable-next-line
  };
  return (
    <Wrapper>
      <PlayerFilter>
        <h3>Players selected</h3>

        <PlayerFilterItems>
          <p>Filter</p>
          <SelectWrap>
            <div className="team-select">
              <TeamSelect
                customWidth={180}
                // label={team}
                name={team}
                dataValue={teamName}
                handleChange={(item) => setTeam(item.value)}
              />
            </div>
            <div className="position-select">
              <TeamSelect
                customWidth={180}
                // label={team}
                name={position}
                dataValue={positions}
                handleChange={(item) => setPosition(item.value)}
              />
            </div>
            <div className="search-player">
              <PlayerSearch
                placeholder={"Search player"}
                handleChange={handleSearch}
                value={value}
              />
            </div>
          </SelectWrap>
        </PlayerFilterItems>
      </PlayerFilter>
      {needsData.length > 0 ? (
        <TeamNeed>
          <p>Team needs</p>
          <TeamPosition>
            {needsData.map((item, idx) => {
              const { team_neads_info } = item;
              const positions = team_neads_info.team_neads_info
                .map((item) => item.positions)
                .flat();
              return (
                <TeamPosition>
                  {positions.map((position, idx) => {
                    return (
                      <>
                        {idx < 5 ? (
                          <TeamPositionItem primary key={position.id}>
                            {position.name}
                          </TeamPositionItem>
                        ) : (
                          <TeamPositionItem key={position.id}>
                            {position.name}
                          </TeamPositionItem>
                        )}
                      </>
                    );
                  })}
                </TeamPosition>
              );
            })}
          </TeamPosition>
        </TeamNeed>
      ) : null}

      <PlayerCards draft={filterDraft} />
    </Wrapper>
  );
};

export default PlayersSelected;
