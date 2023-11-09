import React, { useState } from "react";
// Styles
import {
  LastPick,
  ResultPick,
  ResultTeam,
  LiveFooterBody,
  LiveFooterHead,
  LiveSelect,
  SelectBox,
  SelectBoxItem,
  InfoTrade,
  Wrapper,
} from "./LiveFooter.styles";
import QueueDnD from "../QueueDnD/QueueDnD";
import { CircleX } from "../Icons/Icons";
import {  } from "../QueueDnD/QueueDnD.styles";
import teamImg from "../../assets/img/team.png"
import OfferTrade from "../OfferTrade/OfferTrade";
const LiveFooter = ({handleOverflow}) => {
  const [isQueue, setIsQueue] = useState(false);
  const [isTrade, setIsTrade] = useState(false);
  return (
    <Wrapper>
      <LiveFooterHead>
        <LastPick>Last Pick: QB Will Levis (nrgcolts)</LastPick>
        <LiveSelect className="">
          <SelectBox>
            <div className="info">
              <span>Queue</span>
              <span>32</span>
            </div>
            <button onClick={() => {
              setIsQueue(!isQueue)
              setIsTrade(false);
              handleOverflow(!isQueue);
              }}>
              <CircleX />
            </button>
          </SelectBox>
          <InfoTrade className={isQueue ? "active" : null}>
            <QueueDnD />
          </InfoTrade>
        </LiveSelect>
        <LiveSelect className="">
          <SelectBox>
            <SelectBoxItem>
              <div className="info">
                <p>Trades</p>
              </div>
              <div className="info">
                <span>Incoming</span>
                <span>0</span>
              </div>
              <div className="info">
                <span>Outgoing</span>
                <span>1</span>
              </div>
            </SelectBoxItem>
            <button onClick={() => {
              setIsTrade(!isTrade)
               setIsQueue(false);
               handleOverflow(!isTrade);
              }}>
              <CircleX />
            </button>
            <InfoTrade className={isTrade ? "active" : null}>
              <OfferTrade />
            </InfoTrade>
          </SelectBox>
          <div>{/* <QueueDnD /> */}</div>
        </LiveSelect>
      </LiveFooterHead>

      <LiveFooterBody>
        <ResultPick>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
          <p className="line"></p>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
        </ResultPick>
        <ResultPick>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
          <p className="line"></p>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
        </ResultPick>
        <ResultPick>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
          <p className="line"></p>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
        </ResultPick>
        <ResultPick>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
          <p className="line"></p>
          <ResultTeam>
            <p>1: 4</p>
            <img src={teamImg} alt={"team"} />
          </ResultTeam>
        </ResultPick>
      </LiveFooterBody>
    </Wrapper>
  );
};

export default LiveFooter;
