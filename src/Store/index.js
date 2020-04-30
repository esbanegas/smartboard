import React, { createContext, useReducer } from "react";
import { reducer } from './reducer.js'

const data = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
    ...data
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider >
    )
};

export default Store;