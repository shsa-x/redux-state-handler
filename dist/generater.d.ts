type LocalState = {
    [key: string]: any;
};
type LocalReducer = {
    [key: string]: (state: any, action: Action) => void;
};
interface Action {
    type: string;
    payload: any;
}
declare const localReducers: LocalReducer;
declare const localStates: LocalState;
export declare const setDispatch: (val: any) => void;
declare class State {
    stateName: string;
    currentState: any;
    constructor(initialState: any);
    getState(): any;
    setState(callback: (currentState: any) => any): void;
}
export { localStates, localReducers };
export default State;
