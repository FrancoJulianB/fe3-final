import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";


export const initialState = {theme: true, data: []}

export const ContextGlobal = createContext();

const initialPageState = {
  theme: true, 
  themeDetails: {
    background: 'black',
    color: 'white' 
  },
  dentistas: [],
  dentista: {}
}


const pageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: !state.theme,
        themeDetails: {
          background: state.theme ? 'black' : 'white',
          color: state.theme ? 'white' : 'black'
        }
      };
    case 'GET_LIST':
      return {...state, dentistas: [action.payload]}
    case 'GET_USER': 
      return {...state, dentista: action.payload}
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(pageReducer, initialPageState)

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