 import React, { useState } from 'react'
//  task-3
 function ControlField() {
const [password, setPassword] =useState('secret')
const [error, setError] = useState('');

//submit korar pore jodi dekhate chai 
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted')
        if(password.length <6 ){
            setError('6 characters or longer password needed')
        }else{
            setError('')
        }
    }
// submit korar age jodi error dekhate chai 
    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value);

        if(password.length < 6 ){
            setError('Password must be 6 characters or longer.')
        }
        else{
           setError('')
        }
    }

   return (
     <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="" placeholder='Eamil' required />
            <br />
            {/* <input type="password" value={password} name="password" id="" placeholder='Password' required />value={password} dei tahole amora password type korte parbo na password field readonly hoye thakbe   */}
            <input type="password" onChange={handlePasswordOnChange}  defaultValue={password} name="password" id="" placeholder='Password' required />
            <br />
            <input type="submit" value="Submit" />
        </form>
        <p style={{ color: 'red'}}>
            <small>{error}</small>
        </p>

     </div>
   )
 }
 
 export default ControlField
 