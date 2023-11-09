import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_ENDPOINT } from '../../../config/config';
import axiosInstance from '../../../service/axiosInstance';

export const getLiveTeams = createAsyncThunk(
  "liveDraft/getLiveTeams",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`${API_ENDPOINT}draft/event_free_team/${id}`);
      
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

export const joinEvent = createAsyncThunk(
  "liveDraft/joinEvent",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `${API_ENDPOINT}draft/join_event/`,
        data
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
