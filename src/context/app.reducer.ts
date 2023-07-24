"use client";
export const initialState = {
  threeColors: {
    color: [0.6, 0.6, 0.6],
    colorBase: [0.6, 0.6, 0.6],
    colorDeep: [0.85, 0.85, 0.85],
  },
};

const AppReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
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
