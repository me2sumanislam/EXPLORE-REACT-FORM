 import React from 'react'
  
 //task-2 2nd method ar diye amora form ar data nite pari get method use kore  
 function FormAction() {
    const handleformAction = (formData) =>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
   return (
     <div>
        <form action={handleformAction}>
            <input type="text" name="name" id="" placeholder='Name' />
            <br />
            <input type="email" name="email" id="" placeholder='Email' />
            <br />
            <input type="submit" value="Submit" />
        </form>
     </div>
   )
 }
 
 export default FormAction
 