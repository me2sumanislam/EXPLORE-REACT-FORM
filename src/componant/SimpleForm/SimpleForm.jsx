 import React from 'react'
 
//task-1 submit button click korle nicher function call hobe 

 function SimpleForm() {
    const handleSubmit = () =>{
        console.log('form submitted')
    }




   return (
     <div>
       <form onSubmit={handleSubmit}>
        <input type = "text"  placeholder='Your Name' />
        <br />
        <input type="submit" value="Submit" />

       </form>
     </div>
   )
 }
 
 export default SimpleForm
 