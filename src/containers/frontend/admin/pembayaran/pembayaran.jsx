
import React from 'react'
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../layout/navbar';
import Sidebar from '../layout/sidebar';



const Pembayaran = () => {

  const [inputsignout, setSignout] = useState('');
  const [tipepembayaran, setTipePembayaran] = React.useState("bca");

  
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
<div className="tranfer_setclass mb-2"><img src="/image/icons/bca_.png" style={{width:'50px', height:'25px',marginLeft:'11px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BCA</label>

 <input style={{marginLeft:'200px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "bca"}
                                                    onChange={() => setTipePembayaran("bca")}
                                                  />
                                                 </div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/mandiri_.png" style={{width:'50px', height:'25px',marginLeft:'11px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank Mandiri</label> 
<input style={{marginLeft:'175px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "mandiri"}
                                                    onChange={() => setTipePembayaran("mandiri")}
                                                  />
                                                  </div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/bni_.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BNI</label>

<input style={{marginLeft:'210px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "bni"}
                                                    onChange={() => setTipePembayaran("bni")}
                                                  />
</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/permata_.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank Permata</label>

<input style={{marginLeft:'165px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "permata"}
                                                    onChange={() => setTipePembayaran("permata")}
                                                  />

</div>
<div className="tranfer_setclass mb-4"><img src="/image/icons/bri_.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Bank BRI</label>

<input style={{marginLeft:'210px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "bri"}
                                                    onChange={() => setTipePembayaran("bri")}
                                                  />
</div>
<div className="text-black">E-Wallet</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/gopay.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Gopay</label>

<input style={{marginLeft:'220px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "gopay"}
                                                    onChange={() => setTipePembayaran("gopay")}
                                                  />
</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/shoppe.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'10px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Shoppe</label>

<input style={{marginLeft:'210px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "shoppepay"}
                                                    onChange={() => setTipePembayaran("shoppepay")}
                                                  />
</div>

</div>


<div className='col-md-6'>
<div className="text-black">Kartu Kredit</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/visa.png" style={{width:'40px', height:'25px',marginLeft:'10px',marginTop:'11px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Visa</label>

<input style={{marginLeft:'250px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "visa"}
                                                    onChange={() => setTipePembayaran("visa")}
                                                  />
</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/mastercard.png" style={{width:'40px', height:'25px',marginLeft:'10px',marginTop:'11px'}}/><label className="text-black" style={{marginLeft:'100px'}}>Master Card</label>
<input style={{marginLeft:'185px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "mastercard"}
                                                    onChange={() => setTipePembayaran("mastercard")}
                                                  />
                                                  </div>
<div className="tranfer_setclass mb-4"><img src="/image/icons/jcb.png" style={{width:'40px', height:'25px',marginLeft:'10px',marginTop:'11px'}}/><label className="text-black" style={{marginLeft:'100px'}}>JCB</label>
<input style={{marginLeft:'252px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "jcb"}
                                                    onChange={() => setTipePembayaran("jcb")}
                                                  />
</div>
<div className="text-black">Alfa Group</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/alfamart.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'11px'}}/><label className="text-black" style={{marginLeft:'95px'}}>Alfamart</label>
<input style={{marginLeft:'210px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "alfamart"}
                                                    onChange={() => setTipePembayaran("alfamart")}
                                                  />
</div>
<div className="tranfer_setclass mb-2"><img src="/image/icons/alfamidi.png" style={{width:'50px', height:'25px',marginLeft:'10px',marginTop:'11px'}}/><label className="text-black" style={{marginLeft:'95px'}}>Alfamidi</label>
<input style={{marginLeft:'215px'}}
                                                    type="checkbox"
                                                    checked={tipepembayaran === "alfamidi"}
                                                    onChange={() => setTipePembayaran("alfamidi")}
                                                  />
</div>


</div>


</div>
<hr></hr>

<div className="row mb-4" style={{marginTop:'-30px'}}>

<div className="col-md-6">

<div className="text-black m-4 fs-4" >Total Harga</div>  

</div>


<div className="col-md-5" style={{marginLeft:'60px'}}>

<div className="text-primary m-4 fs-4 text-end mb-4" >Rp.31.000.000</div>  

</div>


<div>

<a href="/admin/pembayaran/waitingpembayaran" ><button  className="submitbutton"><label className="text-white">Bayar</label></button></a>


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

export default Pembayaran;