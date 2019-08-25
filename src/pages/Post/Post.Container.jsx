import { connect } from "react-redux";
import Post from "./Post";
import { getPost } from "./Post.Action";

const stateToProps = state => {
  return {
    user: state.user,
    post: state.getPost
  };
};

export default connect(
  stateToProps,
  { getPost }
)(Post);
