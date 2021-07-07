import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../reducers/data/slice.js"

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
