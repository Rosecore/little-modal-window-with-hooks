import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { CompletingActionReducer } from "./reducers/CompletingActionReducer";






const rootReducer = combineReducers({
    completingReducer : CompletingActionReducer
})

export const store = configureStore({
    reducer:rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>