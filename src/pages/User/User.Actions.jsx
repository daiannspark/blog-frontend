import axios from "axios";

const getSelfInfo = ({ token }) => dispatch => {
  axios
    .get("/api/v1/user/self", {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "GET_USER_INFO",
          payload: response.data
        });
      }
    });
};

export { getSelfInfo };
