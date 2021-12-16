import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
    render() {
        return (
            //loading if it's no filter product
            !this.props.filteredProducts ? (
            <div> Loading...</div>
        ) : (
            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort"> Order {" "} 
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    </select></div>
                <div className="filter-size"> Filter {" "} 
                    <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                    <option value="">ALL</option>
                    <option value="one">ONE</option>
                    <option value="64">64</option>
                    <option value="128">128</option>
                    <option value="256">256</option>
                    <option value="512">512</option>
                    </select></div>
                
            </div>
             ));
    }
}

export default connect(
    (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),
{
    filterProducts,
    sortProducts,
}
)(Filter);
