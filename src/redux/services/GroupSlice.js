import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group_0: -1,
  group_1: -1,
  group_2: -1,
  group_3: -1,
  group_4: -1,
};

export const GroupSlice = createSlice({
  name: "Group",
  initialState,
  reducers: {
    setGroupActions_0: (state, action) => {
      state.group_0 = action.payload;
    },
    setGroupActions_1: (state, action) => {
      state.group_1 = action.payload;
    },
    setGroupActions_2: (state, action) => {
      state.group_2 = action.payload;
    },
    setGroupActions_3: (state, action) => {
      state.group_3 = action.payload;
    },
    setGroupActions_4: (state, action) => {
      state.group_4 = action.payload;
    },
    setGroupDefault: (state) => {
      state.group_0 = -1;
      state.group_1 = -1;
      state.group_2 = -1;
      state.group_3 = -1;
      state.group_4 = -1;
    },
  },
});

export const {
  setGroupActions_0,
  setGroupActions_1,
  setGroupActions_2,
  setGroupActions_3,
  setGroupActions_4,
  setGroupDefault,
} = GroupSlice.actions;

export const GroupReducer = GroupSlice.reducer;

export const getGroup = (state) => state.Group;
