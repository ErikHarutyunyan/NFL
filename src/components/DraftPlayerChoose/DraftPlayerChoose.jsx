import React, { useEffect, useMemo, useState } from "react";
// utils
import { POSITIONS_COLOR } from "../../utils/constants";
import Search from "../Search/Search";

import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "../../app/features/group/groupSlice";
import {
  delFanaticPosition,
  delPauseId,
  delTeamsRound,
  fanaticModeBefore,
  fanaticPlayer,
  selectDraftConfig,
  setCountRender,
  setDraftPlayersAction,
  setStatus,
  setTradeValue,
} from "../../app/features/draftConfig/draftConfigSlice";

// Img
import infoImg from "../../assets/img/Info.png";
import pauseImg from "../../assets/img/pause.png";

// styles
import {
  Wrapper,
  SelectTeam,
  NumItem,
  NumWrapper,
  DraftPlayerWrapper,
  DraftPlayerItems,
  DraftPlayerItem,
  PicksInfo,
  TeamPickIndex,
} from "./DraftPlayerChoose.styles";

import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import {
  delPlayersDraft,
  playerPositionMulti,
  setCurrentPage,
  setPlayerManualChoose,
  setPositionPlayersDraft,
  setSearchPlayers,
} from "../../app/features/playersDraft/playersDraftSlice";
import { percentPick, upUsersCals } from "../../utils/utils";
import { Switch } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../ErrorFallBack/ErrorFallBack";
import {
  manualTradeAction,
  setAcceptTrade,
  setChangeTrades,
  setResetSelectTeam,
} from "../../app/features/trades/tradesSlice";

