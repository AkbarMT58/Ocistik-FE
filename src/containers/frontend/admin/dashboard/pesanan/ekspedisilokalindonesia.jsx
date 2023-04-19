
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../navbar';
import { useState,useRef,useEffect } from "react";
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
import Sidebar from '../../layout/sidebar';



const EkspedisiLokalIndonesia = () => {
const [tipeekspedisi, setEkpedisi] = React.useState("jne");

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

            <div class="container" style={{marginTop:'10px'}}>
                                <div class="body_kirimindo d-md-flex align-items-center justify-content-between">
                                    <div class="box-kirimindo mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black fs-5' style={{marginTop:'20px',fontWeight:'bold'}} >Ekspedisi Lokal Indonesia</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                             <div className='row' style={{marginTop:'20px'}} >

                                                <div className='col-md-12'>

                                                 <div className='boxkirimindonesia mb-4'>

                                                  <img src="/image/icons/jne.png"  className='setlaut'/>
                                                  <label className='text-black labelkirimlaut'>JNE</label>
                                                

                                                  <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "jne"}
                                                    onChange={() => setEkpedisi("jne")}
                                                  />
                                                 
                                              

                                                 </div>
                                                <div className='col-md-12'>

                                                    <div className='boxkirimindonesia mb-4'>

                                                    <img src="/image/icons/sicepat.png"  className='setlaut'/>
                                                    <label className='text-black labelkirimlaut'>Si Cepat</label>
                                                    <input style={{marginLeft:'160px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "sicepat"}
                                                    onChange={() => setEkpedisi("sicepat")}
                                                  />


                                                    </div>

                                        

                                                </div>
                                                <div className='col-md-12'>

                                                <div className='boxkirimindonesia mb-4'>

                                                <img src="/image/icons/jnt.png"  className='setlaut'/>
                                                <label className='text-black labelkirimlaut'>J&T</label>
                                                <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "jnt"}
                                                    onChange={() => setEkpedisi("jnt")}
                                                  />



                                                </div>



                                                </div>

                                                </div>

                                               

                                             </div>

                                          

                                             <center >
                                                
                                                <button  type="button" className="lanjut_tombol" style={{color:'white',marginTop:'-250px'}}><a href="/admin/rangkumanpesanan">Lanjut</a></button>
                                               
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

export default EkspedisiLokalIndonesia;