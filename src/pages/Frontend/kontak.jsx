import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Kontak() {
    const [navbar, setNavbar] = useState(false);

const Bg_Gambar = styled.div`
background-image: url(${'/image/unsplash_FPKnAO-CF6M_kontak.png'});
background-repeat: no-repeat;
max-width: 2000px;
background-size:100% auto;
height:680px ;
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


const LCL_Laut_Form = styled.div `
position: absolute;
width: 736px;
height: 107px;
left: 50%;
top: 0px;
color:white;
transform: translate(-50%, 0);
background: #0076B8;
border-radius: 0px 0px 30px 30px;
margin:auto;
font-size:32px;
`;


const Kirim_Pesan =styled.div`
position:absolute;
width: 156px;
height: 42px;
left:50%;
top: 480px;
transform: translate(-50%, 0);
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 10px;
color:white;
margin:auto;
`;



const TitleBlock =styled.div`
position: absolute;
width: 300px;
height: 42px;
left: 50%;
color:white;
top: 0;
transform: translate(-50%, 0);
background: linear-gradient(180deg, #0074B5 0%, #13A4F4 53.65%, #13A4F4 100%);
border-radius: 0px 0px 50px 50px;
`;

const Button_more =styled.div`

box-sizing: border-box;
position: absolute;
width: 128px;
height: 45px;
left:25%;
transform: translate(-50%,0);
border: 1px solid #000000;
margin-top:20px;


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
                                <a href="/tentangkami">Tentang Kami</a>
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

          <section style={{height:'90vh'}}>
            <center>
            <div className="shadow-2xl w-800 h-600 bg-green-200 rounded-lg" style={{backgroundColor: '#FFFFFF',marginTop:'550px', height:'680px',width:'900px',paddingTop: 42}}>

         
          
            <div className="grid gap-4 mb-12 md:grid-cols-2 m-4">

            <div className="mb-8 mt-4">

            <div className="text-2xl font-bold m-1" >Ingin Bertanya Mengenai Impor</div>
            <div className="text-base m-2" >Konsultasi saja dengan kami sekarang melalui whatsapp,email atau datang ke kantor saja!</div>

            
            <div  className="mt-10" style={{textAlign:'left'}}>
                JAKARTA OFFICE
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
               
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
              
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
            PT. Ocommerce Capital Indonesia
            Email: info@ocistok.com
               
            </div>
            <div  className="mt-10" style={{textAlign:'left'}}>
            Gedung Wisma IWI Jl. Arjuna Sel. No.75, Lt. 7, RT.2/RW.12, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
            021-50867088
            info@ocistok.com
            </div>

             

            </div>
            <div className="mb-4">

            <div className="shadow-2xl w-800 h-600 bg-green-200 rounded-lg relative" style={{backgroundColor: '#FFFFFF',marginTop:'0px', height:'580px',width:'400px',paddingTop: 42}} >


            <div  className="mt-10" style={{textAlign:'center',fontWeight:'bold'}}>
                DROP US MESSAGE
            </div>

            <div className="grid gap-4 mb-2 md:grid-cols-2 m-4">

                <div className="mb-4">

                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama" required/>


                </div>

                <div className="mb-8">

                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>


                    
                </div>


            </div>

            <div className="m-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Phone Number</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required/>



            </div>

            <div className="m-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Pesan</label>
            <textarea id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required/>



            </div>


            <Kirim_Pesan>Kirim</Kirim_Pesan>

           


            </div>

            </div>
          
           

            </div>
        

           

      


           
          </div>
          </center>

          </section>


     
     
    


     
     
    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
