
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../dashboard/dashboard.css'
import Navbar_Dashboard  from '../../layout/navbar';
import { useState,useRef,useEffect } from "react";
import dateFormat from 'dateformat';
import env from "react-dotenv";
import Pagination from '../../../../../components/general/Pagination';
import axios from 'axios';
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from '../../layout/sidebar';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import 'material-icons/iconfont/material-icons.css';
import { getData_PesananSaya } from '../../../../../constants/api/logistik';
import { getData_DetailPesanan } from '../../../../../constants/api/logistik';


const PesananSaya = () => {

  const inputRef_DetailBarang = useRef(null);
  const inputRef_DetailProduk = useRef(null);
  const inputRef_LiveTracking= useRef(null);
  const [updated, setUpdated] = useState('');
  const [datapesanansaya, setDataPesananSaya] = useState(null)
  const [datadetailpesanan, setDataDetailPesanan] = useState(null)
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

   var tabledetailbarang,tabledetailproduk,tablelivetracking,label_text ;
  const handlerDetailBarang=(nomorpesanan)=>{

    setUpdated(inputRef_DetailBarang.current.value);

    
    console.log("lihat data click no pesanan :",  nomorpesanan)


  }

  const handlerDetailProduk=(nomorpesanan)=>{

    setUpdated(inputRef_DetailProduk.current.value);

    getDataDetailPesanan(nomorpesanan);

    
    console.log("lihat data click no pesanan :",  nomorpesanan)

    tabledetailbarang="none";
    tabledetailproduk="block";
    tablelivetracking="none";

    
  }

  const handlerLiveTracking=(nomorpesanan)=>{

    setUpdated(inputRef_LiveTracking.current.value);

    
    
    console.log("lihat data click no pesanan :",  nomorpesanan)

  
    tabledetailbarang="none";
    tabledetailproduk="none";
    tablelivetracking="block";


    
  }

  
if(updated=='detailbarang'){

  tabledetailbarang="block";
  tabledetailproduk="none";
  tablelivetracking="none";
  label_text="Detail Barang";



}

  
if(updated=='detailproduk'){

  tabledetailbarang="none";
  tabledetailproduk="block";
  tablelivetracking="none";
  label_text="Detail Pesanan";



}
  
if(updated=='livetracking'){

  tabledetailbarang="none";
  tabledetailproduk="none";
  tablelivetracking="block";
  label_text="Live Tracking";



}


if(updated==''){

  tabledetailbarang="block";
  tabledetailproduk="none";
  tablelivetracking="none";
  label_text="Detail Barang";



}



  // fungsi get data pesanan saya
  useEffect(() => {
    if(!datapesanansaya) {
      getDataPesananSaya()

    }
   

  }, [Pagination])


  const getDataPesananSaya = async () => {
    const res = await getData_PesananSaya();
    if (res.status === 200) {
      setDataPesananSaya(res.Data)
    }
  }

  
  const getDataDetailPesanan = async (id_so) => {

    const res = await getData_DetailPesanan(id_so);
    if (res.status === 200) {
      setDataDetailPesanan(res.Data)
    }
  }

  console.log("detail pesanan:",datadetailpesanan)


  return (
    <>
      <div id="header" style={{ display: 'flex' }}>

        <Sidebar/>
        
        <div className="container">
       
    <div className='bg_layerdashboard bg-aqua'>

    <div className='bg_dashboard bq-aqua'>

            <Navbar_Dashboard/>

            <center>

            <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'160px'}}>

                Pesanan Saya

            </div>

            </center>

                  
            <div class="container" style={{marginTop:'160px',marginLeft:'70px'}}>

              <div className='row'>

                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 
                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Semua</label>
                    <span class="button__badge">2</span>
                  </div>
                                
                </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                  
                <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Ditinjau</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Belum Bayar</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
               
                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Disorting</label>
                    <span class="button__badge">2</span>
                  </div>
                  
                  
                  </div>
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 

                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Dikirim</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  
                  </div>

                </div>
                <div className='col-md-2'>
                <div className='button_header mb-4 text-white text-center'>
                 
                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Selesai</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  </div>

                </div>
                <div className='col-md-2'>

                <div className='button_header mb-4 text-white text-center'>
                  
              

                  <div className='button_header mb-4 text-white text-center'>

                  <div class="button">
                    <label className='text-white' style={{marginTop:'10px'}}>Dibatalkan</label>
                    <span class="button__badge">2</span>
                  </div>


                  </div>
                  
                  
                  </div>

                </div>
             


              </div>

          

            <div className='box_pesanansaya'>
          <div className='box_1_pesanansaya text-white'>
          <label className='text-black mt-3' ><img src="/image/icons/Vector(8).png" style={{width:'20px', height:'20px',marginLeft:'5px'}} />  {label_text}</label>
          </div>

          <div className='row mt-4 m-2'>
          <div className='text-secondary col-md-7' style={{fontSize:'12px'}}>Tampilkan 
          <select>
            
            <option>5</option>
            <option>10</option>
            <option>20</option>
          
          </select>  <label className='text-black'>Entries</label>

          </div>

          <div className='col-md-5' >

            <div className='row'>

            <div className='col-md-2'>
            <label className='text-black'>Cari</label>
            </div>
            <div className='col-md-10'>
             
             <input type="text" className='form-control'  />

            </div>
            </div>
        
         


          </div>
         </div>
         <hr></hr>

         <div >
         
    <div className='row mt-4 py-4 -px-2'>

            <div className='col-md-12'>


            <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Gambar</th>
      <th scope="col" >No Pesanan</th>
      <th scope="col" >Tanggal</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead> 
  
  
  <tbody>

    
             
  {datapesanansaya?.map((rows,index) => (  
    <tr>
      <td>{index+1}</td>
      <td><img src="/image/image4.png" className='gambarproduk'/></td>
      <td>{rows.nomorpesanan}</td>
      <td>{rows.tanggalpesanan}</td>
      <td>{rows.status}</td>
      <td><button className='buttonpesanan text-white' onClick={() => handlerDetailBarang(rows.nomorpesanan)}>
      <input
        ref={inputRef_DetailBarang}
        type="hidden"
        id="message"
        name="message"
        value="detailbarang"
    
      />
        Detail Barang
        
        </button>
      <br></br>
      <button className='buttonpesanan text-white' onClick={() => handlerDetailProduk(rows.nomorpesanan)}>
      <input
        ref={inputRef_DetailProduk}
        type="hidden"
        id="message"
        name="message"
        value="detailproduk"
    
      />
        Detail Pesanan
        </button>
      <br></br>
      <button className='buttonpesanan text-white'  onClick={() => handlerLiveTracking(rows.nomorpesanan)}>

      <input
        ref={inputRef_LiveTracking}
        type="hidden"
        id="message"
        name="message"
        value="livetracking"
    
      />
        
        Live Tracking
        
        </button>
      <br></br>
      <a href={'/admin/pembayaran'}><button className='buttonpesanan text-white'>Bayar</button></a>
      
      
      </td>

    </tr>

    

    ))} 



  </tbody>  


  

