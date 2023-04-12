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
    <div className="gradient__bg_login" >
    
    
    </div>



    <div className='gpt3__whatgpt3 section__margin_login' id='whpt3' style={{height:display_height_form,backgroundColor:''}} >

        <div className='row' >

            <div className='col-md-8' style={{backgroundColor:'transparent'}} >

                <center>
                     <div>

                        <img src='/image/Logistik.png' style={{width:'100px',height:'20px'}}/>


                     </div>
                     <div className='mt-4'>Selamat datang di halaman Customer New Logistik</div>

                </center>

               

            </div>

            <div className='col-md-4 mb-4' style={{marginTop:'100px'}}>
                <center>

                <div className='mb-4'>Login Customer</div>
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

               
                <button type="button" className="login_masuk" style={{color:'white'}}>Login</button>

               


              

             </div>



        </div>
    
   </div>


    


    </div>
    
    
  )
}

export default Login


