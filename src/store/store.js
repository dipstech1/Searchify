import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";


const rootReducer = {
    search : searchReducer
}

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });