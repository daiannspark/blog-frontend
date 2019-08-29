import React from "react";

const AddComment = props => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit}
          className='comment-form col-6 ml-auto mr-auto'>
      <div className='form-group'>
          <label htmlFor=''>Leave your comment</label>
        <textarea name='message' onChange={onChange} className='form-control' />
      </div>
      <button type='submit' className='btn btn-success float-right'>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
