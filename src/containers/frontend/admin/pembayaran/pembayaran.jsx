
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../layout/navbar';
import Sidebar from '../layout/sidebar';



const Pembayaran = () => {

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

          
    <div class="container" style={{marginTop:'160px'}}>




<div className='box_pesanansaya'>
<div className='box_1_pesanansaya text-white'>
<label className='text-black mt-3' ><img src="/image/icons/Vector(8).png" style={{width:'20px', height:'20px',marginLeft:'5px'}} /> Pilih Metode Pembayaran</label>
</div>



<div className='row m-4'>

<div className='col-md-6'>
<div className="text-black">Transfer Bank</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/bca_.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BCA</label><input style={{marginLeft:'200px',marginTop:'10px'}} type="checkbox"/></div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/mandiri_.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank Mandiri</label><input style={{marginLeft:'175px',marginTop:'10px'}} type="checkbox"/></div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/bni_.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BNI</label><input style={{marginLeft:'210px',marginTop:'10px'}} type="checkbox"/></div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/permata_.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank Permata</label><input style={{marginLeft:'165px',marginTop:'10px'}} type="checkbox"/></div>
<div className="tranfer_setclass mb-4"><img src="/image/icons/bri_.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BRI</label><input style={{marginLeft:'210px',marginTop:'10px'}} type="checkbox"/></div>
<div className="text-black">E-Wallet</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/gopay.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Gopay</label><input style={{marginLeft:'220px',marginTop:'10px'}} type="checkbox"/></div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/shoppe.png" style={{width:'50px', height:'30px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Shoppe</label><input style={{marginLeft:'210px',marginTop:'10px'}} type="checkbox"/></div>

</div>


<div className='col-md-6'>
<div className="text-black">Kartu Kredit</div>
<div className="tranfer_setclass mb-2"></div>
<div className="tranfer_setclass mb-2"></div>
<div className="tranfer_setclass mb-4"></div>
<div className="text-black">Alfa Group</div>
<div className="tranfer_setclass mb-2"></div>
<div className="tranfer_setclass mb-2"></div>

</div>


</div>

<div className="text-black m-4">Total Harga</div>

<div>


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

export default Pembayaran;