import { connect } from "react-redux";
import AddPost from "./AddPost";
import { addPost } from "./AddPost.Action";

const stateToProps = state => {
  return {
    user: state.user,
    addedPost: state.addedPost
  };
};

export default connect(
  stateToProps,
  { addPost }
)(AddPost);
