
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../../containers/frontend/admin/layout/navbar';
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
import Sidebar from '../../containers/frontend/admin/layout/sidebar';
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
  PesananFormInputsState,
  pesananFormStepState,
  } from "../../atoms/pesananForm";

import { useRecoilValue } from "recoil";
import axios from 'axios';
import swal from 'sweetalert';


const EkspedisiLokalIndonesia = () => {
const [tipeekspedisi, setEkpedisi] = React.useState("jne");
const select_ekspedisilokal = useRef('');
const [form, setForm] = useRecoilState(PesananFormInputsState);
const [formStep, setFormStep] = useRecoilState(pesananFormStepState);
const [users, setItems] = useState('');

const url_rajaongkir = `https://api.rajaongkir.com/basic/cost`;
const apikeyrajaongkir=`8b35c2946a4276088e5d4d422b716f90`

var namaekspedisijne='jne' ;
var namaekspedisipos='pos' ;
var namaekspedisitiki='tiki' ;
var namaekspedisipcp='pcp' ;
var namaekspedisiesl='esl' ;
var namaekspedisirpx='rpx' ;

useEffect(() => {
  const users = localStorage.getItem('email');
  if (users) {
   setItems(users);
  }

  getekspedisilokalrajaongkir_jne(namaekspedisijne);
  // getekspedisilokalrajaongkir_pos(namaekspedisipos);
  // getekspedisilokalrajaongkir_tiki(namaekspedisitiki);
  // getekspedisilokalrajaongkir_pcp(namaekspedisipcp);
  // getekspedisilokalrajaongkir_esl(namaekspedisiesl);
  // getekspedisilokalrajaongkir_rpx(namaekspedisirpx);

}, []);



let handleSubmit = async (e) => {
  e.preventDefault();


  try {

   const datainput = JSON.stringify({
     nama:form.namalengkap,
     email:users,
     telepon:form.nohp,
     kota:"-",
     alamat:form.alamatlengkap,
     kode_pos:parseInt(form.kodepos),
     kategori_barang:form.kategori_id,
     volume:parseFloat(form.volume),
     berat:parseFloat(form.totalberat),
     packing_list:form.packinglistfile,
     is_airplane:(form.tipepengiriman),
     kurir:tipeekspedisi,
     id_provinsi:parseInt(form.provinsi),
     id_kota:parseInt(form.kota),
     id_kecamatan:parseInt(form.kecamatan),
     tracking_no:form.trackingnumber,
 
     });

   const URL = `http://192.168.15.20:8787/oms/oci-logistics/buat-pesanan`;
   const response= await axios.post(
       URL,  
       datainput,
       {
         headers:{
           'Content-Type': 'application/json',
    
           'Xemail':users,
        },
       }
     )
         //  console.log(response.data.message)

         if(response.data.code.status=='400'){

           swal({
             title: "Failed Create Pesanan Baru?",
             text: "There is something Trouble With Your Data.Please Contact Administrator Or Check Your Input Data With Correct",
             icon: "warning",
             dangerMode: true,
           })
           .then(willDelete => {
             if (willDelete) {
               swal("Failed!", "Create Pesanan Baru Failed!", "error");
             }
             
           });


         }else{


         }

     
   

} catch (err) {
console.log(err);
}
  // setFormStep("rangkumanpesanan");
};


    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


     console.log("lihat ekspedisi:",tipeekspedisi)
     //daerah get data raja ongkir all

     //JNE
     const getekspedisilokalrajaongkir_jne=async(namaekspedisijne)=>{

      try{

        var datainput=JSON.stringify({
          origin:155,
          destination:form.kota,
          weight:form.totalberat,
          courier:namaekspedisijne

        });

        const response= await axios.post(
          url_rajaongkir,  
          datainput,
          {
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded',
              'key':apikeyrajaongkir,
           },
          }
        )
            console.log(response.rajaongkir.results)
   
       
          if(response.data.rajaongkir.status.code=='400'){
   
            swal({
              title: "Failed  Get Ekspedisi JNE?",
              text: "There is something Trouble With Your Data Or Connection",
              icon: "warning",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Failed!", "Can Not Calling Ekspedisi!", "error");
              }
              
            });
 
 
          } 
   
      }catch (err) {
        console.log(err);
      }

     };


     //TIKI
    //  const getekspedisilokalrajaongkir_tiki=async(namaekspedisitiki)=>{

    //   try{

    //     var datainput=JSON.stringify({
    //       origin:501,
    //       destination:114,
    //       weight:1000,
    //       courier:namaekspedisitiki

    //     });
    //     const response= await axios.post(
    //       url_rajaongkir,  
    //       datainput,
    //       {
    //         headers:{
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //           'key':apikeyrajaongkir,
    //        },
    //       }
    //     )
    //         //  console.log(response.data.message)
    //         if(response.data.rajaongkir.status.code=='400'){
    //           swal({
    //             title: "Failed  Get Ekspedisi TIKI?",
    //             text: "There is something Trouble With Your Data Or Connection",
    //             icon: "warning",
    //             dangerMode: true,
    //           })
    //           .then(willDelete => {
    //             if (willDelete) {
    //               swal("Failed!", "Can Not Calling Ekspedisi!", "error");
    //             }
                
    //           });
   
   
    //         } 
   
    //   }catch (err) {
    //     console.log(err);
    //   }

    //  };

     //POS
     
    //  const getekspedisilokalrajaongkir_pos=async(namaekspedisipos)=>{

    //   try{

    //     var datainput=JSON.stringify({
    //       origin:501,
    //       destination:114,
    //       weight:1000,
    //       courier:namaekspedisitiki

    //     });
    //     const response= await axios.post(
    //       url_rajaongkir,  
    //       datainput,
    //       {
    //         headers:{
    //           'Content-Type': 'application/x-www-form-urlencoded',
    //           'key':apikeyrajaongkir,
    //        },
    //       }
    //     )
    //         //  console.log(response.data.message)
   
    //         if(response.data.rajaongkir.status.code=='400'){
   
    //           swal({
    //             title: "Failed  Get Ekspedisi POS?",
    //             text: "There is something Trouble With Your Data Or Connection",
    //             icon: "warning",
    //             dangerMode: true,
    //           })
    //           .then(willDelete => {
    //             if (willDelete) {
    //               swal("Failed!", "Can Not Calling Ekspedisi!", "error");
    //             }
                
    //           });
   
   
    //         } 
   
    //   }catch (err) {
    //     console.log(err);
    //   }

    //  };





     //batas raja ongkir 



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
                                                
                                                <a><button  type="submit" className="lanjut_tombol" style={{color:'white',marginTop:'-250px'}}>Lanjut</button></a>
                                               
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

export default EkspedisiLokalIndonesia;