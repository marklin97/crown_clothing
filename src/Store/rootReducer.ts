import { combineReducers } from "redux";
import userReducer from "./UserModule/reducer";

export default combineReducers({
  user: userReducer,
});
