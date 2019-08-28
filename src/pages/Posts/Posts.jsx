import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoriesList from "../../components/CategoryComponent";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(this.props.user);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <h3>Categories</h3>
          <CategoriesList/>
        </div>
        <ul className='list-unstyled'>
          {posts.map(item => (
            <li key={item._id}>
              <Link to={`/post/${item._id}`}>
                <div className='title'>{item.title}</div>
                <div className='message'>{item.message}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
