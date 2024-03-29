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

    
  export async function getData_Provinsi() {
    const url = `https://api.rajaongkir.com/starter/province`;
    return callAPI({
      url,
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid",
        'Key':'2cde5c2e002d7033f11527ba0ae23de1',
      },
      token: false,
     
    });


  
  }

  export async function getData_Kota_ByProvinsiID(formrequest) {
    const url = `${env.API_GATEWAY_LOKAL}/getkotabyprovinsiid`;
    return callAPI({
      url,
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      formrequest,
      token: false,
    });


  
  }
  export async function getData_Kecamatan_ByKotaID(formrequest) {
    const url = `${env.API_GATEWAY_LOKAL}/getkecamatanbykotaid`;
    return callAPI({
      url,
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      formrequest,
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

  export async function getData_Master_Jenisbarang_Informasi() {
    const url = `http://192.168.15.20:8080/oms/cms/category-oci-logistics`;

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


  export async function getData_PesananSaya(formrequest) {
    const url = "http://192.168.15.20:9000/api/getDataPesananByUser";

    const response = await axios.post(url,  formrequest, {
   
      headers:{
      
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }

  
  export async function getData_DetailPesanan(id_so) {
    const url = "http://192.168.15.20:9000/api/getdetailpesanan/"+id_so;

    const response = await axios.get(url, {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Header':"Cache-Control, Content-Type,Xid"
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }


  export async function getData_DetailBarang(id_so,email) {
    const url = "http://192.168.15.20:8787/oms/oci-logistics/getdetailprodukbyid/"+id_so;

    const response = await axios.get(url, {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Xemail':email
      
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }


  
  export async function getData_LiveTracking(id_so,email) {
    const url = "http://192.168.15.20:8787/oms/oci-logistics/riwayat-pesanan-detail/"+id_so;

    const response = await axios.get(url, {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Xemail':email
      
      },
  });
  const axiosResponse = response.data;
 
  return axiosResponse;

  }


 





  






