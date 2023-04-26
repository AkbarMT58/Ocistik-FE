import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../frontend/admin/login/login.css'
import { useState,useRef,useEffect } from "react";
import { RecoilRoot } from "recoil";
import Primaryformbuatpesanan from "../../../../../components/pesanan/primaryformbuatpesanan";

function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);
  const isWindow = typeof window !== 'undefined';
  const getWidth = () => isWindow ? window.innerWidth : windowWidth;
  const resize = () => setWindowWidth(getWidth());

  return windowWidth;
}

const Index = () => {
  //fungsi set responsive
const widthSize = useScreenWidth()


const mobileWidth = 700

if(widthSize > mobileWidth){ 
    //logic for desktop

    var display_height_form='400px';

}

if(widthSize <= mobileWidth){ 
  //logic for mobile


  var display_height_form='430px';


}


  return (

    <RecoilRoot>
    <Primaryformbuatpesanan />
   </RecoilRoot>

   
    
  )
}

export default Index


