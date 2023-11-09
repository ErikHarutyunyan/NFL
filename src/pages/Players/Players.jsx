import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Slice
import {
  colleageAction,
  getPlayers,
  pageNav,
  positionAction,
  searchPlayers,
  selectPlayers,
} from "../../app/features/players/playersSlice.js";
// Components
import Title from "../../components/Title/Title";
import MySelect from "../../components/MySelect/MySelect";
import Search from "../../components/Search/Search";
import Spinner from "../../components/Spinner/Spinner";
import PlayerItem from "../../components/PlayerItem/PlayerItem";
import Pagination from "../../components/Pagination/Pagination";
// Styles
import {
  Wrapper,
  PlayerSetting,
  SearchWrap,
  SelectWrap,
  TableWrap,
} from "./Players.styles";
import {
  getColleges,
  selectGroup,
  setResetGroup,
} from "../../app/features/group/groupSlice.js";
import { NotFound } from "../../components/NotFound/NotFound.jsx";
import { resPlayersDraft } from "../../app/features/playersDraft/playersDraftSlice.js";

const Players = () => {
  const shouldLog = useRef(true);
  const initial = useRef(true);
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  console.log('players :', players);
  const groups = useSelector(selectGroup);

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(getPlayers());
      // dispatch(getPositions());
      dispatch(getColleges());
    }
    return () => {
      dispatch(setResetGroup());
      dispatch(resPlayersDraft());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      dispatch(searchPlayers(searchValue));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [setSearchValue, searchValue]);

  if (players.loading) {
    return <Spinner />;
  }
  return (
    <Wrapper className="main-container">
      <>
        <Title titleText="Players list" />
        <PlayerSetting>
          <SelectWrap>
            <MySelect
              customWidth={180}
              label={groups.positions[0]}
              name={players.position}
              dataValue={groups.positions}
              handleChange={(item) => dispatch(positionAction(item.value))}
            />

            <MySelect
              customWidth={180}
              label={groups.colleges[0]}
              name={players.colleage}
              dataValue={groups.colleges}
              handleChange={(item) => dispatch(colleageAction(item.value))}
            />
          </SelectWrap>
          <SearchWrap>
            <Search
              value={searchValue}
              handleChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </SearchWrap>
        </PlayerSetting>
        <TableWrap>
          {players.results.length > 0 &&
            players.results.map((player, idx) => {
              return <PlayerItem player={player} key={idx} />;
            })}
          <Pagination
            totalCount={players.count}
            pageSize={players.limit}
            currentPage={players.currentPage}
            previous={players.previous}
            next={players.next}
            onPageChange={(page) => {
              dispatch(pageNav(page));
            }}
          />
        </TableWrap>
      </>
      {!players.loading && players.results.length === 0 && <NotFound />}
    </Wrapper>
  );
};

export default Players;
