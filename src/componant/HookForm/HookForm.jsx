import React from 'react'
import useInputField from '../../hooks/useInputField';
// task-4
 const  HookForm = () =>{
    const [name, nameOnChange] =useInputField('');
    const [email, emailOnchange] = useInputField('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit',name, email)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text"  onChange={nameOnChange}/>
        <br />
        <input type="email" onChange={emailOnchange} name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default HookForm
