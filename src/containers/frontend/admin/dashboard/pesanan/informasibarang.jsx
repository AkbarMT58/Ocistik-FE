
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


const PengirimanBarang = () => {
  
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
              <a className='text-black' href="/admin/dashboard">Beranda</a>
              </MenuItem>
              <MenuItem icon={<FaList />}><a className='text-black' href="/admin/pesanan">Pesanan Saya</a></MenuItem>
              <MenuItem icon={<RiPencilLine />}><a className='text-black' href="/admin/buatpesanan">Buat Pesanan</a></MenuItem>
              <MenuItem icon={<BiCog />}>Invoices</MenuItem>
              <MenuItem icon={<BiCog />}>Pembayaran</MenuItem>
              <MenuItem icon={<BiCog />}>Poin</MenuItem>
            </Menu>
            <Menu iconShape="square">
              <MenuItem icon={<BiCog />}>Referral</MenuItem>
              <MenuItem icon={<BiCog />}>Pusat Bantuan</MenuItem>
              <MenuItem icon={<BiCog />}>Pengaturan</MenuItem>
              <MenuItem icon={<FiLogOut />}><a href="/login"></a>Logout</MenuItem>
            </Menu>
          </SidebarContent>
         
        </ProSidebar>
        <div className="container">
       
<div className='bg_layerdashboard bg-aqua'>

    <div className='bg_dashboard'>

            <Navbar_Dashboard/>

            <center>

            <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'120px'}}>

                Buat Pesanan

            </div>

            <div class="container" style={{marginTop:'10px'}}>
                                <div class="body_informasibarang d-md-flex align-items-center justify-content-between">
                                    <div class="box-ketentuan mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black mb-4' style={{marginTop:'20px',fontWeight:'bold'}} >Informasi Barang</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                             <div className='row mb-4 px-4 py-4' style={{marginTop:'-20px'}} >

                                                <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Kategori Barang</label>


                                                </div>

                                                
                                                <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input type="text" className='form-control w-100' />

                                                

                                                </div>

                                                <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Total Volume</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input type="text" className='form-control w-100' />



                                                    </div>

                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Total Berat</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input type="text" className='form-control w-100' />



                                                    </div>

                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Packing List</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input type="text" className='form-control w-100' />



                                                    </div>
                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Tracking Number</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input type="text" className='form-control w-100' />



                                                    </div>


                                                    <center>
                                                
                                                <button  type="button" className="login_masuk" style={{color:'white'}}><a href="/admin/syaratketentuan">Lanjut</a></button>
                                               
                                                </center>


                                      

                                             </div>

                                             <div className='text-black'></div>
                                            
                                           


                                             
                                     
                                            
                                             
                                              


                                            
                                              
                                         
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

export default PengirimanBarang;