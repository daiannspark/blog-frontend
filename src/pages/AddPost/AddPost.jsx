import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AddPost extends Component {
  state = {
    title: "",
    message: "",
    image: "",
    categoryId: ""
  };

  fileInput = React.createRef();

  componentDidMount = () => {
    this.props.getCategories();
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const image = this.fileInput.current.files[0];
    if (!image) {
      return;
    }

    const { title, message, categoryId } = this.state;
    this.props.addPost(this.props.user, { title, message, image, categoryId });
  };

  render() {
    const { addedPost, categories } = this.props;

    if (addedPost._id) {
      return <Redirect to={`/post/${addedPost._id}`} />;
    }
    return (
      <form onSubmit={this.onSubmit}
      className='addPost-form col-6 ml-auto mr-auto'
      >
        <div className='form-group'>
          <label htmlFor=''>Title</label>
          <input
            name='title'
            type='text'
            className='form-control'
            onChange={this.onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Message</label>
          <input
              name='message'
              type='text'
              className='form-control'
              onChange={this.onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Category</label><br />
          <select name='categoryId' onChange={this.onChange}>
            <option value="all">All categories</option>
            {categories.map(item => (
                <option value={item._id} key={item.title}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Image</label>
          <input
            name='image'
            type='file'
            className='form-control'
            ref={this.fileInput}
          />
        </div>
        <button type='submit' className='btn btn-secondary float-right'>
          Add
        </button>
      </form>
    );
  }
}

export default AddPost;
