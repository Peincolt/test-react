import { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterProductTable extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isFiltered: false,
            searchString: 'yr',
            products: [
                {key: 0, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {key: 1, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {key: 2, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {key: 3, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {key: 4, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {key:5, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
              ]
        }
    }

    render(){
        return(
            <div>
                <SearchBar searchString={this.state.searchString} isFiltered={this.state.isFiltered}/>
                <ProductTable products={this.state.products} searchString={this.state.searchString} isFiltered={this.state.isFiltered}/>
            </div>
        )
    }
}