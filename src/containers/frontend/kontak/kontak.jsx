import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/kontak/kontak.css'
import { Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';

const Kontak= () => {

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


    <section style={{height:'90vh'}}>

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
            Email: info@ocistok.com
               
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
            Gedung Wisma IWI Jl. Arjuna Sel. No.75, Lt. 7, RT.2/RW.12, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
            021-50867088
            info@ocistok.com
            </div>

			</div>
		</div>


        </div>

        <div className='col-md-6 mt-2'>
      <div class="box_kontak box_kontak-4">
			<div class="box_kontak-content">

        <center>

          <div className='text-black fs-4 mb-4'>Drop Up Message</div>
        </center>

        <div className='row'>

          <div className='col-md-6'>

            <div className='form-group'>

              <label>Nama</label>

              <input type='textbox' className='form-control'/>
              
            </div>

          </div>
          <div className='col-md-6'>

          <div className='form-group'>

          <label>Email</label>
          <input type='textbox' className='form-control'/>
              
          </div>

          </div>

          <div className='form-group'>

            <label>Phone Number</label>

          <input type='textbox' className='form-control'></input>


          </div>

          <div className='form-group'>

          <label>Pesan</label>

          <textarea  className='form-control'></textarea>


          </div>



        </div>

        <div className='submit_kontak'><div style={{marginLeft:'40px',marginTop:'2opx'}}>Submit</div></div>

      

     
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