import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: [-1, -1, -1, -1, -1],
  server: [0, 0, 0, 0],
  central: -1,
};

export const GroupSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {
    setGroupActions: (state, action) => {
      state.group = action.payload;
    },
    setGroupDefault: (state) => {
      state.group = [-1, -1, -1, -1, -1];
    },
    setServerActions: (state, action) => {
      state.server = action.payload;
    },
    setServerDefault: (state) => {
      state.server = [0, 0, 0, 0];
      state.central = -1;
    },
    setCentralActions: (state, action) => {
      state.central = action.payload;
    },
  },
});

export const {
  setGroupActions,
  setGroupDefault,
  setServerActions,
  setServerDefault,
  setCentralActions,
} = GroupSlice.actions;

export const GroupReducer = GroupSlice.reducer;

export const getGroup = (state) => state.Group;
export const getServer = (state) => state.Group;
export const getCentral = (state) => state.Group;
