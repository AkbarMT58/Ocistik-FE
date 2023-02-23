import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Home() {
    const [navbar, setNavbar] = useState(false);
   
const Section_1 = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Bg_Gambar = styled.div`
background-image: url(${'/image/unsplash_FPKnAO-CF6M.png'});
background-repeat: no-repeat;
max-width: 2000px;
background-size:100% auto;
height:680px ;
margin: auto;
`;

const Word_1 =styled.div`
color:white;
margin-top:400px;
font-size:34px;
`;

const Word_2 =styled.div`
color:white;
margin-top:80px;
position: relative;
width: 156px;
height: 42px;
left: 900px;
top: -30px;
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 0px 20px;
`;


const Word_3 =styled.div`
color:white;
margin-top:80px;
position: relative;
width: 156px;
height: 42px;
left: 900px;
top: -65px;
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 10px;
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


const Wording_End =styled.div`
position: absolute;
width: 1045px;
height: 174px;
left: 25%;
color:white;
top:88px;
font-size:50px;
transform: translate(0%, -50%);
background: rgba(73, 124, 231, 0.67);
border-radius: 0px 0px 80px 80px;
`;


const Hitung_Biaya_Btn =styled.div`
color:white;
margin-top:80px;
position: absolute;
width: 156px;
height: 42px;
left: 900px;
top: 620px;
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 10px;
`;

const navbar_item =styled.li`
overflow: hidden;
background-color: transparent;
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 15px;

`;

const Word_5= styled.div`

margin-top:100px;

`;

const Box = styled.div`
margin:40px;
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
overflow: hidden;
background: linear-gradient(180deg, #62C7FF 0%, #327CA5 100%);
border-radius: 30px;
height: 283px;
width: 278px;
border-radius: 30px;


`;

const Box_button =styled.div`
box-sizing: border-box;
position: absolute;
width: 200px;
height: 57px;
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border: 0.5px solid rgba(0, 139, 217, 0.77);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;

const Box_button_2 =styled.div`
box-sizing: border-box;
position: absolute;
width: 200px;
height: 57px;
background: #FFFFFF;
border: 0.5px solid rgba(59, 166, 226, 0.77);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin-left:230px;
`;

const Box_button_3 =styled.div`
box-sizing: border-box;
position: absolute;
width: 200px;
height: 57px;
background: #FFFFFF;
border: 0.5px solid rgba(0, 139, 217, 0.77);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin-left:460px;
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
                                <a href="/tentangkami">Tentang Kami</a>
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
                    {/* <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a> */}
                    {/* <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a> */}
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {/* <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a> */}
                </div>
            </div>
        </nav>


        <Word_1><h1 style={{textAlign:"center"}}>Termurah Dan Tercepat</h1></Word_1>


        <Word_2><h5 style={{textAlign:"center",marginTop:'5px'}}>Hubungi Kami</h5></Word_2>
       


        <div className="shadow-2xl w-500 h-600 bg-green-200 rounded-lg" style={{backgroundColor: 'white',marginTop:'120px',height:'250px',padding:'0px 10px'}}>

        <h2  style={{color:'#0F8ED6',fontSize:'24px'}} >Cek Resi Ocistik</h2>
        <p className="mb-5">Silakan masukan kode di bawah ini</p>
        
  
        <div className="grid gap-6 mb-6 md:grid-cols-2">

            <div className="mb-6">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Resi</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-6">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Marking</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
           </div>
        </div>

        <Word_3><h5 style={{textAlign:"center",marginTop:'8px'}}>Cek Resi</h5></Word_3>

        </div>

        <section style={{height:'95vh'}}>

        <div className="shadow-2xl w-500 bg-green-200 rounded-lg relative" style={{backgroundColor: 'white', marginTop:'120px', height:'250px', paddingTop: 42,backgroundImage:`url("/image/unsplash_nPy0X4xew60rev.png")`}}>
            <TitleBlock>
                <h5 style={{textAlign:"center", marginTop:'8px'}}>
                    Pengiriman Tercepat Secepat Kilat
                </h5>
            </TitleBlock>
            <div className="mt-5 text-white text-center text-2xl">
                Dengan OCI Logistik proses import dari China dijamin paling cepat dan paling aman baik via laut maupun via udara. Semua pengiriman kami hanya melalui jalur direct, tanpa transit di negara lain, oleh karena itu barang anda dijamin aman dan cepat sampai.
            </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
            <Box>
                <center>
                <img src="/image/CEPAT-removebg-preview (1) 2.png" />
                <label style={{fontsize:'30px',color:'white' }}>Pengiriman Cepat</label>

                </center>
            </Box>

            <Box>
                <center>
               <img src="/image/CEPAT-removebg-preview (1) 3.png" />
               <label style={{fontsize:'30px',color:'white' }}>Easy Tracking</label>
               </center>

            </Box>

            <Box>
               <center>
              <img src="/image/CEPAT-removebg-preview (1) 4.png" />
              <label style={{fontsize:'30px',color:'white' }}>Kemudahan Pembayaran</label>
              </center>

            </Box>

             <Box>
               <center>
              <img src="/image/CEPAT-removebg-preview (1) 1.png" />
              <label style={{fontsize:'30px',color:'white' }}>Harga Ekonomis</label>
              </center>
            </Box>
        </div>


        </section>

        <section style={{height:'80vh'}}>

        <div className="shadow-2xl w-500 bg-green-200 rounded-lg relative" style={{backgroundColor: 'white', marginTop:'120px', height:'250px', paddingTop: 42,backgroundImage:`url("/image/Rectangle 83.png")`}}>
            <div className="mt-5 text-white text-center text-2xl">
              Hitung Biaya Import
            </div>

            <center>
            <div className="box-content h-50 w-50 p-4 border-1" style={{backgroundColor: 'white', marginTop:'120px', height:'520px',width:'1800px',borderRadius:'20px', paddingTop: 42}}>
            <Box_button><label className="text-white mt-4">LCL BY SEA</label></Box_button>
            <Box_button_2><label className="text-sky-400 mt-4" >FCL BY SEA</label></Box_button_2>
            <Box_button_3><label className="text-sky-400 mt-4" >FCL BY AIR</label></Box_button_3>

            <div className="my-24 text-2xl font-bold" style={{marginLeft:'-1550px'}}>Hitung Biaya Import</div>
            <div className="text-xl" style={{marginLeft:'-1490px',marginTop:'-90px'}}>Silakan Isi Informasi Di Bawah Ini</div>
            <div className="grid gap-4 mb-12 md:grid-cols-2">

            <div className="mb-8">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama Barang</label>
            <select  id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required>
                <option>--Pilih Nama Barang--</option>
                <option></option>


            </select>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Berat Barang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
           </div>

           <div className="grid gap-4 mb-12 md:grid-cols-3">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Panjang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Lebar</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Tinggi</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>


           </div>

           <Hitung_Biaya_Btn>

           <h5 style={{textAlign:"center",marginTop:'5px'}}>Hitung Biaya</h5>


           </Hitung_Biaya_Btn>

            </div> 
            </center>
        </div>

       

            
      </section>

        <section style={{height:'90vh'}}>

        <Carousel>
                <div>
                <Wording_End>

                <h1 style={{textAlign:"center", marginTop:'8px'}}>
                            Apa Kata Mereka Tentang Ocistok
                </h1>

                </Wording_End>
                    <img src="/image/Rectangle 83-1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <Wording_End>

                <h1 style={{textAlign:"center", marginTop:'8px'}}>
                            Apa Kata Mereka Tentang Ocistok
                </h1>

                </Wording_End>
                    <img src="/image/Rectangle 83-1.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Wording_End>

                <h1 style={{textAlign:"center", marginTop:'8px'}}>
                            Apa Kata Mereka Tentang Ocistok
                </h1>

                </Wording_End>
                    <img src="/image/Rectangle 83-1.png" />
                    <p className="legend">Legend 3</p>
                </div>

           
        </Carousel>


      


        

        
        </section>
 
    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
