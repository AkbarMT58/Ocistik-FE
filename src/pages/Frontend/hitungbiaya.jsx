import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Layanan() {
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




const Hitung_Biaya_Btn =styled.div`
position:absolute;
width: 156px;
height: 42px;
left:90%;
top: 850px;
transform: translate(-50%, 0);
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 10px;
color:white;
margin:auto;
`;



const Hitung_Biaya_Darat__Btn =styled.div`
position:absolute;
width: 156px;
height: 42px;
left:90%;
top: 950px;
transform: translate(-50%, 0);
background: linear-gradient(90deg, #008BD9 25%, #56C3FF 81.35%);
border-radius: 10px;
color:white;
margin:auto;
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
                                <a href="/callus">Call Us</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  
                </div>
                    </div>
                </div>
               
            </div>
        </nav>


       
        <h1 style={{textAlign:"center",color:'white',fontSize:'3vw'}}>HITUNG BIAYA</h1>
        <Border></Border>



    <section style={{height:'300vh'}}>


       <div className="shadow-2xl w-500 bg-green-200 rounded-lg relative m-2" style={{backgroundColor: 'white', marginTop:'120px',marginBottom:'400px', height:'623px', paddingTop: 42,backgroundImage:`url("/image/unsplash_2vPGGOU-wLA-1.png")`}}>
            
            
            <LCL_Laut_Form>

                <h5 style={{textAlign:"center", marginTop:'30px'}}>

            Hitung Biaya
                    
                </h5>
            </LCL_Laut_Form>
       

            <div className="text-white mt-40 text-center text-2xl">

            Less Container Load via laut adalah jasa pengiriman lewat laut dimana anda bisa mengimpor dalam jumlah kecil karena barang anda akan dicampur dengan barang orang lain untuk memenuhi 1 container. Di jasa import OCI Logistic, kami dapat mengimpor barang anda TANPA MINIMAL pengiriman!


            </div>
           
            <div className="shadow-2xl w-500 h-600 bg-green-200 rounded-lg" style={{backgroundColor: '#FFFFFF',marginTop:'200px', height:'580px', paddingTop: 42}}>

            <div className="text-2xl font-bold m-2" >Hitung Biaya Import</div>
            <div className="text-xl m-2" >Silakan Isi Informasi Di Bawah Ini</div>


            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

                <div>

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Pilih Tipe Pengiriman</label>
            <select type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required>
             <option>--Pilih Tipe Pengiriman</option>
             <option>Darat</option>
             <option>Laut</option>
             <option>Udara</option>
              
            </select>
            </div>

            </div>

            <div className="laut" style={{display:'block'}}>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama Barang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Berat Barang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
          

            </div>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Panjang (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Lebar (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Tinggi (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>


            </div>

            </div>


            <div className="udara" style={{display:'none'}}>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama Barang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Berat Barang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>


            </div>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Panjang (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Lebar (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Tinggi (Cm)</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>


            </div>

            </div>



          <div className="darat" style={{display:'none'}}>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Nama Lengkap </label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email </label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Whatsapp</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>


            </div>
            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">HS Code</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Mata Uang</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Total Invoice</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            </div>

            <div className="grid gap-4 mb-12 md:grid-cols-3 m-4">

            <div className="mb-4">

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Container Type</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No Resi" required/>

            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Origin City</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            <div className="mb-4">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Destination City</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kode Marking" required/>
            </div>
            </div>

            </div>

        




            <Hitung_Biaya_Darat__Btn>

            <h5 style={{textAlign:"center",marginTop:'5px'}}>Hitung Biaya</h5>


            </Hitung_Biaya_Darat__Btn>
                        


           
        </div>


     
     
    </div>


        </section>

    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
