import { Component } from "react";

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return (
            <div>
                <input type="text" name="searchBar" value={this.props.searchString} placeholder="nom du produit"/><br/>
                <input type={"checkbox"} name="filterProduct" checked={this.props.isFiltered}/><label htmlFor="filterProduct">Afficher uniquement les produits en stock</label>
            </div>
        )
    }
}