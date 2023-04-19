
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
import Sidebar from '../../layout/sidebar';





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
        
      <Sidebar/>
        
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
                                            <div className='text-black mb-4 mt-4' style={{marginTop:'0px',fontWeight:'bold'}} >Syarat & Ketentuan</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                              <div style={{marginLeft:'-650px'}} >A. KETENTUAN PENGIRIMAN</div>
                                            
                                              <p style={{fontSize:'15px'}} >1.Telah disepakatinya ketentuan Pengiriman sebagaimana tercantum dalam Syarat dan Ketentuan ini, syarat dan
                                              <p style={{fontSize:'15px',marginLeft:'-300px'}} >ketentuan pengiriman yang diberikan oleh Ocommerce Capital Express</p>
                                              </p>

                                              <p style={{fontSize:'15px',marginLeft:'-65px',marginTop:'-50px'}} >2.Untuk pengiriman via udara, Ocommerce Capital Express memberlakukan syarat minimum sebesar 1 Kg</p>
                                              <p style={{fontSize:'15px',marginLeft:'-750px',marginTop:'-30px'}}>Pengiriman</p>
                                              
                                        
                                              <p style={{fontSize:'15px',marginTop:'-30px'}} >3.Telah disepakatinya ketentuan Pengiriman sebagaimana tercantum dalam Syarat dan Ketentuan ini, syarat dan
                                              <p style={{fontSize:'15px',marginLeft:'-300px'}} >ketentuan pengiriman yang diberikan oleh Ocommerce Capital Express</p>
                                              </p>

                                              <center>
                                              <button  type="button" className="login_masuk" style={{color:'white'}}><a href="/admin/informasibarang">Setuju</a></button>
                                              <button  type="button" className="login_masuk" style={{color:'white'}}><a href="/admin/buatpesanan">Tidak Setuju</a></button>
                                              </center>

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