import { LOGIN, LOGOUT } from "../ActionTypes";
import { IUser, StateActions } from "../interfaces";

const userReducer = (user: IUser, action: StateActions) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      console.log("Login ", user);

      return { ...user, ...payload };
    case LOGOUT:
      console.log("Logout ", user);

      return { ...user, username: "", active: false };
    default:
      return user;
  }
};
export default userReducer;
