import axios from "axios";

const getPost = ({ token }, postId) => dispatch => {
  axios
    .get(`/api/v1/post/${postId}/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        const payload = response.data;
        dispatch({
          type: "GET_POST",
          payload
        });
      }
    });
};

export { getPost };
