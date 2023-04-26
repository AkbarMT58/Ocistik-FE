import React from "react";


import {
    registerFormInputsState,
    registerFormStepState,
  } from "../../atoms/registerForm";
import { useRecoilValue } from "recoil";
import { RecoilRoot } from "recoil";
import { useRecoilState } from "recoil";


function Form_Isian_KTP_Selfi() {

    const [form, setForm] = useRecoilState(registerFormInputsState);
    const [formStep, setFormStep] = useRecoilState(registerFormStepState);
  
    let handleSubmit = (e) => {
      e.preventDefault();
      setFormStep("formsubmitsuccessktp");
    };


  return (

    <div>

        
                    {/* <form>
                        <div className="success-step">
                            <h3>Registration successful!</h3>
                            <p>
                            <span>Name:</span>
                            {form.namalengkap}
                            </p>
                            <p>
                            <span>Email:</span>
                            {form.namalengkap}
                            </p>
                            <p>
                            <span>Password:</span>
                            {form.password}
                            </p>
                            <p>
                
                            <span>No HP:</span>
                            {form.notelepon}
                            </p>

                        </div>
                    </form> */}

                    
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

                
                    <div className='mb-4 text-black'></div>

                    <img src="/image/icons/verif_ktp.png" style={{width:'250px',height:'250px'}} />


                    <div className="text-black mt-4">Foto Selfi Dengan KTP</div>

                    <div className="mt-4 m-4">  <input type="file" onChange={(e) =>
                    setForm({
                        ...form,
                        gambarktp: e.target.files,
                    })
                    }
                    value={form.gambarktp} className='form-control' placeholder='Nomor NIK'></input></div>

                    </center>
                   

                <center>
                <a ><button  type="submit" className="login_masuk" style={{color:'white'}}>Mulai</button></a>
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




    </div>
   
  );
}

export default Form_Isian_KTP_Selfi;
