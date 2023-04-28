
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
import swal from 'sweetalert';
import { getData_Master_Jenisbarang_Informasi } from '../../constants/api/logistik';



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






const PengirimanBarang = () => {
  

  const [form, setForm] = useRecoilState(PesananFormInputsState);
  const [formStep, setFormStep] = useRecoilState(pesananFormStepState);
  const [image, setImage] =useState('')
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [dataJenisBarang, setDataJenisBarang] = useState(null)
  

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("pengirimanindonesia");
  };

  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  
useEffect(() => {


  if(!dataJenisBarang) {
    getDataMasterJenisBarang()
  }
 console.log(dataJenisBarang)

  

}, [dataJenisBarang])

  const getDataMasterJenisBarang = async () => {
    const res = await getData_Master_Jenisbarang_Informasi();
    if (res.status === 200) {
      setDataJenisBarang(res.data)
    }
  }


  
const uploadToClient =async (event) => {
  if (event.target.files && event.target.files[0]) {
    const i = event.target.files[0];


  
  try {
   
    const URL = "http://192.168.15.20:9000/api/uploadexcel";


    var formdatarequest = new FormData();

    formdatarequest.append('dokumen',i);
  

    const response= await axios.post(
        URL,  
        
        formdatarequest,
        {
          headers:{
            "Content-Type": "multipart/form-data",
        
         },
         
         
        }
      )
           console.log(response.data.Data)

      setForm({
      ...form,
      packinglistfile:response.data.Data[0].link_file,
  })



      
      



        swal({
            title: "Upload The Excell File ?",
            text: "Do You Want To Upload The Excell Document?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Success!", "Your Data Hads Been Uploaded!", "success");
            }
            // window.location.href="/admin/formpesanan"
          });

} catch (err) {
console.log(err);
}
 
  

     console.log("lihat gambar upload:",i);
    setCreateObjectURL(URL.createObjectURL(i));

    

  

  }

 


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
            <form onSubmit={handleSubmit}>
                                <div class="body_informasibarang d-md-flex align-items-center justify-content-between">
                                    <div class="box-ketentuan mt-md-0 mt-5">
                                    
                                           
                                            <div className='' >
                                             <center>
                                            <div className='text-black mb-4' style={{marginTop:'20px',fontWeight:'bold'}} >Informasi Barang</div>
                                            </center>
                                            <div className='text-black fs-6' >
                                             <div className='row mb-4 px-4 py-4' style={{marginTop:'-20px'}} >

                                                <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Kategori Barang</label>


                                                </div>

                                                
                                                <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <select onChange={(e) =>
  setForm({
      ...form,
      kategori_id: e.target.value,
  })
  }
  value={form.kategori_id}
 type="text" className='form-control w-100' 
                                                  
                                                    
                                                    >
                                                      <option value="">--Pilih kategori Barang--</option>
                                                      {dataJenisBarang?.map((category, index) => (
                                                    <option key={category.id} value={category.id}>{category.kategori_barang}</option>
                                                  ))}

                                                      </select>


                                                

                                                </div>

                                                <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Total Volume</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input onChange={(e) =>
  setForm({
      ...form,
      volume: e.target.value,
  })
  }
  value={form.volume}
 type="text" className='form-control w-100' placeholder='m3' />



                                                    </div>

                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Total Berat</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input onChange={(e) =>
  setForm({
      ...form,
      totalberat: e.target.value,
  })
  }
  value={form.totalberat}
 type="text" className='form-control w-100' placeholder='Kg' />



                                                    </div>

                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Packing List</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input onChange={uploadToClient} type="file" className='form-control w-100' />



                                                    </div>
                                                    <div className='col-md-4 mb-4'>

                                                    <label className='text-black'>Tracking Number</label>


                                                    </div>


                                                    <div className='col-md-8 mb-4' style={{marginLeft:'-50px'}}>

                                                    <input onChange={(e) =>
  setForm({
      ...form,
      trackingnumber: e.target.value,
  })
  }
  value={form.trackingnumber} type="text" className='form-control w-100' />



                                                    </div>


                                                    <center>
                                                
                                                <a ><button  type="submit" className="submit_informasibarang" style={{color:'white'}}>Lanjut</button></a>
                                               
                                                </center>


                                      

                                             </div>

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

export default PengirimanBarang;