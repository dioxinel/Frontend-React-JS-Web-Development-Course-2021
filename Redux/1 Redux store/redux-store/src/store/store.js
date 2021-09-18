import { configureStore } from '@reduxjs/toolkit'
import { filmReducer } from './reducer'
import { initialStore } from './initialStore'

export const store = configureStore({
  reducer: filmReducer,
  preloadedState: initialStore
})