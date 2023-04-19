
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../../src/containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../dashboard/navbar';


import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";

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

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";


const Sidebar = ()=>{

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


return(
    <>

<ProSidebar collapsed={menuCollapse} >
<SidebarHeader >
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
<SidebarContent style={{width:'300px'}}>
  <Menu iconShape="square">
    <MenuItem active={true} >
      <img src='/image/icons/beranda.png' style={{width:'40px', height:'40px'}} />
    <a className='text-white m-2' href="/admin/dashboard">  Beranda</a>
    </MenuItem>
    <MenuItem >  <img src='/image/icons/pesan.png' style={{width:'40px', height:'40px'}} /><a className='text-black m-2' href="/admin/pesanan">Pesanan Saya</a></MenuItem>
    <MenuItem ><img src='/image/icons/logistic.png' style={{width:'40px', height:'40px'}} /><a className='text-black m-2' href="/admin/buatpesanan">Buat Pesanan</a></MenuItem>
    <MenuItem ><img src='/image/icons/pembayaran.png' style={{width:'40px', height:'40px'}} /><a className='text-black m-2' href="/admin/pembayaran">Pembayaran</a></MenuItem>
    <MenuItem ><img src='/image/icons/uang.png' style={{width:'40px', height:'40px'}} /> <a className='text-black m-2' href="/admin/buatpesanan">Saldo</a></MenuItem>
    
  <Menu iconShape="square">
   
    {/* <MenuItem ><img src='/image/icons/pengaturan.png' style={{width:'40px', height:'40px'}} /><a href="/login"></a>Logout</MenuItem>  */}
    <hr className='border border-secondary'></hr>
    <MenuItem ><img src='/image/icons/money.png' style={{width:'40px', height:'40px'}} />  Referral</MenuItem>
    <MenuItem ><img src='/image/icons/bantuan.png' style={{width:'40px', height:'40px'}} /> Pusat Bantuan</MenuItem>
    <MenuItem ><img src='/image/icons/pengaturan.png' style={{width:'40px', height:'40px'}} /> Pengaturan</MenuItem>
   
  </Menu>

  </Menu>
</SidebarContent>

</ProSidebar>



</>




  )

    }

export default Sidebar
