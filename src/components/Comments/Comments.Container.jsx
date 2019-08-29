import { connect } from "react-redux";
import Comments from "./Comments";
import { getComments, addComment } from "./Comments.Action";

const stateToProps = state => {
  return {
    user: state.user,
    comments: state.comments,
    message: state.message
  };
};

export default connect(
  stateToProps,
  { getComments, addComment }
)(Comments);