</table>





            </div>
          

          </div>

          </div>

          <div>

<div style={{display:tabledetailbarang}}>
  <div className='text-black alert alert-success m-4' style={{fontWeight:'bold'}}>{label_text}</div>
  <table className="table border" style={{width:'96%',marginTop:'-25px',marginLeft:'24px'}}>
  <thead>
    <tr>
      <th scope="col">Nama Barang</th>
      <th scope="col">Gambar</th>
      <th scope="col" >Qty</th>
      <th scope="col" >Dimensi</th>
      <th scope="col">Volume</th>
      
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <td>Sendal</td>
      <td><img src="/image/image4.png" className='gambarproduk'/></td>
      <td> 75647356565456</td>
      <td>30-11-2023 11:16:23 WIB</td>
      <td>Belum Bayar</td>
    

    </tr>
   

  </tbody>
</table>
</div>
{/* 
daerah detail produk */}
<div style={{display:tabledetailproduk}}>

  <div className='text-black alert alert-success m-4' style={{fontWeight:'bold'}}>{label_text}</div>
  {datadetailpesanan?.map((details,index) => (  
          <div className='row m-4'>

          <div className='col-md-4'>
            <div classNmae="text-black"  style={{fontWeight:'bold',marginBottom:'20px'}}>Tipe Pengiriman <label style={{marginLeft:'110px',fontWeight:'normal'}} >:   
            
            
             {(details.tipe_pengiriman ===0 ? ("Udara") :  "Laut")}


</label>  </div>
            <div classNmae="text-black"  style={{fontWeight:'bold',marginBottom:'20px'}}>Ekspedisi Lokal <label style={{marginLeft:'120px',fontWeight:'normal'}}>: {details.ekspedisi_lokal}</label></div>
            <div classNmae="text-black"  style={{fontWeight:'bold',marginBottom:'100px'}}>Alamat Pengiriman <label style={{marginLeft:'81px',fontWeight:'normal'}}>: {details.namajalan}</label> </div>
            <div classNmae="text-black"  style={{fontWeight:'bold',marginBottom:'20px'}}>Total Harga <label style={{marginLeft:'145px',fontWeight:'normal'}}>:{details.estimasi_biaya_kirim}</label> </div>
          </div>
          <div className='col-md-8'>
          </div>


          </div>
))}
</div>

{/* 
Live Tracking */}
<div style={{display:tablelivetracking}}>
  <div className='text-black alert alert-success m-4' style={{fontWeight:'bold'}}>{label_text}</div>

  <div className='row'>

    <div className='col-md-4'>
  <div className='m-4' style={{width:"100%"}}>

  <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
    <br />
    
  </div>

  </div>

  <div className='col-md-4'>
  <Timeline>
            <TimelineEvent title={<label style={{color:'blue'}}>Menunggu Pick Up</label>}
                           createdAt={<label style={{color:'blue'}}>Seller - Selasa, 17 Jan 2023</label>}
                           icon={<i className="material-icons-outlined" style={{color:'blue'}}>radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pemesanan sedang diproses oleh penjual."
                           createdAt="Seller - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pembayaran sudah diverivikasi.
                  Pembayaran telah diterima oleh Ocistok dan pesanan sudah diteruskan ke penjual."
                           createdAt="Lomiles - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pembayaran sudah diverivikasi.
                  Pembayaran telah diterima oleh Ocistok dan pesanan sudah diteruskan ke penjual."
                           createdAt="Lomiles - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pembayaran sudah diverivikasi.
                  Pembayaran telah diterima oleh Ocistok dan pesanan sudah diteruskan ke penjual."
                           createdAt="Lomiles - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pembayaran sudah diverivikasi.
                  Pembayaran telah diterima oleh Ocistok dan pesanan sudah diteruskan ke penjual."
                           createdAt="Lomiles - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
            <TimelineEvent title="Pembayaran sudah diverivikasi.
                  Pembayaran telah diterima oleh Ocistok dan pesanan sudah diteruskan ke penjual."
                           createdAt="Lomiles - Selasa, 17 Jan 2023"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
              
            </TimelineEvent>
          
    </Timeline>,
    
  </div>
  <div className='col-md-4'>
  <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons-outlined">radio_button_checked</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>,

  </div>

  </div>

         
</div>

          </div>

          </div>

        
                        



                      
                                
            </div>

           
            
    </div>


</div>
    
         
        </div>

        
      
      </div>
    </>
  );
};

export default PesananSaya;