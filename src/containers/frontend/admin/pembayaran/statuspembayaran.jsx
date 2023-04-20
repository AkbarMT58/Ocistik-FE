
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../layout/navbar';
import Sidebar from '../layout/sidebar';



const Statuspembayaran = () => {

  const [inputsignout, setSignout] = useState('');

  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  const handlersignout=()=>{


  }
  
   

  return (
    <>

    
<div id="header" style={{ display: 'flex' }}>

<Sidebar/>


<div className="container">

<div className='bg_layerdashboard bg-aqua'>

<div className='bg_dashboard bq-aqua'>

    <Navbar_Dashboard/>

    <center>

    <div className='text-white fs-3' style={{fontWeight:'bold',marginTop:'120px'}}>

        Pembayaran

    </div>

    </center>

          
    <div class="container" style={{marginTop:'80px'}}>

<div className='box_pembayaran'>
<div className='box_1_pembayaran text-white'>
<label className='text-black mt-3' ><img src="/image/icons/Vector(8).png" style={{width:'20px', height:'20px',marginLeft:'5px'}} /> Pembayaran</label>
</div>
<br></br>

<center>
   
        <div className="text-black mt-4 fs-4 mb-4" >Pembayaran Berhasil</div>
        <div ><img src="/image/icons/berhasil.png" style={{width:'200px', height:"200px"}} /></div>

        <div className="boxstatuspembayaran mt-4">

    <div style={{marginTop:'20px'}}>

        <div className="row mb-4" style={{marginLeft:'-50px'}}>

            <div className="col-md-8 text-black" >Jumlah Pembayaran</div>
            <div className="col-md-4 text-black" style={{marginLeft:'0px'}}>Rp 600.890</div>
            <div className="col-md-8 text-black" >Metode Pembayaran</div>
            <div className="col-md-4 text-black" style={{marginLeft:'0px'}}>Bank BCA</div>

            <a href="/admin/pesanan" ><button className="lihatpesanan" style={{marginTop:'50px'}}>Lihat Pesanan</button></a>


        </div>

   
    </div>



</div>
      

</center>

<br></br>

<center>


</center>




</div>
             
</div>


</div>
</div>
</div>
</div>

     
    </>
  );
};

export default Statuspembayaran;