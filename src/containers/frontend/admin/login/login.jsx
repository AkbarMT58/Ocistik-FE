import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/login/login.css'
import { Navbar } from '../../../../components';
import { Header } from '../../../../containers';


import { getData_Artikel } from '../../../../constants/api/logistik';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../components/general/Pagination';
import axios from 'axios';

function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== 'undefined';

  const getWidth = () => isWindow ? window.innerWidth : windowWidth;

  const resize = () => setWindowWidth(getWidth());

  


  return windowWidth;
}

const Login = () => {
  //fungsi set responsive
const widthSize = useScreenWidth()


const mobileWidth = 700

if(widthSize > mobileWidth){ 
    //logic for desktop

    var display_height_form='400px';

}

if(widthSize <= mobileWidth){ 
  //logic for mobile


  var display_height_form='430px';


}


  return (

    <div className='App'>
    <div className="gradient__bg_login" style={{marginTop:''}} >

      <br></br>
      <br></br>
      <br></br>
      <br></br>

    <div class="container">
        <div class="body d-md-flex align-items-center justify-content-between">
            <div class="box-1 mt-md-0 mt-5">
                {/* <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    class="" alt=""/> */}
                      <center>
                     <div className='mt-4' >

                        <img src='/image/Logistik.png' style={{width:'100px',height:'20px'}}/>


                     </div>
                     <div className='mt-4'>Selamat datang di halaman Customer New Logistik</div>

                </center>

            </div>
            <div class=" box-2 d-flex flex-column h-100">
                <div class="mt-5">

                

<center>

<div className='mb-4 text-black'>Login Customer</div>
</center>



<div className='form-group mb-4'>

    <input type="text" className='form-control' placeholder='Kode Marking'></input>
   

</div>
<div className='form-group mb-4'>

<input type="text" className='form-control' placeholder='Password'></input>


</div>

<div className='form-group mb-4'>

    <div style={{fontSize:'10px'}}>Tetap Login</div>

</div>

<center>
<button type="button" className="login_masuk" style={{color:'white'}}>Login</button>
</center>




             
                </div>
                <div class="mt-auto">
                <div className='text-black' ><a href="/home">Back To home</a></div>
                </div>
            </div>
            <span class="fas fa-times"></span>
        </div>
    </div>

      

    
    
    </div>








    


    </div>
    
    
  )
}

export default Login


