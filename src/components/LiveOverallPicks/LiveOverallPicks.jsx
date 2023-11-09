import React from 'react'
// Styles
import {
  Content,
  LivePickHead,
  Wrapper,
  FilterByTeam,
  PlayerPick,
} from "./LiveOverallPicks.styles";
import MySelectTeam from '../MySelect/MySelectTeam';
import { team, teamSelect, tradesTeams } from '../OfferTrade/data';
import teamimg from "../../assets/img/team.png"
const LiveOverallPicks = () => {
  return (
    <Wrapper>
      <LivePickHead>
        <h2>Recent Picks</h2>
      </LivePickHead>
      <Content>
        <FilterByTeam>
          <p>Filter by Team</p>
          <MySelectTeam
            name={team.name}
            dataValue={"mainTeam" === "mainTeam" ? tradesTeams : teamSelect}
            disabled={
              "mainTeam" === "mainTeam"
                ? teamSelect.map((item) => item.name)
                : ""
            }
            handleChange={(item) => {
              const [teamFilter] = tradesTeams.filter(
                (team) => team.name === item.value
              );
            }}
          />
        </FilterByTeam>

        <PlayerPick>
          <table>
            <thead>
              <tr>
                <th>Pick</th>
                <th>Owner</th>
                <th>Team</th>
                <th>Player</th>
                <th>Pos</th>
                <th>College</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>1:1</td>
                <td></td>
                <td>
                  <img src={teamimg} alt={"team"} />
                </td>
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
}

export default LiveOverallPicks