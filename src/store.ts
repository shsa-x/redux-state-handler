import { configureStore, createSlice } from "@reduxjs/toolkit";
import { localReducers, localStates } from "./generater";


interface StoreReturn {
    store: any;  
    actions: {
        [key: string]:any;
    }
}

export const useStore = () : StoreReturn => {


    const statexSlice = createSlice({
        name: "statex",
        initialState: localStates, 
        reducers: localReducers,
    });
  
    const store = configureStore({
      reducer:{
        statex: statexSlice.reducer,
      }
    })

    const actions = statexSlice.actions;
    return {store, actions}
}