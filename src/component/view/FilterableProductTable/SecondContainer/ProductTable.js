import React from 'react'
import ProductCategoryRow from './ProductRow/ProductCategoryRow'
import ProductRow from './ProductRow/ProductRow'

export default function ProductTable(props) {

    const products = props.products;
    const filterText = props.FilterText;
    const inStockOnly = props.InStockOnly;

    const row = [];
    let lastCategory = null;

    products.forEach(product => {

        // filterText
        if(product.name.indexOf(filterText) === -1){
            return;
        }

        // inStock
        if(inStockOnly && !product.stocked){
            return;
        }

        // 카테고리에 맞게 분류
        if(product.category !== lastCategory) {
            row.push(
                <ProductCategoryRow 
                    category={product.category} 
                    key={product.category} />
            );
        }

        row.push(
            <ProductRow 
                key={product.name} 
                product={product}
            />
        );

        lastCategory = product.category;
    })

    if(row.length === 0){
        row.push(
            <div>
                There's no Stuffs :)
            </div>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </div>
    )
}
