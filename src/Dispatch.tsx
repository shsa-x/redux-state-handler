import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDispatch } from "./generater";

const Dispatch: React.FC = () => {

    const dispatch = useDispatch();    
    setDispatch(dispatch);
    return null; 
}

export default Dispatch;
