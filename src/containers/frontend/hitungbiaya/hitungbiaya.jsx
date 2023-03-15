import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/hitungbiaya/hitungbiaya.css'
import { useRef,useState,useMediaQuery,useEffect  } from "react";
import { Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';
import { getData_Master_Categories } from '../../../constants/api/logistik';
import { getData_Master_Jenisbarang } from '../../../constants/api/logistik';
import env from "react-dotenv";
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap'


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


const Hitungbiaya= () => {

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


const [show, setShow] = useState(false);


  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('');
  const widthSize = useScreenWidth()


  const onOptionChangeHandler = (event) => {
  console.log("User Selected Value - ", event.target.value)

    
  setUpdated(event.target.value);

    
}


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

         console.log("input kategori Laut:",dataJenisBarang[j])
 

       }

       if(dataJenisBarang[j].id ==input_kategori_air ){
 
      
        deskripsibypilih_air.push(dataJenisBarang[j].detail_barang)

       // console.log("input kategori :",dataJenisBarang[j])


      }


   }

   const deskripsi_barang_laut=deskripsibypilih
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

  setShow(false)

  
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

        setShow(true)

      
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

  setShow(false)

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

        setShow(true)
      
      
      
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

  
  
  if(updated=='Laut'){
  
    var display_select_laut='block';
    var display_margin='460px';
    var display_status='block';
  
  
  
  
  }else{
  
  
    var display_select_laut='none';
    var display_status_laut='none';
  
  
  }
  
  if(updated=='Udara'){
  
    var display_select_udara='block';
    var display_margin='460px';
    var display_height_form='0px';
    var display_margin_output='0px';


    
    var display_status='block';

  
  
  }else{
  
  
    var display_select_udara='none';
 
  
  
  }
  

}

if(widthSize <= mobileWidth){ 
    //logic for mobile
    
// jika itu adalah pengiriman full container laut mobile version




if(updated=='Laut'){

  var display_margin='400px';
  // var display_height_form='160px';
  var display_margin_btn='-260px';
  // display_margin_output='180px';




  var display_select_laut='block';
  var display_select_udara='none';

  var display_status='none';


  



}



if(updated=='Udara'){

  

  var display_margin='600px';
  var display_margin_btn='-260px';
 


  var display_select_darat='none';
  var display_select_laut='none';
  var display_select_udara='block';
  var display_status_udara='none';


}



}



if (updated==''){

  
  var display_select_laut='block';
  var display_select_udara='none';
  var display_status_darat='none';
   var display_status_udara='none';
   var display_status_laut='block';



}

function allowNumbersOnly(e) {
  var code = (e.which) ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
  }
}




const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  



    return (


        <div className='App'>
        <div className="gradient__bg_kontak" >
        <Navbar/>
        <div className='gpt3__header section__padding' id="home">
        <div className='gpt3__header-content' >
          <h1 className='gradient__text'>HITUNG BIAYA</h1>
          <hr className='border_garis_tentangkami'></hr>
          <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'></p></div>
        </div>
       
      </div>
      </div>


      <section className='flex-container'>

        <div className='container' style={{marginTop:'-200px'}}>

        <div class="card m-4 -mt-4" >
        
        <div class="card-body">
          <p class="card-text">

          <h2 style={{fontWeight:'bold'}}>HITUNG BIAYA</h2>
				<p>Silakan pilih tipe pengiriman dan isi form setelahnya</p>


          </p>

                      <div className='row m-2'>

                      <div className='form-group'>

                <label>Tipe Pengiriman</label>

                <select className='form-control' ref={inputRef} onChange={onOptionChangeHandler} >

                  <option value="">
                    --Pilih Tipe Pengiriman
                  </option>

                  <option value='Darat' hidden >
                    Darat
                  </option>

                  <option value='Laut'  >
                    Laut
                  </option>


                  <option value='Udara'  >
                    Udara
                  </option>

                </select>


                </div>
                </div>
{/* 
apabila laut  */}
                <div className='laut' style={{display:display_select_laut}}>


            <form onSubmit={handleGetHitungBiayaClick}>

              <div className='row m-2'>

            <div className='col-md-6'>

          <div className='form-group m-1'>
          <label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

          <select value={inputkategori} ref={kategori_select} type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
          <option>--Pilih Kategori Barang--</option>
          {dataJenisBarang?.map((category, index) => (
            <option key={category.id} value={category.id}>{category.kategori_barang}</option>
          ))}

          </select>

          </div>

          <div className='card mt-3 mb-2'>

          <div className="text-black fs-6 fw-bold" >Detail barang:{deskripsi_barang_laut}</div>
          
          
        </div>

          </div>

    
     


        <div className='col-md-6'>


        <div className='form-group'>

        <label>Berat Barang (gram)</label>
        
        <input value={inputberatbarang}    type="number"  pattern="[0-9]+" onKeyPress={allowNumbersOnly} name="berat" className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>


        </div>



        </div>

        <div className='col-md-12'>

        <div className='form-group m-1'>
        <label className='text-black' htmlFor="nomorresi">Volume (cm³)</label>

        <input value={inputvolume} type="number" name="volume" onKeyPress={allowNumbersOnly} className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

        </div>

        </div>

    
            <button className='hitung_biaya mt-4'  type="submit" onClick={handleShow}><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>


        

        </div>

          

              </form>

              </div>

<div className='udara' style={{display:display_select_udara}}>


<form onSubmit={handleGetHitungBiayaUdaraClick}>

  <div className='row m-2'>

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





<div className='col-md-6'>


<div className='form-group'>

<label>Berat Barang (gram)</label>

<input value={inputberatbarang}    type="number"  pattern="[0-9]+" onKeyPress={allowNumbersOnly} name="berat" className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>


</div>



</div>

<div className='col-md-12'>

<div className='form-group m-1'>
<label className='text-black' htmlFor="nomorresi">Volume (cm³)</label>

<input value={inputvolume} type="number" name="volume" onKeyPress={allowNumbersOnly} className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

</div>

</div>

<button className='hitung_biaya mt-4'  type="submit"  onClick={handleShow}><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>




</div>



  </form>

  </div>







<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hitung Perkiraan Biaya</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-3 fw-bold" >

          
       

 
        {(updated =='Laut' ? (

"Rp "+ TotalbiayaLaut.toLocaleString('ID-id')+",-"

    ) : 
    
"Rp "+TotalbiayaUdara.toLocaleString('ID-id')+",-"
    )}

         
        </Modal.Body>
        <Modal.Footer>
        Kalkulasi biaya hanya bersifat perkiraan dan dapat berubah sewaktu-waktu
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
            
        </Modal.Footer>
      </Modal>




  

              


        </div>
      </div>

      </div>




    
  
     



  








      </section>


    


      
<Footer/>


      </div>
  


    )
   
   

  

  

}

export default Hitungbiaya