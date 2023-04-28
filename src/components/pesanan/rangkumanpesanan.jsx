
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../../containers/frontend/admin/layout/navbar';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../components/general/Pagination';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from '../../containers/frontend/admin/layout/sidebar';


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  
} from "react-pro-sidebar";


import "react-pro-sidebar/dist/css/styles.css";

import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
  PesananFormInputsState,
  pesananFormStepState,
  } from "../../atoms/pesananForm";
import { useRecoilValue } from "recoil";



const RangkumanPesanan = () => {

const [form, setForm] = useRecoilState(PesananFormInputsState);
const [formStep, setFormStep] = useRecoilState(pesananFormStepState);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("formotpverifikasi");
  };
  
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
      window.location.href="/admin/pesanan"
    });



  }

  console.log("harga ekspedisi:",form.hargaekpedisi)

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
                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-100px'}}>{form.namalengkap}
                                                    </label>
                                                    <br></br>

                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-20px'}}></label>
                                                     <label className='text-black' style={{fontSize:'10px',marginLeft:'-130px'}}>{form.alamatlengkap}  </label>
                                                     <label className='text-black' style={{fontSize:'10px',marginLeft:'0px'}}></label>

                                                  </div>
                                                  <div className='col-md-4' style={{marginTop:'20px'}}>

                                                    <a  type="submit" className='text-blue' style={{fontSize:'12px',color:'blue'}}>Ubah</a>

                                                  </div>


                                                </div>

                                                <div className='row'>

                                                <div className='col-md-8'>
                                                  <label className='text-black' style={{fontSize:'12px',fontWeight:'bold',marginLeft:'-150px'}}>Pengiriman</label>
                                                  <br></br>
                                                  <label className='text-black' style={{fontSize:'10px',marginLeft:'-150px'}}> {(form.tipepengiriman ===0 ? ("Udara") :  "Laut")}
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
                                                  <label className='text-black' style={{fontSize:'10px',marginLeft:'-140px'}}>Rp.{form.hargaekpedisi.toLocaleString('ID-id')},-
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
                                                    <label className='text-black' style={{fontSize:'10px',marginLeft:'-150px'}}>Rp.3.500.000,-
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