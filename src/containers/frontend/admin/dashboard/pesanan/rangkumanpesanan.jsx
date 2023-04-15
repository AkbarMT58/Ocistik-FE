
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../navbar';


import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../../components/general/Pagination';
import axios from 'axios';
import swal from 'sweetalert';


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



const RangkumanPesanan = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const simpanrangkumanpesanan=()=>{

    swal({
      title: "Selesai",
      text: "Pesananmu Berhasil Dibuat",
      icon: "success",
      successMode: true,
    })
    .then(willDelete => {
      if (willDelete) {
        swal("Success!", "Pesananmu Berhasil Dibuat", "success");
      }
      window.location.href="/admin/buatpesanan"
    });



  }

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
                                <div class="body_rangkuman d-md-flex align-items-center justify-content-between">
                                    <div class="box-rangkuman mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black mb-4 fs-5' style={{marginTop:'20px',fontWeight:'bold'}} >Rangkuman Pesanan</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                             <div className='row mb-4' style={{marginTop:'0px'}} >


                                              <center>
                                              <div class="card" style={{width:'400px'}}>
                                              <div class="card-body">
                                                <div className='row'>

                                                  <div className='col-md-8'>
                                                    <label className='text-black' style={{fontSize:'12px',fontWeight:'bold',marginLeft:'-120px'}}>Nama Penerima</label>
                                                    <br></br>
                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-140px'}}>Ita Yuliana Pane
                                                    </label>
                                                    <br></br>

                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-20px'}}>+6281290002631</label>
                                                     <label className='text-black' style={{fontSize:'10px',marginLeft:'8px'}}> JL. H. Maula Ujung No.6 </label>
                                                     <label className='text-black' style={{fontSize:'10px',marginLeft:'0px'}}>RT.008 RW.012 Palmerah, Jakarta Barat 11480</label>

                                                  </div>
                                                  <div className='col-md-4' style={{marginTop:'20px'}}>

                                                    <a  type="submit" className='text-blue' style={{fontSize:'12px',color:'blue'}}>Ubah</a>

                                                  </div>


                                                </div>

                                                <div className='row'>

                                                <div className='col-md-8'>
                                                  <label className='text-black' style={{fontSize:'12px',fontWeight:'bold',marginLeft:'-150px'}}>Pengiriman</label>
                                                  <br></br>
                                                  <label className='text-black' style={{fontSize:'10px',marginLeft:'-140px'}}>Pengiriman Laut
                                                  </label>
                                                 
                                                </div>
                                                <div className='col-md-4' style={{marginTop:'20px'}}>

                                                  <a  type="submit" className='text-blue' style={{fontSize:'12px',color:'blue'}}>Ubah</a>

                                                </div>


                                                </div>

                                                <div className='row'>

                                                <div className='col-md-8'>
                                                  <label className='text-black' style={{fontSize:'12px',fontWeight:'bold',marginLeft:'-130px'}}>Ekspedisi Lokal</label>
                                                  <br></br>
                                                  <label className='text-black' style={{fontSize:'10px',marginLeft:'-200px'}}>JNE
                                                  </label>
                                                 
                                                </div>
                                                <div className='col-md-4' style={{marginTop:'20px'}}>

                                                  <a  type="submit" className='text-blue' style={{fontSize:'12px',color:'blue'}}>Ubah</a>

                                                </div>
                                                


                                                </div>

                                                <div className='row'>

                                                  <div className='col-md-8'>
                                                    <label className='text-black' style={{fontSize:'12px',fontWeight:'bold',marginLeft:'-90px'}}>Estimasi Ongkos Kirim</label>
                                                    <br></br>
                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-150px'}}>Rp. 320.490,-
                                                    </label>
                                                  
                                                  </div>
                                                  <div className='col-md-4' style={{marginTop:'20px'}}>

                                                    <a  type="submit" className='text-blue' style={{fontSize:'12px',color:'blue'}}>Ubah</a>

                                                  </div>



                                                  </div>
                                                
                                              </div>
                                               </div>
                                               </center>

                                              

                                                
                                              

                                             </div>

                                             <br>
                                             </br>

                                             <center >
                                                
                                                <button onClick={simpanrangkumanpesanan} type="button" className="lanjut_tombol" style={{color:'white',marginTop:'-350px'}}><a>Lanjut</a></button>
                                               
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

export default RangkumanPesanan;