import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Navbar } from '../../../components';
import {Footer} from '../../../containers';
import Pagination from 'react-bootstrap/Pagination';
import {useLocation} from 'react-router-dom';
import { useState,useEffect } from "react";
import { getData_Artikel_By_Slug } from '../../../constants/api/logistik';
import { getData_Artikel_All } from '../../../constants/api/logistik';
import dateFormat from 'dateformat';
import Parser from 'html-react-parser';
import env from "react-dotenv";





const Artikel_Detail= () => {
//const URL = `${env.API_GATEWAY_LOKAL}/api/upload/`
const URL = 'http://localhost:9000/api/upload/'


const location = useLocation();
const slug_id= location.pathname.split('/').slice(2);
const [dataArtikelbySlug, setDataArtikelBySlug] = useState(null);
var slug_link =(slug_id[0])
const [dataArtikel, setDataArtikel] = useState(null)
const [datahariannews, setDataHarianNews] = useState(null)


 useEffect(() => {

  if(!dataArtikelbySlug) {
    fetchOrderDataArtikelSlug();
  }

  if(!dataArtikel) {
    fetchOrderDataArtikel()

  }

 

}, [dataArtikelbySlug,dataArtikel]);

//console.log("data artikel bys slug:",dataArtikelbySlug)


const fetchOrderDataArtikelSlug = async () => {
  
  
//console.log(slug_link)
const data_ = await getData_Artikel_By_Slug(slug_link);  

setDataArtikelBySlug(data_.Data)


}


const fetchOrderDataArtikel = async () => {
  const res = await getData_Artikel_All();
  // console.log("get data artikel", res)
 // console.log("data res:", res)

 
    setDataArtikel(res.Data)
  

  if(res.Data){

    const harian=[]
  
    for(let i=0; i < res.Data.length; i++){


      
      if( res.Data[i].headline_id=='1' && i>0 ){

        const title = res.Data[i].title;
        const tanggal_cetak= res.Data[i].created_date.String;
        const slug=res.Data[i].slug;
        const picture = res.Data[i].picture;
        harian.push({title,tanggal_cetak,slug,picture})
    

      }

    }

    setDataHarianNews(harian);
   

  }

}

 console.log("data:", datahariannews)


    return (

      <div className='App'>
          <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
     
     
    </div>
    </div>


    <section className="flex-container" >

      <div className='artikel_bg'>

        <div className='row mt-4'>

          <div className='col-md-12'>

          {dataArtikelbySlug?.map((artikel, index) => (

    <div className="card m-4" >
      <img className="responsive-img-artikel-detail"  src={URL +'/'+ artikel.picture}  alt="..."/>
      <div className="card-body" >
        <h1 className="card-title text-black">{artikel.title}</h1>
        <p className="card-text text-black">{Parser(artikel.konten)}</p>
      
      </div>
    </div>

       ))} 

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
          {datahariannews?.map((artikelharian, index) => (
          <div className='col-md-4'>

            
<ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={URL+artikelharian.picture}/></div>
        <div className="card_content">
          <h2 className="card_title">{artikelharian.title}</h2>
          <p className='text-secondary fs-6'>{artikelharian.description}</p>
          <p className="card_text">{ dateFormat(artikelharian?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</p>
          <a className="btn card_btn" href={'/artikel-detail/'+ artikelharian.slug}  >Read More</a>
        </div>
      </div>
    </li>
  </ul>
         
      
           
          </div>
 ))}  
     

  

      



        </div>


        </div>


      



    </section>


    
    


      <Footer/>

    </div>
   
   
   
        
        
      )

  

}


export default Artikel_Detail