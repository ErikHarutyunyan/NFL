import React from 'react'
import { PickItem, PlayerItem, TradeTeam, TradeTeamItem } from './ModalTrades.styles';

const ModalResultTeam = ({title='',historyTrades=[],mainTeam={},myTeam={},name=''}) => {

  return (

      <TradeTeamItem>
        <h3>{title}</h3>
        <TradeTeam>
          {historyTrades.map((item, idx) => {
            if (
              item.myTeam.name === myTeam.name &&
              item.mainTeam.name === mainTeam.name
            ) {

              return (
                <React.Fragment name={idx}>
                  <img src={item[name].logo} alt={item[name].name} />
                  <p>{item[name].name}</p>
                </React.Fragment>
              );
            } 
            return null;
           
          })}
        </TradeTeam>
        <PickItem>
          <div className="year">2023</div>
          {historyTrades.map((item, idx) => {
            if (
              item.myTeam.name === myTeam.name &&
              item.mainTeam.name === mainTeam.name
            ) {
              return item[name].pick.map((pick) => {
                return <div className="pick-change">{pick.index}</div>;
              });
            } 
            return null;
           
          })}
        </PickItem>
        <PickItem>
          <div className="year">2024</div>
          {historyTrades.map((item, idx) => {
            if (
              item.myTeam.name === myTeam.name &&
              item.mainTeam.name === mainTeam.name
            ) {
              return item[name].pickYear.map((pick) => {
                return (
                  <div name={idx} className="pick-change">
                    {pick.round}
                  </div>
                );
              });
            }
            return null;
            
          })}
        </PickItem>
        <PlayerItem>
          <div className="player">Player</div>
          {historyTrades.map((item, idx) => {
            if (
              item.myTeam.name === myTeam.name &&
              item.mainTeam.name === mainTeam.name
            ) {
              return (
                <p name={idx} className="player-name">
                  <span>{item[name].player?.position} </span>
                  {item[name].player?.player}
                </p>
              );
            }
            return null;
            
          })}
        </PlayerItem>
      </TradeTeamItem>
    
  );
}

export default ModalResultTeam