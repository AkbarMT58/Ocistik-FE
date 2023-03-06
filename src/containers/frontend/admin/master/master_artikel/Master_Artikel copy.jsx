import { getData_Artikel } from '../../../../../constants/api/logistik';
import { useRef,useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../../containers/frontend/admin/master/master_artikel/m_artikel.css'
import { Navbar } from '../../../../../components';
import {Footer} from '../../../../../containers';
import slugify from 'react-slugify';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {

    useNavigate
  } from "react-router-dom";
import { useFormik } from 'formik';

import swal from 'sweetalert';

import axios from 'axios';
import callAPI from '../../../../../configs/axios';

// import path from "path";
const Master_Artikel = (req, res)=>{

    const history = useNavigate();
    const [dataArtikel, setDataArtikel] = useState(null)
    //use state input request from form input 
    const [inputtitle, setTitle] = useState('');
    const [inputdeskripsi, setDescription] = useState('');
    const [inputgambar, setGambar] = useState('');
    const [inputheadline, setHeadline] = useState('');
    const [inputslug, setSlug] = useState('');

    const inputTitle = useRef(null);
    const inputSlug = useRef(null);
    const [taketitle, setTakeTitle] = useState('');
    const [takeslug, setTakeSlug] = useState('');


    useEffect(() => {
        if(!dataArtikel) {
          getDataArtikel()
        }
      
      }, [dataArtikel])
      
      const getDataArtikel = async () => {
        const res = await getData_Artikel();
        // console.log("getdata artikel", res)
        if (res.status === 200) {
          setDataArtikel(res.Data)
        }
      }
    
   // console.log("data tabel artikel:",dataArtikel)

  //  setTakeTitle(inputTitle.current.value);
  //  setTakeSlug(inputSlug.current.value);

  //  const title_write=taketitle;
  //  const slug_auto=takeslug;


  //  console.log(title_write);


    const { handleChange, values, setFieldValue } = useFormik({
        initialValues: { title: ``, slug: `` },
        onSubmit: ( values ) => console.log( values  )
      })
      
      const customHandleChange = e => {
        const { value } = e.target;
      
        setFieldValue('title', value);

        setFieldValue('slug', slugify(value.toLowerCase()));
      
      
      }


      //handle edit
      function handleEdit(row) {
        // console.log(row);
   
        history("/edit-artikel/"+row,{state:{slug:row}});

       
     
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


           //fungsi update form artikel

        
        const handleInsertArtikel = async (e) => {
         e.preventDefault();

            
       
     
   
       try {
        
           //notifikasi success
   
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
      
          
         const URL = "http://localhost:9000/api/insertArtikel"; 
     
     const formartikel= new FormData
     formartikel.append("title","testing")
     formartikel.append("slug","testing")
     formartikel.append("description","hjdfhgfhhggfgfghhg")
     formartikel.append("headline_id","1")
     formartikel.append("picture","/path/")



      const response= await axios.post(
        URL,  formartikel,
        {
          headers:{
             "Content-Type": "multipart/form-data"
          },
         
         
        }
      )


      const axiosResponse = response.data;
     
      return axiosResponse;



    
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

            <form onSubmit={handleInsertArtikel}> 

                <div className='row m-4'>

                    <div className='col-md-6'>

                        <div className='form-group'>
                            <label>Judul Artikel</label>

                            <input ref={inputTitle} type='textbox' className='form-control'  value={ values.title }  onChange={ customHandleChange } />


                        </div>

                      
                
                    </div>

                    <div className='col-md-6'>

                    <div className='form-group'>
                            <label>Slug</label>

                            <input ref={inputSlug} type='textbox' className='form-control' value={ values.slug }   onChange={ handleChange } />


                    </div>

                        
                    </div>

                    <div className='col-md-12'>

                    <div className='form-group'>
                            <label>Deskripsi</label>

                            <textarea className='form-control' value={inputdeskripsi} onChange={(e) => setDescription(e.target.value)}></textarea>
{/* 
                            <Editor    wrapperClassName="wrapper" editorClassName="editor" toolbarClassName="toolbar" />
 */}

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

                        <select  className='form-control'  >

                            <option>--Status Artikel--</option>
                            <option value="1">Headline</option>
                            <option value="0">Harian</option>


                        </select>


                </div>

                <center>
                    <div className='form-group'>
                        <label>Preview Image</label>

                    <div className='border border-secondary' style={{height:'460px'}}>
                    

                <img  className='responsive-img-input-artikel mt-4 m-4' src={imgData}    />

                   </div>

                   </div>

                </center>

                    
                </div>

                   

                </div>

                                           
<button  className='btn_biaya'   type="submit" ><label className='text-white fs-5 font-weight-bold'>Save</label></button>


                </form>


             
    
         </div>

         <div className='table-responsive mb-5'>

         <table>
	<thead>
   
	<tr>
        <th>No</th>
		<th style={{width:'300px'}}>Judul Artikel</th>
		<th style={{width:'700px'}}>Deskripsi</th>
		<th>Gambar</th>
        <th style={{width:'200px'}}>Status</th>
        <th style={{width:'200px'}}>Action</th>
	</tr>
    

	</thead>
	<tbody>
    {dataArtikel?.map((artikel, index) => (
	<tr>
        <td>1</td>
		<td>{artikel.title}</td>
		<td>  {artikel.description.length > 250 ?
    `${artikel.description.substring(0, 250)}...` : artikel.description}</td>
		<td>{artikel.picture}</td>
        <td>{artikel.status}</td>
        <td> 
            
            {/* <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={e=> handleEdit(artikel.slug)}><i class="far fa-edit">Edit</i></button> */}
            <a class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" href={'edit-artikel/'+artikel.slug} ><i class="far fa-edit">Edit</i></a>
            
            </td>
	</tr>
      ))}
	
	</tbody>
</table>



         </div>


         </section>

         


         
         <Footer/>



        </div>


    )

}



export default Master_Artikel
 