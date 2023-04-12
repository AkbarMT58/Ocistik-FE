import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/tentangkami/tentangkami.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';

const Tentangkami = () => {
  return (

    <div className='App'>
      <div className="gradient__bg_tentangkami" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>TENTANG KAMI</h1>
        <hr className='border_garis_tentangkami'></hr>
        <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'>Solusi Utama dalam Pengiriman Internasional</p></div>
      </div>
     
    </div>
    </div>


    
    <div className='gpt3__whatgpt3_tentangkami section__margin_tentangkami' id='whpt3'>
    

    <div className='gpt3__whatgpt3-container'>

    <div className="container">
      <div className='row'>

        <div className='col-md-6'>

        <div className='distance_text_kedua_gridsatu text-white fs-6'>
        
       {/* isi paragraph text */}

       Lomiles adalah spesialis jasa import China-Indonesia yang terbaik, tercepat dan termurah. Jasa kami merupakan Door to Door dan All In, dimana pengiriman dari gudang supplier dan langsung ke alamat anda dan pembayaran sudah termasuk asuransi, garansi dan pajak. Jadi tidak perlu khawatir adanya biaya tersembunyi.Anda juga tidak perlu khawatir dalam memilih supplier barang China yang terdapat di Marketplace China, karena tim spesialis importir barang China kami akan membantu Anda menemukan yang terpercaya.
        </div>

        </div>

        <div className='col-md-6'>

        <div className='distance_gambar'>

       {/* isi gambar image */}

         <img className='responsive-img'  src='/image/impor_ekspor-removebg-preview 2.png' />
        </div>

        </div>


      </div>

      </div>

     
   
    
    
    </div>


  </div>



  {/* grid kedua
   */}

   
<div className='gpt3__whatgpt3_tentangkami_griddua section__margin_tentangkami' id='whpt3'>
    

    <div className='gpt3__whatgpt3-container'>

    <div className="container">
      <div className='row'>

        <div className='col-md-6'>

        <div className='distance_gambar_kedua'>
        
       {/* isi paragraph text */}

       <img className='responsive-img'  src='/image/customer_service-removebg-preview 2.png' />

        </div>

        </div>

        <div className='col-md-6'>

        <div className='distance_text_kedua_griddua text-white fs-6'>

       {/* isi gambar image */}

       Kepuasan pelanggan adalah prioritas utama kami, semua kendala ataupun masalah yang anda akan alami selama impor menjadi tanggung jawab dan garansi kami. Di OCIstik, customer tidak akan dibebani sedikitpun karena semua proses akan kami selesaikan sampai tuntas

        </div>

        </div>


      </div>

      </div>

     
   
    
    
    </div>


  </div>



      <Footer/>

    </div>
   
   
    
    
  )
}

export default Tentangkami