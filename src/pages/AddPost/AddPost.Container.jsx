import { connect } from "react-redux";
import AddPost from "./AddPost";
import { addPost } from "./AddPost.Action";
import {getCategories} from "../../components/CategoryComponent/CategoriesList.Action";

const stateToProps = state => {
  return {
    user: state.user,
    addedPost: state.addedPost,
    categories: state.getCategories
  };
};

export default connect(
  stateToProps,
  { getCategories, addPost }
)(AddPost);
