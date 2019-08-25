import axios from "axios";

const getPostsList = ({ token }) => dispatch => {
  axios
    .get("/api/v1/post/", {
      headers: {
        authorization: `Bearer ${token}`
      }
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
