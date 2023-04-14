import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Brand,CTA,Navbar } from '../components';
import {Home,Tentangkami,Layanan,Artikel,Callus,Kontak,Hitungbiaya, Artikel_Detail,ArtikelMore,Login,Dashboard,Syaratketentuan} from '../containers';
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
    <Route path="/admin/dashboard" element={<Dashboard />} /> 
    <Route path="/admin/syaratketentuan" element={<Syaratketentuan />} /> 



   

    </Routes>

    </BrowserRouter>
    

    // </div>

    )


  

 


};

export default App;
