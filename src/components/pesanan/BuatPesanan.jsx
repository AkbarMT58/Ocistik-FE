
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../containers/frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../../containers/frontend/admin/layout/navbar';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../components/general/Pagination';
import { getData_Provinsi } from '../../constants/api/logistik';
import axios from 'axios';
import swal from 'sweetalert';

import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from '../../containers/frontend/admin/layout/sidebar';


import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
  PesananFormInputsState,
  pesananFormStepState,
  } from "../../atoms/pesananForm";

import { useRecoilValue } from "recoil";





const BuatPesanan = () => {

  const [form, setForm] = useRecoilState(PesananFormInputsState);
  const [formStep, setFormStep] = useRecoilState(pesananFormStepState);
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [dataProvinsi, setDataProvinsi] = useState(null)
    const [dataKota, setDataKota] = useState(null)
    const [dataKecamatan, setDataKecamatan] = useState(null)
    const select_provinsi = useRef('');
    const select_kota = useRef('');

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  
 useEffect(() => {

  if(!dataProvinsi) {
    fetchOrderDataProvinsi();
  }


},[Pagination]);

const fetchOrderDataProvinsi= async ()=>{

const url =`http://localhost:9000/api/getprovinsi`;


try {
  let res = await fetch(url, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },


  });
  let resJson = await res.json();
  if (res.status === 200) {
  
    // console.log(resJson)


    const data_= resJson.Data

    console.log("lihat data provinsi:",data_)

    setDataProvinsi(data_)

    
  } else {
    console.log("error")
  }
} catch (err) {
  console.log(err);
}




}


  const HandlerChangeProvinsiSelect= async (e) => {
    e.preventDefault();

    setForm({
      ...form,
      provinsi:select_provinsi.current.value,
  })
  

    var id_provinsi= select_provinsi.current.value;

    const url =`http://localhost:9000/api/getkotabyprovinsiid`;

    console.log("lihat id provinsi:",id_provinsi);
    
      var formdatarequest = new FormData();
      formdatarequest.append('kodeprovinsi',id_provinsi);


      if (id_provinsi!=''){

        try {
          let res = await fetch(url, {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      
            },
      
            body: JSON.stringify({
              "kodeprovinsi":id_provinsi ,
             
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
          
            // console.log(resJson)
      
        
            const data_kota_ = resJson.Data

          
            
  
              setDataKota(data_kota_);
    
            
          } else {
            console.log("error")
          }
        } catch (err) {
          console.log(err);
        }

   

      }

  
    


  }

  const HandlerChangeKotaSelect= async (e) => {

    e.preventDefault();

    
    setForm({
      ...form,
      kota:select_kota.current.value,
  })
  

    var id_kota= select_kota.current.value;
    const url =`http://localhost:9000/api/getkecamatanbykotaid`;
   


    console.log("lihat id kota:",id_kota);
    
      if (id_kota!=''){

        try {
          let res = await fetch(url, {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
      
            },
      
            body: JSON.stringify({
              "kodekota":id_kota ,
             
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
          
            console.log("lihat data kecamatan:",resJson)
            const data_kecamatan_ = resJson.Data
            setDataKecamatan(data_kecamatan_);
    
            
          } else {
            console.log("error")
          }
        } catch (err) {
          console.log(err);
        }

   

      }

  


    
  }


  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("syaratketentuan");
  };


  return (
    <>
      <div id="header" style={{ display: 'flex' }}>
             <Sidebar/>
        <div className="container">

     
       
<div className='bg_layerdashboard bg-aqua'>

    <div className='bg_dashboard'>

   <Navbar_Dashboard/>

                  
            <div class="container" style={{marginTop:'50px'}}>

            <form onSubmit={handleSubmit}>
                                <div className="body_pesanan d-md-flex align-items-center justify-content-between">
                                    <div className="box-1 mt-md-0 mt-5">
                                    
                                            <center>
                                            <div className='' >

                                            <div className='text-black' style={{marginLeft:"-150px"}}>Informasi Penerima</div>
                                            <div className='form-group m-2'>
                                           
                                            <input  onChange={(e) =>
                    setForm({
                        ...form,
                        namalengkap: e.target.value,
                    })
                    }
                    value={form.namalengkap}  type="text" className='form-control icon_1' placeholder='Nama Lengkap'/>
                                            

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                            <input  


onChange={(e) =>
  setForm({
      ...form,
      nohp: e.target.value,
  })
  }
  value={form.nohp}

                                            
                                            
                                            
                                             type="text" className='form-control icon_2'  placeholder='No HP'/>

                                            </div>
                                            <div className='form-group m-2'>
                                          
                                          <input 
onChange={(e) =>
  setForm({
      ...form,
      alamatlengkap: e.target.value,
  })
  }
  value={form.alamatlengkap}

type="text" className='form-control icon_3'  placeholder='Alamat Lengkap'/>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <select


                                          
                                          
                                           ref={select_provinsi} onChange={HandlerChangeProvinsiSelect}   type="text" className='form-control icon_4 text-black'  placeholder='Pilih Provinsi' >
                                          <option>--Pilih Provinsi--</option>
                                          {dataProvinsi?.map((provinsi) => (
                                          
                                           
                                            <option value={provinsi?.province_id} >{provinsi?.province_name}</option>

                                          ))}


                                          </select>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <select ref={select_kota} onChange={HandlerChangeKotaSelect}   type="text" className='form-control icon_4'  placeholder='Pilih Kota'>
                                            <option>--Pilih Kota--</option>

                                            {dataKota?.map((kota) => (
                                            <option value={kota?.city_id}>{kota?.city_name}</option>
                                            ))}


                                          </select>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <select  onChange={(e) =>
  setForm({
      ...form,
      kecamatan: e.target.value,
  })
  }
  value={form.kecamatan}

   type="text" className='form-control icon_4'  placeholder='Pilih Kecamatan'>
                                            <option>--Pilih Kecamatan--</option>
                                            {dataKecamatan?.map((kecamatan) => (

                                            <option value={kecamatan?.subdistrict_id}>{kecamatan?.subdistrict_name}</option>

                                            ))}


                                          </select>

                                          </div>
                                          <div className='form-group m-2'>
                                          
                                          <input onChange={(e) =>
  setForm({
      ...form,
      kodepos: e.target.value,
  })
  }
  value={form.kodepos} type="text" className='form-control icon_7'  placeholder='Kode Pos'/>

                                          </div>

                                            
                                            </div>
                                            <div className='mt-4'></div>

                                        </center>

                                    </div>
                                    <div className=" box-2 d-flex flex-column h-100">
                                        <div className="mt-5">

                                        

                        <center>

                        <div className='mb-4 text-black'>Alamat</div>
                        </center>

                        <div>

                         <div className="card mb-4" >
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle mb-2 text-muted text-black">Ita yulianda pane</h6>
                                <p className="card-text text-black">6281290002631</p>
                                <br/>
                                <a href="#" className="card-link text-black mb-2">JL.H. muala Ujung No 7 Rt 04/ Rw 08, Cengkareng......</a>
                                <a href="#" className="card-link text-black">Another link</a>
                            </div>
                            </div>

                        </div>
                       
                                        </div>

                        <center>
                       <a><button  type="submit" className="login_masuk" style={{color:'white'}}>Lanjut</button></a>
                        </center>

                                      
                                    </div>

                                

                                    
                             
                             

                                </div>
                                </form>



                      
                                
                            </div>

           
            
    </div>


</div>
    
         
        </div>

        
      
      </div>
    </>
  );
};

export default BuatPesanan;