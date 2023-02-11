import React, { Component } from "react"
import Category from "./Category"
import Product from "./Product"

export default class ProductTable extends Component
{
    filterProducts()
    {
        let currentCategory = ''
        return this.props.products.flatMap(function(element){
            if (this.props.searchString !=='') {
                let regex = new RegExp(this.props.searchString);
                if (!regex.test(element.name)) {
                    return [];
                }
            }

            if (this.props.isFiltered) {
                if (!element.stocked) {
                    return [];
                }
            }

            if (element.category !== currentCategory) {
                currentCategory = element.category
            } else {
                delete(element.category)
            }

            return element
        },this)
    }

    render() {
        return ( 
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.filterProducts().length > 0 ? this.filterProducts().map((element,index) => (
                        <React.Fragment key={"rf"+index}>
                            {element.category ? <Category key={"c"+index} name={element.category}/> : ''}
                            <Product key={"p"+index} name={element.name} price={element.price}/>
                        </React.Fragment>
                    )) : <tr>
                            <td colspan={2}>Aucun produit correspond à vos critères de recherche</td>
                        </tr>
                }
            </tbody>
        </table>
        )
    }
}