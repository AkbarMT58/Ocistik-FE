import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header,Fitur, FiturGalery,Sliderbanner,Galery,Tentangkami} from '../../../containers';
const Home = () => {
  return (

    <div className='App'>
    <div className="gradient__bg" >
      <Navbar/>
      <Header/>
    </div>

    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
    
      <div className='gpt3__whatgpt3-heading'>
        <h4 className='gradient__text'>Cek Resi Ocistik</h4>
       

      </div>
      <h6 className='gradient__text'>Silakan Masukan Kode Di Bawah Ini</h6>
      <div className='gpt3__whatgpt3-container m-1'>

      <div className="container">
        <div className='row'>

          <div className='col-md-6'>

          <div className='form-group m-1'>
          <label for="nomorresi">Nomor Resi</label>

          <input type="textbox" className='form-control' placeholder='Nomor Resi'></input>

          </div>

          </div>

          <div className='col-md-6'>

          <div className='form-group m-1'>

          <label for="kodemarking">Kode Marking</label>

          <input type="textbox" className='form-control' placeholder='Kode Marking'></input>

          </div>

          </div>


        </div>

        </div>

        <div className='gpt3__home_cekresi'><p>Cek Resi</p></div>
     
      
      
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