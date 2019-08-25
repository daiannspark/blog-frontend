import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments";
import Spinner from "../../components/Spinner";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.user, this.props.match.params.postId);
  }

  render() {
    const { postId } = this.props.match.params;
    const { post } = this.props;

    return (
      <Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
        </div>
      </Fragment>
    );
  }
}

export default Post;
