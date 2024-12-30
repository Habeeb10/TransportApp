import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransportState {
  fromLocation: string;
  toLocation: string;
  currentCoords: { latitude: number; longitude: number } | null;
  routeSuggestions: string[];
  notifications: string[];
}

const initialState: TransportState = {
  fromLocation: "",
  toLocation: "",
  currentCoords: null,
  routeSuggestions: [],
  notifications: [],
};

const transportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {
    setFromLocation(state, action: PayloadAction<string>) {
      state.fromLocation = action.payload;
    },
    setToLocation(state, action: PayloadAction<string>) {
      state.toLocation = action.payload;
    },
    setCurrentCoords(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.currentCoords = action.payload;
    },
    setRouteSuggestions(state, action: PayloadAction<string[]>) {
      state.routeSuggestions = action.payload;
    },
    setNotifications(state, action: PayloadAction<string[]>) {
      state.notifications = action.payload;
    },
  },
});

export const {
  setFromLocation,
  setToLocation,
  setCurrentCoords,
  setRouteSuggestions,
  setNotifications,
} = transportSlice.actions;

export default transportSlice.reducer;
