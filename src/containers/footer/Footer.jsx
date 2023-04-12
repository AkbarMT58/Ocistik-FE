import React from 'react'
import gpt3Logo from '../../assets/logo.svg';
import logo from '../../assets/image/Lomiles_.png'

import './footer.css'
const Footer = () => {
  return (
    <div className='footer_screen'>
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'></h1>
      </div>

     
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo'  />
          <p></p>
        </div>

   
      </div>

      
      <div className='row textsize mb-4' style={{marginTop:'-100px',marginLeft:'100px'}}>

      <div className='col-md-2' style={{width:'200px'}}>
        <div className='text-white mb-2' style={{fontWeight:'bold'}}>Akun Saya</div>
        <div className='text-white'>Keranjang</div>
        <div className='text-white'>Hubungi Kami</div>


      </div>
      <div className='col-md-6' style={{width:'200px'}}>
      <div className='text-white mb-2' style={{fontWeight:'bold'}}>Tentang Kami</div>
      <div className='text-white'>Syarat Ketentuan</div>
      <div className='text-white'>Kebijakan Refund</div>
      <div className='text-white'>Kebijakan Privasi</div>
      <div className='text-white'>Tentang Lowmiles</div>
      <div className='text-white'>Blogs</div>
      <div className='text-white'>FAQ</div>
      </div>
      <div className='col-md-4' style={{width:'300px'}}>
      <div className='text-white mb-2' style={{fontWeight:'bold'}}>Lokasi Kami</div>
      Gedung Wisma IWI Jl. Arjuna Sel. No.75, Lt. 7, RT.2/RW.12, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
      021-50867088
      info@lomiles.com

      </div>



</div>

<center>

  <div>
    Follow Akun Media Sosial Kita
  </div>
  <div className='row  m-4'>

    <div className='col-md-2'>
      <img src="/image/group270.png" style={{width:'50px',height:'50px'}}></img>

    </div>
    <div className='col-md-2'>
    <img src="/image/group269.png"  style={{width:'50px',height:'50px'}}></img>
   </div>
   <div className='col-md-2'>
   <img src="/image/group268.png"  style={{width:'50px',height:'50px'}}></img>


    </div>
    <div className='col-md-2'>
    <img src="/image/group267.png"  style={{width:'50px',height:'50px'}}></img>


    </div>
    <div className='col-md-2'>
    <img src="/image/group266.png"  style={{width:'50px',height:'50px'}}></img>


    </div>
    <div className='col-md-2'>
    <img src="/image/group265.png"  style={{width:'50px',height:'50px'}}></img>


    </div>




  </div>

</center>


<center>

  <div className='fontkonsumen mt-4'>
 Layanan Pengaduan Konsumen
 <div>
<div>PT. Ocommerce Capital Indonesia</div>
<div>Email: info@lomiles.com</div>
<div>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</div>
<div>Kementerian Perdagangan Republik Indonesia</div>
<div>Whatsapp Ditjen PKTN: 0853 1111 1010</div>
</div>

  </div>
  <div className='row'>


  </div>

</center>


     

      <div>

        

      </div>
  
    
    </div>

    <section style={{height:'50px'}}>

    <div className='gpt3__footer-copyright text-dark'>
        Copyright © PT Ocommerce Capital Indonesia.
      </div>

</section>

    </div>
  )
}
export default Footer