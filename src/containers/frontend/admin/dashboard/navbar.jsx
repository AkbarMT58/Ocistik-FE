
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle,FiUsers } from "react-icons/fi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  
} from "react-pro-sidebar";



const Navbar_Dashboard = () => {
  
   

  return (
    <>


<nav className="navbar navbar-dark bg-aqua w-100" >
        <a className="navbar-brand fs-6" href="#">

          <div className='text-white' style={{marginLeft:'900px'}}>
            <select style={{backgroundColor:'transparent',border:'0px',color:'white'}}>

            <option>Username</option>

            </select>

        </div>
         

         
            
            
      </a>
    </nav>


     
    </>
  );
};

export default Navbar_Dashboard;