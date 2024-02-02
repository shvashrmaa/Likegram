import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

interface IState {
  user: unknown | null;
  token: unknown | null;
  loading: boolean;
  error: unknown | null;
}

const initialState: IState = {
  user: null,
  token: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTokenToLocalStorage: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    deleteTokenFromLocalStorage: (state) => {
      state.token = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const userRegister = createAsyncThunk(
  "user/register",
  async ({
    userName,
    email,
    password,
  }: {
    userName: string;
    email: string;
    password: string;
  }) => {
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        userName,
        email,
        password,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email,
        password,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const { setTokenToLocalStorage, deleteTokenFromLocalStorage } =
  userSlice.actions;

export default userSlice.reducer;
