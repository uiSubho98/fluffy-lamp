import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    const navigate=useNavigate()
    const category = ()=>{
        navigate('/admincategories')
    }

    return (
        <div>
            <h2 className='text-center mt-5 text-primary'>DashBoard</h2>
            <div className='dashboard-container'>
                <div className='dashboard-box'><button onClick={()=>{category()}} className='dashboard-btn'>Categories</button></div>
                <div className='dashboard-box'><button className='dashboard-btn'>Glance-Product</button></div>
                <div className='dashboard-box'><button className='dashboard-btn'>FAQ</button></div>
                <div className='dashboard-box'><button className='dashboard-btn'>Read-Topics</button></div>
                <div className='dashboard-box'><button className='dashboard-btn'>Blogs</button></div>
                
            </div>
        </div>
    );
};

export default Dashboard;