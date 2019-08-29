import axios from "axios";

const getComments = (query = {}) => dispatch => {
  axios
    .get(`/api/v1/comment/`, {
      params: query
    })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_COMMENTS",
          payload: response.data
        });
      }
    });
};

const addComment = ({ token, id }, postId, message) => dispatch => {
  axios
    .post(`/api/v1/comment`, { userId : id, postId, message }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 201) {
        dispatch({
          type: "ADD_COMMENT",
          payload: response.data
        });
      }
    });
};

export { getComments, addComment };
