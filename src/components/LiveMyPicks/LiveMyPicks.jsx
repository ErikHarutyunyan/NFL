import React from "react";
// Styles
import {
  Wrapper,
  LivePickHead,
  Content,
  DraftNeeds,
  PositionWrap,
  PositionItem,
  PlayerPick,
} from "./LiveMyPicks.styles";
import texansImg from "../../assets/img/texans.png";
import { useSelector } from "react-redux";
import { selectGroup } from "../../app/features/group/groupSlice";
import { POSITIONS_COLOR } from "../../utils/constants";
const LiveMyPicks = () => {
  const groups = useSelector(selectGroup);
  return (
    <Wrapper>
      <LivePickHead>
        <div>
          <img src={texansImg} alt={"texans"} />
          <h2>Picks</h2>
        </div>
      </LivePickHead>
      <Content>
        <DraftNeeds>
          <p>Draft Needs:</p>
          <PositionWrap>
            {groups?.positions &&
              groups.positions.slice(1, 7).map((item, idx) => {
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
        </DraftNeeds>
        <PlayerPick>
          <table>
            <thead>
              <tr>
                <th>Pick</th>
                <th>Player</th>
                <th>AXN</th>
                <th>Pes</th>
                <th>College</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </PlayerPick>
      </Content>
    </Wrapper>
  );
};

export default LiveMyPicks;
