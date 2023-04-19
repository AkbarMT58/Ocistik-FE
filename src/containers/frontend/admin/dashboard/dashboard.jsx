
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../../src/containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../layout/navbar';
import Sidebar from '../layout/sidebar';


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

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";


const Dashboard = ()=>{

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return(

    <>

<div id="header" style={{ display: 'flex' }}>
        <Sidebar/>
        <div className="container">
       
<div className='bg_layerdashboard bg-aqua'>

    <div className='bg_dashboard'>

            <Navbar_Dashboard/>

            <center>

                                    <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'120px'}}>

                                        Selamat Sore
                                        <div>Ridho</div>

                                    </div>


          </center>

          <div class="container" style={{marginTop:'50px'}}>


          <div className='row mb-4'>
  
       <div className='col-md-6'>

          <div className='box_dashboard'>
          <div className='box_1_header text-white'>
          <label className='text-white mt-1' style={{marginLeft:'50px'}}><img src="/image/icons/invoices.png" style={{width:'39px', height:'40px',marginLeft:'-25px'}} /> Invoices</label>
          </div>

          <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-6'>

              <img   src="/image/icons/inv_.png" style={{height:'88px',width:'84px',marginTop:'-30px',marginLeft:'20px'}}/>


            </div>
            <div className='col-md-6'>

              <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px'}}>Belum Dibayar</label>
              <br></br>
              <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>Rp. </label>


            </div>


          </div>

          </div>

          </div>

          <div className='col-md-6'>


          <div className='box_dashboard'>
          <div className='box_1_header' >
          <label className='text-white mt-2' style={{marginLeft:'50px'}}><img src="/image/icons/barang.png" style={{width:'39px', height:'40px',marginLeft:'-25px'}} /> Barang</label>
          </div>

          
          <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-5'>

              <img   src="/image/icons/tools.png" style={{height:'88px',width:'84px',marginTop:'-30px',marginLeft:'20px'}}/>


            </div>
            <div className='col-md-3'>

              <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px'}}>Belum Dibayar</label>
              <br></br>
              <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>Rp. </label>


            </div>
            <div className='col-md-2' style={{marginLeft:'-5px'}}>

              <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px',fontSize:'11px'}}>DALAM PERJALANAN</label>
              <br></br>
              <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>3</label>


            </div>
            <div className='col-md-2' style={{marginLeft:'5px'}}>

          <label className='text-black' style={{marginLeft:'-100px',marginTop:'-100px',fontSize:'11px'}}>DALAM PERJALANAN</label>
          <br></br>
          <label className='text-black' style={{marginLeft:'-100px',marginTop:'0px'}}>3</label>


          </div>


          </div>

          </div>

          </div>

          </div>

          
          <div className='row mb-4'>
  
         <div className='col-md-6'>

          <div className='box_dashboard'>
          <div className='box_1_header text-white'>
          <label className='text-white mt-2' style={{marginLeft:'50px'}}><img src="/image/icons/loyaltypoin.png" style={{width:'39px', height:'40px',marginLeft:'-25px'}} /> Loyalty Poin</label>
          </div>

          
          <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-6'>

              <img   src="/image/icons/money.png" style={{height:'88px',width:'84px',marginTop:'-30px',marginLeft:'20px'}}/>


            </div>
            <div className='col-md-6'>

              <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px'}}>Belum Dibayar</label>
              <br></br>
              <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>Rp. </label>


            </div>
            


          </div>

          </div>

          </div>

          <div className='col-md-6'>


          <div className='box_dashboard'>
          <div className='box_1_header' >
          <label className='text-white mt-2' style={{marginLeft:'50px'}}><img src="/image/icons/titip.png" style={{width:'39px', height:'40px',marginLeft:'-25px'}} /> Titip Transfer</label>
          </div>

          
          <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-6'>

              <img   src="/image/icons/counting.png" style={{height:'88px',width:'84px',marginTop:'-30px',marginLeft:'20px'}}/>


            </div>
            <div className='col-md-6'>

              <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px'}}>Belum Dibayar</label>
              <br></br>
              <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>Rp. </label>


            </div>


          </div>

          </div>

          </div>

          </div>

             <div className='row'>
              
              <div className='col-md-6'>

              <div className='box_dashboard'>
              <div className='box_1_header text-white'>
              <label className='text-white mt-2' style={{marginLeft:'50px'}}><img src="/image/icons/kubikasi.png" style={{width:'39px', height:'40px',marginLeft:'-25px'}} /> Kubikasi</label>
              </div>

                              
                          <div className='row mt-4 py-4 -px-2'>

                <div className='col-md-6'>

                  <img   src="/image/icons/logistic.png" style={{height:'88px',width:'84px',marginTop:'-30px',marginLeft:'20px'}}/>


                </div>
                <div className='col-md-6'>

                  <label className='text-black' style={{marginLeft:'-120px',marginTop:'-100px'}}>Belum Dibayar</label>
                  <br></br>
                  <label className='text-black' style={{marginLeft:'-120px',marginTop:'0px'}}>Rp. </label>


                </div>


                </div>

              </div>

              </div>

              <div className='col-md-6'>


            

              </div>

              </div>




          
            
    </div>


</div>
    
         
        </div>

        
      
      </div>

      </div>

     



    </>




  )



}


export default Dashboard;