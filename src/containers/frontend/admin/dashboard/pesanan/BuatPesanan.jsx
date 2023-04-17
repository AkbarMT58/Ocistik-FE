
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../dashboard/dashboard.css'
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


const BuatPesanan = () => {
  
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

    <div className='bg_dashboard bq-aqua'>

            <Navbar_Dashboard/>

                  
            <div class="container" style={{marginTop:'50px'}}>
                                <div class="body_pesanan d-md-flex align-items-center justify-content-between">
                                    <div class="box-1 mt-md-0 mt-5">
                                    
                                            <center>
                                            <div className='' >

                                            <div className='text-black' style={{marginLeft:"-150px"}}>Informasi Penerima</div>
                                            <div className='form-group m-2'>
                                           
                                            <input type="text" className='form-control icon_1' placeholder='Nama Lengkap'/>
                                            

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                            <input type="text" className='form-control icon_2'  placeholder='No HP'/>

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control icon_3'  placeholder='Alamat Lengkap'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control icon_4'  placeholder='Pilih Provinsi'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control icon_5'   placeholder='Pilih Kota'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control icon_6'  placeholder='Pilih Kecamatan'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input type="text" className='form-control icon_7'  placeholder='Kode Pos'/>

                                          </div>

                                            
                                            </div>
                                            <div className='mt-4'></div>

                                        </center>

                                    </div>
                                    <div class=" box-2 d-flex flex-column h-100">
                                        <div class="mt-5">

                                        

                        <center>

                        <div className='mb-4 text-black'>Alamat</div>
                        </center>

                        <div>

                         <div class="card mb-4" >
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <h6 class="card-subtitle mb-2 text-muted text-black">Ita yulianda pane</h6>
                                <p class="card-text text-black">6281290002631</p>
                                <br/>
                                <a href="#" class="card-link text-black mb-2">JL.H. muala Ujung No 7 Rt 04/ Rw 08, Cengkareng......</a>
                                <a href="#" class="card-link text-black">Another link</a>
                            </div>
                            </div>

                        </div>
                       
                                        </div>

                        <center>
                        <button  type="button" className="login_masuk" style={{color:'white'}}><a href="/admin/syaratketentuan">Lanjut</a></button>
                        </center>

                                      
                                    </div>

                                

                                    
                             
                             

                                </div>



                      
                                
                            </div>

           
            
    </div>


</div>
    
         
        </div>

        
      
      </div>
    </>
  );
};

export default BuatPesanan;