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
                <input type="text" name="searchBar" placeholder="nom du produit" onChange={this.props.event} value={this.props.searchString}/><br/>
                <input type={"checkbox"} name="filterProduct" onChange={this.props.event} checked={this.props.isFiltered}/><label htmlFor="filterProduct">Afficher uniquement les produits en stock</label>
            </div>
        )
    }
}