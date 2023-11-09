import React from "react";
// Styles
import {
  OfferHead,
  OfferBody,
  OfferSelect,
  Wrapper,
  OfferPickTableWrap,
  OfferPick,
  OfferPending,
} from "./OfferTrade.styles";

import { team, teamSelect, tradesTeams } from "./data";
import MySelectTeam from "../MySelect/MySelectTeam";
import teamImg from "../../assets/img/team.png";
import LivePendingCard from "../LivePendingCard";

const OfferTrade = () => {
  return (
    <Wrapper>
      <OfferHead>
        <h2>Offer Trade</h2>
        <button>Offer trade</button>
      </OfferHead>
      <OfferBody>
        <OfferSelect>
          <p>Select a trade partner</p>
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
        </OfferSelect>
        <OfferPick>
          <div className="offer-pick-head">
            <div className="offer-pick-team">
              <img src={teamImg} alt="" />
              <p>Lorem</p>
            </div>
            <p className="line"></p>
            <div className="offer-pick-team">
              <img src={teamImg} alt="" />
              <p>Lorem</p>
            </div>
          </div>

          <OfferPickTableWrap>
            <table>
              <thead id="mythead">
                <tr>
                  <th>Select</th>
                  <th>Pick</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead id="mythead">
                <tr>
                  <th>Select</th>
                  <th>Pick</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>1:27</td>
                </tr>
              </tbody>
            </table>
          </OfferPickTableWrap>
        </OfferPick>
      </OfferBody>
      <OfferPending>
          <div className="offer-pending-head">
            <h2>Pending trades</h2>
          </div>
      </OfferPending>
      <LivePendingCard/>
    </Wrapper>
  );
};

export default OfferTrade;
