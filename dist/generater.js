import { useSelector } from "react-redux";
import { useStore } from "./store";
var localReducers = {};
var localStates = {};
var dispatch;
export var setDispatch = function (val) {
    dispatch = val;
};
var count = 1;
var State = /** @class */ (function () {
    function State(initialState) {
        var _this = this;
        this.stateName = "state".concat(count++);
        localStates[this.stateName] = initialState;
        localReducers[this.stateName] = function (state, actions) {
            state[_this.stateName] = actions.payload;
        };
    }
    State.prototype.getState = function () {
        var _this = this;
        return useSelector(function (state) { return state.statex[_this.stateName]; });
    };
    State.prototype.setState = function (val) {
        if (dispatch) {
            var actions = useStore().actions;
            dispatch(actions[this.stateName](val));
        }
    };
    return State;
}());
export { localStates, localReducers };
export default State;
