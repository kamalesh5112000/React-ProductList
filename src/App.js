import React, { useEffect, useState } from 'react';
import './App.css';
import ProductForm from './components/Form/ProductForm.js';
import Products from './components/Products/Products.js';


function App() {
  const [getProducts,setGetProducts]=useState([]);

  useEffect(()=>{
    const products=JSON.parse(localStorage.getItem('products'));
    if(products){
      setGetProducts(products)
    }
  },[]);

  const onSaveProductData =(productId,productName,productPrice,productCategId)=>{
    console.log("Product details",productId,productName,productPrice,productCategId)
    let productData=JSON.parse(localStorage.getItem('products'));
    if(productData){
      productData.push({productId:productId,productName:productName,productPrice:productPrice,productCategId:productCategId})
    } else{
      productData=[{productId:productId,productName:productName,productPrice:productPrice,productCategId:productCategId}];
    }
    setGetProducts(productData);
    localStorage.setItem('products',JSON.stringify(productData))
  }

  const onDeleteHandler=(productID)=>{
    const productdata=JSON.parse(localStorage.getItem('products'));
    const updatedProductData=productdata.filter(prod=> prod.productId!==productID)
    setGetProducts(updatedProductData)
    localStorage.setItem('products',JSON.stringify(updatedProductData))
  }


  return (
    <React.Fragment>

      <ProductForm onAddProduct={onSaveProductData}/>
      <Products categ='Food' products={getProducts.filter(prod=>prod.productCategId==='1')} onDeleteProduct={onDeleteHandler} />
      <Products categ='Skin Care' products={getProducts.filter(prod=>prod.productCategId==='2')} onDeleteProduct={onDeleteHandler} />
      <Products categ='Electronics' products={getProducts.filter(prod=>prod.productCategId==='3')} onDeleteProduct={onDeleteHandler} />
      <Products categ='Toys' products={getProducts.filter(prod=>prod.productCategId==='4')} onDeleteProduct={onDeleteHandler} />

      
      
    </React.Fragment>
  );
}

export default App;
