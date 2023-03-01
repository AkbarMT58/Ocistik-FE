import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';
import Pagination from 'react-bootstrap/Pagination';





const Artikel_Detail= () => {

    return (

      <div className='App'>
      <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'></h1>
        <hr className='border_garis_tentangkami'></hr>
        <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'></p></div>
      </div>
     
    </div>
    </div>

    <section style={{height:'250vh'}}>

      <div className='artikel_bg'>

        <div className='row mt-4'>

          <div className='col-md-12'>

            
    <div className="card" >
      <img src="/image/unsplash_iFSvn82XfGo.png"  alt="..."/>
      <div className="card-body" >
        <h1 className="card-title text-black">5 Tips Untuk Menghemat Biaya Impor dari China ke Indonesia</h1>
        <p className="card-text text-black">Salah satu hal penting yang harus selalu dipikirkan oleh para pebisnis impor China adalah bagaimana cara untuk melakukan penghematan biaya impor. Tidak peduli apakah Anda seorang pemilik bisnis berskala besar maupun kecil, menghemat biaya impor dapat mempengaruhi laba bisnis Anda secara signifikan. Setiap pengeluaran yang berhasil Anda minimalisir bisa berarti peningkatan kinerja keuangan. Nah, berikut ini adalah beberapa tips yang dapat membantu Anda untuk memangkas pengeluaran berlebih dengan menghemat biaya saat melakukan kegiatan impor dari China ke Indonesia.</p>
      
      </div>
    </div>
      </div>
          <div className='mt-4 content-center'>

         


      <Pagination>
    
      <Pagination.Prev />

      <Pagination.Next />
   
    </Pagination>


    </div>

        </div>

        <div className='text-black fs-2 mb-2'>Pos Pos Terbaru</div>
      

        <div className='row'>


          <div className='col-md-4'>
          <div class="card">
          <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img className="responsive-img-artikel" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Card image cap" />
              </div>
              <div class="card-body" style={{marginLeft:'-70px'}}>
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
             
          </div>
         
          <div class="card-footer" >
           
          <div className='text-black text-right button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
          </div>

          <div className='col-md-4'>
          <div class="card">
          <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img className="responsive-img-artikel" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Card image cap" />
              </div>
              <div class="card-body" style={{marginLeft:'-70px'}}>
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
             
          </div>
         
          <div class="card-footer" >
           
          <div className='text-black text-right button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
          </div>

          <div className='col-md-4'>
          <div class="card">
          <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img className="responsive-img-artikel" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Card image cap" />
              </div>
              <div class="card-body" style={{marginLeft:'-70px'}}>
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
             
          </div>
         
          <div class="card-footer" >
           
          <div className='text-black text-right button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
          </div>

          <div className='col-md-4'>
          <div class="card">
          <div class="card-horizontal">
              <div class="img-square-wrapper">
                  <img className="responsive-img-artikel" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Card image cap" />
              </div>
              <div class="card-body" style={{marginLeft:'-70px'}}>
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
             
          </div>
         
          <div class="card-footer" >
           
          <div className='text-black text-right button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
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


export default Artikel_Detail