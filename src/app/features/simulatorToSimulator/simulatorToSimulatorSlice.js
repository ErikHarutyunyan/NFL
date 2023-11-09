import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../../config/config";
import axios from "axios";
const initialState = {
  loading: false,
  simSimTeam: [],
  teamAllRound: [],
};

export const getSimTradeValue = createAsyncThunk(
  "simulatorToSimulator/getSimTradeValue",
  async (_, { dispatch, rejectWithValue, getState }) => {
    
    try {
      const {
        simulatorToSimulator: { simSimTeam },
      } = getState();
      const res = await axios.get(
        `${API_ENDPOINT}trade-value-history/?limit=1000&offset=0&round=&round_index_number=${7}&tm=`
      );
      const simSimAllInfo = simSimTeam.map((team, idx) => {
        const pickInfo = [];
        
        res.data.results.forEach((item) => {
          if (item.round.index === team.roundIndex) {
            if (pickInfo[`R${item.round_index_number}`]) {
              pickInfo[`R${item.round_index_number}`].push(item.index);
            } else {
              pickInfo[`R${item.round_index_number}`] = [item.index];
            }
          }
        });
        return { ...team, pickInfo };
      });
      return simSimAllInfo;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const simulatorToSimulatorSlice = createSlice({
  name: "simulatorToSimulator",
  initialState,
  reducers: {
    resetSimSim: (state) => {
      state.simSimTeam = initialState.simSimTeam;
      state.teamAllRound = initialState.teamAllRound;
      state.loading = initialState.loading;
    },
    setSimSimTeam: (state, action) => {
      state.simSimTeam = action.payload;
    },
  },
  extraReducers: {
    [getSimTradeValue.fulfilled]: (state, action) => {
      state.loading = false;
      state.teamAllRound = action.payload;
    },
    [getSimTradeValue.pending]: (state, action) => {
      state.loading = true;
    },
    [getSimTradeValue.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const selectSimulatorToSimulator = (state) => state.simulatorToSimulator;
export const { setSimSimTeam, resetSimSim } = simulatorToSimulatorSlice.actions;
export default simulatorToSimulatorSlice.reducer;
