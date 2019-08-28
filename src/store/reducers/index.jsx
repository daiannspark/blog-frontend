import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import getCategories from "./getCategories";
import getPostsList from "./getPostsList";
import getPost from "./getPost";
import comments from "./comments";
import user from "./user";
import addedPost from "./addedPost";

const rootReducer = combineReducers({
  notifications,
  isRegistered,
  user,
  getCategories,
  getPostsList,
  getPost,
  comments,
  addedPost
});

export default rootReducer;
