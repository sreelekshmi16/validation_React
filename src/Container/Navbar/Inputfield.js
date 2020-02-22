import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import MeasurementValidation from '../../Utils/MeasurementValidation'


class inputField extends Component {


    state = {
        input: '',
        Height: '',
        Weight: '',
        error: undefined
    }


    // checkNumber=(string)=>{
    //     return isNaN(string)
    // }

    checkHeight = (event) => {
       
        let error = undefined;
        let inputt = ''
        console.log("hi")
        let value = event.target.value;
        const name = event.target.name;
        console.log("----------value",event.target);


        const specialValidation = (string) => {

            var pattern = RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);
            const match = pattern.test(string);
            if (match) {
                return true
            }
            return false
        }

     
        if (!error) error = {}
        if(value.length>4){
        console.log("valueeeeeeeeeeeee",value)
         error.Height ='enter a valid entry';
         this.setState({
             error:error
         })
        }

        // if ( isNaN(value) ||value.length > 3 ) {
        //     if (!error) error = {}
        //     error.Height = 'enter a valid entry';
            
        //     // inputt = value.replace(value,'')

        // }
        // else {
        //     inputt = value
        // }

        this.setState({
            error: error,
            input: value
        })
    }

restrictCharacters = (e) => {
    
    var x=e.which||e.keyCode;
    if((x>=48 && x<=57) || x==8 ||
        (x>=35 && x<=40)|| x==46)
        return true;
    else
        return false;
}

    restrictInputHandler = (e) =>{
    let errors = undefined;

    console.log("eeeeeeeeee", e.keyCode)
        console.log("check keypress");
       
       const restrict =  this.restrictCharacters(e);
       if(!restrict) {
        e.preventDefault();

        if(!errors) errors = {}
        errors.Height='invalid'
        this.setState({
            error:errors
        })

       }
    }

    render() {

        console.log("---------state", this.state)
        const { error } = this.state
        const { input } = this.state

        return (

            <Col md={6}>
                <h5>Enter Heigth(in cm)</h5>
                <Input type="text" name="Height" id="example1" placeholder="" value={input} onChange={(e)=>this.checkHeight(e)} onKeyPress={this.restrictInputHandler} maxLength={4} />
                <div><p style={{ color: 'red' }}>{error && error.Height}</p></div>
                <Button color="primary">primary</Button>
                <div>
                    <h5>Enter weight(in Kg)</h5>
                    <Input type="text" name="Weight" id="example2" placeholder="" onChange={(event) => this.checkHeight(event)} />
                    <Button color="primary">primary</Button>
                </div>
            </Col>
        );

    }
}
export default inputField