const addedPost = (state = false, action) => {
  if (action.type === "CREATE_POST_SUCCESS") {
    return action.payload;
  }
  return state;
};

export default addedPost;
