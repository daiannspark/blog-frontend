const getCategories = (state = [], action) => {
  if (action.type === "GET_CATEGORY_LIST") {
    return action.payload;
  }
  return state;
};

export default getCategories;