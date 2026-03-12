import { useState } from "react";
// task-4
  useState
 const useInputField = (defaultValue) =>{

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = e =>{
        setFieldValue(e.target.value);
    }
   return [fieldValue, handleFieldOnChange];

 }
 export default useInputField;