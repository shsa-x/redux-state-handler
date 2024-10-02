import { configureStore, createSlice } from "@reduxjs/toolkit";
import { localReducers, localStates } from "./generater";
export var useStore = function () {
    var statexSlice = createSlice({
        name: "statex",
        initialState: localStates,
        reducers: localReducers,
    });
    var store = configureStore({
        reducer: {
            statex: statexSlice.reducer,
        }
    });
    var actions = statexSlice.actions;
    return { store: store, actions: actions };
};
