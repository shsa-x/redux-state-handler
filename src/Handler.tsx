import React, { ReactNode } from 'react';
import { useStore } from './store';
import { Provider } from 'react-redux';
import Dispatch from './Dispatch';

interface HandlerProps {
    children: ReactNode; 
}

const Handler: React.FC<HandlerProps> = ({ children }) => { 
    const { store } = useStore(); 
 
    
    
    return (
      <Provider store={store}>
        <Dispatch />
        {children}
      </Provider>
    );
}

export default Handler;
