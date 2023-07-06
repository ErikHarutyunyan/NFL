import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { IoRefreshOutline } from "react-icons/io5";
import {
  getTeamList,
  selectTeamList,
  setCurrentPageList,
  setPositionPlayerList,
  setSearchPlayerList,
} from "../../app/features/teamList/teamListSlice";
import Spinner from "../../components/Spinner/Spinner";

// Img
import infoImg from "../../assets/img/Info.png";

// Styles
import {
  SelectTeam,
  NumItem,
  NumWrapper,
  DraftPlayerWrapper,
  DraftPlayerItems,
  DraftPlayerItem,
} from "../../components/DraftPlayerChoose/DraftPlayerChoose.styles";

import Search from "../../components/Search/Search";
import { selectGroup } from "../../app/features/group/groupSlice";

import Pagination from "../../components/Pagination/Pagination";
import { TeamListWrap } from "./TeamList.styles";
import { getTradeValue } from "../../app/features/draftConfig/drafConfigAction";

// Player Show Count
const PageSize = 10;

const TeamList = () => {
  const [searchParams] = useSearchParams();
  const { state: team } = useLocation();

  const listQuery = searchParams.get("list") || "";
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const groups = useSelector(selectGroup);
  const playersDraft = useSelector(selectTeamList);
  const { position } = useSelector(selectTeamList);

  useEffect(() => {
    dispatch(getTeamList(listQuery));
    dispatch(getTradeValue(7));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchPlayerList(searchValue));
      dispatch(setCurrentPageList(1));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [setSearchValue, searchValue]);
  const currentTableData = useMemo(() => {
    if (playersDraft?.results.length) {
      
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
      if (playersDraft.position && playersDraft.position !== "All") {
        playersData = playersDraft.results.filter((player) => {
          const position = player.position;
          return position.toLowerCase() === playersDraft.position.toLowerCase();
        });
      }

      const playersDataSlice = playersData.slice(firstPageIndex, lastPageIndex);
      return { playersData, playersDataSlice };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    playersDraft.currentPage,
    playersDraft.search,
    playersDraft.position,
    playersDraft.results,
    playersDraft.loading,
  ]);
  return (
    // <>{list}</>
    <>
      {playersDraft.loading ? (
        <Spinner />
      ) : (
        <TeamListWrap>
          <SelectTeam>
            <div className="team">
              <img src={team.logo} alt="" width={60} />
              <h2>{team.name}</h2>
            </div>
            <div>
              <button>
                <IoRefreshOutline />
                Refresh 
              </button>
            </div>
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
                    onClick={() => {
                      dispatch(setCurrentPageList(1));
                      dispatch(setPositionPlayerList(item.split(" ")[0]));
                    }}
                    className={
                      position === item.split(" ")[0] ? "active" : null
                    }
                  >
                    <span>{item.split(" ")[0]}</span>
                  </NumItem>
                );
              })}
          </NumWrapper>
          <DraftPlayerWrapper>
            <DraftPlayerItems>
              <>
                {playersDraft.results.length > 0 ? (
                  currentTableData?.playersDataSlice.map((item, idx) => {
                 
                 
                    const colorBackground =
                      item?.ranking === 1
                        ? "#FFF1ED"
                        : item?.ranking > 1 && item?.ranking < 9
                        ? "#FFF9E5"
                        : "#fff";
                    return (
                      <DraftPlayerItem key={idx} backColor={colorBackground}>
                        <div className="player-draft">
                          <div className="player-td player-rank">
                            <p>Rank</p>
                            <span>{item.ranking}</span>
                          </div>
                          <div className="player-td player-adp">
                            <p>ADP</p>
                            <span>{item?.adp}</span>
                          </div>
                          
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
                        </div>
                      </DraftPlayerItem>
                    );
                  })
                ) : (
                  <>Not Found</>
                )}
                {currentTableData?.playersData.length ? (
                  <Pagination
                    totalCount={currentTableData?.playersData.length}
                    pageSize={PageSize}
                    currentPage={playersDraft.currentPage}
                    previous={playersDraft.previous}
                    next={playersDraft.next}
                    onPageChange={(page) => {
                      dispatch(setCurrentPageList(page));
                    }}
                  />
                ) : (
                  <>Not Found</>
                )}
              </>
            </DraftPlayerItems>
          </DraftPlayerWrapper>
        </TeamListWrap>
      )}
    </>
  );
};

export default TeamList;
