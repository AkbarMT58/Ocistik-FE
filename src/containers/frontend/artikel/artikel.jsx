import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/artikel/artikel.css'
import { Navbar } from '../../../components';
import {Footer} from '../../../containers';

import { getData_Artikel } from '../../../constants/api/logistik';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../components/general/Pagination';
import axios from 'axios';



const Artikel= () => {

  const URL = `${env.API_GATEWAY_LOKAL}/api/upload/`

  //console.log(URL)

  const [dataArtikel, setDataArtikel] = useState(null)
  const [dataheadlinefirstnews, setDataHeadlinefirstNews] = useState(null)
  const [dataheadlinenews, setDataHeadlineNews] = useState(null)
  const [dataheadlinethirdnews, setDataHeadlineThirdNews] = useState(null)
  const [datahariannews, setDataHarianNews] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);// No of Records to be displayed on each page   
  const [recordsPerPage] = useState(6);
  const inputsearch = useRef('');

  


  //fungsi get data artikel
  useEffect(() => {
    if(!dataArtikel) {
      getDataArtikel()

    }


  }, [dataArtikel])



  const getDataArtikel = async () => {

    const text_pencarian=inputsearch.current.value;


    var formdata_request = new FormData()

    formdata_request.append('search',text_pencarian)

    const res = await getData_Artikel(formdata_request);

       const data_all= res.data.Data

    if (res.status === 200) {

  
      setDataArtikel(data_all)
    }

    //console.log("lihat data:",data_all)

    if(data_all){

      const headline_first=[]
      const headline_second=[]
      const headline_third=[]
      const harian=[]
    
      for(let i=0; i < data_all.length; i++){

        if( data_all[i].headline_id=='1' && i==0 ){
    
          const title = data_all[i].title;
          const description=data_all[i].description
          const tanggal_cetak= data_all[i].created_date.String;
          const slug=data_all[i].slug;
          const picture = data_all[i].picture;
  
          headline_first.push({title,description,tanggal_cetak,slug,picture})
      
      
          }
    
    
        if( data_all[i].headline_id=='1' && (i>0 && i<=2 )){
    
          const title = data_all[i].title;
          const description=data_all[i].description
          const tanggal_cetak= data_all[i].created_date.String;
          const slug=data_all[i].slug;
          const picture =data_all[i].picture;
    
        headline_second.push({title,description,tanggal_cetak,slug,picture})
    
    
        }

        if( data_all[i].headline_id=='1' && (i>2 && i<=6 )){
    
          const title = data_all[i].title;
          const description=data_all[i].description
          const tanggal_cetak= data_all[i].created_date.String;
          const slug=data_all[i].slug;
          const picture =data_all[i].picture;
    
        headline_third.push({title,description,tanggal_cetak,slug,picture})
    
    
        }
        
        
        
        
        if(data_all[i].headline_id=='0'){
    
          const title =data_all[i].title;
          const description=data_all[i].description
          const tanggal_cetak=data_all[i].created_date.String;
          const slug=data_all[i].slug;
          const picture =data_all[i].picture;

        harian.push({title,description,tanggal_cetak,slug,picture})
    
    
        }
    
        
    
      }
      

      setDataHeadlinefirstNews(headline_first);
      setDataHeadlineNews(headline_second);
      setDataHeadlineThirdNews(headline_third);
      setDataHarianNews(harian);
    
     
    
    } 

  }



const arr = datahariannews || [];
const totaldata=  Number(arr.length);
const nPages = Math.ceil(totaldata / recordsPerPage)
const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = arr.slice(indexOfFirstRecord, indexOfLastRecord)

