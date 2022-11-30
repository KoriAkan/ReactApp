import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {  useEffect, useState } from "react";
import axios from 'axios';





function EditUser(){
    const {id} = useParams();
    //console.log(id);
    const [userData, userdatachange] = useState([]);
    useEffect(() => {
        axios.get('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users')
        .then(res => {
            userdatachange(res.data.users[id-1]);
        }).catch(err=>
            {console.log(err)})

        }, []);
  
    
    
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
       userData.role = e.target[0].value;
       userData.city = e.target[1].value;
       userData.address = e.target[2].value;
       userData.email = e.target[3].value;      

    
        console.log(userData);

    }
    //console.log(userArray);
    return ( 
        
       <Form onSubmit = {handleSubmit}>
            <FormGroup>
               
             <Label>Role</Label>
            <Input type = "text" placeholder={userData.role} required ></Input>
            <Label>City</Label>
           <Input type = "text" placeholder={userData.city} required  ></Input>
           <Label>Address</Label>
          <Input type = "text" placeholder={userData.address} required ></Input>
          <Label>Email</Label>
                <Input type = "text" placeholder={userData.email} required ></Input>
                
            </FormGroup>
            <Button type = "submit">Submit</Button>
            <Link to="/" className = "btn btn-danger ml-20">Cancel</Link>
        </Form>
       
        
     )
}
 
export default EditUser;