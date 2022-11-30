
import './App.css';
import React, { useState, useEffect } from "react";
import Users from './components/Users';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import EditUser from './components/EditUser';
import Courses from './components/Courses';
import Home from './components/Home'

function App() {
  const course = "React js"

  
  

  return (
    <div className ="App">
 
    <Router>
   <Routes>
   <Route path = '/' element = {<Home></Home>} ></Route>
  <Route path = '/User' element = {<Users></Users>} ></Route>
  <Route path = '/edit/:id' element = {<EditUser></EditUser>} ></Route>
  <Route path = '/courses/:id'  element = {<Courses ></Courses>} ></Route>

 
  </Routes>  

  </Router>  
    
    </div>
  );
}

export default App;
