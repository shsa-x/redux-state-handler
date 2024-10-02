import { useSelector } from "react-redux";
import { useStore } from "./store";


type LocalState = {
    [key: string]: any;
}

type LocalReducer = {
    [key: string]: (state: any, action: Action) => void;
}

interface Statex {
    [key: string]: any;
}

interface Action {
    type: string;
    payload: any; 
}


const localReducers: LocalReducer = {};
const localStates: LocalState = {};

let dispatch: any;
export const setDispatch = (val: any):void => {
    dispatch = val;
}

let count: number = 1;

class State{

    stateName: string;

    constructor( initialState: any ){

        this.stateName = `state${count++}`;
        localStates[this.stateName] = initialState;
        localReducers[this.stateName] = (state: Statex, actions: Action):void => {
            state[this.stateName] = actions.payload;
        }

    }

    getState(): any {
        return useSelector((state: Statex) => state.statex[this.stateName]);
    }

    setState(val: any): void {
        if (dispatch) {
            const { actions } = useStore(); 
            dispatch(actions[this.stateName](val)); 
        }
    }

}


export {localStates, localReducers};
export default State;