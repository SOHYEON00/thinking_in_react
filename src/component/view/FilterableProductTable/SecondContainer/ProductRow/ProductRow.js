import React from 'react'

export default function ProductRow(props) {

    const name = props.product.stocked ?
        <span> {props.product.name} </span>:
        <span style={{color:'red'}}>
            {props.product.name}
        </span>

    return (
        <tr>
            <td className="productName">
                {name}
            </td>
            <td>
                {props.product.price}
            </td>
            
        </tr>
    )
}