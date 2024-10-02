import React from 'react';
import { useStore } from './store';
import { Provider } from 'react-redux';
import Dispatch from './Dispatch';
var Handler = function (_a) {
    var children = _a.children;
    var store = useStore().store;
    return (React.createElement(Provider, { store: store },
        React.createElement(Dispatch, null),
        children));
};
export default Handler;
