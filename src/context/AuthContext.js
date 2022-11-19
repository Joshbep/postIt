import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  dispatch
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () => {
 const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE)

 return (
   <AuthContext.Provider value={{user:state.user, isfetching.isfetching, error:state.error}}>
   </AuthContext.Provider>
 )
}
