import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import Validation from '../../Utils/Validation'
import { render } from 'react-dom';
import {validation,validatePassword} from '../../Utils/Validation';
 class signUp extends Component {

state={
    username:"",
    email:"",
    Age:"",
    password:"",
    confirmpassword:"",
  
errors:undefined
}

handleUserInput=(event)=>{
const {errors} = this.state
const name = event.target.name
const value = event.target.value
console.log("value",value);
this.checkValidation();

if(errors && errors[name]){
errors[name] = ""
}
this.setState({
    [name]:value,
    errors
  
})

}

checkValidation = () => {
    const{username,email,password,Age,confirmpassword} = this.state
    // const {errors} = this.state;
    let errors = undefined;
    if(username.length<6 || username === ''){
        if(!errors) errors = {}
        errors.username ="username not valid"
    }
   if(!validation(email) || email===''){
    if(!errors) errors = {}
       errors.email ="email not valid"
   }
   if((!validatePassword(password)) || password ===''){
    if(!errors) errors = {}
       errors.password = "Password is not strong enough"
   }
   if(isNaN(Age) || Age ===''){
    if(!errors) errors = {}
       errors.Age ="invalid age!!"
   }
   
   if(password !== confirmpassword){
    if(!errors) errors = {}
   errors.confirmpassword ="Password not matching"
   }
   else {
    console.log("match password");
   }
 
//    else{
//     errors.confirmpassword ="Password not matching"
//    }
//    this.setState({
//     errors:errors
// })


//    if(errors.username || errors.password || errors.email || errors.Age || errors.confirmpassword !== null){
//        return false;
//    }
   return errors
   
}

handleClickSubmit=()=>{
    const name = this.state;
    console.log("ddssssssssssss",name)
    const{username,email,password,Age} = this.state
    console.log('this.state', this.state)
    const error = this.checkValidation();
    console.log('isValidForm',error)
    if (!error) {
        console.log("SUCCESSSS")
    } else {
        this.setState({
            errors: error
        })
    }
}

render(){
console.log("---state",this.state)
const{errors}=this.state
return(

    <Col md={6}>
          <Form>
          <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="exampleUsername" placeholder="Username" onChange={(event) =>this.handleUserInput(event)} />
              <div><p style={{ color: 'red' }}>{errors && errors.username}</p></div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email id" onChange={(event) =>this.handleUserInput(event)}/>
              <div><p style={{ color: 'red' }}>{errors &&errors.email}</p></div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleAge">Age</Label>
              <Input type="text" name="Age" placeholder="age pls" onChange={(event) =>this.handleUserInput(event)} />
              <div><p style={{ color: 'red' }}>{errors &&errors.Age}</p></div>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={(event) =>this.handleUserInput(event)} />
              <div><p style={{ color: 'red' }}>{errors &&errors.password}</p></div>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input type="password" name="confirmpassword" id="exampleConfirmPassword" placeholder="Re-enter password" onChange={(event) =>this.handleUserInput(event)} />
              <div><p style={{ color: 'red' }}>{errors &&errors.confirmpassword}</p></div>
            </FormGroup>
            <Button color="primary" onClick={()=>this.handleClickSubmit()}>Submit</Button>
            </Form>
    </Col>
)
    }

 }

 export default signUp