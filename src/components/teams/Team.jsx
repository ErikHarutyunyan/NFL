import React, { useEffect} from 'react'
import { TeamItem } from './TeamItem';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getFilterTwoData, getRandom } from "../../utils/utils";
import { useDispatch } from 'react-redux';
import { setDraftRandomnessTeam, setTradingSimulator, setTradingSimulatorAction } from '../../app/features/draftConfig/draftConfigSlice';
import { AllTeams } from './Teams.styles';
import { setRandomAccepted } from '../../app/features/trades/tradesSlice';

export const Team = ({
  teams,
  teamSelectId,
  teamSelect,
  draftRandomness,
  fanaticChallenge,
}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (teams.length && teamSelect.length !== 32) {
      
      const exceptTeam = getFilterTwoData(teams, teamSelectId, "index");
      const exceptTeamId = exceptTeam.map((item) => item.index);
      const draftRandomnessTeam = getRandom(exceptTeamId, draftRandomness);
      teamSelect.length === 1 ? dispatch(setRandomAccepted(true)) : dispatch(setRandomAccepted(false))
      
      dispatch(setDraftRandomnessTeam(draftRandomnessTeam));
    }
     if (teams.length && teamSelect.length > 1) {
      dispatch(setTradingSimulator(1));
      dispatch(setTradingSimulatorAction(false));
     }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamSelectId, draftRandomness]);

  const printContent = () => {
    if (teams?.length) {
      return teams.map((item, i) => {
        const isChecked =
          teamSelectId.findIndex((index) => index === item.index) !== -1;
        return (
          <TeamItem
            key={i + 1}
            id={i}
            num={i + 1}
            item={item}
            teams={teams}
            teamName={item.name}
            teamLogo={item.logo}
            isChecked={isChecked}
            fanaticChallenge={fanaticChallenge}
            teamSelectId={teamSelectId}
          />
        );
      });
    } else {
      return (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );
    }
  };

  return <AllTeams>{printContent()}</AllTeams>;
};
