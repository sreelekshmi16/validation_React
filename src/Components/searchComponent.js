import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Col} from 'reactstrap';
const search = (props) => {
const{searchHandler,onSearchHandler,onClearHandler,input}=props;
    return (
        <Col md={6}>
            <Form inline>

               
                <Input type="text" name="search" value={input} placeholder="search here!!!!!!" onChange={searchHandler}/>
                <Button color="primary" onClick={()=>onSearchHandler()}>search</Button>
                <Button color="warning" onClick={()=>onClearHandler()}>clear</Button>
                


            </Form>
        </Col>
    );
}

export default search;