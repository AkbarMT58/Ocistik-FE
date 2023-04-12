
import React from 'react'
import { useRef,useState,useMediaQuery,useEffect,props  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'
import { getData_Master_Categories } from '../../../constants/api/logistik';
import { getData_Master_Jenisbarang } from '../../../constants/api/logistik';
import { data } from "autoprefixer";
import env from "react-dotenv";
import swal from 'sweetalert';


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


const Fitur = ({data}) => {
const [dataCategories, setDataCategories] = useState(null)
const [dataJenisBarang, setDataJenisBarang] = useState(null)
const inputRef_laut = useRef(null);
const inputRef_udara = useRef(null);
const inputRef_darat = useRef(null);
const kategori_select = useRef('');
const kategori_select_air = useRef('');


//use state input request from form input 
const [inputkategori, setKategori] = useState('');
const [inputkategori_air, setKategori_Air] = useState('');
const [inputnamabarang, setNamabarang] = useState('');
const [inputberatbarang, setBeratbarang] = useState('');
const [inputpanjang, setPanjang] = useState('');
const [inputlebar, setLebar] = useState('');
const [inputtinggi, setTinggi] = useState('');
const [inputvolume, setVolume] = useState('');
const [TotalestimasibiayaLaut,setEstimasiBiayaLaut]=useState('');
const [TotalestimasibiayaUdara,setEstimasiBiayaUdara]=useState('');
const volume_total= inputvolume;
const [dataKategoriSub, setSubKategori]=useState(null);
const [deskripsi_kategori, setDeskripsiKategori]=useState(null)
const [deskripsi_kategori_Air, setDeskripsiKategori_Air]=useState(null)




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


    }
    
    
    else{

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
        
        
          const data_total_Laut = resJson.data
  
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





const TotalbiayaLaut= TotalestimasibiayaLaut
const TotalbiayaUdara= TotalestimasibiayaUdara

const [updated, setUpdated] = useState('');
const warna_choice_aktif ='linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%)';
const warna_font="white";
const warna_choice_aktif_child ='#008BD9';
const warna_choice_tidak_aktif ='white';
const warna_choice_tidak_aktif_child ='white';
const display_aktif ='block';
const display__tidak_aktif ='none';
const widthSize = useScreenWidth()



useEffect(() => {
  if(!dataCategories) {
    getDataMasterCategory()
  }

  if(!dataJenisBarang) {
    getDataMasterJenisBarang()
  }
 console.log(dataJenisBarang)

  

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

  









//console.log("data jenis barang",dataJenisBarang);

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

//fungsi set responsive
const mobileWidth = 500
var display_click_lcl_sea='';
var display_click_lcl_udara='';
var display_click_fcl_sea='';


if(widthSize > mobileWidth){ 
    //logic for desktop

    if(updated=='lautfullcontainer'){

      var display_margin='350px';
      var display_height_form='1450px';
      var displayheightbysetclick='1150px';
      var display_click_fcl_sea='';

     
    }
    else if(updated=='udara'){

      var display_margin='430px';
      var display_height_form='780px';
      var displayheightbysetclick='1000px';
      var display_click_lcl_udara='';

     
      
      }
    
    else{

      var display_margin='420px';
      var display_height_form='780px';
      var displayheightbysetclick='900px';

    
    
    }





}

if(widthSize <= mobileWidth){ 
    //logic for mobile
    
// jika itu adalah pengiriman full container laut mobile version


if(updated=='udara'){

var display_margin='500px';
var display_height_form='680px';
var displayheightbysetclick='900px';


}

else if(updated=='laut'){

  var display_margin='500px';
  var display_height_form='680px';
  var displayheightbysetclick='900px';
  
  
}else{

var display_margin='450px';
var display_height_form='1200px';
var displayheightbysetclick='1100px';


}


if(input_kategori>"0"){

  var display_margin='500px';
  var display_height_form='580px';



}

if(input_kategori=='0'){

  var display_margin='450px';
  var display_height_form='540px';



}




}


//batas fungsi responsive

const onClick_darat =() => {  
    
  setUpdated(inputRef_darat.current.value);
 
}

const onClick_udara =() => {  
  setUpdated(inputRef_udara.current.value);

}

const onClick_laut =() => {  

  setUpdated(inputRef_laut.current.value);
  
}

//kondisional fungsi ketika dipilih 

if(updated=='laut'){
var ubahwarna_utama_laut= warna_choice_aktif;


var display_hidup_laut=display_aktif;
//var ubahwarna_font=warna_font;

var ubahwarna_font_laut="white";




}else{

var display_hidup_laut=display__tidak_aktif;


}

if(updated=='lautfullcontainer'){

  var ubahwarna_utama_lautfullcontainer= warna_choice_aktif;
  var ubahwarna_child_lautfullcontainer=warna_choice_aktif_child
  var display_hidup_lautfullcontainer=display_aktif;
  //var display_click_fcl_sea='none';

}else{

  var display_hidup_lautfullcontainer=display__tidak_aktif;
 
}



if (updated=='udara'){

  var ubahwarna_utama_udara= warna_choice_aktif;
  var ubahwarna_child_udara=warna_choice_aktif_child
  var display_hidup_udara=display_aktif;
 // var display_click_lcl_udara='none';
 var ubahwarna_font=warna_font;
 var ubahwarna_font_udara=warna_font;


}else{
  var display_hidup_udara=display__tidak_aktif;
}


//jika updated kosong 

if(updated==''){

var ubahwarna_utama_laut= warna_choice_aktif;
var ubahwarna_child_laut=warna_choice_aktif_child
var display_hidup_laut=display_aktif;
var ubahwarna_font="#0F8ED6";
var ubahwarna_font_laut="white";

// var display_click_lcl_udara='none';
// var display_click_fcl_sea='none';
// var display_click_lcl_sea='none';

var warna_div_default='border-style:solid,border-width:2px,border-color:black,font-size:11px,color:black';

}
//batas kondisional


function allowNumbersOnly(e) {
  var code = (e.which) ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
  }
}

    

  return (

<div className='gpt3_home_fitur_bg'  style={{height:displayheightbysetclick}}>

<div className='text-white fs-2 text-center mt-lg-5 mb-5 fw-bold'>Hitung Biaya Import</div>

<div className='gpt3__whatgpt3_formhitunghome section__margin_fitur' style={{height:display_height_form}} id='whpt3'>

<div className='buttons_cards_2'>

<div class="card_home" style={{background:ubahwarna_utama_laut,color:ubahwarna_font_laut}} onClick={onClick_laut}>

<input
ref={inputRef_laut}
type="hidden"
id="message"
name="message"
value="laut"

/>
  
  VIA LAUT
  
  
  </div>
<div class="card_home" style={{ubahwarna_utama_lautfullcontainer }} onClick={onClick_darat} hidden>

<input
ref={inputRef_darat}
type="hidden"
id="message"
name="message"
value="lautfullcontainer"

/>

  VIA UDARA </div>
<div className="card_home" style={{background:ubahwarna_utama_udara,color:ubahwarna_font_udara }} onClick={onClick_udara}>

  
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

<form onSubmit={handleGetHitungBiayaClick}>
<div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_laut}}>

<div className="container">


<div className='row'>

<div className='col-md-6'>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Kategori Barang</label>
<select value={inputkategori} ref={kategori_select}   type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
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
  <label htmlhtmlFor="namabarang">Jenis Barang</label>

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

  <label htmlhtmlFor="kodemarking">Berat Barang(Kg)</label>

  <input value={inputberatbarang}    type="number"  pattern="[0-9]+"  name="berat" onKeyPress={allowNumbersOnly}   className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>

  </div>

  </div>

  <div className='col-md-12'>

  <div className='form-group m-1'>
  <label htmlFor="nomorresi">Volume (CBM)</label>

  <input value={inputvolume} type="number" name="volume" onKeyPress={allowNumbersOnly} className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

  </div>


  </div>

  <div hidden>
  
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <label htmlhtmlFor="nomorresi">Panjang (Cm)</label>

    <input value={inputpanjang} type="textbox" name="panjang" className='form-control' placeholder='Panjang' onChange={(e) => setPanjang(e.target.value)}>


    </input>

    </div>

    </div>

    <div className='col-md-4'>

    <div className='form-group m-1'>
    <label htmlhtmlFor="nomorresi">Lebar (Cm)</label>

    <input value={inputlebar} type="textbox" name="lebar" className='form-control' placeholder='Lebar' onChange={(e) => setLebar(e.target.value)}>

    </input>

    </div>

    </div>
    <div className='col-md-4'>

    <div className='form-group m-1'>
    <label htmlhtmlFor="nomorresi">Tinggi (Cm)</label>

    <input value={inputtinggi}  type="textbox" name="tinggi" className='form-control' placeholder='Tinggi' onChange={(e) => setTinggi(e.target.value)}>


    </input>

    </div>

    </div>

    </div>

</div>

</div>

<button  className='gpt3__home_hitungbiaya' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>


<div className="hasil_biaya_lcl_sea"  style={{display:display_click_lcl_sea}}>

<hr  style={{border:'2px solid black',marginTop:'100px'}}/>

<div className='box box-4' style={{borderColor:'grey', margin:'10px'}}>

<div className='m-3'>

<div className='text-black text-left fs-3' style={{marginTop:'0px'}}>

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

<div className='row m-2'>

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
1 m3
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


</div>

</form>

{/* jika laut full */}
<div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_lautfullcontainer}}>

