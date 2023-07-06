import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { API_ENDPOINT } from "../../../config/config";

export const initialState = {
  positions:[
    "All Positions",
    "QB",
    "WR",
    "TE",
    "RB",
    "OT",
    "CB",
    "S",
    "DL",
    "EDGE",
    "LB",
    "C",
    "G",
    "P",
    "K"
],
  colleges:['All Colleges'],
  loading: true
}



export const getPositions = createAsyncThunk(
  "group/getPlayers",
  async (_, {rejectWithValue }) => {
    try {
    
      const res = await axios.get(
        `${API_ENDPOINT}position-name/`
      );
      const data = res.data.results.map(item => item.name)
      return {position:data};

    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getColleges = createAsyncThunk(
  "group/getColleges",
  async (_, {rejectWithValue }) => {
    try {
    
      const res = await axios.get(
        `${API_ENDPOINT}draft/school/`
      );
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const groupSlice = createSlice({
  name:'group',
  initialState,
  reducers: {
    setPositions: (state,action)=> {
      state.positions = action.payload.position
    },
    setColleges: (state,action)=>{
      state.colleges =  action.payload.position
    },
    setResetGroup: (state,_) => {
      // state.positions = ['All Positions'];
      state.colleges = ['All Colleges'];
    },
  },
  extraReducers: {
    [getPositions.fulfilled] : (state,action) =>{
      state.loading = false;
      state.positions.push(...action.payload.position)
    },

    [getPositions.pending] : (state,action) =>{
      state.loading = true;
  
      
    },
    [getPositions.rejected] : (state,action) =>{
      state.loading = false;
    },
    [getColleges.fulfilled] : (state,action) =>{
      state.loading = false;
      state.colleges.push(...action.payload.position)
    },
    [getColleges.pending] : (state,action) =>{
      state.loading = true;
      
    },
    [getColleges.rejected] : (state,action) =>{
      state.loading = false;
    },
  }
})

export const selectGroup = (state) => state.group;

export const { setPositions, setColleges,setResetGroup } = groupSlice.actions;

export default groupSlice.reducer;