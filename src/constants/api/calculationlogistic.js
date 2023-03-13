import axios from 'axios';
import callAPI from '../../configs/axios';
import env from "react-dotenv";



export async function getData_Master_Categories(volume,berat,kategori_barang) {
    const url = `${env.API_GATEWAY}/oci/calculation/${volume}/${berat}/${kategori_barang}`;
  
    return callAPI({
      url,
      method: 'POST',
      token: true,
    });
  }

