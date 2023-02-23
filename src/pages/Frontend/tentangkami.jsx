import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Tentangkami() {
    const [navbar, setNavbar] = useState(false);

const Bg_Gambar = styled.div`
background-image: url(${'/image/unsplash_FPKnAO-CF6M-1.png'});
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
                            <li className="text-white hover:text-indigo-200">
                                <a href="/home">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Tentang Kami</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/layanan">Layanan</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/artikel">Artikel</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/kontak">Kontak</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/hitungbiaya">Hitung Biaya</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  
                </div>
                    </div>
                </div>
               
            </div>
        </nav>


       
        <h1 style={{textAlign:"center",color:'white',fontSize:'3vw'}}>TENTANG KAMI</h1>
        <Border></Border>
        <h1 style={{textAlign:"center",color:'white',fontSize:'2vw'}}>Solusi Utama dalam Pengiriman Internasional</h1>

        

        <section style={{height:'0vh'}}>
        <div className="shadow-2xl w-500 h-600 bg-green-200 rounded-lg" style={{backgroundColor: '#0F8FD7',marginTop:'250px', height:'280px', paddingTop: 42}}>

            <div className="grid gap-4 mb-12 md:grid-cols-2">

            <div className="mt-5 text-white text-center text-base">
            OCIstik adalah spesialis jasa import export China-Indonesia dan seluruh dunia yang terbaik, tercepat dan termurah. Jasa kami merupakan Door to Door dan All In, dimana pengiriman dari gudang supplier dan langsung ke alamat anda dan pembayaran sudah termasuk asuransi, garansi dan pajak. Jadi tidak perlu khawatir adanya biaya tersembunyi.Anda juga tidak perlu khawatir dalam memilih supplier barang China yang terdapat di Marketplace China, karena tim spesialis importir barang China kami akan membantu Anda menemukan yang terpercaya.
            </div>

            <div className="-mt-52 ml-50">
                 <img className="h-30 object-cover sm:w-30" src='/image/impor_ekspor-removebg-preview 2.png' />
            </div>

            </div>
 
        </div>


        </section>

        <section style={{height:'0vh'}}>
        <div className="shadow-2xl w-500 h-600 bg-green-200 rounded-lg" style={{backgroundColor: '#5FA5FF',marginTop:'450px', height:'280px', paddingTop: 42}}>

        <div className="grid gap-2 mb-12 md:grid-cols-2">

            <div className="-mt-52">

            <img className="h-30 object-cover sm:w-30" src='/image/customer_service-removebg-preview 2.png' />
         
            </div>

            <div className="text-white text-left text-base mt-20 -ml-60">
                 
                 Kepuasan pelanggan adalah prioritas utama kami, semua kendala ataupun masalah yang anda akan alami selama impor menjadi tanggung jawab dan garansi kami. Di OCIstik, customer tidak akan dibebani sedikitpun karena semua proses akan kami selesaikan sampai tuntas
            </div>

        </div>
 
        </div>


        </section>

        <section style={{height:'100vh'}}>

            <center>

            <div style={{marginTop:'400px'}} >

            <img className="h-50 h-full object-cover sm:w-50 w-full" src='/image/unsplash_Q80LYxv_Tbs.png' />
         
            </div>

            </center>




        </section>

     
    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
