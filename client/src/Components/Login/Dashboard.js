import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from '../ChatBot/ChatBot';
import LinkedDoctor from './LinkedDoctor';
import UserProfile from "./UserProfile";
import '../MainContent/home.css';
function Dashboard() {
    return (
        <div>
        <div className="container-fluid -2 ">
        <header>
                <div className="logo">
                    <FontAwesomeIcon icon={faHospitalUser} className='hello'/>
                    <div className='hii'><h1>MedConnect Protal</h1></div>
                </div>
            </header>
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-#ffffff;">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline"><Link to="/dashboard/" style={{ textDecoration: 'none' }}>Dashboard</Link></span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline"><Link to="/dashboard/linkeddoctor" style={{ textDecoration: 'none' }}>Linked Doctors</Link></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline"><Link to="/dashboard/chatbot" style={{ textDecoration: 'none' }}>ChatBot</Link></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline"><Link to="/logout" style={{ textDecoration: 'none' }}>Logout</Link></span>
                    </a>
                  </li>
                  </ul>
              </div>
            </div>
            <div className="">
            <Routes>
              <Route path="chatbot" element={<ChatBot />} />
              <Route path="linkeddoctor" element={<LinkedDoctor />} />
              <Route path="/" element={< UserProfile/>} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashboard;
