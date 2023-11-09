import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../../config/config";
import { filteredArray, sortArray, toggleArrObj } from "../../../utils/utils";

const initialState = {
  mainTeam: {},
  myTeam: {},
  mainTeams: [],
  myTeams: [],
  tradesTeams: [],
  changeTrades: false,
  acceptTrade: false,
  notAccept: false,
  acceptCount: 10,
  tradesPlayers: [],
  myTradesPlayers: [],
  loading: false,
  tradeValue: [],
  historyTrades: [],
  tradePlayerYears: [],
  manualTrade: false,
  randomFlag:false,
  randomAccepted: false,
  tradeRandomId : [],
  tradeRandomCount:0,


};

export const getTrades = createAsyncThunk(
  "trades/getTrades",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}trade-value-history/?limit=1000&offset=0&round=&round_index_number=7&tm=`
      );
      const teams = res.data.results;

      const teamSet = [];
      for (let team of teams) {
        const teamRound = team.round;
        const checkTeam = teamSet?.some((team) => team.name === teamRound.name);
        if (!checkTeam) {
          teamSet.push({ ...teamRound, selection: team.index });
        }
      }
      dispatch(setTradesTeams(teamSet));
      return teams;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getTradesPlayer = createAsyncThunk(
  "trades/getTradesPlayer",
  async ({ id, path }, { dispatch, rejectWithValue, getState }) => {
    const { mainTeam, myTeam } = selectTrades(getState());

    try {
      const res = await axios.get(
        `${API_ENDPOINT}treading/?position=&round=${id}`
      );

      if (path === "myTeam") {
        const players = [
          { player: "Select Players", position: "" },
          ...res.data.results,
        ];
        dispatch(setMyTeam({ ...myTeam, players, player: [] }));
      }
      if (path === "mainTeam") {
        const players = [
          { player: "Select Players", position: "" },
          ...res.data.results,
        ];
        dispatch(setMainTeam({ ...mainTeam, players, player: [] }));
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const tradesSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {
    setTradeRandomCount: (state, action) => {
      state.tradeRandomCount = action.payload;
    },
    setTradeRandomId: (state, action) => {
      state.tradeRandomId = action.payload;
    },
    setRandomAccepted: (state, action) => {
      state.randomAccepted = action.payload;
    },
    setAcceptTrade: (state, action) => {
      state.acceptTrade = action.payload;
    },
    setRandomFlag: (state, action) => {
      state.randomFlag = action.payload;
    },
    setNotAccept: (state, action) => {
      state.notAccept = action.payload;
    },
    setAcceptCount: (state, action) => {
      state.acceptCount = action.payload;
    },
    setTrades: (state, action) => {
      state.trades = action.payload;
    },
    setMainTeam: (state, action) => {
      state.mainTeam = action.payload;
    },
    setMyTeam: (state, action) => {
      state.myTeam = action.payload;
    },
    setMainTeams: (state, action) => {
      state.mainTeams = action.payload;
    },
    setMyTeams: (state, action) => {
      state.myTeams = action.payload;
    },
    setHistoryTrades: (state, action) => {
      state.historyTrades = action.payload;
    },
    setTradesTeams: (state, action) => {
      state.tradesTeams = action.payload;
    },
    setTeamTradeValue: (state, action) => {
      state.tradeValue = action.payload;
    },
    setTradesPlayers: (state, action) => {
      state.tradesPlayers = action.payload;
    },
    setMyTradesPlayers: (state, action) => {
      state.myTradesPlayers = action.payload;
    },
    setChangeTrades: (state, action) => {
      state.changeTrades = action.payload;
    },
    setManualTrade: (state, action) => {
      state.manualTrade = action.payload;
    },
    setTradePlayerYears: (state, action) => {
      state.tradePlayerYears = action.payload;
    },
    setTradeValueTrade: (state, action) => {
      state.tradeValue = action.payload;
    },
    setReserveTradeValue: (state, action) => {
      state.reserveTradeValue = action.payload;
    },
    setResetSelectTeam: (state, _) => {
      state.myTeam = initialState.myTeam;
      state.mainTeam = initialState.mainTeam;
      state.mainTeams = initialState.mainTeams;
      state.myTeams = initialState.mainTeams;
    },

    setResetTrades: (state, _) => {
      state.myTeam = initialState.myTeam;
      state.mainTeam = initialState.mainTeam;
      state.mainTeams = initialState.mainTeams;
      state.myTeams = initialState.mainTeams;
      state.trades = initialState.trades;
      state.tradesTeams = initialState.tradesTeams;
      state.changeTrades = initialState.changeTrades;
      state.acceptTrade = initialState.acceptTrade;
      state.notAccept = initialState.notAccept;
      state.acceptCount = initialState.acceptCount;
      state.tradesPlayers = initialState.tradesPlayers;
      state.myTradesPlayers = initialState.myTradesPlayers;
      state.loading = initialState.loading;
      state.tradeValue = initialState.tradeValue;
      state.historyTrades = initialState.historyTrades;
      state.tradePlayerYears = initialState.tradePlayerYears;
      state.manualTrade = initialState.manualTrade;
      state.randomFlag = initialState.randomFlag;
      state.randomAccepted = initialState.randomAccepted;
      state.tradeRandomId = initialState.tradeRandomId;
      state.tradeRandomCount = initialState.tradeRandomCount;
    },
  },
  extraReducers: {
    [getTradesPlayer.fulfilled]: (state, action) => {
      state.loading = false;

      state.tradesPlayers = action.payload;
    },
    [getTradesPlayer.pending]: (state, action) => {
      state.loading = true;
    },
    [getTradesPlayer.rejected]: (state, action) => {
      state.loading = false;
    },
    [getTrades.fulfilled]: (state, action) => {
      state.loading = false;
      state.tradeValue = action.payload;
    },
    [getTrades.pending]: (state, action) => {
      state.loading = true;
    },
    [getTrades.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const selectTrades = (state) => state.trades;

export const {
  setTradeRandomId,
  setRandomAccepted,
  setRandomFlag,
  setAcceptTrade,
  setNotAccept,
  setAcceptCount,
  setTrades,
  setResetTrades,
  setTradesTeams,
  setTradesPlayers,
  setChangeTrades,
  setTeamTradeValue,
  setHistoryTrades,
  setMyTradesPlayers,
  setTradePlayerYears,
  setMainTeam,
  setMyTeam,
  setMyTeams,
  setMainTeams,
  setManualTrade,
  setTradeValueTrade,
  setReserveTradeValue,
  setResetSelectTeam,
  setTradeRandomCount,
} = tradesSlice.actions;

// Action Creator

export const manualTradeAction =
  ({ countRender,manualTrade }) =>
  (dispatch, getState) => {
    const { tradeValue } = selectTrades(getState());
    
    if(manualTrade) {
        dispatch(
          setTradeValueTrade(
            tradeValue.slice(countRender + 1, tradeValue.length)
          )
        );
        dispatch(setManualTrade(manualTrade))
       
    } else {
      dispatch(setManualTrade(manualTrade));
    }
  };

export const historyTradesAction = (historyData) => (dispatch, getState) => {
  const { historyTrades } = selectTrades(getState());
  dispatch(setHistoryTrades([...historyTrades, historyData]));
};
export const teamMountAction =
  ({ team, path }) =>
  (dispatch, getState) => {
    
    if (path === "myTeam") {
      dispatch(setMyTeam(team));
    }
    if (path === "mainTeam") {
      dispatch(setMainTeam(team));
    }
  };

export const teamAction =
  ({ team, path }) =>
  (dispatch, getState) => {
    
    const { mainTeam, mainTeams, myTeam, myTeams } = selectTrades(getState());
    if (path === "myTeam") {
      const teamsAllName = myTeams.map((item) => item.name);
      if (!teamsAllName.includes(myTeam.name)) {
        const resetTeam = { ...myTeam, pick: [], pickYear: [] };
        dispatch(setMyTeams([...myTeams, resetTeam]));
      }
      dispatch(setMyTeam(team));
    }
    if (path === "mainTeam") {
      const teamsAllName = mainTeams.map((item) => item.name);
      if (!teamsAllName.includes(mainTeam.name)) {
        const resetTeam = { ...mainTeam, pick: [], pickYear: [] };
        dispatch(setMainTeams([...mainTeams, resetTeam]));
      }
      dispatch(setMainTeam(team));
    }
  };
export const teamAddPicks =
  ({ picksInfo, path }) =>
  (dispatch, getState) => {
    const { mainTeam, myTeam } = selectTrades(getState());
    if (path === "myTeam") {
      dispatch(setMyTeam({ ...myTeam, ...picksInfo }));
    }
    if (path === "mainTeam") {
      dispatch(setMainTeam({ ...mainTeam, ...picksInfo }));
    }
  };

export const choosePick =
  ({ pick, path, pickPath }) =>
  (dispatch, getState) => {
    const { mainTeam, myTeam } = selectTrades(getState());

    if (path === "myTeam") {
      if (pickPath === "pick") {
        const newChoosePick = toggleArrObj(
          myTeam.pick,
          pick,
          (item) => item.index
        );
        const sortPick = sortArray({ arr: newChoosePick, key: "index" });

        dispatch(setMyTeam({ ...myTeam, pick: sortPick }));
      }
      if (pickPath === "pickYear") {
        const newChoosePick = toggleArrObj(
          myTeam.pickYear,
          pick,
          (item) => item.id
        );
        const sortPick = sortArray({ arr: newChoosePick, key: "index" });
        dispatch(setMyTeam({ ...myTeam, pickYear: sortPick }));
      }
    }
    if (path === "mainTeam") {
      if (pickPath === "pick") {
        const newChoosePick = toggleArrObj(
          mainTeam.pick,
          pick,
          (item) => item.index
        );
        const sortPick = sortArray({ arr: newChoosePick, key: "index" });
        dispatch(setMainTeam({ ...mainTeam, pick: sortPick }));
      }
      if (pickPath === "pickYear") {
        const newChoosePick = toggleArrObj(
          mainTeam.pickYear,
          pick,
          (item) => item.id
        );
        const sortPick = sortArray({ arr: newChoosePick, key: "index" });
        dispatch(setMainTeam({ ...mainTeam, pickYear: sortPick }));
      }
    }
  };

export const choosePlayer =
  ({ player, path }) =>
  (dispatch, getState) => {
    const { mainTeam, myTeam } = selectTrades(getState());
    if (path === "myTeam") {
      dispatch(setMyTeam({ ...myTeam, player }));
    }
    if (path === "mainTeam") {
      dispatch(setMainTeam({ ...mainTeam, player }));
    }
  };

export const changeTeamInfo = () => (dispatch, getState) => {
  const { mainTeams, myTeams, myTeam, mainTeam, historyTrades } = selectTrades(
    getState()
  );
  // Players
  const newMainTeamPlayers = [...mainTeam.players, myTeam.player].filter(
    (item) => item?.id !== mainTeam.player.id
  );
  const newMyTeamPlayers = [...myTeam.players, mainTeam.player].filter(
    (item) => item?.id !== myTeam.player.id
  );
  const sortNewMyTeamPlayers = sortArray({
    arr: newMyTeamPlayers,
    key: "value",
  });
  const sortNewMainTeamPlayers = sortArray({
    arr: newMainTeamPlayers,
    key: "value",
  });
  // Picks
  const filterMainPicks = filteredArray({
    arr: mainTeam.picks,
    arr2: mainTeam.pick,
    key: "index",
  });
  const newMainTeamPicks = [...filterMainPicks, ...myTeam.pick];

  const filterMyPicks = filteredArray({
    arr: myTeam.picks,
    arr2: myTeam.pick,
    key: "index",
  });
  const newMyTeamPicks = [...filterMyPicks, ...mainTeam.pick];

  const sortNewMainTeamPicks = sortArray({
    arr: newMainTeamPicks,
    key: "index",
  });

  const sortNewMyTeamPicks = sortArray({
    arr: newMyTeamPicks,
    key: "index",
  });

  // Pick Years
  const filterMainPicksYears = filteredArray({
    arr: mainTeam.picksYears,
    arr2: mainTeam.pickYear,
    key: "id",
  });
  const newMainTeamPicksYears = [...filterMainPicksYears, ...myTeam.pickYear];

  const filterMyPicksYears = filteredArray({
    arr: myTeam.picksYears,
    arr2: myTeam.pickYear,
    key: "id",
  });
  const newMyTeamPicksYears = [...filterMyPicksYears, ...mainTeam.pickYear];

  const sortNewMainTeamPicksYears = sortArray({
    arr: newMainTeamPicksYears,
    key: "id",
  });
  const sortNewMyTeamPicksYears = sortArray({
    arr: newMyTeamPicksYears,
    key: "id",
  });
;

  const newMainTeam = {
    ...mainTeam,
    players: sortNewMainTeamPlayers,
    player: [],
    picks: sortNewMainTeamPicks,
    pick: [],
    picksYears: sortNewMainTeamPicksYears,
    pickYear: [],
  };
  const newMyTeam = {
    ...myTeam,
    players: sortNewMyTeamPlayers,
    player: [],
    picks: sortNewMyTeamPicks,
    pick: [],
    picksYears: sortNewMyTeamPicksYears,
    pickYear: [],
  };
  const mainTeamsFlag = filteredArray({
    arr: mainTeams,
    arr2: [newMainTeam],
    key: "id",
  });
  const myTeamsFlag = filteredArray({
    arr: myTeams,
    arr2: [newMyTeam],
    key: "id",
  });
  const historyMyTeam = {
    ...myTeam,
    players: sortNewMyTeamPlayers,
    player: mainTeam.player,
    picks: sortNewMyTeamPicks,
    pick: mainTeam.pick,
    picksYears: sortNewMyTeamPicksYears,
    pickYear: mainTeam.pickYear,
  };
  const historyMainTeam = {
    ...mainTeam,
    players: sortNewMainTeamPlayers,
    player: myTeam.player,
    picks: sortNewMainTeamPicks,
    pick: myTeam.pick,
    picksYears: sortNewMainTeamPicksYears,
    pickYear: myTeam.pickYear,
  };
  dispatch(setMainTeams([...mainTeamsFlag, newMainTeam]));
  dispatch(setMyTeams([...myTeamsFlag, newMyTeam]));
  dispatch(setMainTeam(newMainTeam));
  dispatch(setMyTeam(newMyTeam));
  dispatch(setHistoryTrades([...historyTrades,{myTeam :historyMyTeam,mainTeam:historyMainTeam}]))
};

export default tradesSlice.reducer;
