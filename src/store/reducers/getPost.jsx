const getPost = (state = {}, action) => {
  if (action.type === "GET_POST") {
    console.log(action);

    return action.payload;
  }
  return state;
};

export default getPost;
