
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../navbar';


import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../../components/general/Pagination';
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





const SyaratKetentuan = () => {
  
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
              <MenuItem icon={<FaList />}><a className='text-black' href="/admin/dashboard">Pesanan Saya</a></MenuItem>
              <MenuItem icon={<RiPencilLine />}><a  className='text-black' href="/admin/dashboard">Buat Pesanan</a></MenuItem>
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

    <div className='bg_dashboard'>

            <Navbar_Dashboard/>

            <center>

            <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'120px'}}>

                Buat Pesanan

            </div>

            <div class="container" style={{marginTop:'50px'}}>
                                <div class="body_ketentuan d-md-flex align-items-center justify-content-between">
                                    <div class="box-ketentuan mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black' style={{marginLeft:"-150px"}}>Syarat & Ketentuan</div>
                                            </center>
                                            <div className='-ml-100'>
                                              <div className='text-black'>A. KETENTUAN PENGIRIMAN</div>
                                              <div>Telah disepakatinya ketentuan Pengiriman sebagaimana tercantum dalam Syarat dan Ketentuan ini, syarat dan ketentuan pengiriman yang diberikan oleh Ocommerce Capital Express</div>
                                              <div>Untuk pengiriman via udara, Ocommerce Capital Express memberlakukan syarat minimum sebesar 1 Kg/ pengiriman, dan nilai berat atas Barang ditentukan menggunakan perhitungan pengukuran dari Ocommerce Capital Express. Dalam hal perhitungan berat Barang, maka akan mengikuti ketentuan pembulatan nilai sebagai berikut:</div>
                                              Untuk pengiriman via laut, Ocommerce Capital Express memberlakukan syarat minimum sebesar 0,1 Cbm/ pengiriman dengan ketentuan apabila Barang tidak mencapai 0,1 Cbm/ pengiriman maka akan dibulatkan ke atas menjadi 0,1 Cbm.

                                              B. KETENTUAN BARANG
                                                  Adapun barang-barang yang dapat dikirimkan menggunakan Jasa Lomiles
                                            </div>
                                           </div>
                                       

                                    </div>
                               
                                

                                    
                             
                             

                                </div>



                      
                                
                            </div>


            </center>


          
            
    </div>


</div>
    
         
        </div>

        
      
      </div>
    </>
  );
};

export default SyaratKetentuan;