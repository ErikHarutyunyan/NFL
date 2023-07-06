import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
// Styles
import { PlayerName, PlayerPos, Wrapper } from "./DraftViewAsign.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  delRoundBPA,
  fanaticModeBefore,
  selectDraftConfig,
  setCountRender,
  setDraftPlayersAction,
  setSelectCardDepth,
  setTradeValue,
  uniqPosition,
} from "../../app/features/draftConfig/draftConfigSlice";
import { delPlayersDraft } from "../../app/features/playersDraft/playersDraftSlice";
import { POSITIONS_COLOR } from "../../utils/constants";
import { draftAutoSettings, draftDisableSettings } from "./DraftSettings";

const Delayed = ({ children, waitBefore = 500, scroll = null }) => {
  const [isShow, setIsShow] = useState(false);
  const { countRender } = useSelector(selectDraftConfig);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
      scroll.teamRef?.current?.scrollTo(0, (countRender - 1) * 75);
    }, waitBefore);
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitBefore]);

  function Animation() {
    return <CircularProgress style={{ position: "absolute", right: "10%" }} />;
  }

  return isShow ? children : Animation();
};

const DraftViewAsign = ({ players, thisId }) => {
  const dispatch = useDispatch();
  const {
    pauseId,
    timeSpeed,
    tradeValue,
    loading,
    teamPickIndex,
    countRender,
    draftCardDepth,
    draftRandomnessTeam,
    roundBPA,
    roundDepth,
    round,
    selectCardDepth,
    roundStart,
    fanaticIndexPosition,
    fanaticPickId,
    fanaticPlayerBefore,
    fanaticChallenge,
    advancedSetting,
    teamUniqPosition,
    fanaticMode
  } = useSelector(selectDraftConfig);
  const divRef = useRef(null);
  const roundArr = useRef([]);
 

  const teamRef = useRef(null);

  const advancingSettings = useCallback(() => {
    if (
      tradeValue?.mouthing &&
      !players.loading &&
      players.status &&
      countRender < tradeValue.results.length &&
      (countRender + 1 < teamPickIndex[0] || !teamPickIndex.length) &&
      (countRender + 1 < fanaticIndexPosition[0] ||
        !fanaticIndexPosition.length)
    ) {
      if (!pauseId.length) {
        let newTradeValue = {};
        let tradeValueTeam = structuredClone(tradeValue.results[countRender]);
        let fanaticFlag = false;
        let teamDepth = [];

        const playersAll = players.results;
        let player = {};
        let roundIndexBool = false;
        let roundIndex = +tradeValueTeam.round_index_number;
        // Team add Card Depth
        if (countRender > 0 && roundBPA.length !== 0) {
          let teamSlice = tradeValue.results.slice(0, countRender + 1);
          teamSlice.forEach((team) => {
            if (team.city === tradeValueTeam.city) {
              teamDepth = team;
            }
          });
        }

        if (
          roundBPA.length &&
          !roundBPA.includes(+tradeValueTeam.round_index_number)
        ) {
          roundIndexBool = true;
          dispatch(delRoundBPA(tradeValueTeam.round_index_number));
        }

        if (
          fanaticPickId?.includes(tradeValueTeam["pick"]) &&
          +tradeValueTeam["round_index_number"] === fanaticChallenge[0]?.mode &&
          !fanaticMode
        ) {
          player = fanaticPlayerBefore.filter(
            (item) => item.pick === tradeValueTeam["pick"]
          )[0];
        } else {
          player = draftAutoSettings(
            draftCardDepth,
            draftRandomnessTeam,
            roundBPA,
            roundDepth,
            round,
            playersAll,
            teamDepth,
            tradeValueTeam,
            selectCardDepth,
            roundIndexBool,
            roundIndex
          );
        }
        if(fanaticMode) {
          
          if (
            tradeValueTeam.iteration > 1 &&
            fanaticPlayerBefore[0].pick === tradeValueTeam.pick
          ) {
            
            player = fanaticPlayerBefore[0];
            fanaticFlag = true
            
          } else {
            player = draftAutoSettings(
              draftCardDepth,
              draftRandomnessTeam,
              roundBPA,
              roundDepth,
              round,
              playersAll,
              teamDepth,
              tradeValueTeam,
              selectCardDepth,
              roundIndexBool,
              roundIndex
            );
          }
        }
        debugger
        const { player: playerItem, playerDepth } = player;
        tradeValueTeam["player"] = playerItem;
        tradeValueTeam["playerDepth"] = playerDepth;
        let newTradeValueResults = tradeValue.results.map((team) => {
          if (team["index_position"]) {
            return team["index_position"] === tradeValueTeam["index_position"]
              ? tradeValueTeam
              : team;
          } else {
            return team.index === tradeValueTeam.index ? tradeValueTeam : team;
          }
        });

        newTradeValue = {
          ...tradeValue,
          results: newTradeValueResults,
        };
        if (!fanaticMode) {
          !selectCardDepth.includes(playerDepth) &&
            dispatch(setSelectCardDepth(playerDepth));
        }

        dispatch(setTradeValue(newTradeValue));
        dispatch(setDraftPlayersAction(tradeValueTeam));
        dispatch(delPlayersDraft([playerItem], tradeValueTeam?.iteration));
        dispatch(setCountRender());
        if(fanaticFlag) {
          dispatch(fanaticModeBefore({player, action: "dec" }));
        }
          
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradeValue.mouthing, players.loading, pauseId, players.status]);

  const advancingSettingsDefault = useCallback(() => {
    if (
      tradeValue?.mouthing &&
      !players.loading &&
      players.status &&
      countRender < tradeValue.results.length &&
      (countRender + 1 < teamPickIndex[0] || !teamPickIndex.length) &&
      !pauseId.length
    ) {
      let newTradeValue = {};
      let tradeValueTeam = structuredClone(tradeValue.results[countRender]);
      
      const playersAll = players.results;
      let player = {};
      let roundIndex = +tradeValueTeam.round_index_number;
      player = draftDisableSettings({
        teamUniqPosition,
        playersAll,
        tradeValueTeam,
        roundIndex,
        round,
      });
      tradeValueTeam["player"] = player;

      let newTradeValueResults = tradeValue.results.map((team) => {
        return team.index === tradeValueTeam.index ? tradeValueTeam : team;
      });

      newTradeValue = {
        ...tradeValue,
        results: newTradeValueResults,
      };

      dispatch(
        uniqPosition({
          name: tradeValueTeam.round.name,
          position: player.position,
        })
      );
      dispatch(setTradeValue(newTradeValue));
      dispatch(setDraftPlayersAction(tradeValueTeam));
      dispatch(delPlayersDraft([player], tradeValueTeam?.iteration));
      dispatch(setCountRender());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradeValue.mouthing, players.loading, pauseId, players.status]);

  useEffect(() => {
    if (!advancedSetting) {
      advancingSettings();
      return;
    }
    advancingSettingsDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradeValue.mouthing, players.loading, pauseId, players.status]);

  function delayTime({ id, indexPosition }) {
    const isTeamPick = (currentValue) => currentValue > id;
    const isIndexPosition = (currentValue) => currentValue > indexPosition;

    if (fanaticIndexPosition.length) {
      return fanaticIndexPosition.every(isIndexPosition)
        ? indexPosition * (1000 / timeSpeed / indexPosition)
        : 0;
    } else if (!fanaticIndexPosition.length) {
      return teamPickIndex.every(isTeamPick) ? id * (1000 / timeSpeed / id) : 0;
    } else {
      return;
    }
  }
  return (
    <Wrapper ref={divRef}>
      {players.length > 0 && loading ? <CircularProgress /> : null}
      <ul ref={teamRef}>
        {tradeValue?.results?.map((team, idx) => {
          const {
            index: id,
            round_index: roundIndex,
            index_position: indexPosition,
            round: { logo, name },
            iteration,
          } = team;

          const checkTeam = delayTime({ id, indexPosition });
          const time = thisId ? +(id - thisId) * (1000 / timeSpeed) : checkTeam;
          const teamActive = fanaticIndexPosition.length
            ? fanaticIndexPosition.includes(indexPosition)
            : teamPickIndex.includes(id);

          // Round Text
          if (roundStart.includes(id)) {
            roundArr.current = [];
          }
          const roundCheck = roundArr.current.includes(roundIndex)
            ? false
            : roundArr.current.push(roundIndex);

          return (
            <React.Fragment key={idx}>
              {roundCheck ? (
                <li className="round" key={Math.random()}>
                  {roundIndex} {iteration && `Iteration ${iteration}`}
                </li>
              ) : null}
              <li
                key={id}
                className={`${
                  teamActive ? "player-team active" : "player-team"
                }`}
              >
                {team?.index_position ? (
                  <>
                    <div className="pick">
                      <p>Pick</p>
                      <p>{id}</p>
                    </div>
                  </>
                ) : (
                  <div className="pick">
                    <p>Pick</p>
                    <p>{id}</p>
                  </div>
                )}

                <div className="player-team-info">
                  <img src={logo ? logo : ""} alt={name} />

                  {!!checkTeam && team?.player ? null : (
                    <>
                      {teamActive ? (
                        <>
                          <div className="player-click">On The Clock</div>
                        </>
                      ) : (
                        <>
                          <div className="player-dashed">- - -</div>
                        </>
                      )}
                    </>
                  )}
                  {!!checkTeam && (
                    <Delayed
                      waitBefore={time}
                      scroll={{
                        teamRef,
                        id,
                        thisId,
                        player: team.player ? true : false,
                      }}
                    >
                      {team?.player ? (
                        <>
                          <PlayerName>{team?.player?.player}</PlayerName>
                          <PlayerPos
                            backColor={POSITIONS_COLOR[team?.player?.position]}
                          >
                            {team.player.position}
                          </PlayerPos>
                          <p className="player-college">
                            {team?.player?.school}
                          </p>
                        </>
                      ) : (
                        <CircularProgress
                          style={{ position: "absolute", right: "10%" }}
                        />
                      )}
                    </Delayed>
                  )}
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default DraftViewAsign;