<div className="container">
<div className='row'>

  <div hidden>

<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Nama Lengkap</label>

<input type="textbox" className='form-control' placeholder='Nama Lengkap'>


</input>

</div>

</div>

<div className='col-md-4'>

<div className='form-group m-1'>

<label htmlhtmlFor="kodemarking">Email</label>

<input type="textbox" className='form-control' placeholder='Email'></input>

</div>

</div>

<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Whatsapp</label>

<input type="textbox" className='form-control' placeholder='Whatsapp'>


</input>

</div>

</div>

</div>

<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">HS Code</label>

<input type="textbox" className='form-control' placeholder='HS Code'>

</input>

</div>

</div>
<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Mata Uang</label>

<input type="textbox" className='form-control' placeholder='Mata Uang'>


</input>

</div>

</div>

<div className='col-md-4'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Total Invoice</label>

<input type="textbox" className='form-control' placeholder='Total Invoice'>


</input>

</div>

</div>

<div className='col-md-3'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Kategori Barang</label>

<select  type="textbox" className='form-control' placeholder='Kategori Barang'>

<option>--Pilih Kategori Barang--</option>
<option></option>
<option></option>


</select>

</div>

</div>

<div className='col-md-3'>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Container Type</label>

<input type="textbox" className='form-control' placeholder='Container Type'>


