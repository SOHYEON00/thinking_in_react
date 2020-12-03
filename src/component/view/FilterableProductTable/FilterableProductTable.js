import React, {useState} from 'react'
import SearchBar from './SecondContainer/SearchBar'
import ProductTable from './SecondContainer/ProductTable'

export default function FilterableProductTable(props) {

    const [FilterText, setFilterText] = useState('');
    const [InStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (FilterText) => {
        setFilterText(FilterText);
    }
    const handleInStockChange = (InStockOnly) => {
        setInStockOnly(InStockOnly);
    }
    return (
        <div>
            <SearchBar 
                FilterText={FilterText}
                InStockOnly={InStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange} />
            <ProductTable 
                products={props.products}
                FilterText={FilterText}
                InStockOnly={InStockOnly} />
        </div>
    )
}
