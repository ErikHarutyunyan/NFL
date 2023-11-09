import { createSlice } from '@reduxjs/toolkit'
import { getLiveTeams, joinEvent } from './liveDraftActions';
const initialState = {
  loading: false,
  error: null,
  message: "",
  myLiveTeam: {},
  joinTeam: false,
  liveTeams: [],
};

const liveDraftSlice = createSlice({
  name: "liveDraft",
  initialState,
  reducers: {
    setMyLiveTeam: (state, { payload }) => {
      state.myLiveTeam = payload;
    },
    resetLiveDraft: () => initialState,
  },
  extraReducers: {
    [getLiveTeams.fulfilled]: (state, action) => {
      state.loading = false;
      state.liveTeams = action.payload;
    },
    [getLiveTeams.pending]: (state, action) => {
      state.loading = true;
    },
    [getLiveTeams.rejected]: (state, action) => {
      state.loading = false;
    },
    [joinEvent.fulfilled]: (state, action) => {
      state.joinTeam = false;
      state.error = null;
    },
    [joinEvent.pending]: (state, action) => {
      state.joinTeam = true;
      state.error = null;
    },
    [joinEvent.rejected]: (state, action) => {
      state.joinTeam = false;
      state.error = "Something Error"
    },
  },
});

export const { resetLiveDraft, setMyLiveTeam } = liveDraftSlice.actions;

export const selectLiveDraft = (state) => state.liveDraft;

export default liveDraftSlice.reducer
