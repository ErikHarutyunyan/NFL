import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TokenService from "../../../service/token.service";
import { API_ENDPOINT } from "../../../config/config";
import axiosInstance from "../../../service/axiosInstance";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_ENDPOINT}token/`, {
        username,
        password,
      });
      const userToken = { tokens: res.data };
      
      TokenService.setUser(userToken);
      try {
        
        const userInfo = await axiosInstance.get(`${API_ENDPOINT}user/me/`);
        TokenService.setUser(userInfo.data);
        return userInfo.data;
      } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data);
        } else {
          return rejectWithValue(error.message);
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    {
      first_name,
      last_name,
      username,
      password,
      twitter_link = "",
      profile_picture,
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(`${API_ENDPOINT}users/`, {
        first_name,
        last_name,
        username,
        password,
        twitter_link,
        profile_picture,
      });

      TokenService.setUser(res.data);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserMe = createAsyncThunk(
  "user/me",
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`${API_ENDPOINT}user/me/`);
      TokenService.setUser(res.data);
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


export const userUpdate = createAsyncThunk(
  "user/me",
  async (
    data,
    { rejectWithValue }
  ) => {
    try {
      
      const res = await axiosInstance.put(`${API_ENDPOINT}user/me/`, data);
      const tokens = TokenService.getLocalAccessToken()
      TokenService.setUser({ ...res.data, tokens });
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
