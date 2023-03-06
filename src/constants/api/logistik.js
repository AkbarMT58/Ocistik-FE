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

  export async function getData_Artikel() {
    const url = `${env.API_GATEWAY_LOKAL}/api/getArtikel`;
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

    let slug_string=(slug_)
   
    //const url_ = `${env.API_GATEWAY_LOKAL}/api/getArtikelbyslug/${slug_string}`;

    const url = `http://localhost:9000/api/getArtikelbyslug/${slug_string}`;

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
    const url = `${env.API_GATEWAY}/oms/cms/categories/indo-china`;

    const response = await axios.get(url, {
      headers: {
          xCode :'ocijaya',
          xRole:'admin' ,
          xUser:'friska'
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }