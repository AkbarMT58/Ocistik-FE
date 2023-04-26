import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Brand,CTA,Navbar } from '../components';
import {Home,Tentangkami,Layanan,Artikel,Callus,Kontak,Hitungbiaya, Artikel_Detail,ArtikelMore,Login,Dashboard,Pesanan,Pembayaran,Waitingpembayaran,Statuspembayaran,Register,Index} from '../containers';
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
    <Route path="/admin/pesanan" element={<Pesanan />} /> 
    {/* <Route path="/admin/buatpesanan" element={<BuatPesanan />} /> 
    <Route path="/admin/syaratketentuan" element={<Syaratketentuan />} /> 
    <Route path="/admin/informasibarang" element={<Informasibarang />} /> 
    <Route path="/admin/pengirimankeindonesia" element={<PengirimanKeIndonesia/>} /> 
    <Route path="/admin/ekspedisilokalindonesia" element={<EkspedisiLokalIndonesia/>} /> 
    <Route path="/admin/rangkumanpesanan" element={<RangkumanPesanan/>} />  */}
    <Route path="/admin/pembayaran" element={<Pembayaran/>} /> 
    <Route path="/admin/pembayaran/waitingpembayaran" element={<Waitingpembayaran/>} /> 
    <Route path="/admin/pembayaran/statuspembayaran" element={<Statuspembayaran/>} /> 
    <Route path="/register" element={<Register/>} /> 
    <Route path="/admin/formpesanan" element={<Index/>} /> 





   

    </Routes>

    </BrowserRouter>
    

    // </div>

    )


  

 


};

export default App;
