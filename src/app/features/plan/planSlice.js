import { createSlice } from '@reduxjs/toolkit'
import { createPayment, executePayment, planPost } from './planActions';
const initialState = {
  loading: false,
  error: false,
  message: "",
  plans: [],
  createPayments: null,
  subscribeStart: false,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    resetPlan: () => initialState,
    resetPlanCreatePayments: (state) => {
      state.createPayments = null;
    },
  },
  extraReducers: {
    [planPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [planPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.plans = action.payload;
    },
    [planPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
    [createPayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createPayment.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.createPayments = action.payload;
      state.subscribeStart = true;
    },
    [createPayment.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload && "Error";
    },
    [executePayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [executePayment.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.subscribeStart = action.payload;
    },
    [executePayment.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = "Something went wrong";
    },
  },
});

export const { resetPlan, resetPlanCreatePayments } = planSlice.actions;

export const selectPlan = (state) => state.plan;

export default planSlice.reducer
