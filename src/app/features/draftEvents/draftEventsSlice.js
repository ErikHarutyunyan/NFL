import { createSlice } from "@reduxjs/toolkit";
import {
  draftEventsGet,
  draftEventsGetId,
  draftEventsList,
  draftEventsPost,
  draftEventsPut,
} from "./draftEventsActions";
const initialState = {
  loading: false,
  error: null,
  message: "",
  pageEvent: "list",
  myDraftEvent: [],
  myDraftSingleEvent:null,
  eventList: [],
};

const draftEventsSlice = createSlice({
  name: "draftEvents",
  initialState,
  reducers: {
    showPage: (state, { payload }) => {
      state.pageEvent = payload;
    },
  },
  extraReducers: {
    [draftEventsList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [draftEventsList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.eventList = payload;
      state.error = false;
    },
    [draftEventsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
    [draftEventsPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [draftEventsPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
    },
    [draftEventsPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },

    [draftEventsGet.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [draftEventsGet.fulfilled]: (state, action) => {

      state.loading = false;
      state.error = false;
      state.myDraftEvent = action.payload;
    },
    [draftEventsGet.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
    [draftEventsPut.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [draftEventsPut.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
    },
    [draftEventsPut.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
    
    [draftEventsGetId.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [draftEventsGetId.fulfilled]: (state, action) => {
      
      state.loading = false;
      state.error = false;
      state.myDraftSingleEvent = action.payload;
    },
    [draftEventsGetId.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
  },
});

export const { showPage } = draftEventsSlice.actions;

export const selectDraftEvents = (state) => state.draftEvents;

export default draftEventsSlice.reducer;
