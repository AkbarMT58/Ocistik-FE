import { style } from "@mui/system";
import { useState } from "react";
import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Artikel() {
    const [navbar, setNavbar] = useState(false);

const Bg_Gambar = styled.div`
background-image: url(${'/image/unsplash_FPKnAO-CF6M.png'});
background-repeat: no-repeat;
max-width: 2000px;
background-size:100% auto;
height:150px ;
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
const Read_More =styled.div`
box-sizing: border-box;
position: relative;
width: 128px;
height: 45px;
border: 1px solid #000000;
margin:10px;
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

        <section style={{height:'0vh'}}>

            <div className="text-black text-5xl m-2" style={{marginTop:'70px'}}>
               
              Artikel
            <hr className="border"></hr>
            </div>

            <center>

            <div style={{marginTop:'50px'}} >

            <div className="grid gap-4 mb-12 grid-cols-2 m-2">

                <div className="mb-4">

                <div class="rounded overflow-hidden shadow-lg" style={{height:'700px'}}>
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div style={{marginLeft:'800px'}}>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <Button_more>Read More</Button_more>
               
                </div>


                </div>

                <div className="mb-8">

                <div className="grid gap-4 mb-12 grid-cols-2 m-2">

                <div className="mb-4">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url("/image/unsplash_Q80LYxv_Tbs.png")`}}  title="Woman holding a mug">
                </div>
            
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                   
                    <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>

                
                    <Read_More>Read More</Read_More>
                   
                </div>
               
                </div>

                </div>

                <div className="mb-4">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url("/image/unsplash_Q80LYxv_Tbs.png")`}}  title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                
                    <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>

                    <Read_More>Read More</Read_More>
                
                </div>

                </div>

                </div>

                <div className="mb-4">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url("/image/unsplash_Q80LYxv_Tbs.png")`}}  title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                
                    <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>

                    <Read_More>Read More</Read_More>
                
                </div>

                </div>

                </div>

                <div className="mb-4">

                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:`url("/image/unsplash_Q80LYxv_Tbs.png")`}}  title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">

                    <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>

                    <Read_More>Read More</Read_More>

                </div>

                </div>

                </div>




                </div>

                </div>

  

            </div>

            <div className="grid gap-4 mb-12 grid-cols-3 m-2">

                <div className="mb-4">

                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                </div>

                <div className="mb-4">


                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                </div>

                <div className="mb-4">

                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                 </div>



            </div>

            
            <div className="grid gap-4 mb-12 grid-cols-3 m-2">

                <div className="mb-4">

                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                </div>

                <div className="mb-4">


                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                </div>

                <div className="mb-4">

                <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/image/unsplash_Q80LYxv_Tbs.png" alt="Sunset in the mountains"/>
                <div>06-Feb-2023</div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 justify-center">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <Read_More>Read More</Read_More>
               
                </div>


                 </div>



            </div>
         
            </div>

            <div className="pagination">

            <nav aria-label="Page navigation example">
            <ul class="inline-flex items-center -space-x-px">
                <li>
                <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                </li>
                <li>
                <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                <a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                </li>
                </ul>
                </nav>



            </div>

            </center>




        </section>

     
    </Bg_Gambar>

   
    </>

                
        

       
        
    );
}
