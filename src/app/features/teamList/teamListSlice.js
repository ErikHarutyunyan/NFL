import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT, PLAYER_MAX } from "../../../config/config";

const initialState = {
  loading: false,
  status: false,
  count: 0,
  pageSize: 6,
  currentPage: 1,
  limit: PLAYER_MAX,
  offset: 0,
  results: [],
  search: "",
  position: "",
  colleage: "",
  playerChoose: [],
  playerItems: [],
  teamsPlayersData: []
};


export const getTeamList = createAsyncThunk(
  "teamList/getTeamList",
  async (ordName = "", { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${PLAYER_MAX}&offset=${0}&search=&position=&school&ordering=-${ordName}`
      );
      const {
        playersDraft: { playerChoose },
      } = getState();
      const resData = { ...res.data };

      // Filter Choose Players
      if (playerChoose.length) {
        const playerChooseId = playerChoose.map(el => el.id)
        const resDataResult = resData.results.filter(player => !playerChooseId.includes(player.id))
        resData.results = resDataResult
      }
      dispatch(setTeamList(resData));

    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const teamListSlice = createSlice({
  name: "teamList",
  initialState,
  reducers: {
    setTeamList: (state, action) => {
      state.limit = action.payload?.limit || state.limit;
      state.offset = action.payload?.offset || state.offset;
      state.currentPage = action.payload?.currentPage || state.currentPage;
      state.search = action.payload?.search || state.search;
      state.position = action.payload?.position || state.position;
      state.colleage = action.payload?.colleage || state.colleage;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
      state.status = true;
    },
    setCurrentPageList: (state, action) => {
      state.currentPage = action.payload
    },
    setPositionPlayerList: (state, action) => {
      state.position = action.payload
    },
    setSearchPlayerList: (state, action) => {
      state.search = action.payload
    },
  },
  
  extraReducers: {
    [getTeamList.fulfilled]: (state, action) => {
      state.loading = false;
      state.teamNeeds = action.payload?.results;
    },
    [getTeamList.pending]: (state, action) => {
      state.loading = true;
    },
    [getTeamList.rejected]: (state, action) => {
      state.loading = false;
    },
  }
})

export const selectTeamList = (state) => state.teamList;

export const { setTeamList, setCurrentPageList, setPositionPlayerList, setSearchPlayerList } = teamListSlice.actions;

export default teamListSlice.reducer;