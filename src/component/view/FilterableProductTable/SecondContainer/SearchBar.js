import React from 'react'

export default function SearchBar(props) {

    const handleFilterTextChange = (e) => {
        props.onFilterTextChange(e.currentTarget.value);
    }

    const handleInStockChange = (e) => {
        props.onInStockChange(e.currentTarget.checked)
    }

    return (
        <div>
            <form>
                <input type="text" 
                    value={props.filterText} 
                    onChange={handleFilterTextChange} 
                    placeholder="Search..." />
                <p>
                <input type="checkbox" 
                    checked={props.InStockOnly} 
                    onChange={handleInStockChange}  />
                Only show products in stock
                </p>
                
            </form>
        </div>
    )
}
 