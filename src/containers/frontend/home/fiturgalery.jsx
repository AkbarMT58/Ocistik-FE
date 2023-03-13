import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef,useState,useMediaQuery,useEffect  } from "react";
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


const Fitur_Galery = () => {

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
        var display_height_vh='155vh';


      }else{

        var display_margin='320px';
        var display_height_form='920px';
        var display_height_vh='155vh';
      }
      



  }

  if(widthSize <= mobileWidth){ 
      //logic for mobile
      
  // jika itu adalah pengiriman darat mobile version

  if(updated=='darat'){

    var display_margin='740px';
    var display_height_form='1550px';
    var display_height_vh='110vh';


  }else{

    
  var display_margin='480px';
  var display_height_form='1400px';
  var display_height_vh='120vh';



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

}

  return (

    <section style={{height:display_height_vh}}>

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
<div class="responsive" hidden>
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

{/* 
slide bergerak */}

{/* slide laut */}

<div className='gpt3_home_galery_bg' style={{display:display_hidup_laut}} >
    <div className='gpt3__galery'>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Laut (Less Container Load Via Laut)
    </div>
       <div className='text-white  text-center mt-lg-5' style={{marginTop:'50px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import VAR Express, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
        </div>
    </div>




    </div>

    {/* slide udara */}

<div className='gpt3_home_galery_bg' style={{display:display_hidup_udara}} >
    <div className='gpt3__galery'>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Udara (Less Container Load Via Udara)
    </div>
       <div className='text-white  text-center mt-lg-5' style={{marginTop:'50px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import VAR Express, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
        </div>
    </div>

    </div>


    {/* slide darat */}

<div className='gpt3_home_galery_bg' style={{display:display_hidup_darat}} >
    <div className='gpt3__galery'>

    <div style={{textAlign:"center", marginTop:'8px'}}>
    LCL Darat (Less Container Load Via Darat)
    </div>
       <div className='text-white  text-center mt-lg-5' style={{marginTop:'50px'}}>Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import VAR Express, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!
        
        </div>
    </div>




    </div>


  

<div className='buttons_cards' style={{marginTop:'20px'}}>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="/image/CEPAT-removebg-preview (1) 2.png" alt="Mountains" width="600" height="400" />
    </a>
    <div class="desc">Pengiriman Cepat</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="/image/CEPAT-removebg-preview (1) 3.png" alt="Mountains" width="600" height="400" />
    </a>
    <div class="desc">Easy Tracking</div>
  </div>
</div>
<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="/image/CEPAT-removebg-preview (1) 4.png" alt="Mountains" width="600" height="400" />
    </a>
    <div class="desc">Kemudahan Pembayaran</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="/image/CEPAT-removebg-preview (1) 1.png" alt="Mountains" width="600" height="400" />
    </a>
    <div class="desc">Harga Ekonomis</div>
  </div>
</div>

</div> 

</div>



</section>

      

  


  
       



    

    
   
    
  )
}

export default Fitur_Galery