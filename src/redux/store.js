import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { GroupSlice } from "./services/GroupSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  // whitelist: [""],
};

const rootReducer = combineReducers({
  [GroupSlice.name]: GroupSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export const persistor = persistStore(store);
export default store;
