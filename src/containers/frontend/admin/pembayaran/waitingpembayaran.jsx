
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'
import Navbar_Dashboard  from '../layout/navbar';
import Sidebar from '../layout/sidebar';



const Waitingpembayaran = () => {

  const [inputsignout, setSignout] = useState(''); 
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

   // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('02:00:59');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 7200);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
       
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
   
       

  



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
    <div className="papanexpiredtime">

        <div className="text-white mt-4" >sisa waktu pembayaran</div>
        <div className="text-white fs-4" >{timer}</div>


    </div>
</center>

<br></br>

<center>
<div className="boxinformasi">

    <div style={{marginTop:'-20px'}}>

    <div className="text-black">Total Harga</div>
    <div className="text-black fs-3 font-bold mb-4">Rp.31.000.000</div>
    <hr style={{border:"2px solid #0886AD"}}></hr>

    <div className="text-black">No. Rekening Bank BCA</div>
    
    <div className="text-black mb-4">1234 5678 9101</div>
    <div className="text-black">Cara Melakukan Pembayaran</div>

    <div>1. Pergi ke ATM atau lewat aplikasi M-Banking</div>
    <div style={{marginLeft:'-105px'}}>2. Pilih menu transfer antar bank</div>
    <div style={{marginLeft:'-15px'}}>3. Masukkan Bank BCA sebagai bank tujuan</div>
    <div style={{marginLeft:'-130px'}}>4. Masukkan nominal transfer</div>
    <div style={{marginLeft:'-65px'}}>5. Masukkan pin dan lakukan transfer</div>

    </div>



</div>

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

export default Waitingpembayaran;