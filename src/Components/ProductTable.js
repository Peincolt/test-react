import React, { Component } from "react"
import Category from "./Category"
import Product from "./Product"

export default class ProductTable extends Component
{
    filterProducts()
    {
        let currentCategory = ''
        return this.props.products.map(function(element){
            if (element.category !== currentCategory) {
                currentCategory = element.category
            } else {
                delete(element.category)
            }
            return element
        })
    }

    render() {
        let products = this.filterProducts()
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
                    products.map((element,index) => (
                        <React.Fragment key={"rf"+index}>
                            {element.category ? <Category key={"c"+index} name={element.category}/> : ''}
                            <Product key={"p"+index} name={element.name} price={element.price}/>
                        </React.Fragment>
                    ))
                }
            </tbody>
        </table>
        )
    }
}