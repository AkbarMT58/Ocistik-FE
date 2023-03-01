import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Brand,CTA,Navbar } from '../../../components';
import {Footer,Header} from '../../../containers';
import Pagination from 'react-bootstrap/Pagination';





const Artikel= () => {

    return (

      <div className='App'>
      <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>ARTIKEL</h1>
        <hr className='border_garis_tentangkami'></hr>
        <div className='gpt3__header_tentangkami'><p className='fs-2 text-white'></p></div>
      </div>
     
    </div>
    </div>

    <section style={{height:'250vh'}}>

      <div className='artikel_bg'>

        <div className='row mt-4'>

          <div className='col-md-5'>

            
    <div className="card" >
  <img src="/image/unsplash_Q80LYxv_Tbs.png"  alt="..."/>
  <div className="card-body" >
    <h5 className="card-title text-black">Card title</h5>
    <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="/artikel-detail" className='text-black text-center button_more'>Read More</a>
  </div>
</div>


          </div>

          <div className='col-md-7'>

          <div className='row'>

          <div className='col-md-6'>
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
           
          <div className='text-black text-center button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>

  
          </div>

          <div className='col-md-6'>

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

          
          
          <div class="card-footer">
          <div className='text-black text-center button_more mt-4'>Read More</div>
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>

       


   
                    
        {/* <img className='responsive-img-artikel'  src="/image/unsplash_Q80LYxv_Tbs.png" alt=""/> */}



        </div>


          </div>

          </div>

    
          </div>


          <div className='row'>


            <div className='col-md-4'>

                                
            <div className="card" >
            <img src="/image/unsplash_Q80LYxv_Tbs.png"  alt="..."/>
            <div className="card-body" >
              <h5 className="card-title text-black">Card title</h5>
              <p className="card-text text-black fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='text-black text-center button_more'>Read More</div>
            </div>
          </div>

       


            </div>

            <div className='col-md-4'>

                                
              <div className="card" >
            <img src="/image/unsplash_Q80LYxv_Tbs.png"  alt="..."/>
            <div className="card-body" >
              <h5 className="card-title text-black">Card title</h5>
              <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='text-black text-center button_more'>Read More</div>
            </div>
          </div>


          

            </div>
            <div className='col-md-4'>

                                
              <div className="card" >
            <img src="/image/unsplash_Q80LYxv_Tbs.png"  alt="..."/>
            <div className="card-body" >
              <h5 className="card-title text-black">Card title</h5>
              <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='text-black text-center button_more'>Read More</div>
            </div>
          </div>

         


            </div>


          </div>
 
          <div className='mt-4'>

         


      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>


    </div>

       

        </div>


      



    </section>


    
    


      <Footer/>

    </div>
   
   
   
        
        
      )

  

}


export default Artikel