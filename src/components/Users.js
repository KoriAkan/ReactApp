import React from 'react';
import { Table } from 'reactstrap';
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {  useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from './Pagination'


function Users(){
    const [userData, userdatachange] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);
    useEffect(() => {
        axios.get('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users')
        .then(res => {
            userdatachange(res.data.users);
        }).catch(err=>
            {console.log(err)})

        }, []);
        const lastUserIndex = currentPage * usersPerPage;
        const firstUserIndex = lastUserIndex - usersPerPage;
        const currentUsers = userData.slice(firstUserIndex, lastUserIndex);

    return ( 
        <div>
            <Table>
            <thead>
                <tr>
                    <td>Role</td>
                    <td>City</td>
                    <td>Address</td>
                    <td>Phone</td>
                    <td>Username</td>
                    <td>Id</td>
                    <td>Email</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
              
{currentUsers.map(item=>(
    <tr   key = {item.id} >
    <td>{item.role}</td>
    <td>{item.city}</td>
    <td>{item.address}</td>
    <td>{item.phone}</td>
    <td>{item.username}</td>
    <td>{item.id}</td>
    <td>{item.email}</td>
<td>{item.name}</td>
<td>
    <Link to = {'/edit/' + item.id} className = "btn btn-warning">Edit</Link>
    <Link to = {'/courses/' + item.id} className = "btn btn-primary">Courses</Link>


</td>
    </tr>
))}
            </tbody>
        </Table>
        <Pagination
                totalUsers={userData.length}
                usersPerPage={usersPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
       
        </div>
     );
}
 
export default Users;