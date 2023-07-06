import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../../config/config";

const initialState = {
  loading: false,
  count: 0,
  next: null,
  previous: null,
  currentPage: 1,
  limit: 18,
  offset: 0,
  results: [],
  search: "",
  position:"",
  colleage:"",
  playerChoose:[],
};

export const getPlayers = createAsyncThunk(
  "players/getPlayers",
  async (setLimit, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        players: { limit },
      } = getState();
      const playerLimit = setLimit ? setLimit : limit
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${playerLimit}&offset=${0}&search=&position=&school`
      );
      const resData = { ...res.data, limit:playerLimit };
      dispatch(setPlayers(resData));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const pageNav = createAsyncThunk(
  "players/pageNav",
  async (currentPage, { dispatch, getState, rejectWithValue }) => {
    try {
      const {
        players: { limit, search,position,colleage },
      } = getState();
      
      const offset = (currentPage - 1) * limit;
      
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${limit}&offset=${offset}&search=${search}&position=${position}&school=${colleage}`
      );
      const resData = { ...res.data, currentPage, offset };
      dispatch(setPlayers(resData));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const searchPlayers = createAsyncThunk(
  "players/searchPlayers",
  async (search, { dispatch,getState,rejectWithValue }) => {
    try {
      const {
        players: { position,colleage },
      } = getState();
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${18}&offset=${0}&search=${search}&position=${position}&school=${colleage}`
      );
      const resData = { ...res.data, search };
      dispatch(setPlayers(resData));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const postitionPlayers = createAsyncThunk(
  "players/postitionPlayers",
  async (position, { dispatch,getState,rejectWithValue }) => {
    try {

      const {
        players: { colleage,limit },
      } = getState();
       
      
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${limit}&offset=${0}&search=&position=${position}&school=${colleage}`
      );
      const resData = {...initialState,...res.data,limit,position};

      dispatch(setPlayers(resData));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const colleagePlayers = createAsyncThunk(
  "players/postitionPlayers",
  async (colleage, { dispatch,getState,rejectWithValue }) => {
    try {
      const {
        players: { position },
      } = getState();
      const res = await axios.get(
        `${API_ENDPOINT}players/?limit=${18}&offset=${0}&search=&position=${position}&school=${colleage}`
      );
      const resData = { ...initialState,...res.data, colleage };
      dispatch(setPlayers(resData));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayers: (state, action) => {
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
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setPosition: (state, action) => {
      state.position = action.payload
    },
    setColleage: (state, action) => {
      state.colleage = action.payload
    },
  },
  extraReducers: {
    [getPlayers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [getPlayers.pending]: (state, action) => {
      state.loading = true;
    },
    [getPlayers.rejected]: (state, action) => {
      state.loading = false;
    },
    [pageNav.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [pageNav.pending]: (state, action) => {
      state.loading = true;
    },
    [pageNav.rejected]: (state, action) => {
      state.loading = false;
    },
    [searchPlayers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [searchPlayers.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPlayers.rejected]: (state, action) => {
      state.loading = false;
    },
    [postitionPlayers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [postitionPlayers.pending]: (state, action) => {
      state.loading = true;
    },
    [postitionPlayers.rejected]: (state, action) => {
      state.loading = false;
    },
    [colleagePlayers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [colleagePlayers.pending]: (state, action) => {
      state.loading = true;
    },
    [colleagePlayers.rejected]: (state, action) => {
      state.loading = false;
    },
    
  },
});

export const selectPlayers = (state) => state.players;
export const { setPlayers,setSearch,setPosition,setColleage } = playersSlice.actions;

// Action Creator Thunk
export const positionAction = (positionValue) => (dispatch, getState) => {
  const {
    players: { limit },
  } = getState();
  if(positionValue === '') {
    dispatch(setPosition(""))
    dispatch(getPlayers(limit))
  } else {
    dispatch(postitionPlayers(positionValue));
  }
};

export const colleageAction = (colleageValue) => (dispatch, getState) => {
  if(colleageValue === '') {
    dispatch(setColleage(""))
    dispatch(getPlayers())
  } else {
    dispatch(colleagePlayers(colleageValue));
  }
};
export default playersSlice.reducer;