</input>

</div>

</div>

<div className='col-md-3'>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Origin City</label>

<input type="textbox" className='form-control' placeholder='Origin City'>


</input>

</div>

</div>

<div className='col-md-3'>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Destination City</label>

<input type="textbox" className='form-control' placeholder='Destination City'>


</input>

</div>

</div>


</div>

</div>

<button  className='gpt3__home_hitungbiaya' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>




<div className="hasil_biaya_lcl_sea"  style={{display:display_click_fcl_sea}}>

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
1 m3
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

<div className='row m-2'>

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
{/* 
jika udara  */}
<div className='gpt3__whatgpt3-container m-1' style={{display:display_hidup_udara}}>

<div className="container">

<form onSubmit={handleGetHitungBiayaUdaraClick}>
<div className='row'>

<div className='col-md-6'>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Kategori Barang</label>

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

<div className='col-md-3' hidden>

<div className='form-group m-1'>
<label htmlFor="nomorresi">Jenis Barang</label>

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
<label htmlFor="nomorresi">Berat Barang (Kg)</label>



<input value={inputberatbarang}    type="number" pattern="[0-9]+" onKeyPress={allowNumbersOnly}    name="berat" className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>



</div>

</div>

<div className='col-md-12'>

<div className='form-group m-1'>
<label htmlhtmlFor="nomorresi">Volume (CBM)</label>

<input value={inputvolume} type="number" name="volume" onKeyPress={allowNumbersOnly}  className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

</div>


</div>





</div>


<button  className='gpt3__home_hitungbiaya' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>



</form>

</div>



<div className="hasil_biaya_lcl_udara"  style={{display:display_click_lcl_udara}}>

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
Rp.{TotalbiayaUdara.toLocaleString('ID-id')},-

</div>

</div>

<div className='row m-2'>

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
1 m3
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

<div className='row m-2'>

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



 
     
  )

    }


export default Fitur
