import axios from 'axios';
import callAPI from '../../configs/axios';
import env from "react-dotenv";



export async function getData_Master_Categories() {
    const url = `${env.API_GATEWAY}/oms/cms/categories`;
    return callAPI({
      url,
      method: 'GET',
      token: true,
    });
  }

  export async function getData_Artikel(formrequest) {
    const paramrequest=formrequest
    const url = `${env.API_GATEWAY_LOKAL}/api/getSearchArtikel`;
  
  

  const response =await axios({
      method: "post",
      url: url,
      data: paramrequest,
      headers: { "Content-Type": "multipart/form-data" },
  })

  const axiosResponse = response;
   
  return axiosResponse;




  }

  export async function getData_Artikel_All() {
    // const url = `${env.API_GATEWAY_LOKAL}/api/getArtikel`;

    const url ="http://192.168.15.20:9000/api/getArtikel" ;
    return callAPI({
      url,
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
      },
      token: true,
    });
  }

  export async function getData_Artikel_By_Slug(slug_) {

    //const url = `${env.API_GATEWAY_LOKAL}/api/getArtikelbyslug/${slug_}`;

    const url ="http://192.168.15.20:9000/api/getArtikelbySlug/"+slug_ ;
 
    return callAPI({
      url,
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
      },
      token:false,
    });

  }




  
  export async function getData_Kontak() {
    const url = `${env.API_GATEWAY_LOKAL}/getKontak`;
    return callAPI({
      url,
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      token: false,
    });


  
  }



  export async function getData_Master_Jenisbarang() {
    const url = `${env.API_GATEWAY}/oms/cms/category-oci-logistics`;

    const response = await axios.get(url, {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }





