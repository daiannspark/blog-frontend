import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from "./registration";
import getCategories from "./getCategories";
import getPostsList from "./getPostsList";
import getPost from "./getPost";
import comments from "./comments";
import user from "./user";
import addPost from "./addPost";

const rootReducer = combineReducers({
  notifications,
  isRegistered,
  user,
  getCategories,
  getPostsList,
  getPost,
  comments,
  addPost
});

export default rootReducer;
