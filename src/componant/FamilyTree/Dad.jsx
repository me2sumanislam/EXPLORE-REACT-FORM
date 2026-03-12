 import React from 'react'
import MySelf from './MySelf'
import Sister from './Sister'
import Brather from './Brather'
 
  const Dad = ({asset})  =>{
   return (
     <div>
       <h2>Dad</h2>
       <section className='flex'>
        <MySelf asset={asset}></MySelf>
        <Brather></Brather>
        <Sister></Sister>

       </section>
     </div>
   )
 }
 
 export default Dad
 