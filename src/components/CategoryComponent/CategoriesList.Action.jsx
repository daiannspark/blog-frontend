import axios from "axios";

const getCategories = () => dispatch => {
    axios
        .get("/api/v1/category/")
        .then(response => {
            if (response && response.status === 200) {
                dispatch({
                    type: "GET_CATEGORY_LIST",
                    payload: response.data
                });
            }
        });
};

export { getCategories };
