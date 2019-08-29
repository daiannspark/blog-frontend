import React, { Component } from "react";
import AddComment from "./AddComment";

class Comments extends Component {
  componentDidMount() {
    this.props.getComments({postId: this.props.postId });
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.addComment(this.props.user, this.props.postId, this.state.message);
  };

  render() {
    return (
      <div>
        { this.props.comments ?
        <ul className='list-unstyled col-6 ml-auto mr-auto'>
          {this.props.comments.map(item => {
            const dateObj = new Date(item.createdAt);
            const date = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
            return (
              <li key={item._id} className='border border-info p-2 mb-2'>
                {item.username} {date} : {item.message}
              </li>
            );
          })}
        </ul>
        : null }
        <AddComment onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Comments;
