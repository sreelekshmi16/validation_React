import React from 'react';


export const validation =(string)=>{

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const isValid = validEmailRegex.test(string)

  if(isValid){
      return true
  }
   return false
  
}

export const validatePassword=(string)=>{

 const validpasswordRegex = RegExp(/^(?=.*[A-Z])(?=.*\d)/);

 const isValidPassword = validpasswordRegex.test(string)

 if(isValidPassword){
   return true
 }
 return false

}



// export default validation;
// export default validatePassword;