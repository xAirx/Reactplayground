import { THEME } from "../ActionTypes";
import { ITheme, StateActions } from "../interfaces";

const themeReducer = (theme: ITheme, action: StateActions) => {
  switch (action.type) {
    case THEME:
      return { ...theme, ...action.payload };
    default:
      return theme;
  }
};

export default themeReducer;
