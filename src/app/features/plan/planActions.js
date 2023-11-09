import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../service/axiosInstance';

export const planPost = createAsyncThunk(
  "plans/get",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.nfldraftfanatics.com/plans/`
      );
      

      return data.results;

      
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createPayment = createAsyncThunk(
  "createPayment/post",

  async (paymentDetails, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `https://api.nfldraftfanatics.com/plans/create-payment/`,
        paymentDetails
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const executePayment = createAsyncThunk(
  "executePayment/post",

  async (paymentId, { rejectWithValue }) => {
    try {
  
      const response = await axiosInstance.post(
        `https://api.nfldraftfanatics.com/plans/confirm-payment-intent/`,
        paymentId
      );

      if(response.status === 400) {
        return false
      }
      return true
      
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);