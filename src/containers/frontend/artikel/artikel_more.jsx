import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Navbar } from '../../../components';
import {Footer} from '../../../containers';
import Pagination from 'react-bootstrap/Pagination';
import {useLocation} from 'react-router-dom';
import { useState,useRef,useEffect } from "react";
import { getData_Artikel_By_Slug } from '../../../constants/api/logistik';
import dateFormat from 'dateformat';
import { getData_Artikel } from '../../../constants/api/logistik';




const Artikel_More= () => {
//const URL = `${env.API_GATEWAY_LOKAL}/api/upload/`
const URL = 'http://localhost:9000/api/upload/'

const location = useLocation();
const slug_id= location.pathname.split('/').slice(2);
const [dataArtikelbySlug, setDataArtikelBySlug] = useState(null);
var slug_link =(slug_id[0])
const [dataArtikel, setDataArtikel] = useState(null)

const [dataheadlinenews, setDataHeadlineNews] = useState(null)
const inputsearch = useRef('');



 useEffect(() => {


  if(!dataArtikel) {
    getDataArtikel()

  }

 

}, [dataArtikel]);



const getDataArtikel = async () => {

  const text_pencarian=inputsearch.current.value;


  var formdata_request = new FormData()

  formdata_request.append('search',text_pencarian)

  const res = await getData_Artikel(formdata_request);

     const data_all= res.data.Data

  if (res.status === 200) {


    setDataArtikel(data_all)
  }

 // console.log("lihat data:",data_all)

  if(data_all){

    const headline_second=[]
    
  
    for(let i=0; i < data_all.length; i++){


      if( data_all[i].headline_id=='1' && (i>=0 )){
  
        const title = data_all[i].title;
        const description=data_all[i].description
        const tanggal_cetak= data_all[i].created_date.String;
        const slug=data_all[i].slug;
        const picture =data_all[i].picture;
  
      headline_second.push({title,description,tanggal_cetak,slug,picture})
  
  
      }
      
      
   
  
      
  
    }
    

 
    setDataHeadlineNews(headline_second);

  
   
  
  } 

}




console.log("data:", dataheadlinenews)


    return (

      <div className='App'>
          <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
     
     
    </div>
    </div>


    <section className="flex-container" >

      <div className='artikel_bg'>

      <div className='row'>

<div className='col-md-8'>

<div className='text-black fs-3 m-2'>MORE NEWS</div>

</div>

<div className='col-md-4'>

<div className='col-md-12 mt-4'>


<div className='col-md-8'>

<input ref={inputsearch} onChange={getDataArtikel} type="text" className='form-control' placeholder="search news"/>


</div>




</div>

</div>

</div>

  
        <hr></hr>
      

        <div className='row'>
          {dataheadlinenews?.map((artikelharian, index) => (
          <div className='col-md-8'>

<div className="container pb-4">
  <div className="row">
    <div className="col-lg-12">
      <div className="horizontal-card">

        <img src={URL+artikelharian.picture} />
        <div className="horizontal-card-body">
          {/* <span className="card-text">Date</span> */}
          <h4 className="card-title fs-4 fw-bold">{artikelharian.title}</h4>
          <span className="card-text mt-2 mb-4 text-black" style={{fontSize:'14px'}}>{artikelharian.description}</span>
        </div>
        <div className="horizontal-card-footer">
          <span style={{fontSize:'12px',marginLeft:'90px'}} >{ dateFormat(artikelharian?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</span>
        
          
          <a className="btn_head card_btn text-center" href={'artikel-detail/'+ artikelharian.slug}> Read More</a>
        

        </div>


      </div>
    </div>
    </div>
    </div>

      
           
          </div>
 ))}  
     

  

      



        </div>


        </div>


      



    </section>


    
    


      <Footer/>

    </div>
   
   
   
        
        
      )

  

}


export default Artikel_More