import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [patient_username, setUsername] = useState();
    const [patient_password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn) {
            setIsLoggedIn(true);
            navigate('/dashboard'); // Redirect to dashboard if already logged in
        }
    }, [navigate]);
    axios.defaults.withCredentials = true;
    const submit = async (e) => {
        e.preventDefault();
        const newUserData = {
            patient_username,
            patient_password,
        };
        console.log("Hello");
        try {
            
            const response = await axios.post('http://localhost:5000/login', newUserData);
            if (response.status === 200) {
                console.log('Login Success');
                localStorage.setItem('isLoggedIn', 'true'); // Set login flag in local storage
                navigate('/dashboard');
            } else {
                console.log('Login Failed');
            }
        } catch (err) {
            console.log('Error during login:', err);
        }
    };

    if (isLoggedIn) {
        return <div>You are already logged in.</div>;
    }

    return (
        <div>
        <div className="login-outer-div">
            <div className="div-main">
                <form onSubmit={submit}>
                    <div className="in-column-outer">
                        <div className="outer-deatils">
                            <div className="inner-submit">
                                Login Form
                            </div>
                        </div>
                        <div className="in-column-inner">
                            <div className="in-row">
                                <div className="label-outer">
                                    <div className="label-inner">
                                        Username :
                                    </div>
                                </div>
                                <div className="label-outer">
                                    <div className="label-inner">
                                        Password :
                                    </div>
                                </div>
                            </div>
                            <div className="in-row">
                                <div className="input-outer">
                                    <div  className="input-inner">
                                    <input type="text" name="patientUsername" value={patient_username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input-outer">
                                    <div  className="input-inner">
                                        <input type="password" name="patientPassword" value={patient_password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="outer-submmit">
                            <div className="inner-submit">
                            <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>  
                </form>
            </div> 
        </div>
    </div>
    );
}

export default Login;