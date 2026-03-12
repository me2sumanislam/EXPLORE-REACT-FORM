 import React from 'react'
import Grandpa from './Grandpa'
import './FamilyTree.css'
//  task-6

 const  FamilyTree = () => {
    const asset = 'diamond'
   return (
     <div className='family-tree'>
        <h2>Family Tree</h2>
        <Grandpa asset ={asset}></Grandpa>
     </div>
   )
 }
 
 export default FamilyTree
 