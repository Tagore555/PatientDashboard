import React from 'react'; // Removed useState since it's no longer used
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLogout() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/logout');
            sessionStorage.clear();
            console.log('Logout successful');
            localStorage.removeItem('isLoggedIn'); // Assuming you're using localStorage to track login state
            navigate('/userLogin'); // Redirect to login page
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    const cancelLogout = () => {
        navigate('/dashboard'); // Navigate to dashboard on cancel
    };

    return (
        <div>
            <div>Do you want to logout?</div>
            <button onClick={logout}>Logout</button>
            <button onClick={cancelLogout}>Cancel</button>
        </div>
    );
}

export default UserLogout;