import React from 'react'

export default function ProductCategoryRow(props) {
    return (
        <tr>
            <th>
                {props.category}
            </th>
        </tr>
    )
}