//console.log(nPages)




    return (

      <div className='App'>
      <div className="gradient__bg_artikel" >
      <Navbar/>
      <div className='gpt3__header section__padding' id="home">
     
     
    </div>
    </div>

    <section className='flex-container'>

      <div className='artikel_bg'>

         <div className='row'>

          <div className='col-md-8'>

        <div className='text-black fs-3 m-2'>ARTIKEL</div>

        </div>

        <div className='col-md-4'>

        <div className='col-md-12 mt-4'>

         
          <div className='col-md-8'>

          <input ref={inputsearch} onChange={getDataArtikel}  type="text" className='form-control' placeholder="search news"/>
         

          </div>

         
      

        </div>
       
        </div>

        </div>
        <hr></hr>

        <div className='m-2 fw-bold'>HEADLINE NEWS</div>



        <div className='row mt-4'>
 

    <div className='col-md-4'>

 {dataheadlinefirstnews?.map((artikel_headline_first, index) => (


<ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={URL+artikel_headline_first.picture}/></div>
        <div className="card_content">
          <h2 className="card_title">{artikel_headline_first.title}</h2>
          <p className='text-secondary fs-6'>{artikel_headline_first.description}</p>
          <p className="card_text"><i class="fa fa-clock-o" aria-hidden="true"></i>
          { dateFormat(artikel_headline_first?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</p>
          <a className="btn card_btn" href={'artikel-detail/'+ artikel_headline_first.slug}  >Read More</a>
        </div>
      </div>
    </li>
  </ul>

          ))} 

          </div> 
        

          <div className='col-md-8'>

         
          <div className='row'> 

          {/* grid 2 */}
          
        
          <div className='col-md-6'>

            <div className="container pb-4">
            {dataheadlinenews?.map((artikel_headline, index) => (
              <div className="row">
                <div className="col-lg-12">
                  <div className="horizontal-card">

                    <img src={URL+artikel_headline.picture} />
                    <div className="horizontal-card-body">
                      {/* <span className="card-text">Date</span> */}
                      <h4 className="card-title fs-6 fw-bold">{artikel_headline.title}</h4>
                      <span className="card-text mt-2 mb-4" style={{fontSize:'11px'}}>{artikel_headline.description}</span>
                    </div>
                    <div className="horizontal-card-footer">
                     
            
                      <span style={{fontSize:'12px',marginLeft:'90px'}} ><i class="fa-light fa-clock"></i>


                      { dateFormat(artikel_headline?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</span>
                    
                      
                      <a className="btn_head card_btn text-center" href={'artikel-detail/'+ artikel_headline.slug}> Read More</a>
                    

                    </div>


                  </div>
                </div> 
                
               

                </div>
                
                ))}
                </div>

          </div>

          {/* grid 3 */}
          <div className='col-md-6'>

            <div className="container pb-4">
            {dataheadlinethirdnews?.map((artikel_headline, index) => (
              <div className="row">
                <div className="col-lg-12">
                  <div className="horizontal-card">

                    <img className="img-grid-3" src={URL+artikel_headline.picture} />
                    <div className="horizontal-card-body">
                      {/* <span className="card-text">Date</span> */}
                      <h4 className="card-title fs-6 fw-bold">{artikel_headline.title}</h4>
                      <span className="card-text mt-2 mb-4" style={{fontSize:'11px'}}>{artikel_headline.description}</span>
                    </div>
                    <div className="horizontal-card-footer">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>

                      <span style={{fontSize:'12px',marginLeft:'20px'}} ><i class="fa-light fa-clock"></i>

{ dateFormat(artikel_headline?.tanggal_cetak, "dd-mm-yyyy hh:mm:ss") }</span>
                    
                      
                      <a className="btn_head card_btn text-center" href={'artikel-detail/'+ artikel_headline.slug}> Read More</a>
                    

                    </div>


                  </div>
                </div> 
                
               

                </div>
                
                ))}
                </div>

          </div>


          

          


           {/* grid ke 3  */}
        

           {/* batas grid 3 */}

                                        
                         <center>
                        <a className="btn_head card_btn text-center" href='/artikel-more'> Load More</a>
                        </center>
       

          </div>
          


          </div>

    
          </div>

       

          <div className='m-2 fw-bold'>LOMILES NEWS</div>
          <hr></hr>

<div className='container-fluid'>
          <div className='row'>

          {currentRecords?.map((artikel_harian, index) => (
            <div className='col-md-4'>

<ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src={URL+artikel_harian.picture} /></div>
        <div className="card_content">
          <h2 className="card_title">{artikel_harian.title}</h2>
          <p className='text-secondary fs-6'>{artikel_harian.description}</p>
          {/* <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p> */}
          
          <a className="btn card_btn" href={'artikel-detail/'+ artikel_harian.slug}>Read More</a>
        </div>
      </div>
    </li>
  </ul>

                              
            </div>

            ))}

         
           

          </div>

          </div>
 
          <div className='mt-4'>

         


          <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

    </div>

       

        </div>


      



    </section>


    
    


      <Footer/>

    </div>
   
   
   
        
        
      )

  

}


export default Artikel