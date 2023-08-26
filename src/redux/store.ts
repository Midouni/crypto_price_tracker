import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./reducers/coinsReducers";

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
