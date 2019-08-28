import axios from "axios";
import {error, success} from "react-notification-system-redux";

const addPost = ({ token }, { title, message, image, categoryId }) => async dispatch => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("message", message);
  formData.append("image", image);
  formData.append("categoryId", categoryId);

  axios
    .post("/api/v1/post", formData, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      if (response && response.status === 200) {
        dispatch({
          type: "CREATE_POST_SUCCESS",
          payload: response.data
        });

        dispatch(
            success({
              title: "Post added successfully",
              position: "tr",
              autoDismiss: 5
            })
        );
      }
    })
    .catch(err => {
      dispatch(
          error({
            title: "Post creation failed",
            position: "tc"
          })
      )}
    )
};

export { addPost };
