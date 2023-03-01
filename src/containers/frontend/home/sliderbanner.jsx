import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend/home/home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Sliderbanner = () => {
  return (

    <section style={{height:'95vh'}}>

        <div className='footer_screen'>

    <Carousel>
            <div>
            <div className='headerjudulbanner'>

            <h1 style={{textAlign:"center", marginTop:'8px'}}>
                        Apa Kata Mereka Tentang Ocistok
            </h1>

            </div>

                <img src="/image/Rectangle 83-1.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
            <div className='headerjudulbanner'>

            <h1 style={{textAlign:"center", marginTop:'8px'}}>
                        Apa Kata Mereka Tentang Ocistok
            </h1>

            </div>
                <img src="/image/Rectangle 83-1.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
            <div className='headerjudulbanner'>

            <h1 style={{textAlign:"center", marginTop:'8px'}}>
                        Apa Kata Mereka Tentang Ocistok
            </h1>

            </div>
                <img src="/image/Rectangle 83-1.png" />
                <p className="legend">Legend 3</p>
            </div>

       
    </Carousel>

    </div>

    </section>


  

    

    
   
    
  )
}

export default Sliderbanner