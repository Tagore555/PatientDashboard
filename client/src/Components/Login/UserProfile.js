import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
    const [doctor, setDoctor] = useState(null); // Use null initially to signify no data
    const [error, setError] = useState(null);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                // Make the first API request
                const res2 = await axios.get('http://localhost:5000/login/hello');
                const { patient_id } = res2.data; // Assuming you need doctor_id
                
                // Make the second API request
                const res = await axios.post('http://localhost:5000/userprofile', { patient_id });
                
                // Log the response data to check its format
                console.log("Doctor Response:", res.data);
                
                // Check if the response data is an object
                if (typeof res.data === 'object' && res.data !== null) {
                    setDoctor(res.data);
                } else {
                    console.error('Unexpected response format:', res.data);
                    setDoctor(null); // Set to null to signify no data
                    setError('Unexpected data format received.');
                }

            } catch (error) {
                console.error('Error fetching doctor data:', error);
                setError('Failed to fetch doctor data.');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
           <h1> Personal information</h1>
            {error ? (
                <p>{error}</p>
            ) : doctor ? (
                <div>
                    <div>
                        Patient ID: {doctor.patient_id} <br />
                        Name: {doctor.patient_name} <br />
                        Email: {doctor.patient_email} <br />
                        Phone: {doctor.patient_phone} <br />
                        Address: {doctor.patient_address}<br />
                        Age: {doctor.patient_age}<br />
                        Doctor ID: {doctor.doctor_id}<br />

                    </div>
                </div>
            ) : (
                <p>No doctors found.</p>
            )}
        </div>
    );
}

export default UserProfile