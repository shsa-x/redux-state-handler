import { useDispatch } from "react-redux";
import { setDispatch } from "./generater";
var Dispatch = function () {
    var dispatch = useDispatch();
    setDispatch(dispatch);
    return null;
};
export default Dispatch;
