import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Callus() {
    const [navbar, setNavbar] = useState(false);

const Bg_Gambar = styled.div`
background-image: url(${'/image/unsplash_FPKnAO-CF6M_kontak.png'});
background-repeat: no-repeat;
max-width: 2000px;
background-size:100% auto;
height:380px ;
align:center;
margin: auto;
`;

const Border =styled.hr`
border-style: inset;
width: 15%;
height: 0px;
left: 800px;
top: 600px;
border: 5px solid #FFFFFF;
margin:auto;


`;



const Button_Whatsapp =styled.div`

box-sizing: border-box;
width: 200px;
height: 60px;
border: 1px solid #000000;
margin-top:150px;
border-radius:20px;
background-color:#128c7e;
color:white;
font-weight:bold;
`;





    return (
<>
    <Bg_Gambar >
        <nav className="w-full bg-transparent-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white"><img  src="/image/logo.png" ></img></h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="/home">Home</a>
                            </li>
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="javascript:void(0)">Tentang Kami</a>
                            </li>
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="/layanan">Layanan</a>
                            </li>
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="/artikel">Artikel</a>
                            </li>
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="/kontak">Kontak</a>
                            </li>
                            <li className="text-white hover:bg-sky-700 px-3 py-1 rounded-lg">
                                <a href="/hitungbiaya">Hitung Biaya</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  
                </div>
                    </div>
                </div>
               
            </div>
        </nav>


       
        <h1 style={{textAlign:"center",color:'white',fontSize:'3vw'}}>CALL US</h1>
        <Border></Border>
        
        

        <section style={{height:'0vh'}}>




         <div style={{marginTop:"400px"}}>
          <center>
        <div class="p-10 w-72 border-4 border-orange-200 rounded-full bg-amber-600">

       
        <img  src="/image/logo.png" style={{width:'500px'}} ></img>
        
        </div>

        <div className="text-4xl mt-10 font-bold">

             OCI Logistik


        </div>

        <div className="text-2xl">
        <Button_Whatsapp><label style={{marginTop:'0px'}}>Continue Chat</label></Button_Whatsapp>
        </div>

       

        </center>

        </div>


        </section>

        <section style={{height:'0vh'}}>
        

        </section>

        <section style={{height:'100vh'}}>

           



        </section>

     
    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
