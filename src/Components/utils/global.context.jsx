import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const localState = localStorage.getItem("state");

const setStateInStorage = (state) =>
localStorage.setItem("state", JSON.stringify(state));

export const ContextGlobal = createContext();

const initialPageState = () => {
  if(localState){
    return JSON.parse(localState);
  } else{
    return {
      theme: true, 
      themeDetails: {
      background: 'black',
      color: 'white' 
      },
      dentistas: [],
      dentista: {}
    }
  }
  
}



const pageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const newState = {
        ...state,
        theme: !state.theme,
        themeDetails: {
          background: state.theme ? "black" : "white",
          color: state.theme ? "white" : "black"
        }
      };
      setStateInStorage(newState);
      return newState;
    case 'GET_LIST':
      setStateInStorage({...state, dentistas: [action.payload]})
      return {...state, dentistas: [action.payload]}
    case 'GET_USER': 
    setStateInStorage({...state, dentista: action.payload})
      return {...state, dentista: action.payload}
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(pageReducer, initialPageState())

  const urlList = `https://jsonplaceholder.typicode.com/users`


  useEffect(() => {
    axios(urlList)
      .then(res => {
        pageDispatch({ type: 'GET_LIST', payload: res.data});
      })
  }, [urlList]);

  return (
    <ContextGlobal.Provider value={{pageState, pageDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const usePage = () => useContext(ContextGlobal)