import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef,useState,useEffect  } from "react";

function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== 'undefined';

  const getWidth = () => isWindow ? window.innerWidth : windowWidth;

  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
      if (isWindow) {
          setWindowWidth(getWidth());
    
          window.addEventListener('resize', resize);
     
          return () => window.removeEventListener('resize', resize);
      }
  //eslint-disable-next-line
  }, [isWindow]);

  return windowWidth;
}




const Sliderbanner = () => {

  const widthSize = useScreenWidth()
  const mobileWidth = 500


  if(widthSize > mobileWidth){ 
    //logic for desktop

    var display_tampilan='30vh';


  }


  if(widthSize <= mobileWidth){ 
    //logic for mobile

    var display_tampilan='30vh';

  }



  return (

    <section className="flex-container" >

        <div className='footer_screen'>

    <Carousel>
            <div>
            <div className='headerjudulbanner fw-bold fs-3 text-center'>

           
                        Apa Kata Mereka Tentang Lomiles
            

            </div>

                <img src="/image/Rectangle 83-1.png" />
                <div className='legend -mt-4'>
                  <iframe  src="https://www.youtube.com/embed/Odlmpg3XxFw" width="" height="" ></iframe>

                </div>
              
            </div>
            <div>
            <div className='headerjudulbanner fw-bold fs-3 text-center'>

          
                        Apa Kata Mereka Tentang Ocistok
            

            </div>
                <img src="/image/Rectangle 83-1.png" />
             
                <div className="legend">

                <iframe  src="https://www.youtube.com/embed/Odlmpg3XxFw" width="" height="" ></iframe>

                </div>
            </div>
            <div>
            <div className='headerjudulbanner fw-bold fs-3 text-center'>

           
                        Apa Kata Mereka Tentang Ocistok
            

            </div>
                <img src="/image/Rectangle 83-1.png" />
                <div className="legend">

                <iframe  src="https://www.youtube.com/embed/Odlmpg3XxFw" width="" height="" ></iframe>

                </div>
            </div>

       
    </Carousel>

    </div>

    </section>


  

    

    
   
    
  )
}

export default Sliderbanner