import { createSlice } from "@reduxjs/toolkit";
import { getDraftValue } from "./draftValueAction";

const initialState = {
  draftValue: [],
  loading: false,
};

export const draftValeSlice = createSlice({
  name: "draftVale",
  initialState,
  reducers: {
    resDraftValue: (state, action) => {
      state.draftValue = initialState.draftValue;
      state.loading = initialState.loading
    }
  },
  extraReducers: {
    [getDraftValue.fulfilled]: (state, action) => {
      state.loading = false;
      
      state.draftValue = action.payload?.results;
    },
    [getDraftValue.pending]: (state, action) => {
      state.loading = true;
    },
    [getDraftValue.rejected]: (state, action) => {
      state.loading = false;
    },
  }

})

export const selectDraftValue = (state) => state.draftValue;

export const { resDraftValue } = draftValeSlice.actions;

export default draftValeSlice.reducer;