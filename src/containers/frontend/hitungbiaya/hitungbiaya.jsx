import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/hitungbiaya/hitungbiaya.css'
import { useRef,useState,useMediaQuery,useEffect  } from "react";
import { Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';
import { getData_Master_Categories } from '../../../constants/api/logistik';
import { getData_Master_Jenisbarang } from '../../../constants/api/logistik';


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

  
const [TotalestimasibiayaLaut,setEstimasiBiayaLaut]=useState('');
const [TotalestimasibiayaUdara,setEstimasiBiayaUdara]=useState('');
const volume_total= inputvolume;


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
const handleGetHitungBiayaLautClick = async (e) => {
  e.preventDefault();
  // alert(`The category id  you are selected is: ${inputkategori}`);
 
  var display_click_lcl_sea='block';
 
  try {
    let res = await fetch("http://192.168.15.16:8080/oci/calculation", {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },

      body: JSON.stringify({
        "volume": parseInt(volume_total),
        "berat": parseInt(inputberatbarang),
        "kategori": parseInt(inputkategori),
       
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
    
      console.log(resJson)

      console.log(JSON.stringify(resJson.data.Laut))
      const data_total_Laut = resJson.data.Laut
      console.log(display_click_lcl_sea);

 
      
      

      //laut 
        setEstimasiBiayaLaut(data_total_Laut);

      
    } else {
      console.log("error")
    }
  } catch (err) {
    console.log(err);
  }
};


const handleGetHitungBiayaUdaraClick = async (e) => {
  e.preventDefault();


  var display_click_lcl_udara='block';
 
  try {
    let res = await fetch("http://192.168.15.16:8080/oci/calculation", {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',

      },

      body: JSON.stringify({
        "volume": parseInt(volume_total),
        "berat": parseInt(inputberatbarang),
        "kategori": parseInt(inputkategori),
       
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
    
      console.log(resJson)

  
      const data_total_Udara = resJson.data.Udara
      
      

        setEstimasiBiayaUdara(data_total_Udara);
      
      
      
    } else {
      console.log("error")
    }
  } catch (err) {
    console.log(err);
  }
};


const TotalbiayaLaut= (TotalestimasibiayaLaut)

const TotalbiayaUdara= (TotalestimasibiayaUdara)




const mobileWidth = 500


if(widthSize > mobileWidth){ 
  //logic for desktop
  if(updated=='Darat'){


    var display_margin='450px';
    var display_height_form='560px';
    var display_status_darat='block';
    var display_select_darat='block';
    var display_status_udara='none';
    
    

  
  }else{
  
  
    var display_select_darat='none';

    
  
  
  }
  
  
  if(updated=='Laut'){
  
    var display_select_laut='block';
  
    var display_margin='460px';

    var display_height_form='580px';

    var display_margin_output='260px';

    var display_status_laut='none';

    var display_status_udara='none';
  
  
  
  }else{
  
  
    var display_select_laut='none';
    var display_status_laut='none';
  
  
  }
  
  if(updated=='Udara'){
  
    var display_select_udara='block';
    var display_margin='460px';
    var display_height_form='600px';
    var display_margin_output='0px';


    
    var display_status_udara='none';

  
  
  }else{
  
  
    var display_select_udara='none';
 
  
  
  }
  

}

if(widthSize <= mobileWidth){ 
    //logic for mobile
    
// jika itu adalah pengiriman full container laut mobile version

if(updated=='Darat'){

  var display_select_darat='block';
  var display_margin='660px';
  var display_height_form='750px';

  var display_select_darat='block';
  var display_select_laut='none';
  var display_select_udara='none';

  var display_status_laut='none';
  var display_status_udara='none';

}


if(updated=='Laut'){


  var display_margin='600px';
  var display_height_form='160px';
  var display_margin_btn='-260px';
  display_margin_output='180px';



  var display_select_darat='none';
  var display_select_laut='block';
  var display_select_udara='none';

  
  var display_status_darat='none';
  var display_status_udara='none';


  



}



if(updated=='Udara'){

  
  // var display_margin='160px';
  // var display_height_form='580px';
  // var display_margin_btn='-360px';

  var display_margin='600px';
  var display_height_form='160px';
  var display_margin_btn='-260px';
  display_margin_output='180px';


  var display_select_darat='none';
  var display_select_laut='none';
  var display_select_udara='block';
  var display_status_udara='none';


}



}



if (updated==''){

  //var display_select_darat='block';
  var display_select_laut='none';
  var display_select_udara='none';
  var display_status_darat='none';
   var display_status_udara='none';



}


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

      <section style={{height:'150vh'}}>
      <div class="box_hitungbiaya box_hitungbiaya-4" style={{height:display_height_form}} >
			<div class="box_hitungbiaya-content" style={{marginLeft:'-40px'}}>
        <h2 style={{fontWeight:'bold'}}>HITUNG BIAYA</h2>
				<p>Silakan pilih tipe pengiriman dan isi form setelahnya</p>
			</div>

      <div className='row m-2'>

      <div className='form-group'>

<label>Tipe Pengiriman</label>

<select className='form-control' ref={inputRef} onChange={onOptionChangeHandler} >

  <option value="">
    --Pilih Tipe Pengiriman
  </option>

  <option value='Darat' >
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

        
{/* jika darat */}
<div className='darat' style={{display:display_select_darat}}>
  
  <div className='row m-2'>
      

          <div className='col-md-4'>


              <div className='form-group'>

                  <label className='text-black'>HS Code</label>
                  <input type='textbox' className='form-control'>

                  
                  </input>


                  </div>

                          


              </div>

              <div className='col-md-4'>


              <div className='form-group'>

              <label className='text-black'>Mata Uang</label>
              <input type='textbox' className='form-control'>


              </input>


              </div>



              </div>

              <div className='col-md-4'>


                <div className='form-group'>

                <label className='text-black'>Total Invoice</label>
                <input type='textbox' className='form-control'>


                </input>


                </div>



                </div>


       

                <div className='col-md-4'>


              <div className='form-group'>

                  <label className='text-black'>Container Type</label>
                  <input type='textbox' className='form-control'>

                  
                  </input>


                  </div>

                          


              </div>

              <div className='col-md-4'>


              <div className='form-group'>

              <label className='text-black'>Origin City</label>
              <input type='textbox' className='form-control'>


              </input>


              </div>



              </div>

              <div className='col-md-4'>


                <div className='form-group'>

                <label className='text-black'>Destination City</label>
                <input type='textbox' className='form-control'>


                </input>


                </div>



                </div>

                </div>

                <button  className='hitung' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>

            

                </div>


                       
{/* jika laut */}
<div className='laut' style={{display:display_select_laut}}>

<form onSubmit={handleGetHitungBiayaLautClick}>

  <div className='row m-2'>

            <div className='col-md-4'>

          <div className='form-group m-1'>
          <label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

          <select value={inputkategori} type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
          <option>--Pilih Kategori Barang--</option>
          {dataCategories?.map((category, index) => (
            <option key={category.id} value={category.id}>{category.display_name}</option>
          ))}

          </select>

          </div>

          </div>

    
        <div className='col-md-4'>
        <div className='form-group'>

            <label>Jenis Barang</label>
            <select value={inputnamabarang}   type="textbox" name="jenisbarang"  className='form-control' placeholder='Jenis Barang' onChange={(e) => setNamabarang(e.target.value)}>
            <option>--Pilih Jenis Barang--</option>
            {dataJenisBarang?.map((jenisbarang, index) => (
            <option key={jenisbarang.id} value={jenisbarang.id}>{jenisbarang.display_name}</option>
          ))}

            </select>
          
            </div>

        </div>



        <div className='col-md-4'>


        <div className='form-group'>

        <label>Berat Barang (Kg)</label>
        
        <input value={inputberatbarang}    type="textbox" name="berat" className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>


        </div>



        </div>

        <div className='col-md-12'>

        <div className='form-group m-1'>
        <label className='text-black' htmlFor="nomorresi">Volume (m3)</label>

        <input value={inputvolume} type="textbox" name="volume" className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

        </div>

        </div>


        <div hidden>

        <div className='col-md-4'>


          <div className='form-group'>

          <label>Panjang (Cm)</label>
          <input type='textbox' className='form-control'>


          </input>


          </div>



          </div>

          <div className='col-md-4'>


              <div className='form-group'>

                  <label>Lebar (Cm)</label>
                  <input type='textbox' className='form-control'>

                  
                  </input>


                  </div>

                          


              </div>

              <div className='col-md-4'>


              <div className='form-group'>

              <label>Tinggi (Cm)</label>
              <input type='textbox' className='form-control'>


              </input>


              </div>



              </div>

              </div>

              </div>

              
            <button  className='hitung' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>



              </form>

             
                </div>


                       
{/* jika udara */}
<div className='udara' style={{display:display_select_udara}}>

<form onSubmit={handleGetHitungBiayaUdaraClick}>

  <div className='row m-2'>

          <div className='col-md-3'>

        <div className='form-group m-1'>
        <label htmlFor="kategoribarang" className="text-black text-left" >Kategori Barang</label>

        <select value={inputkategori} type="textbox" name="inputkategori"  className='form-control' placeholder='Kategori Barang'  onChange={(e) => setKategori(e.target.value)}>
        <option>--Pilih Kategori Barang--</option>
        {dataCategories?.map((category, index) => (
          <option key={category.id} value={category.id}>{category.display_name}</option>
        ))}

        </select>

        </div>

        </div>
        <div className='col-md-3'>
        <div className='form-group'>

            <label>Jenis Barang</label>
            <select value={inputnamabarang}   type="textbox" name="jenisbarang"  className='form-control' placeholder='Jenis Barang' onChange={(e) => setNamabarang(e.target.value)}>
            <option>--Pilih Jenis Barang--</option>
            {dataJenisBarang?.map((jenisbarang, index) => (
            <option key={jenisbarang.id} value={jenisbarang.id}>{jenisbarang.display_name}</option>
          ))}

            </select>


            </div>

                    


        </div>



        <div className='col-md-3'>


        <div className='form-group'>

        <label>Harga Barang</label>
        <input type='textbox' className='form-control'>


        </input>


        </div>



        </div>

        <div className='col-md-3'>


          <div className='form-group'>

          <label>Berat (Kg)</label>
        
          <input value={inputberatbarang}    type="textbox" name="berat" className='form-control' placeholder='Berat Barang' onChange={(e) => setBeratbarang(e.target.value)}></input>

          </div>



          </div>

          
        <div className='col-md-12'>

          <div className='form-group m-1'>
          <label className='text-black' htmlFor="nomorresi">Volume (m3)</label>

          <input value={inputvolume} type="textbox" name="volume" className='form-control' placeholder='Volume' onChange={(e) => setVolume(e.target.value)}/>

          </div>

          </div>

          </div>

          <button  className='hitung' style={{top:display_margin}}  type="submit" ><label className='text-white fs-5 font-weight-bold'>Hitung Biaya</label></button>

            
          </form>


                </div>

                    
<div className='hasil_hitungan_laut' style={{marginTop:display_margin_output,display:display_status_laut}}>

    <hr  style={{border:'2px solid black',marginTop:'0px'}}/>



<div className='box_hitungbiaya box_hitungbiaya-4' style={{borderColor:'grey',height:display_height_form}}>

<div className='m-3'>

<div className='text-black text-left' >

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





</div>  

</div>

{/* 
hasil hitungan udara */}
                    
<div className='hasil_hitungan_udara' style={{marginTop:display_margin_output,display:display_status_udara}}>

<hr  style={{border:'2px solid black',marginTop:'0px'}}/>

<div className='box_hitungbiaya box_hitungbiaya-4' style={{borderColor:'grey',height:display_height_form}}>

<div className='m-3'>

<div className='text-black text-left' >

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





</div>  

</div>






		</div>




    </section>

    


      <Footer/>


      </div>
  

    )
   
   

  

  

}

export default Hitungbiaya