import { createSlice } from "@reduxjs/toolkit";
import { toggleArrObj } from "../../../utils/utils";
import { getSetting, getTeams, getTradeValue } from "./drafConfigAction";

const initialState = {
  advancedSetting: false,
  teams: [],
  teamSelect: [],
  teamSelectId: [],
  teamSelectIdRound: [],
  teamPickIndex: [],
  teamPickIndexControl: [],
  teamRemoveId: [],
  round: 1,
  positionalNeed: false,
  bpaCalculated: "",
  userQuantity: 3,
  loading: false,
  positionPlayer: ["All"],
  timeSpeed: 5,
  draftPlayers: [],
  draftCardDepth: 8,
  draftRandomness: 2,
  maxDraftCardDepth: 8,
  maxDraftRandomness: 16,
  selectCardDepth: [],
  roundDepth: 5,
  roundBPA: [],
  fanaticChallenge: [],
  fanaticIndexPosition: [],
  fanaticPickId: [],
  fanaticPlayerBefore: [],
  roundStart: [1],
  draftRandomnessTeam: [],
  pauseId: [],
  countRender: 0,
  tradeValue: { mouthing: false },
  iterationSection: [],
  changeTrade: false,
  fanaticMode:false,
  fanaticModeValue:2,
  teamUniqPosition:{},
  tradingSimulatorAction:false,
  allowSimulator: false,
  tradingSimulator: 1
};

