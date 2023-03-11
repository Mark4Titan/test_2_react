import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: [-1, -1, -1, -1, -1],
  server: [0, 0, 0, 0],
  central: -1,
  stages: 0,
};
// stages:
// 0 = preparation;
// 1 = settings;
// 2 = ready;
// 3 = go;
// 4 = download;
// 5 = unloading;
// 6 = done;
export const GroupSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {
    setGroupActions: (state, action) => {
      state.group = action.payload;
    },
    setServerActions: (state, action) => {
      state.server = action.payload;
    },
    setServerDefault: (state) => {
      state.server = [0, 0, 0, 0];
      state.central = -1;
      state.stages = 2;
    },
    setCentralActions: (state, action) => {
      state.central = action.payload;
    },
    setStagesActions: (state, action) => {
      state.stages = action.payload;
    },
    setAllDefaultActions: (state) => {
      state.group = [-1, -1, -1, -1, -1];
      state.server = [0, 0, 0, 0];
      state.central = -1;
      state.stages = 0;
    },
  },
});

export const {
  setGroupActions,
  setServerActions,
  setServerDefault,
  setCentralActions,
  setStagesActions,
  setAllDefaultActions,
} = GroupSlice.actions;

export const GroupReducer = GroupSlice.reducer;

export const getGroup = (state) => state.Group;
export const getServer = (state) => state.Group;
export const getCentral = (state) => state.Group;
export const getStages = (state) => state.Group;
