
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminSetCity = () =>{

    const [errorMessage, setErrorMessage] = useState('')
    const [placeName, setPlaceName] = useState('')
    const[defaultCity,setCity] = useState({
        city:""
    });

    useEffect(() =>{
        document.title = "Admin City";
      },[]);
      
  
    const{
        city
    }=defaultCity;

    const onChange = (e) =>{
        setCity({...defaultCity,[e.target.name]:e.target.value});
    }
    const onSubmitHandle = (e) =>{
        e.preventDefault();
        axios.post('/api/places/addDeafultPlace', {
           placeName:city
          })
          .then(function (response) {
              setErrorMessage(response.data.message);
              setPlaceName(response.data.deafaultPlace.name);
          })
          .catch(function (error) {
              console.log(error);
              
          });
      clear();
    }

    const clear = () =>{
        setCity({
            city: ""
        });
      
        setErrorMessage('');
      }

      const inputStyle = {
        width: "20%",
        padding: "12px 20px",
        margin: "8px 0px",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px"
    };
    const button = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "5px 18px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "18px",
        marginLeft:"0px"
    };
    const button1 = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "5px 18px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "18px",
        marginLeft:"100px"
    };
    const buttonUserLogin = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "5px 18px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "18px",
        marginLeft:"140px"
    };
    
    return(
      <div style={{marginLeft: '550px', fontSize:"28px", borderRadius: "5px", padding: "20px"}}>
     
            <form onSubmit={onSubmitHandle}>
                <h2 style={{marginLeft:"80px"}}>Admin City</h2>
                <span style={{
                        fontWeight: 'bold',
                    color: 'red',
                    fontSize: "22px",
                    marginLeft:"80px"
                     }}>{errorMessage.includes("Invalid place") ? errorMessage : placeName}</span>
              <br/>
                    <label htmlFor="city">City : &ensp;</label>
                    
                    <input type="text" 
                    name="city" 
                    id="city" 
                    style={inputStyle}
                    placeholder="Enter Default City"
                    value={city}
                    autoComplete="off"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
               
                <br/>
                
                    <button type="submit" style={button1}>Submit</button>&ensp;
                    <button type="reset" onClick={(e) => clear()} style={button}>Clear</button><br/>
                    <Link to={'/login'} style={buttonUserLogin}>User Login</Link>
                
            </form>
    
     </div>
    );
}

export default AdminSetCity;