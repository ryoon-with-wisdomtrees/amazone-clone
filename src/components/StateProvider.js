import React, { createContext, useContext, useReducer } from "react";

// 0. Prepares the DataLayer
export const StateContext = createContext();

// 1. Wrap our App and 2. Provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// 3. Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
