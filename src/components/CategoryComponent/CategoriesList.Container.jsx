import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { getCategories } from "./CategoriesList.Action";

const stateToProps = state => {
    return {
        user: state.user,
        category: state.getCategories
    };
};

export default connect(
    stateToProps,
    { getCategories }
)(CategoriesList);