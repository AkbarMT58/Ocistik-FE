import React from "react";
import { useState,useRef,useEffect } from "react";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
    registerFormInputsState,
    registerFormStepState,
  } from "../../atoms/registerForm";

import { useRecoilValue } from "recoil";
import axios from 'axios';
import swal from 'sweetalert';

function useScreenWidth() {

    const [windowWidth, setWindowWidth] = useState(null);
    const isWindow = typeof window !== 'undefined';
    const getWidth = () => isWindow ? window.innerWidth : windowWidth;
    const resize = () => setWindowWidth(getWidth());
  
    return windowWidth;
  }

function Form_Pendaftaran() {

  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);

  let handleSubmit =async (e) => {
    e.preventDefault();

    
   try {

    const json = JSON.stringify({

      email:form.email,
      nama:form.namalengkap,
      telepon:form.notelepon,
      password:form.password
  
  
   });
    const URL = `http://localhost:8082/ocistik/customer/send-otp`;


    const response= await axios.post(
        URL,  
        
        json,
        {
          headers:{
            'Content-Type': 'application/json'
         },
         
         
        }
      )
          //  console.log(response.data.message)

          if(response.data.status=='400'){

            swal({
              title: "Failed Register?",
              text: "Apakah Anda Sudah Terdaftar Sebelumnya?",
              icon: "warning",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Failed!", "Register Failed!Customer Sudah Terdaftar", "error");
              }
              
            });


          }else{

            
        swal({
          title: "Register Lomiles",
          text: "Do You Want To Register Lomiles?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            swal("Success!", "Pesan OTP Sudah Di Kirimkan Di Whatsapp Anda!", "success");
          }
          setFormStep("formotpverifikasi");
        });


          }

      
    

} catch (err) {
console.log(err);
}
   //setFormStep("formotpverifikasi");
  };


  
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
        <div class="body-register d-md-flex align-items-center justify-content-between">

     
          
            <div class=" box-register d-flex flex-column h-100">
            <form onSubmit={handleSubmit}>
                <div class="mt-5">
                    <center>

                    <div className='mb-4 text-black'>Registrasi Customer</div>
                    </center>

                    <div className='form-group mb-4 m-4'>
  
                  <input type="text"   onChange={(e) =>
                    setForm({
                        ...form,
                        namalengkap: e.target.value,
                    })
                    }
                    value={form.namalengkap} className='form-control icon_user' placeholder='Nama Lengkap'></input>
                        

                </div>
                <div className='form-group mb-4 m-4'>

                <input type="email"  onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value,
                    })
                    }
                    value={form.email} className='form-control icon_email' placeholder='Email'></input>


                </div>
                <div className='form-group mb-4 m-4'>

                <input type="password" onChange={(e) =>
                    setForm({
                        ...form,
                        password: e.target.value,
                    })
                    }
                    value={form.password} className='form-control icon_password' placeholder='Password'></input>


                </div>
                <div className='form-group mb-4 m-4'>

                <input type="password"  

              onChange={(e) =>
                setForm({
                    ...form,
                    repeatpassword: e.target.value,
                })
                }
                value={form.repeatpassword} 
                              
                className='form-control icon_password' placeholder='Ulangi Password'></input>


                </div>
                <div className='form-group mb-4 m-4'>

                <input type="notelepon" onChange={(e) =>
                    setForm({
                        ...form,
                        notelepon: e.target.value,
                    })
                    }
                    value={form.notelepon} className='form-control icon_call' placeholder='No Telepon'></input>


                </div>


                <center>
                <a ><button  type="submit" className="login_masuk" style={{color:'white'}}>Daftar</button></a>
                </center>

                </div>
                </form>
                <div class="mt-auto">
               
                <div className="row">
                <div className='col-md-6'>
                <div className='text-black' ><a href="/home"></a></div>
                
                </div>
                  <div className='col-md-6'>
                
                </div>
                </div>
                <div className='row'>
               
                </div>
                </div>
            </div>
           
            <span class="fas fa-times"></span>
        </div>
    </div>


    
    </div>


    </div>
    

  
  );
}

export default Form_Pendaftaran;
