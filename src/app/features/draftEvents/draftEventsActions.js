import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../service/axiosInstance'
import { API_ENDPOINT } from '../../../config/config'
import TokenService from '../../../service/token.service';

export const draftEventsPost = createAsyncThunk(
  "draftEvents/draftEventsPost",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axiosInstance.post(
        `${API_ENDPOINT}event/`,
        data,
        config
      );
      return res.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const draftEventsPut = createAsyncThunk(
  "draftEvents/draftEventsPut",

  async ({data,id}, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axiosInstance.put(
        `${API_ENDPOINT}event/${id}/`,
        data,
        config
      );
      return res.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const draftEventsDelete = createAsyncThunk(
  "draftEvents/draftEventsPut",

  async ({ id }, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axiosInstance.delete(
        `${API_ENDPOINT}event/${id}/`,
        config
      );
      return res.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const draftEventsList = createAsyncThunk(
  "draftEvents/draftEventsList",

  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const res = await axiosInstance.get(`${API_ENDPOINT}event/`, config);
      return res.data.results;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const draftEventsGet = createAsyncThunk(
  "draftEvents/draftEventsGet",

  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const user = TokenService.getUser();
      const res = await axiosInstance.get(
        `${API_ENDPOINT}event/?creator=${user.id}`,
        config
      );

      return res.data.results;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const draftEventsGetId = createAsyncThunk(
  "draftEventsGetId/draftEventsGetId",

  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axiosInstance.get(`${API_ENDPOINT}event/${id}`, config);
      return res.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);