const PageSize = 10;
const DraftPlayerChoose = ({ playersDraft, draftStatus, setThisId }) => {
  const groups = useSelector(selectGroup);
  const [colorShow, setColorShow] = useState(true);
  const {
    tradeValue,
    countRender,
    status,
    teamPickIndex,
    fanaticIndexPosition,
    fanaticChallenge,
    fanaticMode,
  } = useSelector(selectDraftConfig);
  const dispatch = useDispatch();
  const draftBtnDisable = draftStatus === "red" ? true : false;
  const [searchValue, setSearchValue] = useState("");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (playersDraft.currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    // if (draftPlayers.length > 0) {
    let playersData = playersDraft.results;
    if (playersDraft.search) {
      playersData = playersDraft.results.filter((player) => {
        const name = player.player.toLowerCase();
        return name.includes(playersDraft.search.toLowerCase());
      });
    }
    if (
      playersDraft.position.length &&
      !playersDraft.position.includes("All")
    ) {
      playersData = playersDraft.results.filter((player) => {
        const position = player.position;
        return playersDraft.position.includes(position);
        // return position.toLowerCase() === playersDraft.position.toLowerCase();
      });
    }

    const playersDataSlice = playersData.slice(firstPageIndex, lastPageIndex);
    return { playersData, playersDataSlice };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    playersDraft.currentPage,
    playersDraft.search,
    playersDraft.position,
    playersDraft.results,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchPlayers(searchValue));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [setSearchValue, searchValue]);

  const playerConcat = (playerItem, teamId, upPlayers = {}, idx) => {
    const teamItem = structuredClone(tradeValue.results[teamId - 1]);
    const pickTeam = teamItem["pick"];
    teamItem["player"] = playerItem;
    teamItem["playerDepth"] = idx + 1;

    const newTradeValue = tradeValue.results.map((item) => {
      if (
        item.index === teamItem.index &&
        item?.index_position === teamItem?.index_position
      ) {
        return teamItem;
      }
      return item;
    });

    if (fanaticChallenge.length) {
      if (fanaticChallenge[0].mode === +teamItem.round_index_number) {
        dispatch(
          fanaticPlayer({
            pick: pickTeam - 1,
            player: playerItem,
            playerDepth: idx + 1,
            round: +teamItem.round_index_number,
          })
        );
      }
    }
    if (fanaticMode) {
      dispatch(
        fanaticModeBefore({
          player: {
            pick: pickTeam - 1,
            player: playerItem,
            playerDepth: idx + 1,
            round: +teamItem.round_index_number,
          },
          action: "inc",
        })
      );
    }
    const playerItemPos = {
      ...playerItem,
      roundTeam: +teamItem.round_index_number,
    };

    dispatch(delPlayersDraft([playerItemPos]));
    dispatch(setTradeValue({ ...tradeValue, results: newTradeValue }));
    dispatch(setDraftPlayersAction({ ...teamItem, upPlayers }));
  };

  const playerChoose = (item, bpa) => {
    let team = teamPickIndex[0] ?? fanaticIndexPosition[0];
    const teamItem = structuredClone(tradeValue.results[team - 1]);
    let playerItem = { ...item };
    let percentPlayers = [];
    const teamName = tradeValue.results[team - 1].round.name;
    const teamValue = +tradeValue.results[team - 1].value;

    const realValue = teamValue >= item[teamName] ? teamValue : item[teamName];
    // if (bpa > 0 && bpa < 11) {
    const pricentValue = percentPick(realValue, item[teamName]);
    let playerItemsSlice = playersDraft.results.slice(0, 10);
    playerItemsSlice.push(playerItem);

    // for (let i = 0; i < playersDraft.results.length; ++i) {
    //   if (playersDraft.results[i].id === playerItem.id) {
    //     playerItemsSlice.push(playersDraft.results[i]);
    //     break;
    //   } else {
    //     playerItemsSlice.push(playersDraft.results[i]);
    //   }
    // }

    percentPlayers = upUsersCals(playerItemsSlice, pricentValue, teamName);
    playerItem = { ...item, [teamName]: item.value + pricentValue };

    // }
    const playerItemPos = {
      ...playerItem,
      roundTeam: +teamItem.round_index_number,
    };

    dispatch(setCurrentPage(1));
    dispatch(setPositionPlayersDraft(["All"]));
    playerConcat(playerItem, team, percentPlayers, bpa);
    dispatch(setPlayerManualChoose(playerItemPos));
    dispatch(delTeamsRound(teamPickIndex[0]));
    dispatch(delFanaticPosition(fanaticIndexPosition[0]));

    setThisId(teamPickIndex[0]);
    // setChangeId(true);
    dispatch(setCountRender());
  };

  return (
    <>
      {playersDraft.loading ? (
        <Spinner />
      ) : (
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Wrapper>
            <SelectTeam>
              <div className="team">
                {tradeValue?.results && (
                  <>
                    <img
                      src={
                        status === "red"
                          ? tradeValue?.results[countRender - 1].round?.logo
                          : tradeValue?.results[countRender].round?.logo
                      }
                      alt={
                        status === "red"
                          ? tradeValue?.results[countRender - 1].round.name
                          : tradeValue?.results[countRender].round.name
                      }
                      width={60}
                    />
                    <h2>
                      {status === "red"
                        ? tradeValue?.results[countRender - 1].round.name
                        : tradeValue?.results[countRender].round.name}
                    </h2>
                  </>
                )}
              </div>
              {fanaticChallenge.length === 0 ? (
                <PicksInfo>
                  <p>Remaining picks</p>
                  <TeamPickIndex>
                    {teamPickIndex.map((item, idx) => {
                      return (
                        <span key={idx}>
                          {item}
                          {idx === teamPickIndex.length - 1 ? null : ","}
                        </span>
                      );
                    })}
                  </TeamPickIndex>
                </PicksInfo>
              ) : null}
            </SelectTeam>
            <Search
              value={searchValue}
              handleChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <NumWrapper>
              {groups?.positions &&
                groups.positions.map((item, idx) => {
                  const id = idx + 1;
                  return (
                    <NumItem
                      key={id}
                      backColor={POSITIONS_COLOR[item.split(" ")[0]]}
                      onClick={() => {
                        dispatch(setCurrentPage(1));
                        dispatch(playerPositionMulti(item.split(" ")[0]));
                      }}
                      className={
                        playersDraft.position.includes(item.split(" ")[0])
                          ? "active"
                          : null
                      }
                    >
                      <span>{item.split(" ")[0]}</span>
                    </NumItem>
                  );
                })}
              <div>
                Show positions colors in list
                <Switch
                  defaultChecked
                  onChange={() => setColorShow((prev) => !prev)}
                />
              </div>
              {fanaticChallenge.length === 0 && !fanaticMode ? (
                <div className="trades-btn">
                  <button
                    onClick={() => {
                      dispatch(setChangeTrades(false));
                      dispatch(
                        manualTradeAction({ countRender, manualTrade: true })
                      );
                      dispatch(setResetSelectTeam());
                      dispatch(setAcceptTrade(false));
                    }}
                  >
                    Trades
                  </button>
                </div>
              ) : null}
            </NumWrapper>
            <DraftPlayerWrapper>
              <DraftPlayerItems>
                <>
                  {playersDraft.results.length > 0 &&
                    currentTableData.playersDataSlice.map((item, idx) => {
                      return (
                        <DraftPlayerItem
                          key={idx}
                          backColor={
                            colorShow ? POSITIONS_COLOR[item.position] : ""
                          }
                        >
                          <div className="player-draft">
                            <div className="player-td player-rank">
                              <p>Rank</p>
                              <span>{item?.ranking}</span>
                            </div>
                            <div className="player-td player-rank">
                              <p>BPA</p>
                              <span>{item?.bpa}</span>
                            </div>
                            <div className="player-td player-adp">
                              <p>ADP</p>
                              <span>{item?.adp}</span>
                            </div>
                            {/* <div className="player-td player-adp">
                              <span>{item[`${teamName}`].toFixed(2)}</span>
                            </div> */}

                            <h4 className="player-td player-name">
                              {item.player}
                            </h4>
                            <h4 className="player-td player-position">
                              {item.position}
                            </h4>
                            <h4 className="player-td player-college">
                              {item.school}
                            </h4>
                            <img src={infoImg} alt="info" />
                            <button
                              className="player-td player-draft-btn"
                              disabled={draftBtnDisable}
                              onClick={() => playerChoose(item, item?.bpa)}
                            >
                              Draft
                            </button>
                          </div>
                        </DraftPlayerItem>
                      );
                    })}

                  <Pagination
                    totalCount={currentTableData.playersData.length}
                    pageSize={PageSize}
                    currentPage={playersDraft.currentPage}
                    previous={playersDraft.previous}
                    next={playersDraft.next}
                    onPageChange={(page) => {
                      dispatch(setCurrentPage(page));
                    }}
                  />
                </>
              </DraftPlayerItems>
              {draftBtnDisable && (
                <div className="player-draft-btn-wrap">
                  <button
                    className="player-draft-btn"
                    onClick={() => {
                      dispatch(setStatus("green"));
                      dispatch(delPauseId());
                    }}
                  >
                    <img src={pauseImg} alt="play_pause" />
                    <span>Start Draft</span>
                  </button>
                </div>
              )}
            </DraftPlayerWrapper>
          </Wrapper>
        </ErrorBoundary>
      )}
    </>
  );
};

export default DraftPlayerChoose;
