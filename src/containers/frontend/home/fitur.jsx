import React from 'react'
import { useRef,useState,useMediaQuery,useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'


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


const Fitur = () => {
const inputRef_laut = useRef(null);
const inputRef_udara = useRef(null);
const inputRef_darat = useRef(null);
const [updated, setUpdated] = useState('');
const warna_choice_aktif ='dodgerblue';
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

    if(updated=='lautfullcontainer'){

      var display_margin='420px';
      var display_height_form='1450px';
      var displayheightbysetclick='1150px';


    }
    else if(updated=='udara'){

      var display_margin='290px';
      var display_height_form='1450px';
      var displayheightbysetclick='1000px';
      
      }
    
    else{

      var display_margin='350px';
      var display_height_form='1450px';
      var displayheightbysetclick='1150px';

    }
    



}

if(widthSize <= mobileWidth){ 
    //logic for mobile
    
// jika itu adalah pengiriman full container laut mobile version

if(updated=='lautfullcontainer'){

  var display_margin='820px';
  var display_height_form='2000px';
  var displayheightbysetclick='1900px';


}else if(updated=='udara'){

var display_margin='390px';
var display_height_form='1450px';
var displayheightbysetclick='1500px';

}else{

var display_margin='530px';
var display_height_form='1600px';
var displayheightbysetclick='1650px';

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

}else{

var display_hidup_laut=display__tidak_aktif;


}

if(updated=='lautfullcontainer'){

  var ubahwarna_utama_lautfullcontainer= warna_choice_aktif;
  var ubahwarna_child_lautfullcontainer=warna_choice_aktif_child
  var display_hidup_lautfullcontainer=display_aktif;

}else{


  var display_hidup_lautfullcontainer=display__tidak_aktif;
 


}



if (updated=='udara'){

  var ubahwarna_utama_udara= warna_choice_aktif;
  var ubahwarna_child_udara=warna_choice_aktif_child
  var display_hidup_udara=display_aktif;


}else{

  var display_hidup_udara=display__tidak_aktif;

  
}


//jika updated kosong 

if(updated==''){

var ubahwarna_utama_laut= warna_choice_aktif;
var ubahwarna_child_laut=warna_choice_aktif_child
var display_hidup_laut=display_aktif;

var warna_div_default='border-style:solid,border-width:2px,border-color:black,font-size:11px,color:black';

}

//batas kondisional


  return (


    <div className='gpt3_home_fitur_bg'  style={{height:displayheightbysetclick}}>

        <div className='text-white fs-2 text-center mt-lg-5'>Hitung Biaya Import</div>

    
    
    <div className='gpt3__whatgpt3_formhitunghome section__margin_fitur' style={{height:display_height_form}} id='whpt3'>

        <div className='buttons_cards'>

        <div class="card_home" style={{backgroundColor:ubahwarna_utama_laut}} onClick={onClick_laut}>

        <input
        ref={inputRef_laut}
        type="hidden"
        id="message"
        name="message"
        value="laut"
    
      />
          
          LCL BY SEA
          
          
          </div>
        <div class="card_home" style={{backgroundColor:ubahwarna_utama_lautfullcontainer }} onClick={onClick_darat}>

        <input
        ref={inputRef_darat}
        type="hidden"
        id="message"
        name="message"
        value="lautfullcontainer"
    
      />

          FCL BY SEA </div>
        <div class="card_home" style={{backgroundColor:ubahwarna_utama_udara }} onClick={onClick_udara}>

          
        <input
        ref={inputRef_udara}
        type="hidden"
        id="message"
        name="message"
        value="udara"
    
      />
      
          
          LCL BY AIR</div>
        </div>

        
    
      <div className='gpt3__whatgpt3-heading'>
        <h4 className='text-black'>Hitung Biaya Import</h4>
    
      </div>
      <h6 className='gradient__text'>Silakan Isi Informasi Di Bawah Ini</h6>
{/* 
      jika laut  */}
      <div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_laut}}>

      <div className="container">
        <div className='row'>

          <div className='col-md-8'>

          <div className='form-group m-1'>
          <label for="nomorresi">Nama Barang</label>

          <input type="textbox" className='form-control' placeholder='Nama Barang'>


          </input>

          </div>

          </div>

          <div className='col-md-4'>

          <div className='form-group m-1'>

          <label for="kodemarking">Berat Barang</label>

          <input type="textbox" className='form-control' placeholder='Berat Barang'></input>

          </div>

          </div>
          
            <div className='col-md-4'>

            <div className='form-group m-1'>
            <label for="nomorresi">Panjang (Cm)</label>

            <input type="textbox" className='form-control' placeholder='Nama Barang'>


            </input>

            </div>

            </div>

            <div className='col-md-4'>

            <div className='form-group m-1'>
            <label for="nomorresi">Lebar (Cm)</label>

            <input type="textbox" className='form-control' placeholder='Nama Barang'>

            </input>

            </div>

            </div>
            <div className='col-md-4'>

            <div className='form-group m-1'>
            <label for="nomorresi">Tinggi (Cm)</label>

            <input type="textbox" className='form-control' placeholder='Nama Barang'>


            </input>

            </div>

            </div>


        </div>

        </div>

        <div className='gpt3__home_hitungbiaya' style={{top:display_margin}} ><p>Hitung Biaya</p>
        
        </div>

            
<hr  style={{border:'2px solid black',marginTop:'100px'}}/>

<div className='box box-4' style={{borderColor:'grey', margin:'20px'}}>

<div className='m-3'>

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

</div>

<div className='row m-2'>

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


<div className='row m-2'>

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
      <label className='text-secondary'></label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>

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




</div>

<div className='row m-2'>

  
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

      {/* jika laut full */}
      <div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_lautfullcontainer}}>

