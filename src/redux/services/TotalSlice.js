import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCloud: [{ id: 9 }],
  // totalStorage: [],
};

export const TotalSlice = createSlice({
  name: "Total",
  initialState,
  reducers: {
    setTotalCloudActions: (state, action) => {
      state.totalCloud = action.payload;
    },
    // setTotalStorageActions: (state, action) => {
    //   state.totalStorage = action.payload;
    // },
    setTotalDefault: (state) => {
      state.totalCloud = [{id: 9}];
      // state.totalStorage = [];
    },
  },
});

export const {
  setTotalCloudActions,
  // setTotalStorageActions,
  setTotalDefault
} =  TotalSlice.actions;

export const TotalReducer = TotalSlice.reducer;

export const getTotalCloud = (state) => state.Total;
export const getTotalStorage = (state) => state.Total;
