import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sideber" type="checkbox" class="drawer-toggle" />
       
        <div class="drawer-content ">
        <h2 className='  text-2xl text-primary'>Wlecome to your Daahboard</h2>
        <Outlet></Outlet>
          {/* <!-- Page content here --> */}
         
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sideber" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/reviws'>My Reviwa</Link></li>
          </ul>
        
        </div>
      </div>
    )
};

export default Dashboard;