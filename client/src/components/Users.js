
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () =>{

    const [errorMessage, setErrorMessage] = useState('');
    const [display, setDisplay] = useState('');
    const [displayDistance, setDisplayDistance] = useState('');
     
     
  
    useEffect(() =>{
        document.title = "Employee";
      },[]);
      
    const[defaultCity,setCity] = useState({
       
        city:"",

    });

    const{
        city
    }=defaultCity;

    const onChange = (e) =>{
        setCity({...defaultCity,[e.target.name]:e.target.value});
    }
    const onSubmitHandle = (e) =>{
        e.preventDefault();
        axios.post('/api/places/checkDistance', {
            placeName: city
          })
          .then(function (response) {
              console.log(response);
            //   console.log(response.data.display);
              setDisplay(response.data.display);
              setDisplayDistance(response.data.distance);
              setErrorMessage(response.data.message);
          })
          .catch(function (error) {
              console.log(error);
              
          });
      clear();
    }

    const clear = () =>{
        setCity({
        city:""
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
        marginLeft:"80px"
    };

    return(
      <div style={{marginLeft: '600px', fontSize:"28px", borderRadius: "5px", padding: "20px"}}>
     
            <form onSubmit={onSubmitHandle}>
                <h2>User City</h2>              
                {
                   errorMessage.includes("Invalid place") ||  errorMessage.includes("Please Set Default City In Admin") || errorMessage.includes("Both are same city")? <span style={{
                    fontWeight: 'bold',
                        color: 'red',
                        fontSize: "22px",
                        marginLeft:"80px"
                       }}>{errorMessage}</span> : ""
                    
                }
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
                    <button type="reset" onClick={(e) => clear()} style={button}>Clear</button>
               
            </form>
            <br/>

            <label htmlFor="range">Range In 100 KM :</label> <span style={{
                        fontWeight: 'bold',
                color: 'red',
                fontSize: "26px",
                
                }}>{display}</span>
                <br />
                <label htmlFor="distance">Distance : </label> <span style={{
                        fontWeight: 'bold',
                color: 'red',
                fontSize: "26px",
                
                }}>{displayDistance}</span>
    
     </div>
    );
}

export default Users;