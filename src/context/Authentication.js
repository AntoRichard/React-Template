import React, { createContext, useReducer } from "react";
import { initalState } from "./store/Authentication";
import { AuthenticationReducer } from "./Reducer/Authentication";

export const AuthenticationContext = createContext();

const Authentication = ({ children }) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, initalState);
  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
