import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { getCategories } from "./CategoriesList.Action";
import {getPostsList} from "../../pages/Posts/Posts.Action";

const stateToProps = state => {
    return {
        user: state.user,
        categories: state.getCategories,
        categoryId: state.categoryId
    };
};

export default connect(
    stateToProps,
    { getCategories, getPostsList }
)(CategoriesList);