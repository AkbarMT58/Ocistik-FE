
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../dashboard/dashboard.css'
import Navbar_Dashboard  from '../../layout/navbar';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../../components/general/Pagination';
import axios from 'axios';

import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from '../../layout/sidebar';


const PesananSaya = () => {
  
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

    <div className='bg_dashboard bq-aqua'>

            <Navbar_Dashboard/>

            <center>

            <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'120px'}}>

                Pesanan Saya

            </div>

            </center>

                  
            <div class="container" style={{marginTop:'160px'}}>

              <div className='row'>

                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 
                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Semua</label>
                    <span class="button__badge">2</span>
                  </div>
                                
                </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                  
                <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Ditinjau</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Belum Bayar</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
               
                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Disorting</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 

                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Dikirim</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 
                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Selesai</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  </div>

                </div>
                <div className='col-md-2'>

                <div className='button_header mb-4 text-white text-center'>
                  
              

                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Dibatalkan</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  
                  
                  </div>

                </div>
             


              </div>

          

            <div className='box_pesanansaya'>
          <div className='box_1_pesanansaya text-white'>
          <label className='text-black mt-3' ><img src="/image/icons/Vector(8).png" style={{width:'20px', height:'20px',marginLeft:'5px'}} /> Detail Barang</label>
          </div>

          <div className='row mt-4 m-2'>
          <div className='text-secondary col-md-8' style={{fontSize:'12px'}}>Tampilkan 
          <select>
            
            <option>5</option>
            <option>10</option>
            <option>20</option>
          
          </select>  <label className='text-black'>Entries</label>

          </div>

          <div className='col-md-4' >
          <label className='text-black'>Cari</label>
          <input type="text" className='form-control'  />


          </div>
         </div>
         <hr></hr>
         
          <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-12'>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Gambar</th>
      <th scope="col" >No Pesanan</th>
      <th scope="col" >Tanggal</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><img src="/image/image4.png" className='gambarproduk'/></td>
      <td> 75647356565456</td>
      <td>30-11-2023 11:16:23 WIB</td>
      <td>Belum Bayar</td>
      <td><button className='buttonpesanan text-white'>Detail Barang</button>
      <br></br>
      <button className='buttonpesanan text-white'>Detail Produk</button>
      <br></br>
      <button className='buttonpesanan text-white'>Live Tracking</button>
      
      
      </td>

    </tr>
   

  </tbody>
</table>


            </div>
          

          </div>

          <div>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Barang</th>
      <th scope="col">Gambar</th>
      <th scope="col" >Qty</th>
      <th scope="col" >Dimensi</th>
      <th scope="col">Volume</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sendal</td>
      <td><img src="/image/image4.png" className='gambarproduk'/></td>
      <td> 75647356565456</td>
      <td>30-11-2023 11:16:23 WIB</td>
      <td>Belum Bayar</td>
    

    </tr>
   

  </tbody>
</table>

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

export default PesananSaya;