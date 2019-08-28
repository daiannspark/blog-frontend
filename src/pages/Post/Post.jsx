import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.user, this.props.match.params.postId);
  }

  render() {
    return (
      <Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
          <h3>{this.props.post.message}</h3>
          <img src={this.props.post.image} alt='' className='w-25' />
        </div>
      </Fragment>
    );
  }
}

export default Post;
