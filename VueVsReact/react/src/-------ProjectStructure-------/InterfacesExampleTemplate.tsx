/**
 * interfaces.tsx
 */
import { LOGIN, LOGOUT, THEME } from "./Constants";
export interface IUser {
  username: string;
  active: boolean;
}
export interface ITheme {
  dark: boolean;
}

export interface IState {
  user: IUser;
  theme: ITheme;
}

export interface IUserLogin {
  type: typeof LOGIN;
  payload: IUser;
}

export interface IUserLogout {
  type: typeof LOGOUT;
  payload: {};
}

export interface IThemeAction {
  type: typeof THEME;
  payload: { toggle: boolean };
}

export type UserActions = IUserLogin | IUserLogout;
export type StateActions = UserActions | IThemeAction;
