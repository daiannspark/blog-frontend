import { connect } from "react-redux";
import Navigation from "./Navigation";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  {}
)(Navigation);
