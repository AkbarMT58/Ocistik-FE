import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/kontak/kontak.css'
import { Navbar } from '../../../components';
import {Footer} from '../../../containers';

import { useState } from "react";
import swal from 'sweetalert';
import axios from 'axios';
import env from "react-dotenv";

const Kontak= () => {

  const [isOpen, setIsOpen] = React.useState(true);

  const [inputnama, setNama] = useState('');
  const [inputphonenumber, setPhoneNumber] = useState('');
  const [inputpesan, setPesan] = useState('');
  const [inputemail, setEmail] = useState('');


  
  const handleInsertDataKontak = async (e) => {
    e.preventDefault();

var formdatarequest = new FormData();


formdatarequest.append('nama',inputnama);
formdatarequest.append('phone_number',inputphonenumber);
formdatarequest.append('email',inputemail);
formdatarequest.append('pesan',inputpesan);  


  try {
        const URL = `${env.API_GATEWAY_LOKAL}/api/insertKontak`;

        const response= await axios.post(
            URL,  formdatarequest,
            {
              headers:{
                "Content-Type": "multipart/form-data",
            
             },
             
             
            }
          )

            swal({
                title: "Are you sure?",
                text: "Are you sure that you want to send this message?",
                icon: "warning",
                dangerMode: true,
              })
              .then(willDelete => {
                if (willDelete) {
                  swal("Success!", "Your Data Has Been Updated!", "success");
                }
                window.location.href="/kontak"
              });

  } catch (err) {
    console.log(err);
  }

}
 
    return (
   
      <div className='App'>
      <div className="gradient__bg_kontak" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>KONTAK KAMI</h1>
        <hr className='border_garis_tentangkami'></hr>
        <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'></p></div>
      </div>
     
    </div>
    </div>


    <section className='flex-container' >

      <div className='kontak_bg'>

      <div className='row'>

        <div className='col-md-6 mb-5'>


          
      <div class="box_kontak box_kontak-4">
			<div class="box_kontak-content">
        <h2>Ingin Bertanya Mengenai Impor</h2>
				<p>Konsultasi saja dengan kami sekarang melalui whatsapp,email atau datang ke kantor saja!</p>

        <div  className="mt-10" style={{textAlign:'left'}}>
                JAKARTA OFFICE
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
               
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
              
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
            PT. Ocommerce Capital Indonesia
            Email: info@lomiles.com
               
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
            Gedung Wisma IWI Jl. Arjuna Sel. No.75, Lt. 7, RT.2/RW.12, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
            021-50867088
            info@lomiles.com

            
          
            </div>

            <div className='whatsappinfo' >

            <a target="_blank" href="https://api.whatsapp.com/send?phone=+6285710824508&text=Selamat Datang Di GoMile.Ada yang perlu ditanyakan.Kami akan selalu membantu.">

            <img  src="/image/chat.png" className="responsive" style={{width:'200px'}} />

            </a>


            </div>


			</div>
		</div>


        </div>

        <div className='col-md-6 mt-2'>
      <div class="box_kontak box_kontak-4">
			<div class="box_kontak-content">

        <center>

          <div className='text-black fs-4 mb-4' style={{marginTop:'20px'}}>Tinggalkan Pesan</div>
         
        </center>

        <form onSubmit={handleInsertDataKontak} >

        <div className='row'>

          <div className='col-md-6'>

            <div className='form-group'>

              <label>Nama</label>

              <input value={inputnama} type='textbox' className='form-control' onChange={(e) => setNama(e.target.value)} required/>
              
            </div>

          </div>
          <div className='col-md-6'>

          <div className='form-group'>

          <label>Email</label>
          <input value={inputemail} type='email' className='form-control' onChange={(e) => setEmail(e.target.value)} required />
              
          </div>

          </div>

          <div className='form-group'>

            <label>Phone Number</label>

          <input value={inputphonenumber}  type="number"  pattern="[0-9]+"  className='form-control' onChange={(e) => setPhoneNumber(e.target.value)} required ></input>


          </div>

          <div className='form-group'>

          <label>Pesan</label>

          <textarea  value={inputpesan} className='form-control' maxlength="300" onChange={(e) => setPesan(e.target.value)}></textarea>


          </div>



        </div>

        
<button  className='submit_kontak fw-bold'><label style={{marginLeft:'40px',marginTop:'-20px'}}>Submit</label></button>



        </form>

       
      

     
			</div>
		</div>


       </div>



    </div>

    </div>
   
    </section>

  
    <Footer/>


      

    </div>
   

        
        
      )

  

}

export default Kontak