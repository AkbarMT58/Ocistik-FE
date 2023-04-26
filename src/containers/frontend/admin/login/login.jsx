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
import swal from 'sweetalert';



function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== 'undefined';

  const getWidth = () => isWindow ? window.innerWidth : windowWidth;

  const resize = () => setWindowWidth(getWidth());

  return windowWidth;
}

const Login = (props) => {
  //fungsi set responsive
const widthSize = useScreenWidth()
const [inputemail, setDataEmail] = useState(null)
const [inputpassword, setDataPassword] = useState(null)
const email = useRef('');
const password = useRef('');
const { session, nextAction } = props;
const [ taskRunning, setTaskRunning ] = useState(false);



const mobileWidth = 700

if(widthSize > mobileWidth){ 
    //logic for desktop

    var display_height_form='400px';

}

if(widthSize <= mobileWidth){ 
  //logic for mobile


  var display_height_form='430px';


}

//  console.log("lihat email:",email.current.value);
//  console.log("lihat password:",password.current.value);



// Methods
const handlerLogin = async () => {

  //  console.log("lihat email:",email.current.value);
  
  //  console.log("lihat password:",password.current.value);


   try {
    const URL = `${env.API_GATEWAY_LOKAL}/api/login_masuk`;


    var formdatarequest = new FormData();

    formdatarequest.append('email',email.current.value);
    formdatarequest.append('password',password.current.value);

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

      
       localStorage.setItem('email', response.data.Data[0].email);
       localStorage.setItem('nama', response.data.Data[0].nama);



        swal({
            title: "Login Authentication?",
            text: "Do You Want To Login Lomiles?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Success!", "Your Data Has Been Updated!", "success");
            }
             window.location.href="/admin/dashboard"
          });

} catch (err) {
console.log(err);
}
 


 
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
               
                      <center>
                     <div className='mt-4' >

                        <img src='/image/LOMILES_PUTIH.png' style={{width:'339px',height:'84px'}}/>


                     </div>
                     <div className='mt-4'>Selamat datang di halaman Customer</div>

                </center>

            </div>
            <div class=" box-2 d-flex flex-column h-100">
                <div class="mt-5">

                

<center>


<div className='mb-4 text-black'>Login Customer</div>
</center>


<div>


<div className='form-group mb-4'>
  
    <input ref={email} type="text"  value={inputemail}  className='form-control' placeholder='Alamat Email'></input>
   

</div>
<div className='form-group mb-4'>

<input ref={password} type="password" value={inputpassword}  className='form-control' placeholder='Password'></input>


</div>

<div className='form-group mb-4'>

    <div style={{fontSize:'10px'}}>Tetap Login</div>

</div>

<center>
<a ><button  type="submit" onClick={handlerLogin} className="login_masuk" style={{color:'white'}}>Login</button></a>
</center>

</div>


                </div>
    
                <div class="mt-auto">
               
                <div className="row">
                <div className='col-md-6'>
                <div className='text-black' ><a href="/home">Back To home</a></div>
                
                </div>
                  <div className='col-md-6'>
                
                </div>
                </div>
                <div className='row'>
                <div className='text-black text-right text-end col-md-12 text-center' style={{fontSize:'12px'}} >Belum Punya Akun?<a href="/register">Daftar Disini</a></div>

                </div>
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


