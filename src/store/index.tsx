import { configureStore } from "@reduxjs/toolkit";
import transportReducer from "../store/slice/transportSlice";

export const store = configureStore({
  reducer: {
    transport: transportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;