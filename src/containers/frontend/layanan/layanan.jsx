import React from 'react'
import { useRef,useState,useMediaQuery,useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/layanan/layanan.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';


function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== 'undefined';

  const getWidth = () => isWindow ? window.innerWidth : windowWidth;

  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
      if (isWindow) {
          setWindowWidth(getWidth());
    
          window.addEventListener('resize', resize);
     
          return () => window.removeEventListener('resize', resize);
      }
  //eslint-disable-next-line
  }, [isWindow]);

  return windowWidth;
}

const Layanan = () => {

    const inputRef_laut = useRef(null);
    const inputRef_udara = useRef(null);
    const inputRef_darat = useRef(null);
    const [updated, setUpdated] = useState('');
    const warna_choice_aktif ='linear-gradient(180deg, #62C7FF 0%, #327CA5 100%)';
    const warna_choice_aktif_child ='#008BD9';
    const warna_choice_tidak_aktif ='white';
    const warna_choice_tidak_aktif_child ='white';
    const display_aktif ='block';
    const display__tidak_aktif ='none';


    const widthSize = useScreenWidth()

    console.log("ukuran layar live:",widthSize);
    
    console.log("updated klik:",updated);


    const mobileWidth = 500

    if(widthSize > mobileWidth){ 
        //logic for desktop

        if(updated=='darat'){

          var display_margin='400px';
          var display_height_form='920px';


        }else{

          var display_margin='320px';
          var display_height_form='920px';
        }
        



    }

    if(widthSize <= mobileWidth){ 
        //logic for mobile
        
    // jika itu adalah pengiriman darat mobile version

    if(updated=='darat'){

      var display_margin='740px';
      var display_height_form='1550px';


    }else{

      
    var display_margin='480px';
    var display_height_form='1400px';



    }



    }




    

const onClick_darat =() => {  
    
   
    setUpdated(inputRef_darat.current.value);

    console.log("lihat data click  :",  updated)


   
  }

  
const onClick_udara =() => {  

    setUpdated(inputRef_udara.current.value);

    console.log("lihat data click  :",  updated)

    
}


const onClick_laut =() => {  


    setUpdated(inputRef_laut.current.value);

    console.log("lihat data click  :",  updated)

    
}


//kondisional fungsi ketika dipilih 

if(updated=='laut'){

  var ubahwarna_utama_laut= warna_choice_aktif;
  var ubahwarna_child_laut=warna_choice_aktif_child

  var display_hidup_laut=display_aktif;

  // var display_margin='320px';
  // var display_height_form='420px';

  //console.log(ubahwarna_utama_laut);


}else{

  var display_hidup_laut=display__tidak_aktif;


}

if(updated=='darat'){

    var ubahwarna_utama_darat= warna_choice_aktif;
    var ubahwarna_child_darat=warna_choice_aktif_child

  // var display_margin='400px';
  // var display_height_form='520px';

    var display_hidup_darat=display_aktif;

}else{
  

    var display_hidup_darat=display__tidak_aktif;
   


}



if (updated=='udara'){

    var ubahwarna_utama_udara= warna_choice_aktif;
    var ubahwarna_child_udara=warna_choice_aktif_child


    
    // var display_margin='320px';
    // var display_height_form='420px';

    var display_hidup_udara=display_aktif;


}else{

    var display_hidup_udara=display__tidak_aktif;

    
}


//jika updated kosong 

if(updated==''){

  var ubahwarna_utama_laut= warna_choice_aktif;
  var ubahwarna_child_laut=warna_choice_aktif_child


  var display_hidup_laut=display_aktif;
  // var display_margin='320px';
  // var display_height_form='420px';


}



//batas kondisional

  return (

    <div className='App'>
      <div className="gradient__bg_layanan" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>LAYANAN</h1>
        <hr className='border_garis_tentangkami'></hr>
        <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'></p></div>
      </div>
     
    </div>
    </div>

 
<section style={{height:'280vh'}}>

<div className='fiturgalery'>



<div className='buttons_cards_layanan m-4' style={{marginTop:'100px'}}>


<div class="responsive">


  <div class="gallery_artikel"  style={{background:ubahwarna_utama_laut}} onClick={onClick_laut}>
  <input
        ref={inputRef_laut}
        type="hidden"
        id="message"
        name="message"
        value="laut"
    
      />
  
    <a target="_blank" >
      <img src="/image/group 95.png" alt="laut" width="600" height="400" />
    </a>
    <div class="desc">LCL LAUT</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery_artikel"  style={{background:ubahwarna_utama_udara}} onClick={onClick_udara} >
  <input
        ref={inputRef_udara}
        type="hidden"
        id="message"
        name="message"
        value="udara"
    
      />
    <a target="_blank">
      <img src="/image/fixplane-removebg-preview 2.png" alt="udara" width="600" height="400" />
    </a>
 
   
    <div class="desc">LCL Udara</div>
  </div>
</div>
<div class="responsive">
  <div class="gallery_artikel"  style={{background:ubahwarna_utama_darat}} onClick={onClick_darat}>
  <input
        ref={inputRef_darat}
        type="hidden"
        id="message"
        name="message"
        value="darat"
    
      />
    <a target="_blank">
      <img src="/image/angkut_kontainer-removebg-preview 2.png" alt="darat" width="600" height="400" />
    </a>
   
    <div class="desc">LCL Darat</div>
  </div>
</div>


</div> 

{/* jika laut  */}
<div className='gpt3_home_galery_bg' style={{display:display_hidup_laut}} >

    <div className='gpt3__galery' onClick={onClick_laut}>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Laut (Less Container Load Via Laut)
    </div>
       <div className='text-white text-center mb-2' style={{marginTop:'90px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import OCI Logistic, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
      </div>


      <div className='gpt3__whatgpt3_formhitung section__margin_fitur'  style={{ height:display_height_form}} id='whpt3'>




<div className='gpt3__whatgpt3-heading'>
<h4 className='text-black fs-5'>Hitung Biaya LCL Laut</h4>

</div>
<h6 className='gradient__text text-black'>Silakan Isi Informasi Di Bawah Ini</h6>
<div className='gpt3__whatgpt3-container m-1'>

<div className="container">
<div className='row'>

  <div className='col-md-8'>

  <div className='form-group m-1'>
  <div className='text-black text-left' for="namabarang">Nama Barang</div>

  <input type="textbox" className='form-control' placeholder='Nama Barang'/>


  </div>

  </div>

  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' for="kodemarking">Berat Barang</div>

  <input type="textbox" className='form-control' placeholder='Berat Barang'></input>

  </div>

  </div>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="panjang" className='text-black'>Panjang (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Panjang'>

    

    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div  className='text-black' >Lebar (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Lebar'>

    </input>

    </div>

    </div>
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="tinggi" className='text-black'>Tinggi (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Tinggi'>

    </input>

    </div>

    </div>


</div>

</div>

<div className='gpt3__home_hitungbiaya' style={{  top:display_margin}}><p>Hitung Biaya</p>




</div>




</div>

<hr  style={{border:'2px solid black',marginTop:'100px'}}/>


<div style={{borderStyle:'solid', borderColor:''}}>

<div className='text-black text-left' style={{marginTop:'0px'}}>

Hitung Perkiraan Biaya


</div>


<div className='text-secondary mb-2' >

Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu

</div>


<div className='text-secondary text-left' >

Total Tagihan
</div>

<div className='text-black fs-4'>
  Rp.4.500.000,-

</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tujuan Negara</label>
      <div className='text-black'>
        China
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Total Volume</label>
      <div className='text-black'>
        1 m m3
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>


<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tipe Pengiriman</label>
      <div className='text-black'>
        Laut
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Panjang</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Tinggi</label>
      <div className='text-black'>
        100 Cm
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Foto Produk</label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>




</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Kategori Barang</label>
      <div className='text-black'>
      Sepatu
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Lebar</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
      
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>

</div>  

</div>


    </div>

    


    </div>
{/* 
    jika udara  */}
    
<div className='gpt3_home_galery_bg' style={{display:display_hidup_udara}} >

    <div className='gpt3__galery'>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Udara (Less Container Load Via Udara)
    </div>
       <div className='text-white text-center mb-2' style={{marginTop:'90px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import OCI Logistic, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
      </div>


      <div className='gpt3__whatgpt3_formhitung section__margin_fitur' style={{height:display_height_form}} id='whpt3'>
  
<div className='gpt3__whatgpt3-heading'>
<h4 className='text-black fs-5'>Hitung Biaya LCL Udara</h4>

</div>
<h6 className='gradient__text text-black'>Silakan Isi Informasi Di Bawah Ini</h6>
<div className='gpt3__whatgpt3-container m-1'>

<div className="container">
<div className='row'>

  <div className='col-md-8'>

  <div className='form-group m-1'>
  <div className='text-black text-left' for="namabarang">Nama Barang</div>

  <input type="textbox" className='form-control' placeholder='Nama Barang'/>


  </div>

  </div>

  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' for="kodemarking">Berat Barang</div>

  <input type="textbox" className='form-control' placeholder='Berat Barang'></input>

  </div>

  </div>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="panjang" className='text-black'>Panjang (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Panjang'>

    

    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div  className='text-black' >Lebar (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Lebar'>

    </input>

    </div>

    </div>
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="tinggi" className='text-black'>Tinggi (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Tinggi'>

    </input>

    </div>

    </div>


</div>

</div>

<div className='gpt3__home_hitungbiaya' style={{  top:display_margin}}><p>Hitung Biaya</p>

</div>



</div>

<hr  style={{border:'2px solid black',marginTop:'100px'}}/>


<div style={{borderStyle:'solid', borderColor:''}}>

<div className='text-black text-left' style={{marginTop:'0px'}}>

Hitung Perkiraan Biaya


</div>


<div className='text-secondary mb-2' >

Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu

</div>


<div className='text-secondary text-left' >

Total Tagihan
</div>

<div className='text-black fs-4'>
  Rp.4.500.000,-

</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tujuan Negara</label>
      <div className='text-black'>
        China
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Total Volume</label>
      <div className='text-black'>
        1 m m3
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>


<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tipe Pengiriman</label>
      <div className='text-black'>
        Laut
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Panjang</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Tinggi</label>
      <div className='text-black'>
        100 Cm
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Foto Produk</label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>




</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Kategori Barang</label>
      <div className='text-black'>
      Sepatu
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Lebar</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
      
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>

</div> 


</div>



        
    </div>
    </div>
{/* 
    jika darat */}

<div className='gpt3_home_galery_bg' style={{display:display_hidup_darat}} >
    <div className='gpt3__galery'>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Darat (Full Container Load)
    </div>
       <div className='text-white text-center mb-2' style={{marginTop:'90px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import OCI Logistic, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
      </div>


      <div className='gpt3__whatgpt3_formhitung section__margin_fitur' style={{height:display_height_form}} id='whpt3'>




<div className='gpt3__whatgpt3-heading'>
<h4 className='text-black fs-5'>Hitung Biaya LCL Darat</h4>

</div>
<h6 className='gradient__text text-black'>Silakan Isi Informasi Di Bawah Ini</h6>
<div className='gpt3__whatgpt3-container m-1'>

<div className="container">
<div className='row'>

  <div className='col-md-4'>

  <div className='form-group m-1'>
  <div className='text-black text-left' for="namalengkap">Nama Lengkap</div>

  <input type="textbox" className='form-control' placeholder='Nama Lengkap'/>


  </div>

  </div>

  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' for="kodemarking">Email</div>

  <input type="textbox" className='form-control' placeholder='Email'></input>

  </div>

  </div>
  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' for="kodemarking">Whatsapp</div>

  <input type="textbox" className='form-control' placeholder='Whatsapp'></input>

  </div>

  </div>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="panjang" className='text-black'>HS Code</div>

    <input type="textbox" className='form-control' placeholder='HS Code'>

    

    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div  className='text-black' >Mata Uang</div>

    <input type="textbox" className='form-control' placeholder='Mata Uang'>

    </input>

    </div>

    </div>
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="tinggi" className='text-black'>Total Invoice</div>

    <input type="textbox" className='form-control' placeholder='Total Invoice'>

    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div for="containertype" className='text-black'>Container Type</div>

    <input type="textbox" className='form-control' placeholder='Container Type'>

    </input>

    </div>

    </div>

    <div className='col-md-4'>

<div className='form-group m-1'>
<div for="origincity" className='text-black'>Origin City</div>

<input type="textbox" className='form-control' placeholder='Origin City'>

</input>

</div>

</div>


<div className='col-md-4'>

<div className='form-group m-1'>
<div for="destinationcity" className='text-black'>Destination City</div>

<input type="textbox" className='form-control' placeholder='Destination City'>

</input>

</div>

</div>




</div>

</div>

<div className='gpt3__home_hitungbiaya' style={{  top:display_margin}}><p>Hitung Biaya</p></div>



</div>


<hr  style={{border:'2px solid black',marginTop:'100px'}}/>


<div style={{borderStyle:'solid', borderColor:''}}>

<div className='text-black text-left' style={{marginTop:'0px'}}>

Hitung Perkiraan Biaya


</div>


<div className='text-secondary mb-2' >

Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu

</div>


<div className='text-secondary text-left' >

Total Tagihan
</div>

<div className='text-black fs-4'>
  Rp.4.500.000,-

</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tujuan Negara</label>
      <div className='text-black'>
        China
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Total Volume</label>
      <div className='text-black'>
        1 m m3
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>


<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Tipe Pengiriman</label>
      <div className='text-black'>
        Laut
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Panjang</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Tinggi</label>
      <div className='text-black'>
        100 Cm
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Foto Produk</label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>




</div>

<div className='row'>

  <div className='col-md-3'>
    <div className='form-group'>
      <label className='text-secondary'>Kategori Barang</label>
      <div className='text-black'>
      Sepatu
      </div>

    </div>

  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'>Lebar</label>
      <div className='text-black'>
        100 Cm
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
      
        
      </div>

    </div>


  </div>
  <div className='col-md-3'>
  <div className='form-group'>
      <label className='text-secondary'></label>
      <div className='text-black'>
     
      </div>

    </div>


  </div>




</div>

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

export default Layanan

