
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'



const Navbar_Dashboard = () => {

  const [inputsignout, setSignout] = useState('');


  const handlersignout=()=>{





  }
  
   

  return (
    <>


<nav className="navbar navbar-dark bg-aqua w-100" >
        <a className="navbar-brand fs-6" href="#">

          <div className='text-white' style={{marginLeft:'900px'}}>
            <img src="/image/icons/user.png" style={{width:'20px', height:'20px'}} />
             <select style={{backgroundColor:'transparent',border:'0px',color:'white',marginLeft:'20px'}} onClick={handlersignout}>

            <option>Username</option>
            <option value="out">Sign Out</option>

            </select>

        </div>
         

         
            
            
      </a>
    </nav>


     
    </>
  );
};

export default Navbar_Dashboard;