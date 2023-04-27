import React from "react";

import {
    registerFormInputsState,
    registerFormStepState,
  } from "../../atoms/registerForm";

import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import '../../containers/frontend/admin/login/login.css'
import { useState,useRef,useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';

function Form_OTP_Verifikasi() {
  
  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);
  const [dataotp_1, setDataOTP_1] = useState('');
  const [dataotp_2, setDataOTP_2] = useState('');
  const [dataotp_3, setDataOTP_3] = useState('');
  const [dataotp_4, setDataOTP_4] = useState('');
  const [dataotp_5, setDataOTP_5] = useState('');

  const otp_1 = useRef('');
  const otp_2 = useRef('');
  const otp_3 = useRef('');
  const otp_4 = useRef('');
  const otp_5 = useRef('');

  var otp1=otp_1.current.value;
  var otp2=otp_2.current.value;
  var otp3=otp_3.current.value;
  var otp4=otp_4.current.value;
  var otp5=otp_5.current.value;

  var otp_all=otp1+otp2+otp3+otp4+otp5;
 


   console.log(otp_all);
   


  let handleSubmit = async (e) => {
    e.preventDefault();

    
   try {

    const json = JSON.stringify({

      email:form.email,
      nama:form.namalengkap,
      telepon:form.notelepon,
      password:form.password,
      repeat_password:form.repeatpassword,
      otp:otp_all

  
  
   });
    const URL = `http://192.168.15.20:8082/ocistik/customer/register`;


    const response= await axios.post(
        URL,  
        
        json,
        {
          headers:{
            'Content-Type': 'application/json'
         },
         
         
        }
      )
           //console.log(response)

           if(response.data.status=='409'){

        swal({
          title: "OTP Authentication?",
          text: "Are You Sure Your OTP Number Is Correct?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            swal("Success!", "Your Register With OTP Succesfully,Please Login First When Using LoMiles!", "success");
          }
           window.location.href="/login"
        });

           }else{

            swal({
              title: "OTP Authentication Warning",
              text: "Failed Register With OTP Authentication?",
              icon: "warning",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Failed!", "Your Register With OTP Failed,Please Asking Administrator Please!", "error");
              }
             
            });
    


           }

    

} catch (err) {
console.log(err);
}


    // setFormStep("formsubmitsuccessotp");
  };

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

            <div className="success-step" hidden>
                          
                          <p>
                          <span>Name:</span>
                          {form.namalengkap}
                          </p>
                          <p>
                          <span>Email:</span>
                          {form.email}
                          </p>
                          <p>
                          <span>Password:</span>
                          {form.password}
                          </p>
                          <p>
              
                          <span>No HP:</span>
                          {form.notelepon}
                          </p>

                          <p>
                          
                          <span>OTP:</span>
                          {otp_all}
                          </p>

                      </div>
                <div class="mt-5">
                    <center>

                     

                    <div className='mb-4 text-black'>Masukan Kode Verifikasi</div>
                    <div className='mb-4 text-black'>Kode Verifikasi Dikirim Via Whatsapp</div>
                    <div className="inputfield mb-4">
                    <input ref={otp_1} value={dataotp_1} onChange={(e) => setDataOTP_1(e.target.value)} type="number" maxlength="1" className="input" />
                    <input ref={otp_2} value={dataotp_2} onChange={(e) => setDataOTP_2(e.target.value)} type="number" maxlength="1" className="input"  />
                    <input ref={otp_3} value={dataotp_3} onChange={(e) => setDataOTP_3(e.target.value)} type="number" maxlength="1" className="input"  />
                    <input ref={otp_4} value={dataotp_4} onChange={(e) => setDataOTP_4(e.target.value)} type="number" maxlength="1" className="input"  />
                    <input ref={otp_5} value={dataotp_5} onChange={(e) => setDataOTP_5(e.target.value)} type="number" maxlength="1" className="input"  />
                    </div>
                    <div className='mb-4 text-black'>56 detik <label className="text-primary">Kirim Ulang Code?</label></div>
                    </center>

             
             


                <center>
                <a ><button  type="submit" className="login_masuk" style={{color:'white'}}>Verifikasi</button></a>
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

export default Form_OTP_Verifikasi;
