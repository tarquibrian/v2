"use client";
import React, { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./app.reducer";

const AppContext = createContext(initialState);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleLanguage = (currentLanguage: any) => {
    dispatch({
      type: "TOGGLE LANGUAGE",
      payload: {
        currentLanguage,
      },
    });
  };

  const updateColor = (colors: any) => {
    dispatch({
      type: "UPDATE COLOR",
      payload: {
        colors,
      },
    });
  };

  const changeTheme = (theme: any) => {
    dispatch({
      type: "CHANGE THEME",
      payload: {
        theme,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleLanguage,
        updateColor,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
