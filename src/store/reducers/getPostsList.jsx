const getPostsList = (state = [], action) => {
  if (action.type === "GET_POSTS_LIST") {
    return action.payload;
  }
  return state;
};

export default getPostsList;
