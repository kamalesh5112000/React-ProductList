import React from 'react';
import Card from '../UI/Card';
import ProductItem from './ProductItem';
import './Products.css'


const Products=(props)=>{
    const onDeleteHandler=(productId)=>{
        props.onDeleteProduct(productId)
    }
    return (
        <div className='products'>
            <Card >
            <h2>{props.categ}</h2>
            {
                props.products.map((prod) => (
                    <ProductItem key={prod.productId} id={prod.productId} name={prod.productName} price={prod.productPrice} category={props.categ} onDeleteProduct={onDeleteHandler}/>
                ))
            }
        </Card>

        </div>
        
    );

}

export default Products