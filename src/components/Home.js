import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
        <div style={{display: 'flex', justifyContent: 'center' ,height: '100vh', alignItems:'center'}}>
        
        
        
        <h1><Link to="/User" className = "btn btn-danger " >Users List</Link></h1>
        
        </div>
     </div>
     );
}
 
export default Home;