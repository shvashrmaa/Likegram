import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    User: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
