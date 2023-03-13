import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Navbar } from '../../../components';
import {Footer} from '../../../containers';
import Pagination from 'react-bootstrap/Pagination';
import { getData_Artikel } from '../../../constants/api/logistik';
import { useState,useEffect } from "react";
import dateFormat from 'dateformat';

import env from "react-dotenv";


const Artikel= () => {

  const URL = `${env.API_GATEWAY_LOKAL}/api/upload/`

  console.log(URL)

  const [dataArtikel, setDataArtikel] = useState(null)
  const [dataheadlinefirstnews, setDataHeadlinefirstNews] = useState(null)
  const [dataheadlinenews, setDataHeadlineNews] = useState(null)
  const [datahariannews, setDataHarianNews] = useState(null)

  //fungsi get data artikel
  useEffect(() => {
    if(!dataArtikel) {
      getDataArtikel()

    }


  }, [dataArtikel])



  const getDataArtikel = async () => {
    const res = await getData_Artikel();
    // console.log("getdata artikel", res)

    //console.log("data:", res.Data)

    
    if (res.status === 200) {
      setDataArtikel(res.Data)
    }

    if(res.Data){

      const headline_first=[]
      const headline_second=[]
      const harian=[]
    
      for(let i=0; i < res.Data.length; i++){


        
        if( res.Data[i].headline_id=='1' && i==0 ){
    
          const title = res.Data[i].title;
          const description=res.Data[i].description
          const tanggal_cetak= res.Data[i].created_date.String;
          const slug=res.Data[i].slug;
          const picture = res.Data[i].picture;
      
          headline_first.push({title,description,tanggal_cetak,slug,picture})
      
      
          }
    
    
        if( res.Data[i].headline_id=='1' && i>0 ){
    
          const title = res.Data[i].title;
          const description=res.Data[i].description
          const tanggal_cetak= res.Data[i].created_date.String;
          const slug=res.Data[i].slug;
          const picture = res.Data[i].picture;
    
        headline_second.push({title,description,tanggal_cetak,slug,picture})
    
    
        }
        
        
        if( res.Data[i].headline_id=='0'){
    
          const title = res.Data[i].title;
          const description=res.Data[i].description
          const tanggal_cetak= res.Data[i].created_date.String;
          const slug=res.Data[i].slug;
          const picture = res.Data[i].picture;

        harian.push({title,description,tanggal_cetak,slug,picture})
    
    
        }
    
        
    
      }
      

      setDataHeadlinefirstNews(headline_first);
      setDataHeadlineNews(headline_second);
      setDataHarianNews(harian);
    
     
    
    } 

  }

 

  
console.log("data artikel all :", dataArtikel)
console.log("data harian pertama news:", dataheadlinefirstnews)
console.log("data headline kedua news:", dataheadlinenews)
console.log("data harian news:", datahariannews)


    return (

      <div className='App'>
      <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
     
     
    </div>
    </div>

    <section className='flex-container'>

      <div className='artikel_bg'>

        <div className='text-black fs-3'>ARTIKEL</div>
        <hr></hr>

        <div>HEADLINE NEWS</div>

        <div className='row mt-4'>
 

    <div className='col-md-5'>

 {dataheadlinefirstnews?.map((artikel_headline_first, index) => (


<ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={URL+artikel_headline_first.picture}/></div>
        <div className="card_content">
          <h2 className="card_title">{artikel_headline_first.title}</h2>
          <p className='text-secondary fs-6'>{artikel_headline_first.description}</p>
          <p className="card_text">{ dateFormat(artikel_headline_first?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>

          ))} 

          </div> 
        

          <div className='col-md-7'>

         
          <div className='row'> 
          
          {dataheadlinenews?.map((artikel_headline, index) => (
          <div className='col-md-6'>

<div className="container pb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="horizontal-card">

        <img src={URL+artikel_headline.picture} />
        <div className="horizontal-card-body">
          {/* <span className="card-text">Date</span> */}
          <h4 className="card-title fs-6 fw-bold">{artikel_headline.title}</h4>
          <span className="card-text mt-2" style={{fontSize:'11px'}}>{artikel_headline.description}</span>
        </div>
        <div className="horizontal-card-footer">
          <span >{ dateFormat(artikel_headline?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</span>
        
          {/* <p className='text-secondary fs-6'>{artikel_headline.description}</p> */}
          <button className="btn_head card_btn">Read More</button>
          {/* <a className="card-text status">#Save</a> */}

        </div>


      </div>
    </div>
    </div>
    </div>

      
      

  
          </div>

           ))}
       

          </div>
          


          </div>

    
          </div>

          <div>OCISTIK NEWS</div>
          <hr></hr>


          <div className='row'>

          {datahariannews?.map((artikel_harian, index) => (
            <div className='col-md-4'>

<ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={URL+artikel_harian.picture} /></div>
        <div className="card_content">
          <h2 className="card_title">{artikel_harian.title}</h2>
          <p className='text-secondary fs-6'>{artikel_harian.description}</p>
          {/* <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p> */}
          
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>

                                
          

       


            </div>

            ))}

         
           

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