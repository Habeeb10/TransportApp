// locationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LocationType = {
  longitude: number;
  latitude: number;
  description?: string;
  heading?: number;
};

interface LocationState {
  location: LocationType | null;
  destinations: LocationType[];
}

const initialState: LocationState = {
  location: null,
  destinations: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationType>) => {
      const location = action.payload;
      state.location = {
        ...location,
        heading: location.heading ?? 0, // Default heading to 0 if not provided
      };
    },
    setDestinations: (state, action: PayloadAction<LocationType[]>) => {
      state.destinations = action.payload;
    },
    addDestination: (state, action: PayloadAction<LocationType>) => {
      state.destinations.push(action.payload);
    },
    removeDestination: (state, action: PayloadAction<number>) => {
      state.destinations = state.destinations.filter(
        (_, index) => index !== action.payload
      );
    },
    clearLocation: (state) => {
      state.location = null;
      state.destinations = [];
    },
    clearDestination: (state) => {
      state.destinations = [];
    },
  },
});

export const {
  setLocation,
  setDestinations,
  addDestination,
  removeDestination,
  clearLocation,
  clearDestination,
} = locationSlice.actions;

export default locationSlice.reducer;
