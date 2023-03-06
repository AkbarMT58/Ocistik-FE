import {useLocation} from 'react-router-dom';
import { Navbar } from '../../../../../components';
import {Footer} from '../../../../../containers';
import slugify from 'react-slugify';
import '../../../../../containers/frontend/admin/master/master_artikel/m_artikel.css'

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, convertToRaw } from 'draft-js';

import { useFormik } from 'formik';
import { useState,useEffect } from "react";
import { getData_Artikel_By_Slug } from '../../../../../constants/api/logistik';
import swal from 'sweetalert';

import axios from 'axios';
import callAPI from '../../../../../configs/axios';



 function Edit_Artikel() {
    

    const [dataArtikelbySlug, setDataArtikelbyslug] = useState(null)
     //use state input request from form input 
     const [inputtitle, setTitle] = useState('');
     const [inputdescription, setDescription] = useState('');
     const [inputgambar, setGambar] = useState('');
     const [inputheadline, setHeadline] = useState('');
     const [inputslug, setSlug] = useState('');
 


    useEffect(() => {
        if(!dataArtikelbySlug) {
            getDataArtikelBySlug()
        }
      
      }, [dataArtikelbySlug])

   
      
       const location = useLocation();
       const slug_id= location.pathname.split('/').slice(1);

     var slug_link =(slug_id[1])


      const getDataArtikelBySlug = async () => {
        const res = await getData_Artikel_By_Slug(slug_link);
       
        if (res.status === 200) {
            setDataArtikelbyslug(res.Data)
        }
      }


    //console.log("slug linknya dr location.state:",(slug_))
    console.log("slug linknya dr link slug url:",(slug_link))
    console.log("data tabel artikel by slug:",dataArtikelbySlug)
    const id_artikel="3"


    const { handleChange, values, setFieldValue } = useFormik({
        initialValues: { title: ``, slug: `` },
        onSubmit: ( values ) => console.log( values  )
      })
      
      const customHandleChange = e => {
        const { value } = e.target;
      
        setFieldValue('title', value);

        setFieldValue('slug', slugify(value.toLowerCase()));
      
      
      }

        //preview image picture 
   
        const [picture, setPicture] = useState(null);
        const [imgData, setImgData] = useState(null);
        const onChangePicture = e => {
          if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
          }
        };

      
      //  var data_description =dataArtikelbySlug[0].description;

      //  console.log("lihat data description:",data_description);

        var stringtext="testing data"

        console.log(stringtext)

        const _contentState = ContentState.createFromText(stringtext);
        const raw = convertToRaw(_contentState);  
        const [contentState, setContentState] = useState(raw); 


        //fungsi update form artikel

        var formdatarequest = new FormData();

        formdatarequest.append('id',3);
        formdatarequest.append('title','testing');
        formdatarequest.append('slug','tes-slug-tes');
        formdatarequest.append('description','testing....');
        formdatarequest.append('picture','/path/images');  
        formdatarequest.append('headline_id','1');

     const handleUpdateDataArtikel = async (e) => {
      e.preventDefault();
  

    try {
     
      //     //notifikasi success

          swal({
            title: "Are you sure?",
            text: "Are you sure that you want to update this article?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Success!", "Your Data Has Been Updated!", "success");
            }
            window.location.href="/master-artikel"
          });
   
       
      const url = `http://localhost:9000/api/updateArtikel`;

      return callAPI({
        url,
        method: 'PUT',
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid",
          "Content-Type": "multipart/form-data"
        },
        data:formdatarequest,
        token: true,
      });



    } catch (err) {
      console.log(err);
    }

  }

        //batas fungsi


        return (
            <div className="gradient__bg_master_artikel" >

            <Navbar/>
   
            <section className="flex-container" >
   
            <div className='masterartikel box'>
   
               <center>
               <label className='text-black fs-3 mb-5'>Form isian artikel</label>
   
               </center>

               {dataArtikelbySlug?.map((artikel) => (

                <form onSubmit={handleUpdateDataArtikel}> 
   
                   <div className='row m-4'>
   
                       <div className='col-md-6'>

                     
   
                           <div className='form-group'>
                               <label>Judul Artikel</label>
   
                               <input type='textbox' className='form-control'  value={ artikel.title } onChange={(e) => setTitle(e.target.value)}  />
   
   
                           </div>
   
                         
                     
   
                       </div>
   
                       <div className='col-md-6'>
   
                       <div className='form-group'>
                               <label>Slug</label>
   
                               <input type='textbox' className='form-control' value={ artikel.slug } onChange={(e) => setSlug(e.target.value)} readOnly />
   
   
                       </div>
   
                           
                       </div>
   
                       <div className='col-md-12'>
   
                       <div className='form-group'>
                          
                            <label>Deskripsi</label>

                            <textarea className='form-control text-black' style={{height:'250px'}} onChange={(e) => setDescription(e.target.value)}>{artikel.description}</textarea>
                              

   
                       </div>
   
                      
   
                           
                      </div>
   
                      <div className='col-md-12'>
   
                       <div className='form-group'>
                               <label>Gambar</label>
   
                       <input className='form-control' type='file'  name="user[image]" multiple="true"
                         onChange={onChangePicture}  
                       />
   
   
                       </div>
                   
                       </div>
   
                   <div className='col-md-12'>
   
                   <div className='form-group'>
                           <label>Headline</label>
   
                           <select  className='form-control' value={ artikel.headline_id }  onChange={(e) => setHeadline(e.target.value)}  >
   
                               <option>--Status Artikel--</option>
                               <option value="1">Headline</option>
                               <option value="0">Harian</option>
   
   
                           </select>
   
   
                   </div>
   
                   <center>
                       <div className='form-group'>
                           <label>Preview Image</label>
   
                       <div className='border border-secondary' style={{height:'460px'}}>
                       
   
                   <img  className='responsive-img-input-artikel mt-4 m-4' src={imgData}  onChange={(e) => setGambar(e.target.value)}   />
   
                      </div>
   
                      </div>
   
                   </center>
   
                       
                   </div>
   
                      
   
                   </div>

                                
<button  className='btn_biaya'   type="submit" ><label className='text-white fs-5 font-weight-bold'>Update</label></button>

       

                   </form>

                     ))}
   
   
                  
      
            </div>
   
   
   
            </section>
   
            
   
   
            
            <Footer/>
   
   
   
           </div>
   
        )
    }

export default Edit_Artikel;