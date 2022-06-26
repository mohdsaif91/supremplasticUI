import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpUserAPI } from "../API/Auth";

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (data, { rejectWithValue, fulfillWithValue, dispatch }) => {
    const res = await signUpUserAPI(data).then((res) => {});
  }
);
