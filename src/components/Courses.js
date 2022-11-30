import React from 'react';
import { Table, } from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {  useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function Courses() {
    const {id} = useParams();
    const [courses, setCourses] =useState([]);
    console.log(id);
    useEffect(() => {
        axios.get('https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id='+id)
        .then(res => {
            console.log(res);
            setCourses(res.data);
        }).catch(err=>
            {console.log(err)})

        }, []);

    return ( 
       <div>
        <Table>
        <thead>
            <tr>
                <td>Certificate</td>
                <td>Passmarks</td>
                <td>Classname</td>
                <td>Marks</td>
                <td>Class id</td>
                <td>Class Code</td>
            
            </tr>
        </thead>
        <tbody>
        {courses.classes?.map(item=>(
    <tr   key = {item.classid} >
    <td>{item.certificate}</td>
    <td>{item.passmarks}</td>
    <td>{item.classname}</td>
    <td>{item.marks}</td>
    <td>{item.classid}</td>
    <td>{item.classcode}</td>


    </tr>
))}

</tbody>
        </Table>

        
</div>
    );
}
 
export default Courses;