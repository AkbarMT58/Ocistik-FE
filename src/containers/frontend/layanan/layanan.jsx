import React from 'react'
import { useRef,useState,useMediaQuery,useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/layanan/layanan.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';
import { getData_Master_Categories } from '../../../constants/api/logistik';
import { getData_Master_Jenisbarang } from '../../../constants/api/logistik';
import env from "react-dotenv";
import swal from 'sweetalert';


//fungsi kalkulasi

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

const [dataCategories, setDataCategories] = useState(null)
const [dataJenisBarang, setDataJenisBarang] = useState(null)

  //use state input request from form input 
  const [inputkategori, setKategori] = useState('');
  const [inputnamabarang, setNamabarang] = useState('');
  const [inputberatbarang, setBeratbarang] = useState('');
  const [inputpanjang, setPanjang] = useState('');
  const [inputlebar, setLebar] = useState('');
  const [inputtinggi, setTinggi] = useState('');
  const [inputvolume, setVolume] = useState('');
  const kategori_select = useRef('');
  const kategori_select_air = useRef('');
  const [deskripsi_kategori, setDeskripsiKategori]=useState(null)
  const [deskripsi_kategori_Air, setDeskripsiKategori_Air]=useState(null)

  
const [TotalestimasibiayaLaut,setEstimasiBiayaLaut]=useState('');
const [TotalestimasibiayaUdara,setEstimasiBiayaUdara]=useState('');
const volume_total= inputvolume;



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

    useEffect(() => {
      if(!dataCategories) {
        getDataMasterCategory()
      }
    
      if(!dataJenisBarang) {
        getDataMasterJenisBarang()
      }
    
    }, [dataCategories,dataJenisBarang])


    
const input_kategori = kategori_select.current.value
const input_kategori_air=kategori_select_air.current.value

     
//console.log("data jenis barang:",dataJenisBarang)

  const deskripsibypilih=[]
  const deskripsibypilih_air=[]

  for(let j=0;j< dataJenisBarang?.length ; j++){


    //console.log("input kategori :",input_kategori)

    //console.log("data kategori all:",dataJenisBarang)
  
     
       if(dataJenisBarang[j].id ==input_kategori ){
 
       
 
         deskripsibypilih.push(dataJenisBarang[j].detail_barang)

        // console.log("input kategori :",dataJenisBarang[j])
 

       }

       if(dataJenisBarang[j].id ==input_kategori_air ){
 
      
        deskripsibypilih_air.push(dataJenisBarang[j].detail_barang)

       // console.log("input kategori :",dataJenisBarang[j])


      }


   }

   const deskripsi_barang=deskripsibypilih
   const deskripsi_barang_air=deskripsibypilih_air


  
    
    const getDataMasterCategory = async () => {
      const res = await getData_Master_Categories();
      if (res.status === 200) {
        setDataCategories(res.data)
      }
    }
    
    const getDataMasterJenisBarang = async () => {
      const res = await getData_Master_Jenisbarang();
      if (res.status === 200) {
        setDataJenisBarang(res.data)
      }
    }

//fungsi kalkulasi biaya 

const handleGetHitungBiayaClick = async (e) => {
  e.preventDefault();
  var display_click_lcl_sea='block';
  const url = `${env.API_GATEWAY_CALCULATION}/ocistik/create-lcl-by-sea`;

      
  if(inputberatbarang=='' && inputkategori =='' && volume_total==''){

    swal({
      title: "Form Input Tidak Diisi atau Tidak Lengkap?",
      text: "Pastikan untuk mengisi form dengan lengkap",
      icon: "warning",
      dangerMode: true,
    })
    ;


  }else if(inputberatbarang=='' || inputkategori =='' || volume_total==''){

    swal({
      title: "Form Input Tidak Diisi atau Tidak Lengkap?",
      text: "Pastikan untuk mengisi form dengan lengkap",
      icon: "warning",
      dangerMode: true,
    })
    ;


  }else{
 
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },

      body: JSON.stringify({
        "volume": parseInt(volume_total),
        "weight": parseInt(inputberatbarang),
        "category": (inputkategori),
        "is_airplane":false
       
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
    
      console.log(resJson)
     // console.log(JSON.stringify(resJson.data.Laut)

      const data_total_Laut = resJson.data

      //console.log(display_click_lcl_sea);


      //laut 
        setEstimasiBiayaLaut(data_total_Laut);

      
    } else {
      console.log("error")
    }
  } catch (err) {
    console.log(err);
  }

}
};


