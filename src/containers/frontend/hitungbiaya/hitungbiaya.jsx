import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/hitungbiaya/hitungbiaya.css'
import { useRef,useState,useMediaQuery,useEffect  } from "react";

import { Navbar } from '../../../components';
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


const Hitungbiaya= () => {

  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('');
  const widthSize = useScreenWidth()


  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value)

    
     setUpdated(event.target.value);

    
}



const mobileWidth = 500


if(widthSize > mobileWidth){ 
  //logic for desktop
  if(updated=='Darat'){

    var display_select_darat='block';
    var display_margin='140px';
    var display_height_form='580px';
  
  
  
  }else{
  
  
    var display_select_darat='none';
  
  
  }
  
  
  if(updated=='Laut'){
  
    var display_select_laut='block';
  
    var display_margin='200px';

    var display_height_form='580px';
  
  
  }else{
  
  
    var display_select_laut='none';
  
  
  }
  
  if(updated=='Udara'){
  
    var display_select_udara='block';
    var display_margin='260px';
    var display_height_form='580px';
  
  
  }else{
  
  
    var display_select_udara='none';
  
  
  }
  

}

if(widthSize <= mobileWidth){ 
    //logic for mobile
    
// jika itu adalah pengiriman full container laut mobile version

if(updated=='Darat'){

  var display_select_darat='block';
  var display_margin='150px';
  var display_height_form='950px';



}else{


  var display_select_darat='none';


}


if(updated=='Laut'){

  var display_select_laut='block';
  var display_margin='140px';
  var display_height_form='680px';
  var display_margin_btn='-260px';


}else{


  var display_select_laut='none';


}

if(updated=='Udara'){

  var display_select_udara='block';
  var display_margin='160px';
  var display_height_form='580px';
  var display_margin_btn='-360px';


}else{


  var display_select_udara='none';


}



}



if (updated==''){

  var display_select_darat='block';
  var display_select_laut='none';
  var display_select_udara='none';
  var display_status='none';


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

      <section style={{height:'250vh'}}>
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

            <label>Nama Lengkap</label>
            <input type='textbox' className='form-control'>

            
            </input>


            </div>

                    


        </div>



        <div className='col-md-4'>


        <div className='form-group'>

        <label>Email</label>
        <input type='textbox' className='form-control'>


        </input>


        </div>



        </div>

        <div className='col-md-4'>


          <div className='form-group'>

          <label>Whatsapp</label>
          <input type='textbox' className='form-control'>


          </input>


          </div>



          </div>

          <div className='col-md-4'>


              <div className='form-group'>

                  <label>HS Code</label>
                  <input type='textbox' className='form-control'>

                  
                  </input>


                  </div>

                          


              </div>

              <div className='col-md-4'>


              <div className='form-group'>

              <label>Mata Uang</label>
              <input type='textbox' className='form-control'>


              </input>


              </div>



              </div>

              <div className='col-md-4'>


                <div className='form-group'>

                <label>Total Invoice</label>
                <input type='textbox' className='form-control'>


                </input>


                </div>



                </div>

                <div className='col-md-4'>


              <div className='form-group'>

                  <label>Container Type</label>
                  <input type='textbox' className='form-control'>

                  
                  </input>


                  </div>

                          


              </div>

              <div className='col-md-4'>


              <div className='form-group'>

              <label>Origin City</label>
              <input type='textbox' className='form-control'>


              </input>


              </div>



              </div>

              <div className='col-md-4'>


                <div className='form-group'>

                <label>Destination City</label>
                <input type='textbox' className='form-control'>


                </input>


                </div>



                </div>

                </div>

                </div>


                       
{/* jika laut */}
<div className='laut' style={{display:display_select_laut}}>

  <div className='row m-2'>
        <div className='col-md-6'>


        <div className='form-group'>

            <label>Nama Barang</label>
            <input type='textbox' className='form-control'>

            
            </input>


            </div>

        </div>



        <div className='col-md-6'>


        <div className='form-group'>

        <label>Berat Barang (Kg)</label>
        <input type='textbox' className='form-control'>


        </input>


        </div>



        </div>

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


                       
{/* jika udara */}
<div className='udara' style={{display:display_select_udara}}>

  <div className='row m-2'>
        <div className='col-md-4'>


        <div className='form-group'>

            <label>Nama Barang</label>
            <input type='textbox' className='form-control'>

            
            </input>


            </div>

                    


        </div>



        <div className='col-md-4'>


        <div className='form-group'>

        <label>Harga Barang</label>
        <input type='textbox' className='form-control'>


        </input>


        </div>



        </div>

        <div className='col-md-4'>


          <div className='form-group'>

          <label>Berat (Kg)</label>
          <input type='textbox' className='form-control'>


          </input>


          </div>



          </div>

          </div>


        

            


            

                </div>






                  


                    <div className='hitung' style={{marginTop:display_margin_btn}}><div style={{marginLeft:'20px'}}>Hitung Biaya</div>
                    
                    </div>

                    
    <div className='hasil_hitungan' style={{marginTop:display_margin,display:display_status}}>

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





</div>  

</div>



		</div>




    </section>

    


      <Footer/>


      </div>
  

    )
   
   

  

  

}

export default Hitungbiaya