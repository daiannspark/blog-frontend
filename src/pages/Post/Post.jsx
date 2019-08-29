import React, { Component, Fragment } from "react";
import Comments from "../../components/Comments";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.user, this.props.match.params.postId);
  }

  render() {
    return (
      <Fragment>
        <div className='add-post col-6 ml-auto mr-auto'>
          <h3>{this.props.post.title}</h3>
          <h3>{this.props.post.message}</h3>
          <img src={this.props.post.image} alt='' className='w-25'/>
          <br/>
          <br/>
        </div>
        <div>
          <Comments postId={this.props.match.params.postId} />
        </div>
      </Fragment>
    );
  }
}

export default Post;
