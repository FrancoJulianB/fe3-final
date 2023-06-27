import { createContext, useContext, useReducer } from "react";

export const initialState = {theme: true, data: []}

export const ContextGlobal = createContext();

const initialPageState = {
  theme: true,
  themeDetails: {
    background: 'black',
    color: 'white' 
  },
  data: []
}


const pageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const themeDetails = {
        background: state.theme ? 'black' : 'white',
        color: state.theme ? 'white' : 'black'
      };
      return {
        ...state,
        theme: !state.theme,
        themeDetails: themeDetails
      };
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(pageReducer, initialPageState)

  const switchTheme = () => {
    pageDispatch({ type: "SWITCH_THEME" });
  };

  return (
    <ContextGlobal.Provider value={{pageState, pageDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const usePage = () => useContext(ContextGlobal)