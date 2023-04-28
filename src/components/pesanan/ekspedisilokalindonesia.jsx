
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
import env from "react-dotenv";


const EkspedisiLokalIndonesia = () => {
const [tipeekspedisi, setEkpedisi] = React.useState("");
const [tipeservice, setService] = React.useState("");
const select_ekspedisilokal = useRef('');
const [form, setForm] = useRecoilState(PesananFormInputsState);
const [formStep, setFormStep] = useRecoilState(pesananFormStepState);
const [users, setItems] = useState('');



const url_rajaongkir = `http://192.168.15.20:9000/api/getrajaongkir`;
const apikeyrajaongkir=`8b35c2946a4276088e5d4d422b716f90`
const pilihjne = useRef('');
const [dataJNE, setDataJNE] = useState(null)
const [dataJNECost, setDataJNECost] = useState(null)

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
     harga_ekspedisi_lokal:parseInt(tipeservice),
     id_provinsi:parseInt(form.provinsi),
     id_kota:parseInt(form.kota),
     id_kecamatan:parseInt(form.kecamatan),
     tracking_no:form.trackingnumber,
 
     });

   const URL = `http://192.168.15.20:8787/oms/oci-logistics/buat-pesanan-versi2`;
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

         if(response.data.status=='200'){

           swal({
             title: "Apakah Data Anda Sudah Benar,Klik Tombol OK Jika Benar?",
             text: "Data Berhasil Tersimpan",
             icon: "warning",
             dangerMode: true,
           })
           .then(willDelete => {
             if (willDelete) {
               swal("Berhasil!", "Create Pesanan Baru Sukses!", "success");
             }
             setFormStep("rangkumanpesanan");
             
           });


         }else{

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

      

        var formrequest = new FormData();
        formrequest.append("origincity","151");
        formrequest.append("destination",form.kota);
        formrequest.append("weight",form.totalberat);
        formrequest.append("namaekspedisi",namaekspedisijne);

        const response= await axios.post(
          url_rajaongkir,  
          formrequest,
          {
            headers:{
              'Content-Type': 'multipart/form-data',
           
           },
          }
        )
            console.log("data response ongkir",response.data.rajaongkir.results)
            setDataJNE(response.data.rajaongkir.results);
            setDataJNECost(response.data.rajaongkir.results[0].costs);
            


          // } 
   
      }catch (err) {
        console.log(err);
      }

     };






     //batas raja ongkir 

     const handlerPilihEkpedisi=()=>{

      var pilihekspedisichoice=pilihjne.current.value;

      console.log(pilihekspedisichoice)
      console.log("harga ekspedisi:",tipeservice)

      setEkpedisi(pilihekspedisichoice);
      setForm({
        ...form,
        namaekspedisi: pilihekspedisichoice,
      })

     setForm({
          ...form,
          hargaekpedisi: tipeservice,

      

    })




     }

    console.log("data JNE COST:", dataJNECost)



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

                                                <div className='col-md-12' >

                                                 <div className='boxkirimindonesia mb-4' hidden >
                                                  
                                                  <img src="/image/icons/jne.png"  className='setlaut'/>
                                                  <label className='text-black labelkirimlaut'>JNE</label>
                                                

                                                  {/* <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "jne"}
                                                    onChange={() => setEkpedisi("jne")}
                                                  />  */}
                                                 
                                              

                                                 </div>
                                                {/* <div className='col-md-12'>

                                                    <div className='boxkirimindonesia mb-4'>

                                                    <img src="/image/icons/sicepat.png"  className='setlaut'/>
                                                    <label className='text-black labelkirimlaut'>Si Cepat</label>
                                                    <input style={{marginLeft:'160px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "sicepat"}
                                                    onChange={() => setEkpedisi("sicepat")}
                                                  />


                                                    </div>

                                        

                                                </div> */}
                                                {/* <div className='col-md-12'>

                                                <div className='boxkirimindonesia mb-4'>

                                                <img src="/image/icons/jnt.png"  className='setlaut'/>
                                                <label className='text-black labelkirimlaut'>J&T</label>
                                                <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "jnt"}
                                                    onChange={() => setEkpedisi("jnt")}
                                                  />



                                                </div>



                                                </div> */}

                                                <div className='col-md-12' >
                                                  

                                                          
                                                   {dataJNE?.map((rowsjne) => (   

                                                <div className='boxkirimindonesia mb-4' style={{height:'200px'}} onClick={handlerPilihEkpedisi}>

                                                <input ref={pilihjne} type="text" value="jne"  hidden/>

                                                <img src="/image/icons/jne.png"  className='setlaut'/>
                                                <label className='text-black labelkirimlaut'>{rowsjne.name}</label>

                                                <div>

                                                <table class="table" >
  <thead className="alert alert-success">
    <tr>
      <th scope="col" >No</th>
      <th scope="col" >Service</th>
      <th scope="col"  >Harga</th>
      <th scope="col" className='text-center' >Pilih</th>
    
    </tr>
  </thead> 
  
  
  <tbody>

    
             
  {dataJNECost?.map((rowscost,index) => (  
    <tr>
      <td>{index+1}</td>
      
      <td>{rowscost.service}</td>
      <td >{rowscost.cost[0].value.toLocaleString('ID-id')}</td>
      <td   className='text-center' >

         <input
                type="checkbox"
                checked={tipeservice === rowscost.cost[0].value}
                onChange={() => setService(rowscost.cost[0].value )}
               />


      </td>
      

    </tr>

    

    ))} 



  </tbody>  


  

</table>

</div>



                                                                                                       
                                                {/* {dataJNECost?.map((rowscost) => (  

                                                

                                                  <div className='text-black'>{rowscost.service}<label style={{marginLeft:'30px'}}>{rowscost.cost[0].value}</label></div>
                                                 

                                               
                                                  
                                                 


                                                ))} */}
                                          
                                                {/* <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipeekspedisi === "jne"}
                                                    onChange={() => setEkpedisi("jne")}
                                                  /> */}



                                                </div>
                                                   ))}  



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