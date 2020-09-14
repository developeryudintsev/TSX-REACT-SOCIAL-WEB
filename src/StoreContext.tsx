import React from 'react';
import {Store} from 'redux'
import {StoreType} from "./redux/store";
import store from "./redux/redux-store";


const StoreContext=React.createContext(store);

export type ProviderType={
    store:Store//типизацыя из redux для Store
    children:React.ReactNode
}
export const Provider=(props:ProviderType)=>{//мы убрали props так как store из контехта 15cт.
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;