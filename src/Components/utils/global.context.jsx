import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const localState = localStorage.getItem("state");
const setStateInStorage = (state) =>
localStorage.setItem("state", JSON.stringify(state));

export const ContextGlobal = createContext();

const initialPageState = () => {
  if(localState !== null){
    return JSON.parse(localState);
  } else{
    return {
      theme: true, 
      themeDetails: {
      background: 'black',
      color: 'white' 
      },
      dentistas: [],
      favs: [],
      dentista: {},
    }
  }
}

const pageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const newState = {
        dentistas: state.dentistas,
        favs: state.favs,
        dentista: state.dentista,
        theme: !state.theme,
        themeDetails: {
          background: state.theme ? "black" : "white",
          color: state.theme ? "white" : "black"
        }
      };
      setStateInStorage(newState);
      return newState
    case 'GET_LIST':
      setStateInStorage({
        theme: state.theme, 
        themeDetails: state.themeDetails,
        dentistas: action.payload,
        favs: state.favs,
        dentista: state.dentista
      })
      return {
        theme: state.theme, 
        themeDetails: state.themeDetails,
        dentistas: action.payload,
        favs: state.favs,
        dentista: state.dentista
      }
    case 'GET_USER': 
    setStateInStorage({theme: state.theme, 
      themeDetails: state.themeDetails,
      dentistas: state.dentistas,
      favs: state.favs,
      dentista: action.payload
    })
      return {theme: state.theme, 
        themeDetails: state.themeDetails,
        dentistas: state.dentistas,
        favs: state.favs,
        dentista: action.payload
      }
    case 'FAV':
      const favIndex = state.favs.findIndex((obj) =>
      obj.id === action.payload.id)
      if(favIndex !== -1){
        const updatedFavs = [...state.favs];
        updatedFavs.splice(favIndex, 1);
        setStateInStorage(
          {theme: state.theme, 
          themeDetails: state.themeDetails,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: updatedFavs})
        return ({theme: state.theme, 
          themeDetails: state.themeDetails,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: updatedFavs})
      } else{
        setStateInStorage({theme: state.theme, 
          themeDetails: state.themeDetails,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: state.favs.concat(action.payload)})
        return {theme: state.theme, 
          themeDetails: state.themeDetails,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: state.favs.concat(action.payload)}
      }
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