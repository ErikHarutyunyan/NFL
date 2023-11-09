import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  selectDraftConfig,
  setTradeValue,
  setTradingSimulatorAction,
  simSimDraftPlayer,
} from "../../app/features/draftConfig/draftConfigSlice";
import {
  delPlayersDraft,
  selectPlayersDraft,
} from "../../app/features/playersDraft/playersDraftSlice";
import {
  BtnWrap,
  ImgWrap,
  ModalBody,
  ModalBodyItems,
  ModalHeader,
  ModalWrap,
  PlayerInfo,
  TeamChange,
} from "./SimulatorToSimulator.styles";
import { CloseIcon, RefreshIcon } from "../Icons/Icons";
import { getSimTradeValue, setSimSimTeam } from "../../app/features/simulatorToSimulator/simulatorToSimulatorSlice";

const MAX_SIM_SIM = 8;
const SimulatorToSimulator = () => {
  const { tradingSimulator, draftPlayers, tradeValue, countRender, round } =
    useSelector(selectDraftConfig);
  const { results: players } = useSelector(selectPlayersDraft);
  const [draftPlayerChoose, setDraftPlayerChoose] = useState([...draftPlayers]);
  const [playersSim] = useState(players.slice(0, 50));
  const [infoChange, setInfoChange] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    dispatch(getSimTradeValue());
    dispatch(setTradingSimulatorAction(false));
  };
  const isFound = useRef(false);
  const dispatch = useDispatch();

  const getTeamPosition = (teams) => {
    const allPositions = [];
    const teamsPosition = teams.map((team) => {
      const {
        team_neads_info: teamNeedsInfo,
        id,
        round: { logo, index: roundIndex },
        tm,
      } = team;

      const positionsTeam = teamNeedsInfo?.team_neads_info
        .map((item) => item.positions)
        .flat();
      allPositions.push(...positionsTeam);
      return { id, positionsTeam, logo, tm, roundIndex };
    });
    return { teamsPosition, allPositions };
  };

  const changePlayerTeam = (teamsPositions) => {
    let teams = teamsPositions.teamsPosition;
    const newTeams = [];
    for (const player of playersSim) {
      const position = player.position;

      const sometimeTeamData = [];
      teams.forEach((team) => {
        let step = team.positionsTeam.findIndex((pos) => pos.name === position);
        if (step !== -1) {
          isFound.current = true;
        }

        step = step === -1 ? 99 : step;
        sometimeTeamData.push({ ...team, step, player });
      });
      if (isFound.current) {
        sometimeTeamData.sort((s1, s2) => s1.step - s2.step);
        teams = teams.filter((team) => team.id !== sometimeTeamData[0].id);
        isFound.current = false;
        newTeams.push(sometimeTeamData[0]);
      }
      if (newTeams.length === tradingSimulator) {
        break;
      }
    }
    return newTeams;
  };
  useEffect(() => {
    if (MAX_SIM_SIM < draftPlayerChoose.length) {
      setDraftPlayerChoose(
        draftPlayerChoose.slice(
          draftPlayerChoose.length - MAX_SIM_SIM,
          draftPlayerChoose.length
        )
      );
    }
  }, [draftPlayerChoose]);
  useEffect(() => {
    let roundIndex = parseInt(
      tradeValue.results[countRender + 1].round_index_number
    );
    if (round === 1 || roundIndex === 2) {
      const teamsPositions = getTeamPosition(draftPlayerChoose);
      const newTeam = changePlayerTeam(teamsPositions);
    
      const delPlayers = newTeam.map((item) => item.player);
      const newDraftPlayers = draftPlayers.map((team) => {
        const [player] = newTeam.filter((tm) => tm.id === team.id);
        return {
          ...team,
          player: player?.player || team.player,
        };
      });
      const tradeValueTeam = tradeValue.results.map((team) => {
        const [newTeam] = newDraftPlayers.filter((tm) => tm.id === team.id);
        return {
          ...team,
          ...newTeam,
        };
      });
      
      const newTradeValue = { ...tradeValue, results: tradeValueTeam };
      dispatch(delPlayersDraft([...delPlayers]));
      dispatch(simSimDraftPlayer(newDraftPlayers));
      dispatch(setTradeValue(newTradeValue));
      dispatch(setSimSimTeam(newTeam));
      setInfoChange(newTeam)
      setOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersSim, draftPlayerChoose]);

  return (
    <Modal open={open}>
      <ModalWrap>
        <ModalHeader>
          <h2>Offer Trades</h2>
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </ModalHeader>
        {
          <ModalBody>
            <ModalBodyItems>{infoChange.map(item => {
              return (
                <TeamChange key={item.id}>
                  <PlayerInfo>
                    <p>{item?.player?.player}</p>
                    <p>{item?.player?.position}</p>
                  </PlayerInfo>
                  <RefreshIcon width={30} height={"auto"} />
                  <ImgWrap>
                    <img src={item?.logo} alt={item.tm} />
                  </ImgWrap>
                </TeamChange>
              );
            })}</ModalBodyItems>
            <BtnWrap>
              <button onClick={handleClose}>Continue</button>
            </BtnWrap>
          </ModalBody>
        }
      </ModalWrap>
    </Modal>
  );
};

export default SimulatorToSimulator;
