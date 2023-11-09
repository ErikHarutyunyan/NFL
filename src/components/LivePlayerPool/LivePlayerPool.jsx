import React, { useState } from "react";
// Styles
import {
  PositionItem,
  PositionWrap,
  Wrapper,
  Content,
  LivePickHead,
  PlayerSettings,
  PlayerFilter,
  PlayerTable,
} from "./LivePlayerPool.styles";
import { useSelector } from "react-redux";
import { selectGroup } from "../../app/features/group/groupSlice";
import { POSITIONS_COLOR } from "../../utils/constants";
import Search from "../Search/Search";
const LivePlayerPool = () => {
  const groups = useSelector(selectGroup);
  const [searchValue, setSearchValue] = useState("");
  return (
    <Wrapper>
      <LivePickHead>
        <h2>Player Pool</h2>
      </LivePickHead>
      <Content>
        <PlayerSettings>
          <PositionWrap>
            {groups?.positions &&
              groups.positions.map((item, idx) => {
                const id = idx + 1;
                return (
                  <PositionItem
                    key={id}
                    backColor={POSITIONS_COLOR[item.split(" ")[0]]}
                    onClick={() => {}}
                  >
                    <span>{item.split(" ")[0]}</span>
                  </PositionItem>
                );
              })}
          </PositionWrap>
          <PlayerFilter>
            <div className="search-player">
              <Search
                value={searchValue}
                handleChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </div>
            <span>Sort by</span>
            <div className="sort-by">
              <input
                type="radio"
                id="rank"
                name="rank_adp"
                defaultValue="Rank"
              />
              <label htmlFor="rank">Rank</label>
            </div>
            <div className="sort-by">
              <input type="radio" name="rank_adp" id="adp" defaultValue="ADP" />
              <label htmlFor="rank">ADP</label>
            </div>
          </PlayerFilter>
        </PlayerSettings>
        <PlayerTable>
          <table>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="player-choose">
                  <input type="checkbox" name="" id="" />
                </div>
              </td>
              <td>
                <div className="player-rank">
                  <h4>Rank</h4>
                  <p>35</p>
                </div>
              </td>
              <td>
                <p className="player-adp"> ADP</p>
              </td>
              <td>
                <p className="player-name">Derrick Henry</p>
              </td>
              <td>
                <PositionItem backColor={POSITIONS_COLOR["WR"]}>
                  <span>{"WR"}</span>
                </PositionItem>
              </td>
              <td>
                <p className="player-state">Georgia</p>
              </td>
            </tr>
          </table>
        </PlayerTable>
      </Content>
    </Wrapper>
  );
};

export default LivePlayerPool;
