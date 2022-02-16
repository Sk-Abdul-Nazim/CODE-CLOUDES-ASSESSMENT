
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();
  
    useEffect(() => {
        document.title = "Admin Login";
    }, []);
      
    const [adminLogin, setAdminLogin] = useState({
       
        email: "",
        password: "",

    });

    const {
        email,
        password
    } = adminLogin;

    const onChange = (e) => {
        setAdminLogin({ ...adminLogin, [e.target.name]: e.target.value });
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        axios.post('/api/users/auth', {
            email: email,
            password: password
        })
            .then(function (response) {
                if (response.status === 200 && response.data.id === "u1") {
                    navigate('/admin');
                }
                else if (response.status === 200 && response.data.id === "u2") {
                    navigate('/user');
                } else {
                    setErrorMessage("Invalid Credentials");
                }
            })
            .catch(function (error) {
                console.log(error);
              
            });
        clear();
    }

    const clear = () => {
        setAdminLogin({
            email: "",
            password: ""
        });
        setErrorMessage('');
    }
    
    const inputStyle = {
        width: "10%",
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
        padding: "5px 20px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "18px",
        marginLeft:"0px"
    };
    
    const button1 = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "5px 20px",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "18px",
        marginLeft:"150px"
     };

    return(
      <div style={{textAlign: 'center', fontSize:"28px", borderRadius: "5px", padding: "20px"}}>
     
            <form onSubmit={onSubmitHandle}>
                <h2>Login Details</h2>
                {
                    errorMessage.includes("Invalid Credentials") ?   <span style={{
                        fontWeight: 'bold',
                    color: 'red',
                    fontSize: "22px"
                    }}>{errorMessage}</span> : ""
                    
               }
              
                <br/>
                
                    <label htmlFor="email">Email : &emsp;&emsp; </label>
                    <input type="text" 
                    name="email" 
                    id="email" 
                    style={inputStyle}
                    placeholder="Enter Email"
                    value={email}
                    autoComplete="off"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
                
<br/>
                
                    <label htmlFor="password">Password :&ensp;  </label>
                    
                    <input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter password"
                    style={inputStyle}
                    value={password}
                    autoComplete="off"
                    onChange={(e)=>{
                        onChange(e);
                    }}
                    required
                    />
               
                <br/>
               
                    <button type="submit" style={button1} >Login</button>&ensp;
                    <button type="reset" onClick={(e) => clear()} style={button} >Clear</button>
                
            </form>
    
     </div>
    );
}

export default Login;