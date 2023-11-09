import React from 'react'
import { useDispatch } from 'react-redux';
import { choosePick, choosePlayer, teamAction } from '../../app/features/trades/tradesSlice';
import MySelectPlayer from '../MySelect/MySelectPlayer';
import MySelectTeam from '../MySelect/MySelectTeam';
import { ModalBodyItem, PickItem, PickItems } from './ModalTrades.styles';

const ModalChooseTeam = ({title='',team={},tradesTeams=[],teamSelect=[],path=''}) => {

  const dispatch = useDispatch();
  return (
    <ModalBodyItem>
      <h3>{title}</h3>
      <MySelectTeam
        name={team.name}
        dataValue={path === "mainTeam" ? tradesTeams : teamSelect}
        disabled={
          path === "mainTeam" ? teamSelect.map((item) => item.name) : ''
        }
        handleChange={(item) => {
          const [teamFilter] = tradesTeams.filter(
            (team) => team.name === item.value
          );

          dispatch(teamAction({ team: teamFilter, path }));
        }}
      />
      <PickItems>
        <PickItem>
          <div className="year">2023</div>
          <div className="pick-index-wrap">
            {team?.picks?.map((item, idx) => {
              const mainAllIndex = team?.pick.map((item) => item.index);
              return (
                <div
                  key={idx}
                  className={
                    mainAllIndex.includes(item.index)
                      ? "pick-index active"
                      : "pick-index"
                  }
                  onClick={() => {
                    dispatch(
                      choosePick({
                        pick: item,
                        path,
                        pickPath: "pick",
                      })
                    );
                  }}
                >
                  {item.index}
                </div>
              );
            })}
          </div>
        </PickItem>
        <PickItem>
          <div className="year">2024</div>
          <div className="pick-index-wrap">
            {team?.picksYears?.map((item, idx) => {
              const mainAllIndex = team?.pickYear.map((item) => item.id);
              return (
                <div
                  key={idx}
                  className={
                    mainAllIndex.includes(item.id)
                      ? "pick-index active"
                      : "pick-index"
                  }
                  onClick={() => {
                    dispatch(
                      choosePick({
                        pick: item,
                        path,
                        pickPath: "pickYear",
                      })
                    );
                  }}
                >
                  {item.round}
                </div>
              );
            })}
          </div>
        </PickItem>
      </PickItems>
      {team?.players && (
        <MySelectPlayer
          name={team?.player.player ?? team?.players[0].player}
          dataValue={team?.players}
          handleChange={(item) => {
            const [player] = team?.players.filter(
              (team) => item.value === team.player
            );
            dispatch(choosePlayer({ player, path }));
          }}
        />
      )}
    </ModalBodyItem>
  );
}

export default ModalChooseTeam