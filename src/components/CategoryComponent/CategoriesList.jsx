import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories(this.props.user);
    }

    render() {
        const { category } = this.props;
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <ul className='list-unstyled'>
                    {category.map(item => (
                        <li key={item._id}>
                            <Link to={`/category/${item._id}`}>
                                <div className='title'>{item.title}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Categories;
