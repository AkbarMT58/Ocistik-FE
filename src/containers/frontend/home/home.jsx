import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'
import { Navbar } from '../../../components';
import {Footer,Header,Fitur, FiturGalery,Sliderbanner,Galery,Tentangkami} from '../../../containers';
import { getData_Master_Categories } from '../../../constants/api/logistik';
import { useState,useEffect  } from "react";
import ModalCekresi from './ModalCekresi';

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

const Home = () => {
  //fungsi set responsive
const widthSize = useScreenWidth()
const [inputCekresi, setInputCekresi] = useState({
  nomor_resi : "",
  marking_code : ""
})
const [show, setShow] = useState(false);

const mobileWidth = 700

if(widthSize > mobileWidth){ 
    //logic for desktop

    // var display_height_form='1330px';
    var display_height_form='400px';

}

if(widthSize <= mobileWidth){ 
  //logic for mobile

  // var display_height_form='1730px';

  var display_height_form='430px';


}


  return (

    <div className='App'>
    <div className="gradient__bg" >
      <Navbar/>
      <Header/>
    </div>

    <div className='gpt3__whatgpt3 section__margin mb-4' id='whpt3' style={{height:display_height_form}}>

      <div className='gpt3__whatgpt3-heading'>
        <h4 className='gradient__text'>Cek Resi Lomiles</h4>
       

      </div>
      <h6 className='gradient__text'>Silakan Masukan Kode Di Bawah Ini</h6>
      <div className='gpt3__whatgpt3-container m-1'>

      <div className="container">
        
        <div className='row'>

          <div className='col-md-6'>

          <div className='form-group m-1'>
          <label htmlFor="nomorresi">Nomor Resi</label>

          <input 
            type="textbox" 
            className='form-control' 
            placeholder='Nomor Resi'
            value={inputCekresi.nomor_resi} 
            onChange={e => setInputCekresi({...inputCekresi, nomor_resi : e.target.value})}/>

          </div>

          </div>

          <div className='col-md-6'>

          <div className='form-group m-1'>

          <label htmlFor="kodemarking">Kode Marking</label>

          <input 
            type="textbox" 
            className='form-control' 
            placeholder='Kode Marking' 
            value={inputCekresi.marking_code} 
            onChange={e => setInputCekresi({...inputCekresi, marking_code : e.target.value})}/>

          </div>

          </div>


        </div>

        </div>

        <button className='gpt3__home_cekresi' onClick={e => {
          console.log("test")
          setShow(v => !v)
        }}><div className='-mt-2'>Cek Resi</div></button>
        
        <ModalCekresi show={show} setShow={setShow} inputCekresi={inputCekresi}/>
        
      
      
      
      </div>


        {/* Tampilan resi logistik barang  */}
        <div className='tampilanlogistik' style={{marginTop:'100px',position:'relative'}} hidden >

          <div className='text-black text-left noresi'><img  src="/image/Vector.png"></img>OCE7847584586</div>

          <hr></hr>

          <div className='resi_logistik' style={{border:'1px black inset'}}>

            <div className='row'>

              <div className='col-md-2'>     
               <img className='m-2' src="/image/Group.png"></img>
                Shipment Service
                <div className='text-black text-center'>OCE</div>


              </div> 
              <div className='garis_batas'></div>
              <div className='col-md-2'>
               
              <img className='m-2 px-2' src="/image/Vector(1).png"></img>
                From 
                <div className='text-black text-left px-2 m-2'>JAKARTA</div>
              </div>
              <div className='garis_batas_2'></div>
              <div className='col-md-4'>
              <img className='m-2 px-2' src="/image/Vector(2).png"></img>
                To
                <div className='text-black text-left px-2 m-2'>Cengkareng-Jakarta</div>


              </div>
              <div className='garis_batas_3'></div>
              <div className='col-md-2'>
              <img className='m-2 px-2' src="/image/Vector(3).png"></img>

                Estimate Date
                <div className='text-black text-left px-4 m-2'>Days</div>


              </div>
              <div className='garis_batas_4'></div>
              <div className='col-md-2'>
              <img className='m-2 px-2' src="/image/Vector(4).png"></img>

                POD Date
               
                <div className='text-black text-left px-2 m-2'> 19 feb 2023 13:40</div>


              </div>

            </div>
            <hr></hr>

            <div className='row'>

            <div className='col-md-2'>

            <img className='m-2' src="/image/Vector(5).png"></img>
            History Status
            </div>

            <div></div>
          

            <div className='col-md-8 m-2'>

            RECEIVED AT WAREHOUSE (JAKARTA, ANGKE)
            <br></br>
            <label>18-02-2023 04:35</label>

            <br></br>

            WITH DELIVERY COURIER (JAKARTA, CENGKARENG)
            <br></br>
            <label>18-02-2023 04:35</label>
            </div>

            <div className='col-md-12 m-2'>

              <div style={{marginLeft:'1090px'}}>
             
            <img className='m-2' src="/image/Vector(6).png"></img>
              Receiver Name
              <br></br>
               RIDHO
               <br></br>
               (YANG BERSANGKUTAN)
              </div>
            
              

            </div>

            <div className='col-md-2'>

              <img className='m-2' src="/image/Vector(7).png"></img>
              Shipment Detail
              </div>
              


            </div>

            <hr></hr>

            <div className='row m-2'>

            <div className='col-md-8'>
            Shipment Date
            <br>
            </br>
            19 feb 2023 13:40
            <br>
            </br>
            Good Description
            <br></br>
            <img className='m-2' src="/image/Vector(8).png"></img>
            Shipper Information

            </div>

            <div className='col-md-2'>
              <label className='text-black'>Volume</label>
              <br></br>
              <label className='text-black'>1 M3</label>

            </div>
            <div className='col-md-2'>
            <label className='text-black'>Weight</label>
            <br></br>
              <label className='text-black'>80,75 Kg</label>

            </div>
            
           

            </div>
            <hr></hr>

            <div className='row m-2'>

            <div className='col-md-8'>
            Shipment Name
            <br>
            </br>
            19 feb 2023 13:40
            <br>
            </br>
            OCI Logistic
            <br></br>
           
            Snipper City
            <br></br>
            <label>JAKARTA</label>
            <br></br>
            <img className='m-2' src="/image/Vector(8).png"></img>
            <label>Receiver Information</label>

            </div>

         

            </div>
            <hr></hr>

            <div className='row m-2'>

              <div className='col-md-8'>
              Receiver Name
              <br>
              </br>
             <label className='fs-4'>RIDHO</label>
              <br>
              </br>
              Receiver City
              <br></br>
              <label className='fs-4'>CENGKARENG-JAKARTA</label>
              

              </div>

           

              </div>

          </div>

        </div>
     

      


    </div>


    

        <Galery/>
        <FiturGalery/>
        <Fitur/>
        <Sliderbanner/>

    <Footer/>

    </div>
    
    
  )
}

export default Home


