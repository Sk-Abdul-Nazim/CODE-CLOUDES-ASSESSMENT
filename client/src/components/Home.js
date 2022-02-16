
import React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
   useEffect(() =>{
      document.title = "Home";
   }, []);
   
   const button = {
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "15px 32px",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "20px"
   };
    return(
     <div style={{textAlign: 'center', marginTop:"200px", fontSize:"28px"}}>

        <h1 >Code Cloudes Assessment </h1>

          <Link to={'/login'}>
             <button style={button}>Login</button></Link>   
     </div>
    );
}

export default Home;