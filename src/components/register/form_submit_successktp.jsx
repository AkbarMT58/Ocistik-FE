import React from "react";


import { useRecoilValue } from "recoil";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";
import {
  registerFormInputsState,
  registerFormStepState,
} from "../../atoms/registerForm";



function Form_Submit_Success_KTP() {
  const [form, setForm] = useRecoilState(registerFormInputsState);
  const [formStep, setFormStep] = useRecoilState(registerFormStepState);

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormStep("formisianktp");
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

                <div class="mt-5">
                    <center>

                     

                    <div className='mb-4 text-black'></div>

                    <img src="/image/icons/success.png" style={{width:'250px',height:'250px'}} />


                    <div className="text-black mt-4">Selesai!</div>

                    <div className="text-black mt-4 mb-4">Proses Verifikasi KTP Berhasil</div>

                    </center>
                   

                <center>
                <a  href="/login"><button  type="submit" className="login_masuk" style={{color:'white'}}>Kembali Login </button></a>
                </center>

                </div>
              
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

export default Form_Submit_Success_KTP;
