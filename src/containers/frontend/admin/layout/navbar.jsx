
import { useState,useRef,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../frontend/admin/dashboard/dashboard.css'



const Navbar_Dashboard = () => {

  const [inputsignout, setSignout] = useState('');
  const select_signout = useRef('');

  const [items, setItems] = useState('');

useEffect(() => {
  const items = localStorage.getItem('nama');
  if (items) {
   setItems(items);
  }
}, []);


  const handlersignout=()=>{

    var signout=select_signout.current.value;



    if (signout=='out'){

      window.location.href="/login";


    }



  }
  
   

  return (
    <>


<nav className="navbar navbar-dark bg-aqua w-100" >
        <a className="navbar-brand fs-6" >

          <div className='text-white' style={{marginLeft:'1000px'}}>
            <img src="/image/icons/user.png" style={{width:'20px', height:'20px'}} />
             <select ref={select_signout} style={{backgroundColor:'#3b5998',border:'0px',color:'white',marginLeft:'20px'}} onClick={handlersignout}>

            <option>{items}</option>
            <option value="out">Sign Out</option>

            </select>

        </div>
         

         
            
            
      </a>
    </nav>


     
    </>
  );
};

export default Navbar_Dashboard;