export const draftConfigSlice = createSlice({
  name: "draftConfig",
  initialState,
  reducers: {
    setTradingSimulatorAction: (state, action) => {
      state.tradingSimulatorAction = action.payload;
    },
    setTradingSimulator: (state, action) => {
      state.tradingSimulator = action.payload;
    },
    setTeamUniqPosition: (state, action) => {
      state.teamUniqPosition = action.payload;
    },
    setFanaticModeValue: (state, action) => {
      state.fanaticModeValue = action.payload;
    },
    setFanaticMode: (state, action) => {
      state.fanaticMode = action.payload;
    },
    setIterationSection: (state, action) => {
      state.iterationSection = action.payload;
    },
    setFanaticPickId: (state, action) => {
      state.fanaticPickId = action.payload;
    },
    setFanaticPlayerBefore: (state, action) => {
      state.fanaticPlayerBefore = action.payload;
    },
    setFanaticIndexPosition: (state, action) => {
      state.fanaticIndexPosition = action.payload;
    },
    setRoundStart: (state, action) => {
      state.roundStart = action.payload;
    },
    setFanaticChallenge: (state, action) => {
      state.fanaticChallenge = action.payload;
    },
    setChangeTrade: (state, action) => {
      state.changeTrade = action.payload;
    },
    setSelectCardDepth: (state, action) => {
      state.selectCardDepth.push(action.payload);
    },
    setRoundBPA: (state, action) => {
      state.roundBPA = action.payload;
    },
    setRoundDepth: (state, action) => {
      state.roundDepth = action.payload;
    },
    setAdvancedSetting: (state, action) => {
      state.advancedSetting = action.payload;
    },
    setTeamPickIndex: (state, action) => {
      state.teamPickIndex = action.payload;
      state.teamPickIndexControl = action.payload;
    },
    setDraftCardDepth: (state, action) => {
      state.draftCardDepth = action.payload;
    },
    setDraftRandomnessTeam: (state, action) => {
      state.draftRandomnessTeam = action.payload;
    },
    setDraftRandomness: (state, action) => {
      state.draftRandomness = action.payload;
    },
    setTeams: (state, action) => {
      state.teamSelect = action.payload;
      state.status = state.teamSelect.length > 0 ? "green" : "";
    },
    setCountRender: (state, action) => {
      state.countRender += 1;
    },
    setAllTeams: (state, action) => {
      state.teamSelect = action.payload;
    },
    setTimeSpeed: (state, action) => {
      state.timeSpeed = action.payload;
    },
    setRound: (state, action) => {
      state.round = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setDraftPlayers: (state, action) => {
      state.draftPlayers.push(action.payload);
    },
    setNewDraftPlayers: (state, action) => {
      state.draftPlayers = action.payload;
    },
    changeTradeValue: (state, action) => {
      state.tradeValue.results = action.payload;
    },

    setPositionPlayer: (state, action) => {
      // state.positionPlayer = toggleArrObj(state.positionPlayer,action.payload,(item) => item);
      state.positionPlayer = action.payload;
    },
    setTeamsRound: (state, action) => {
      const teamSelectSort = action.payload.sort(function (a, b) {
        return a - b;
      });
      state.teamSelectId = teamSelectSort;
    },
    setPauseId: (state, action) => {
      state.pauseId = [action.payload];
      const teamSelectSort = [...state.teamSelectId, action.payload].sort(
        function (a, b) {
          return a - b;
        }
      );
      state.teamSelectId = teamSelectSort;
    },
    setFirstTradeValue: (state, action) => {
      state.tradeValue = action.payload;
    },

    setTeamRemoveId: (state, action) => {
      state.teamRemoveId = [action.payload];
    },
    setTradeValue: (state, action) => {
      state.tradeValue = action.payload;
    },
    delPauseId: (state, _) => {
      state.teamSelectId = state.teamSelectId.filter(
        (id) => id !== state.pauseId[0]
      );
      state.pauseId = [];
    },
    delTeamsRound: (state, action) => {
      state.teamPickIndex = state.teamPickIndex.filter(
        (item) => action.payload !== item
      );
    },
    delFanaticPosition: (state, action) => {
      state.fanaticIndexPosition = state.fanaticIndexPosition.filter(
        (item) => action.payload !== item
      );
    },
    delFanaticPlayerBefore: (state, action) => {
      state.fanaticPlayerBefore = state.fanaticPlayerBefore.filter(
        (item) => action.payload !== item
      );
    },
    delFanaticPickId: (state, action) => {
      state.fanaticPickId = state.fanaticPickId.filter(
        (item) => action.payload !== item
      );
    },
    resetTeam: (state, _) => {
      state.teamSelectId = initialState.teamSelectId;
      state.teamSelect = initialState.teamSelect;
    },

    setResetRound: () => initialState,
  },
  extraReducers: {
    [getTeams.fulfilled]: (state, action) => {
      state.loading = false;
      state.teams = action.payload;
    },
    [getTeams.pending]: (state, action) => {
      state.loading = true;
    },
    [getTeams.rejected]: (state, action) => {
      state.loading = false;
    },
    [getSetting.fulfilled]: (state, action) => {
      state.loading = false;
      state.allowSimulator = action.payload.allow_simulator;
    },
    [getSetting.pending]: (state, action) => {
      state.loading = true;
    },
    [getSetting.rejected]: (state, action) => {
      state.loading = false;
    },
    [getTradeValue.fulfilled]: (state, action) => {
      state.loading = false;
      state.tradeValue = { mouthing: true, ...action.payload };
    },
    [getTradeValue.pending]: (state, action) => {
      state.loading = true;
    },
    [getTradeValue.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const selectDraftConfig = (state) => state.draftConfig;

export const {
  setTradingSimulator,
  setTradingSimulatorAction,
  setTeamUniqPosition,
  setFanaticModeValue,
  setFanaticMode,
  setIterationSection,
  setFanaticPickId,
  setFanaticPlayerBefore,
  setFanaticIndexPosition,
  setRoundStart,
  setFanaticChallenge,
  setChangeTrade,
  setRoundBPA,
  setRoundDepth,
  setAdvancedSetting,
  setTeamPickIndex,
  setDraftCardDepth,
  setDraftRandomnessTeam,
  setDraftRandomness,
  setTeams,
  setAllTeams,
  setRound,
  setPositionPlayer,
  setTeamsRound,
  setCountRender,
  setStatus,
  setTimeSpeed,
  setPauseId,
  delTeamsRound,
  resetTeam,
  setResetRound,
  setTradeValue,
  setFirstTradeValue,
  setDraftPlayers,
  setTeamRemoveId,
  delPauseId,
  setSelectCardDepth,
  changeTradeValue,
  delFanaticPosition,
  delFanaticPlayerBefore,
  delFanaticPickTeam,
  setNewDraftPlayers,
} = draftConfigSlice.actions;

const teamRound = (round, teamSelectId) => {
  const roundsTeam = [];

  for (let value of teamSelectId) {
    for (let i = 1; i < +round; i++) {
      roundsTeam.push(value + i * 32);
    }
  }
  return new Set([...roundsTeam, ...teamSelectId]);
};

// Actions Creator

export const fanaticModeAction = (checked) => (dispatch,getState) =>{
  dispatch(setFanaticMode(checked))
  if(checked) {
    // dispatch(setDraftCardDepth(initialState.maxDraftCardDepth));
    // dispatch(setDraftRandomness(initialState.maxDraftRandomness));
  }
  dispatch(setRoundBPA([]))
  dispatch(setFanaticChallenge([]));


}

export const checkRoundBPA = (round) => (dispatch, getState) => {
  const { roundBPA } = selectDraftConfig(getState());
  const intRound = +round;
  const addOrRemove = roundBPA.includes(intRound)
    ? roundBPA.filter((i) => i !== intRound)
    : [...roundBPA, intRound];
  dispatch(setRoundBPA(addOrRemove));
};
export const fanaticPlayer = (data) => (dispatch, getState) => {
  const { fanaticPickId, fanaticPlayerBefore,  } =
    selectDraftConfig(getState());
  const {pick} = data;
  
  const addOrIgnore = fanaticPickId.includes(pick)
    ? fanaticPickId
    : [...fanaticPickId, pick];
 
  const filterPlayer = fanaticPlayerBefore.filter(item => item.pick !== pick)
  
  dispatch(setFanaticPlayerBefore([...filterPlayer, data]));
  dispatch(setFanaticPickId(addOrIgnore));
};
export const checkFanaticChallenge =
  (fanatic, iteration) => (dispatch, getState) => {
    const {  teamSelectId,fanaticChallenge } = selectDraftConfig(getState());

      dispatch(setDraftCardDepth(initialState.draftCardDepth));
      dispatch(setDraftRandomness(initialState.draftRandomness));
    
    if (teamSelectId.length > 1) {
      dispatch(resetTeam());
    }
    dispatch(saveRound(fanatic));
    
    if (fanaticChallenge[0]?.mode === fanatic) {
      dispatch(setFanaticChallenge([]));

    } else {
      //  dispatch(setDraftCardDepth(initialState.maxDraftCardDepth));
      //  dispatch(setDraftRandomness(initialState.maxDraftRandomness));
       dispatch(setFanaticChallenge([{ mode: fanatic, iteration }]));
    }
  };

export const delRoundBPA = (roundIndex) => (dispatch, getState) => {
  const { roundBPA } = selectDraftConfig(getState());
  let newBPA = [];
  if (+roundIndex > 2) {
    dispatch(setRoundBPA([]));
  } else {
    newBPA = roundBPA.sort(function (a, b) {
      return a - b;
    });
    dispatch(setRoundBPA(newBPA.slice(1)));
  }
};

export const selectAllTeams = (check) => (dispatch, getState) => {
  const { teams, round } = selectDraftConfig(getState());
  const teamSelectItemsId = teams.map((elem) => elem.index);
  const roundsTeam =
    +round > 1 ? teamRound(round, teamSelectItemsId) : teamSelectItemsId;
  dispatch(setTeamsRound(check ? [...roundsTeam] : []));
  dispatch(setAllTeams(check ? teams : []));
};

export const saveTeams = (team) => (dispatch, getState) => {
  
  const { round, teamSelect } = selectDraftConfig(getState());
  const teamSelectItems = toggleArrObj(teamSelect, team, (item) => item.index);
  const teamSelectItemsId = teamSelectItems.map((elem) => elem.index);
  const roundsTeam =
    +round > 1 ? teamRound(round, teamSelectItemsId) : teamSelectItemsId;

  dispatch(setTeamsRound([...roundsTeam]));
  dispatch(setTeams(teamSelectItems));
};

export const saveRound = (roundNum) => (dispatch, getState) => {
  const { teamSelectId } = selectDraftConfig(getState());
  if (teamSelectId.length) {
    const roundsTeam = teamRound(roundNum, teamSelectId);
    dispatch(setTeamsRound([...roundsTeam]));
  }
  dispatch(setRound(roundNum));
};
export const setDraftPlayersAction = (player) => (dispatch, getState) => {
  
  const { draftPlayers,fanaticChallenge,fanaticMode } = selectDraftConfig(getState());
  let checkPlayer = false;
  if(!fanaticChallenge.length) {
    checkPlayer = draftPlayers.some(
      (item) => item?.player?.id === player?.player?.id
    );

  }

  if (!checkPlayer || fanaticMode) {
    dispatch(setDraftPlayers(player));
  }
};

export const uniqPosition =
  ({ name, position }) =>
  (dispatch, getState) => {
    const { teamUniqPosition } = selectDraftConfig(getState());
    if (teamUniqPosition[name]) {
      dispatch(
        setTeamUniqPosition({
          ...teamUniqPosition,
          [name]: [...teamUniqPosition[name], position],
        })
      );
      return;
    }
    dispatch(
      setTeamUniqPosition({
        ...teamUniqPosition,
        [name]: [position],
      })
    );
  };

export const simSimDraftPlayer = (teamPlayers) => (dispatch, getState) => {


  dispatch(setNewDraftPlayers(teamPlayers));
};

export const changeTradeTeam = (tradeTeam) => (dispatch,getState) =>{

  
  const { tradeValue } = selectDraftConfig(getState());
  const tradeValueSlice = tradeTeam.slice(0, tradeValue.results.length);
 
  dispatch(changeTradeValue(tradeValueSlice));

}
export const fanaticModeBefore = ({player,action}) => (dispatch,getState) => {
  const { fanaticPlayerBefore } = selectDraftConfig(getState());
  let newFanaticPlayerBefore = [...fanaticPlayerBefore];
  
  if(action === 'inc') {  
    newFanaticPlayerBefore.push(player);
    dispatch(setFanaticPlayerBefore(newFanaticPlayerBefore));
  }
  if(action === 'dec') {
    let newFanaticPlayerBeforePop = newFanaticPlayerBefore.filter((item) => {
      
      return item.player.id !== player.player.id;
    })
      
    dispatch(setFanaticPlayerBefore(newFanaticPlayerBeforePop));
  }
}

export default draftConfigSlice.reducer;
