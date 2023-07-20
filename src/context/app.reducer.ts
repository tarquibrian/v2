"use client";
export const initialState = {
  currentLanguage: "en",
  currentTheme: "dark",
  loadingComplete: false,
  threeColors: {
    color: [0.6, 0.6, 0.6],
    colorBase: [0.6, 0.6, 0.6],
    colorDeep: [0.85, 0.85, 0.85],
  },
};

const AppReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE LANGUAGE":
      const toggleLanguage = state.currentLanguage === "es" ? "en" : "es";
      document.documentElement.lang = toggleLanguage;
      return {
        ...state,
        currentLanguage: toggleLanguage,
      };
    case "LOADING":
      const loading = state.loadingComplete === false ? true : true;
      return {
        ...state,
        loadingComplete: loading,
      };
    case "UPDATE COLOR":
      return {
        ...state,
        threeColors: payload.colors,
      };
    case "CHANGE THEME":
      return {
        ...state,
        currentTheme: payload.theme,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export default AppReducer;
