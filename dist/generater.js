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
        this.currentState = useSelector(function (state) { return state.statex[_this.stateName]; });
        return this.currentState;
    };
    State.prototype.setState = function (valueOrCallback) {
        if (dispatch) {
            var actions = useStore().actions;
            var newState = void 0;
            if (typeof valueOrCallback === 'function') {
                newState = valueOrCallback(this.currentState);
            }
            else {
                newState = valueOrCallback;
            }
            dispatch(actions[this.stateName](newState));
            this.currentState = newState;
        }
    };
    return State;
}());
export { localStates, localReducers };
export default State;
