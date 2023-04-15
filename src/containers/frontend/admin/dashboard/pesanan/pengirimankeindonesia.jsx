
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
import { BiCheckbox, BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";



const PengirimanKeIndonesia = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [tipekirim, setTipeKirim] = React.useState("laut");


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
              <MenuItem active={true} >
                <img src='/image/icons/beranda.png' style={{width:'40px', height:'40px'}} />
              <a className='text-white' href="/admin/dashboard">  Beranda</a>
              </MenuItem>
              <MenuItem >  <img src='/image/icons/pesanansaya.png' style={{width:'40px', height:'40px'}} /><a className='text-black' href="/admin/pesanan">Pesanan Saya</a></MenuItem>
              <MenuItem ><img src='/image/icons/logistic.png' style={{width:'40px', height:'40px'}} /><a className='text-black' href="/admin/buatpesanan">Buat Pesanan</a></MenuItem>
              <MenuItem><img src='/image/icons/invoices.png' style={{width:'40px', height:'40px'}} /> Invoices</MenuItem>
              <MenuItem ><img src='/image/icons/pembayaran.png' style={{width:'40px', height:'40px'}} /> Pembayaran</MenuItem>
              <MenuItem ><img src='/image/icons/uang.png' style={{width:'40px', height:'40px'}} /> Poin</MenuItem>
              
            <Menu iconShape="square">
              <MenuItem ><img src='/image/icons/money.png' style={{width:'40px', height:'40px'}} />  Referral</MenuItem>
              <MenuItem ><img src='/image/icons/bantuan.png' style={{width:'40px', height:'40px'}} /> Pusat Bantuan</MenuItem>
              <MenuItem ><img src='/image/icons/pengaturan.png' style={{width:'40px', height:'40px'}} /> Pengaturan</MenuItem>
              {/* <MenuItem ><a href="/login"></a>Logout</MenuItem> */}
            </Menu>
      
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
                                <div class="body_kirimindo d-md-flex align-items-center justify-content-between">
                                    <div class="box-kirimindo mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black mb-4 fs-5' style={{marginTop:'20px',fontWeight:'bold'}} >Pengiriman Ke Indonesia</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                             <div className='row mb-4' style={{marginTop:'100px'}} >

                                                <div className='col-md-6'>

                                                 <div className='boxkirimindonesia'>

                                                  <img src="/image/icons/kapal.png"  className='setlautkirim'/>
                                                  <label className='text-black labelkirimlaut'>Pengiriman Laut</label>
                                                 

                                                  <input  style={{marginLeft:'200px'}}
                                                          type="checkbox"
                                                          checked={tipekirim === "laut"}
                                                          onChange={() => setTipeKirim("laut")}
                                                        />

                                                  
      
                                                 </div>

                                                </div>

                                                
                                                <div className='col-md-6' >

                                                <div className='boxkirimindonesia'>

                                                <img src="/image/icons/pesawat.png"  className='setudara'/>
                                                <label className='text-black labelkirimudara'>Pengiriman Udara</label>
                                               

                                                 <input style={{marginLeft:'180px'}}
                                                    type="checkbox"
                                                    checked={tipekirim === "udara"}
                                                    onChange={() => setTipeKirim("udara")}
                                                  />

                                                </div>

                                                </div>

                                             </div>

                                             <br>
                                             </br>

                                             <center >
                                                
                                                <button  type="button" className="lanjut_tombol" style={{color:'white',marginTop:'0px'}}><a href="/admin/ekspedisilokalindonesia">Lanjut</a></button>
                                               
                                            </center>

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

export default PengirimanKeIndonesia;