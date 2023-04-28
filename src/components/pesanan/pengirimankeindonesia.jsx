
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../../containers/frontend/admin/layout/navbar';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../components/general/Pagination';
import axios from 'axios';
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

//import icons from react icons
import "react-pro-sidebar/dist/css/styles.css";

import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
  PesananFormInputsState,
  pesananFormStepState,
  } from "../../atoms/pesananForm";

import { useRecoilValue } from "recoil";



const PengirimanKeIndonesia = () => {

  const [form, setForm] = useRecoilState(PesananFormInputsState);
  const [formStep, setFormStep] = useRecoilState(pesananFormStepState);

  
useEffect(() => {

  
  if (tipekirim=='laut'){

    setForm({
       ...form,
       tipepengiriman: true,
   })



 }else{

   setForm({
     ...form,
     tipepengiriman: false,
 })



 }
 
}, []);


  

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("ekspedisilokalindonesia");
  };

  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [tipekirim, setTipeKirim] = React.useState('');
  const select_tipekirimlaut = useRef('');
  const select_tipekirimudara = useRef('');




  

    console.log("lihat tipe kirim:",tipekirim)
  

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

            <form onSubmit={handleSubmit}>
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
                                                 

                                                  <input 

                                                  ref={select_tipekirimlaut}


                                                  style={{marginLeft:'200px'}}
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
                                               

                                                 <input 

                                                  ref={select_tipekirimudara}
                                                 
                                                 style={{marginLeft:'180px'}}
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
                                                
                                                <a><button  type="submit" className="lanjut_tombol" style={{color:'white',marginTop:'0px'}}>Lanjut</button></a>
                                               
                                            </center>

                                             <div className='text-black'></div>
                                            
                                         
                                            </div>
                                           </div>
                                       

                                    </div>
                               
                                

                                    
                             
                             

                                </div>

                                </form>



                      
                                
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