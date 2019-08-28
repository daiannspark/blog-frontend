import axios from "axios";

const getPostsList = ({ token, query = {} }) => dispatch => {
  axios
    .get("/api/v1/post/", {
      headers: {
        authorization: `Bearer ${token}`
      },
      params: query
    })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_POSTS_LIST",
          payload: response.data
        });
      }
    });
};

export { getPostsList };
