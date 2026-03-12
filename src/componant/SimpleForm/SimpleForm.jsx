 import React from 'react'
 
//task-1 submit button click korle nicher function call hobe 

 function SimpleForm() {
    const handleSubmit = (e) =>{
        // preventDefault use kore browser default behevior stop korte pari .dile amra console.log dekhte parbo.preventDefault na dile browser auto load nibe . 
        e.preventDefault();
        // 
        console.log(e.target.name.value);
        console.log(e.target.email.value);   
    }




   return (
     <div>
       <form onSubmit={handleSubmit}>
        <input  name="name" type = "text"  placeholder='Your Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <input type="submit" value="Submit" />

       </form>
     </div>
   )
 }
 
 export default SimpleForm
 