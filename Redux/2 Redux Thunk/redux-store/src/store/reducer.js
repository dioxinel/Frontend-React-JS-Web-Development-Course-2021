import { createReducer } from "@reduxjs/toolkit";
import { initialStore } from "./index";

export const filmReducer = createReducer(initialStore, {
  'filmList/add': (state, action) => {
    state.filmList = action.payload
  },
  'theme/change': (state, action) => {
    state.theme = action.payload
  },
  'loading/set': (state, action) => {
    state.loading = action.payload
  }
})

