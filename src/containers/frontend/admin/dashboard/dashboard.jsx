
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from './navbar';
import Pesanan  from './pesanan/pesanan';
import { getData_Artikel } from '../../../../constants/api/logistik';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../components/general/Pagination';
import axios from 'axios';


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";





const Dashboard = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" style={{ display: 'flex' }}>
        
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
             
              <p>{menuCollapse ? <img src="/image/lomiles_admin.png" /> : <img src="/image/lomiles_admin.png" />}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}

            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Beranda
              </MenuItem>
              <MenuItem icon={<FaList />}>Pesanan Saya</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Buat Pesanan</MenuItem>
              <MenuItem icon={<BiCog />}>Invoices</MenuItem>
              <MenuItem icon={<BiCog />}>Pembayaran</MenuItem>
              <MenuItem icon={<BiCog />}>Poin</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<BiCog />}>Referral</MenuItem>
              <MenuItem icon={<BiCog />}>Pusat Bantuan</MenuItem>
              <MenuItem icon={<BiCog />}>Pengaturan</MenuItem>
              <MenuItem icon={<FiLogOut />}><a href="/login"></a>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        <div className="container">
       
<div className='bg_layerdashboard bg-aqua'>

    <div className='bg_dashboard bq-aqua'>

            <Navbar_Dashboard/>

            <Pesanan/>
            
    </div>


</div>
    
         
        </div>

        
      
      </div>
    </>
  );
};

export default Dashboard;