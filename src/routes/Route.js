import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Brand,CTA,Navbar } from '../components';
import {Footer,Features,Header,Possibility,Home,Tentangkami,Layanan,Artikel,Callus,Kontak,Hitungbiaya, Artikel_Detail,Master_Artikel,Edit_Artikel,ArtikelMore,Login} from '../containers';
import '../routes/App.css';


const App = () => {

    return (
      <BrowserRouter>  
    <Routes>

    <Route path="/" element={(<Home />)} />
    <Route path="/home" element={(<Home />)} />
    <Route path="/tentangkami" element={<Tentangkami />} />
    <Route path="/layanan" element={<Layanan />} />
    <Route path="/artikel" element={<Artikel />} />
    <Route path="/artikel-detail/:slug" element={<Artikel_Detail />} />
    <Route path="/artikel-more" element={<ArtikelMore />} />
    <Route path="/kontak" element={<Kontak />} />
    <Route path="/hitungbiaya" element={<Hitungbiaya />} />
    <Route path="/callus" element={<Callus />} /> 
    <Route path="/login" element={<Login />} /> 

   

    </Routes>

    </BrowserRouter>
    

    // </div>

    )


  

 


};

export default App;