const handleGetHitungBiayaUdaraClick = async (e) => {
  e.preventDefault();


  var display_click_lcl_udara='block';

  const url = `${env.API_GATEWAY_CALCULATION}/ocistik/create-lcl-by-sea`;

  if(inputberatbarang=='' && inputkategori =='' && volume_total==''){

    swal({
      title: "Form Input Tidak Diisi atau Tidak Lengkap?",
      text: "Pastikan untuk mengisi form dengan lengkap",
      icon: "warning",
      dangerMode: true,
    })
    ;


  }else if(inputberatbarang=='' || inputkategori =='' || volume_total==''){

    swal({
      title: "Form Input Tidak Diisi atau Tidak Lengkap?",
      text: "Pastikan untuk mengisi form dengan lengkap",
      icon: "warning",
      dangerMode: true,
    })
    ;


  }else{
 
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },

      body: JSON.stringify({
        "volume": parseInt(volume_total),
        "weight": parseInt(inputberatbarang),
        "category": (inputkategori),
        "is_airplane":true
       
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
    
      console.log(resJson)

  
      const data_total_Udara = resJson.data
      
      

        setEstimasiBiayaUdara(data_total_Udara);
      
      
      
    } else {
      console.log("error")
    }
  } catch (err) {
    console.log(err);
  }
}
};






  const TotalbiayaLaut= (TotalestimasibiayaLaut)
  
  const TotalbiayaUdara= (TotalestimasibiayaUdara)


    const mobileWidth = 500

    if(widthSize > mobileWidth){ 
        //logic for desktop

        if(updated=='darat'){

          var display_margin='370px';
          var display_height_form='960px';


        }

        
        if(updated=='udara'){

          // var display_margin='430px';
          // var display_height_form='960px';

          var display_margin='360px';
          var display_height_form='750px';
          var sectionmobile='220vh'


        }
        
        else{

          var display_margin='340px';
          var display_height_form='750px';
          var sectionmobile='220vh'
        }

        //jika select kategori

        if(input_kategori>"0"){

          var display_margin='440px';
          var display_height_form='750px';
          var sectionmobile='180vh'


        }


        



    }

    if(widthSize <= mobileWidth){ 
        //logic for mobile
        
    // jika itu adalah pengiriman darat mobile version

    if(updated=='laut'){

      var display_margin='460px';
      var display_height_form='730px';
      var sectionmobile='150vh';
  


    }else{

      
    var display_margin='380px';
    var display_height_form='700px';
    var sectionmobile='150vh';



    }


    if(input_kategori>"0"){

      var display_margin='480px';
      var display_height_form='580px';
    
    
    
    }

    if(input_kategori=='6402d86f190408cf0424f502'){

      var display_margin='400px';
      var display_height_form='580px';
    




    }
    
    if(input_kategori=='0'){
    
      var display_margin='390px';
      var display_height_form='440px';
    
    
    
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
  var ubahwarna_utama_udara='white';
  var ubahwarna_child_laut=warna_choice_aktif_child
  var display_hidup_laut=display_aktif;
  var ubahwarna_font_laut="white";
  var ubahwarna_font_udara="#0F8ED6";



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
    var ubahwarna_utama_laut= 'white';
    var ubahwarna_child_udara=warna_choice_aktif_child
    var display_hidup_udara=display_aktif;
    var ubahwarna_font_udara="white";
    var ubahwarna_font_laut="#0F8ED6";


}else{

    var display_hidup_udara=display__tidak_aktif;

    
}


//jika updated kosong 

if(updated==''){

  var ubahwarna_utama_laut= warna_choice_aktif;
  var ubahwarna_utama_udara='white';
  var ubahwarna_child_laut=warna_choice_aktif_child
  var display_hidup_laut=display_aktif;
  var ubahwarna_font_udara="#0F8ED6";


}



//batas kondisional

function allowNumbersOnly(e) {
  var code = (e.which) ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
  }
}


  return (

    <div className='App'>
      <div className="gradient__bg_layanan" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text' style={{marginTop:'-100px'}}>LAYANAN</h1>
       
     </div>

      {/* tombol pilihan  */}



      
     
    </div>

    <div  className='setgambartombol'>
<div className='buttons_cards_layanan m-4' >

<div class="responsive">
  <div class="gallery_layanan"  style={{background:ubahwarna_utama_laut}} onClick={onClick_laut}>
  <input
        ref={inputRef_laut}
        type="hidden"
        id="message"
        name="message"
        value="laut"
    
      />
  
    <a target="_blank" >
      <img src="/image/kapal.png" alt="laut" width="175" height="84" style={{marginTop:'40px'}} />
    </a>
    <div class="desc" style={{color:ubahwarna_font_laut,fontWeight:"bold"}}>PENGIRIMAN LAUT</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery_layanan"  style={{background:ubahwarna_utama_udara}} onClick={onClick_udara} >
  <input
        ref={inputRef_udara}
        type="hidden"
        id="message"
        name="message"
        value="udara"
    
      />
    <a target="_blank">
      <img src="/image/pesawat.png" alt="udara"  width="175" height="84"  />
    </a>
 
   
    <div class="desc" style={{color:ubahwarna_font_udara,fontWeight:"bold"}}>PENGIRIMAN UDARA</div>
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

</div>

    </div>

 
<section className='flex-container' >

<div className='fiturgalery_layanan'>



{/* jika laut  */}
<div className='gpt3_home_galery_bg' style={{display:display_hidup_laut}} >

    <div className='gpt3__galery' onClick={onClick_laut}>

    <div className='fs-3 fw-bold' style={{textAlign:"center", marginTop:'8px'}}>
    PENGIRIMAN LAUT
    </div>
       <div className='text-white text-center mb-4' style={{marginTop:'70px'}}>Pengiriman barang melalui jalur laut yang dilakukan dengan pengiriman yang lebih kecil di dalam satu kontainer bersama pengiriman lainnya. Keuntungan dari pengiriman laut adalah biaya pengiriman barang akan jauh lebih murah dengan minimum pengiriman 0,1 cbm.
        
      </div>


      <div className='gpt3__whatgpt3_formhitung section__margin_fitur'  style={{ height:display_height_form}} id='whpt3'>




<div className='gpt3__whatgpt3-heading'>
<h4 className='text-black fs-5'>Hitung Biaya LCL Laut</h4>

</div>
<h6 className='gradient__text text-black'>Silakan Isi Informasi Di Bawah Ini</h6>
<div className='gpt3__whatgpt3-container m-1'>

<div className="container">
<form onSubmit={handleGetHitungBiayaClick}>

<div className='row'>

<div className='col-md-6'>

<div className='form-group m-1'>
<label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

<select value={inputkategori} ref={kategori_select} type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
<option value="0">--Pilih Kategori Barang--</option>
{dataJenisBarang?.map((category, index) => (
  <option key={category.id} value={category.id}>{category.kategori_barang}</option>
))}

</select>

</div>


<div className='card mt-3 mb-2'>

  <div className="text-black fs-6 fw-bold" >Detail barang:{deskripsi_barang}</div>
  
  
</div>


</div>

  <div className='col-md-4' hidden>

  <div className='form-group m-1'>
  <div className='text-black text-left' htmlFor="jenisbarang">Jenis Barang</div>

  <select value={inputnamabarang}   type="textbox" name="jenisbarang"  className='form-control' placeholder='Jenis Barang' onChange={(e) => setNamabarang(e.target.value)}>
   <option>--Pilih Jenis Barang--</option>
   {dataJenisBarang?.map((jenisbarang, index) => (
  <option key={jenisbarang.id} value={jenisbarang.id}>{jenisbarang.display_name}</option>
))}

  </select>



  </div>

  </div>

  <div className='col-md-6'>

  <div className='form-group m-1'>

  <div className='text-black text-left' htmlFor="beratberang">Berat Barang(Kg)</div>

  <input value={inputberatbarang}    type="number" name="berat" onKeyPress={allowNumbersOnly}  className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>


  </div>

  </div>

  <div className='col-md-12'>

<div className='form-group m-1'>
<label className='text-black' htmlFor="nomorresi">Volume (CBM)</label>

<input value={inputvolume} type="number" onKeyPress={allowNumbersOnly}  name="volume" className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

</div>


</div>

  <div hidden>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div htmlFor="panjang" className='text-black'>Panjang (Cm)</div>

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
    <div htmlFor="tinggi" className='text-black'>Tinggi (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Tinggi'>

    </input>

    </div>

    </div>

    </div>


</div>



<button  className='gpt3__home_hitungbiaya' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>


</form>
</div>





</div>
{/* daerah lcl sea  */}
<hr  style={{border:'2px solid black',marginTop:'120px'}}/>


<div >

<div className='text-black text-left flex-container' >

Hitung Perkiraan Biaya


</div>


<div className='text-secondary mb-2' >

Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu

</div>


<div className='text-secondary text-left' >

Total Tagihan
</div>

<div className='text-black fs-4'>
Rp.{TotalbiayaLaut.toLocaleString('ID-id')},-

</div>


</div> 


</div>


    </div>

    


    </div>
{/* jika udara  */}
    
<div className='gpt3_home_galery_bg' style={{display:display_hidup_udara}} >

    <div className='gpt3__galery'>

    <div className='fs-3 fw-bold' style={{textAlign:"center", marginTop:'8px'}}>
    PENGIRIMAN UDARA
    </div>
       <div className='text-white text-center mb-2' style={{marginTop:'70px'}}>Pengiriman barang melalui jalur udara atau pesawat dengan minimal pengiriman 1 kg. Kelebihan dari pengiriman ini adalah estimasi waktu pengiriman barang lebih cepat dan sangat cocok bagi anda yang membutuhkan kecepatan durasi pengiriman.
        
      </div>


      <div className='gpt3__whatgpt3_formhitung section__margin_fitur' style={{height:display_height_form}} id='whpt3'>
  
<div className='gpt3__whatgpt3-heading'>
<h4 className='text-black fs-5'>Hitung Biaya LCL Udara</h4>

</div>
<h6 className='gradient__text text-black'>Silakan Isi Informasi Di Bawah Ini</h6>
<div className='gpt3__whatgpt3-container m-1'>

<div className="container">
<form onSubmit={handleGetHitungBiayaUdaraClick}>
<div className='row'>

<div className='col-md-6'>

<div className='form-group m-1'>
<label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

<select value={inputkategori} ref={kategori_select_air} type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
<option value="0">--Pilih Kategori Barang--</option>
{dataJenisBarang?.map((category, index) => (
  <option key={category.id} value={category.id}>{category.kategori_barang}</option>
))}

</select>

</div>

<div className='card mt-3 mb-2'>

  <div className="text-black fs-6 fw-bold" >Detail barang:{deskripsi_barang_air}</div>
  
  
</div>


</div>

  <div className='col-md-4' hidden>

  <div className='form-group m-1'>
  <div className='text-black text-left' htmlFor="namabarang">Jenis Barang</div>
  <select value={inputnamabarang}   type="textbox" name="jenisbarang"  className='form-control' placeholder='Jenis Barang' onChange={(e) => setNamabarang(e.target.value)}>
   <option>--Pilih Jenis Barang--</option>
   {dataJenisBarang?.map((jenisbarang, index) => (
  <option key={jenisbarang.id} value={jenisbarang.id}>{jenisbarang.display_name}</option>
))}

  </select>



  </div>

  </div>

  <div className='col-md-6'>

  <div className='form-group m-1'>

  <div className='text-black text-left' htmlFor="kodemarking">Berat Barang(Kg)</div>


  <input value={inputberatbarang}   type="number" onKeyPress={allowNumbersOnly} name="berat"  className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>


  </div>

  </div>

  <div className='col-md-12'>

  <div className='form-group m-1'>
  <label className='text-black' htmlFor="nomorresi">Volume (CBM)</label>

  <input value={inputvolume} type="number" onKeyPress={allowNumbersOnly} name="volume" className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

  </div>


  </div>

  <div hidden>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div htmlFor="panjang" className='text-black'>Panjang (Cm)</div>

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
    <div htmlFor="tinggi" className='text-black'>Tinggi (Cm)</div>

    <input type="textbox" className='form-control' placeholder='Tinggi'>

    </input>

    </div>

    </div>

    </div>


</div>

<button  className='gpt3__home_hitungbiaya' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>



</form>





</div>



</div>

<hr  style={{border:'2px solid black',marginTop:'120px'}}/>


<div >

<div className='text-black text-left flex-container' >

Hitung Perkiraan Biaya


</div>


<div className='text-secondary mb-2' >

Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu

</div>


<div className='text-secondary text-left' >

Total Tagihan
</div>

<div className='text-black fs-4'>
Rp.{TotalbiayaUdara.toLocaleString('ID-id')},-


</div>

<div className='row'>

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Tujuan Negara</label>
      <div className='text-black'>
        China
      </div>

    </div>

  </div>
  <div className='col-md-3' hidden>
  <div className='form-group'>
      <label className='text-secondary'>Total Volume</label>
      <div className='text-black'>
        1 cm3
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

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Tipe Pengiriman</label>
      <div className='text-black'>
        Laut
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
  <div className='col-md-3' hidden>
  <div className='form-group'>
      <label className='text-secondary'></label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>




</div>

<div className='row'>

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Kategori Barang</label>
      <div className='text-black'>
      Sepatu
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

  <div hidden>

  <div className='col-md-4'>

  <div className='form-group m-1'>
  <div className='text-black text-left' htmlFor="namalengkap">Nama Lengkap</div>

  <input type="textbox" className='form-control' placeholder='Nama Lengkap'/>


  </div>

  </div>

  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' htmlFor="kodemarking">Email</div>

  <input type="textbox" className='form-control' placeholder='Email'></input>

  </div>

  </div>
  <div className='col-md-4'>

  <div className='form-group m-1'>

  <div className='text-black text-left' htmlFor="kodemarking">Whatsapp</div>

  <input type="textbox" className='form-control' placeholder='Whatsapp'></input>

  </div>

  </div>

  </div>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div htmlFor="panjang" className='text-black'>HS Code</div>

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
    <div htmlFor="tinggi" className='text-black'>Total Invoice</div>

    <input type="textbox" className='form-control' placeholder='Total Invoice'>

    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <div htmlFor="containertype" className='text-black'>Container Type</div>

    <input type="textbox" className='form-control' placeholder='Container Type'>

    </input>

    </div>

    </div>

    <div className='col-md-4'>

<div className='form-group m-1'>
<div htmlFor="origincity" className='text-black'>Origin City</div>

<input type="textbox" className='form-control' placeholder='Origin City'>

</input>

</div>

</div>


<div className='col-md-4'>

<div className='form-group m-1'>
<div htmlFor="destinationcity" className='text-black'>Destination City</div>

<input type="textbox" className='form-control' placeholder='Destination City'>

</input>

</div>

</div>

<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

<select type="textbox" className='form-control' placeholder='Kategori Barang'>

  <option>--Pilih Kategori Barang--</option>



</select>

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

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Tujuan Negara</label>
      <div className='text-black'>
        China
      </div>

    </div>

  </div>
  <div className='col-md-3' hidden>
  <div className='form-group'>
      <label className='text-secondary'>Total Volume</label>
      <div className='text-black'>
        1 cm3
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

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Tipe Pengiriman</label>
      <div className='text-black'>
        Laut
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
  <div className='col-md-3'hidden>
  <div className='form-group'>
      <label className='text-secondary'></label>
   

        <img src="/image/tools.png" className='responsive-img' />
     

    </div>


  </div>




</div>

<div className='row'>

  <div className='col-md-3' hidden>
    <div className='form-group'>
      <label className='text-secondary'>Kategori Barang</label>
      <div className='text-black'>
      Sepatu
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

