 import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
  //task:5


 function ProductManagement() {
// amader sob product ai useState ar modhe rakhbo tar jonno array dilam 
    const [products, setProducts] = useState([]);
// je kahane state declare korbo sekhane handler add korbo 
 
const handleAddProduct = newProduct =>{
    const newProducts = [...products, newProduct];
    setProducts(newProducts)
}


   return (
     <div>
        <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
        <ProductTable products={products}></ProductTable>
     </div>
   )
 }
 
 export default ProductManagement
 