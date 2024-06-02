import React, { useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'

const products = [
  {id: '1', title: 'Jeans', price: 5000, description: 'Blue, straight'},
  {id: '2', title: 'Jacket', price: 12000, description: 'Green, warm'},
  {id: '3', title: 'Jeans 2', price: 5000, description: 'Blue, straight'},
  {id: '4', title: 'Jacket 8', price: 122, description: 'Green, warm'},
  {id: '5', title: 'Jeans 3', price: 5000, description: 'Blue, straight'},
  {id: '6', title: 'Jacket 7', price: 600, description: 'Green, warm'},
  {id: '7', title: 'Jeans 4', price: 5500, description: 'Blue, straight'},
  {id: '8', title: 'Jacket 5', price: 12000, description: 'Green, warm'},
]

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([])

  

  return (
    <div className={'list'}>
        {products.map(item => {
          <ProductItem
            product={item}
            onAdd={onAdd}
            className={'item'}
          />
        })}
    </div>
  )
}

export default ProductList