import React, { Component } from "react";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {categoryId: "all"};
    }

    componentDidMount = () => {
        this.props.getCategories();
    };

    submit = () => {
        const { categoryId } = this.state;

        let query = {};
        if(categoryId !== "all"){
            query = { categoryId }
        }

        this.props.getPostsList({ token: this.props.user.token, query})
    };

    change = (event) => {
        this.setState( {categoryId: event.target.value});
    };

    render() {
        const { categories } = this.props;
        return (
            <div className='d-flex justify-content-center align-items-center '>
                <select onChange={this.change} value={this.state.categoryId}>
                    <option value="all">All categories</option>
                    {categories.map(item => (
                        <option value={item._id} key={item.title}>{item.title}</option>
                    ))}
                </select>
                <button onClick={this.submit}>Refresh</button>
            </div>
        );
    }
}

export default Categories;
