import { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterProductTable extends Component
{
    constructor(props)
    {
        super(props)
        this.updateSearchBar = this.updateSearchBar.bind(this);
        this.state = {
            isFiltered: true,
            searchString: '',
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

    updateSearchElements(e)
    {
        let name = 'searchString';
        let value = '';
        switch (e.target.type) {
            case 'checkbox':
                name = 'isFiltered'
                value = e.target.checked
                break;
            case 'text':
                name ='searchString'
                value = e.target.value
                break;
        }
        this.setState({[name]:value})
    }
    updateSearchBar(e)
    {
        console.log(e.target.type)
        this.setState(
            {
                searchString : e.target.value
            }
        )
    }

    updateOutOfStockCheckbox(e)
    {
        console.log(e.target.type)
        this.setState(
            {
                isFiltered : e.target.checked
            }
        )
    }

    render(){
        return(
            <div>
                <SearchBar searchString={this.state.searchString} isFiltered={this.state.isFiltered} event={this.updateSearchElements.bind(this)}/>
                <ProductTable products={this.state.products} searchString={this.state.searchString} isFiltered={this.state.isFiltered}/>
            </div>
        )
    }
}