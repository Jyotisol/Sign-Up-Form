import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import './Dashboard.css'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate('/');
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Hello, Welcome</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