<div className="container">
  <div className='row'>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <label for="nomorresi">Nama Lengkap</label>

    <input type="textbox" className='form-control' placeholder='Nama Lengkap'>


    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>

    <label for="kodemarking">Email</label>

    <input type="textbox" className='form-control' placeholder='Email'></input>

    </div>

    </div>
    
      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Whatsapp</label>

      <input type="textbox" className='form-control' placeholder='Whatsapp'>


      </input>

      </div>

      </div>

      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">HS Code</label>

      <input type="textbox" className='form-control' placeholder='HS Code'>

      </input>

      </div>

      </div>
      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Mata Uang</label>

      <input type="textbox" className='form-control' placeholder='Mata Uang'>


      </input>

      </div>

      </div>

      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Total Invoice</label>

      <input type="textbox" className='form-control' placeholder='Total Invoice'>


      </input>

      </div>

      </div>

      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Container Type</label>

      <input type="textbox" className='form-control' placeholder='Container Type'>


      </input>

      </div>

      </div>

      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Origin City</label>

      <input type="textbox" className='form-control' placeholder='Origin City'>


      </input>

      </div>

      </div>

      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Destination City</label>

      <input type="textbox" className='form-control' placeholder='Destination City'>


      </input>

      </div>

      </div>


  </div>

  </div>

  <div className='gpt3__home_hitungbiaya'  style={{top:display_margin}}><p>Hitung Biaya</p>
  
  </div>

  <hr  style={{border:'2px solid black',marginTop:'100px'}}/>


<div style={{borderColor:'grey',margin:'20px'}}>

<div className='m-3'>

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
</div>

<div className='row m-2'>

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


<div className='row m-2'>

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

<div className='row m-2'>

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
{/* 
jika udara  */}
 <div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_udara}}>

<div className="container">
  <div className='row'>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <label for="nomorresi">Nama Barang</label>

    <input type="textbox" className='form-control' placeholder='Nama Barang'>


    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>

    <label for="kodemarking">Harga Barang</label>

    <input type="textbox" className='form-control' placeholder='Berat Barang'></input>

    </div>

    </div>
    
      <div className='col-md-4'>

      <div className='form-group m-1'>
      <label for="nomorresi">Berat</label>

      <input type="textbox" className='form-control' placeholder='Nama Barang'>


      </input>

      </div>

      </div>

   
     

  </div>

  </div>

  <div className='gpt3__home_hitungbiaya'  style={{top:display_margin}}><p>Hitung Biaya</p>
  
  </div>


    
<hr  style={{border:'2px solid black',marginTop:'100px'}}/>


<div style={{ borderColor:'grey',margin:'20px'}}>

  <div className='m-3'>

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

</div>

<div className='row m-2'>

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


<div className='row m-2'>

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

<div className='row m-2'>

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

   
   
    
  )
}

export default Fitur