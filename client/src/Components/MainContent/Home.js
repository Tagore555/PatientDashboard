import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import doctorImage from './doctor.png'; // Make sure this path is correct

const Home = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <FontAwesomeIcon icon={faHospitalUser} className='hello'/>
                    <div className='hii'><h1>MedConnect Protal</h1></div>
                </div>
            </header>
            <main>
                <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="buttons">
                        <Link to="/userLogin" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
                        <Link to="/userRegister" style={{ textDecoration: 'none' }}><button className="signup">Sign Up</button></Link>
                        
                    </div>
                </div>
                <div className="image">
                    <img src={doctorImage} alt="Doctor with patient" />
                </div>
            </main>
        </div>
    );
};

export default Home;
