import React from "react";
import { useRecoilValue } from "recoil";
import BuatPesanan from "../pesanan/BuatPesanan";
import SyaratKetentuan from "../pesanan/syaratketentuan";
import PengirimanBarang from "../pesanan/informasibarang";
import PengirimanKeIndonesia from "../pesanan/pengirimankeindonesia";
import EkspedisiLokalIndonesia from "../pesanan/ekspedisilokalindonesia";
import RangkumanPesanan from "../pesanan/rangkumanpesanan";
import Sidebar from '../../containers/frontend/admin/layout/sidebar';



import { pesananFormStepState } from "../../atoms/pesananForm";

function Primaryformbuatpesanan() {
  const formStep = useRecoilValue(pesananFormStepState);

  return (
    <div className="buatpesanan-form">
     
      
      {formStep === "alamatcustomer" ? (
        <BuatPesanan />
      ) : formStep === "syaratketentuan" ? (
        <SyaratKetentuan />
      ) : formStep === "pengirimanbarang" ? (
            <PengirimanBarang />
      ) : formStep === "pengirimanindonesia" ? (
        <PengirimanKeIndonesia />
      ) : formStep === "ekspedisilokalindonesia" ? (
            <EkspedisiLokalIndonesia />
      ) : formStep === "rangkumanpesanan" ? (
                <RangkumanPesanan />
      ) :null}
    </div>
  );
}

export default Primaryformbuatpesanan;
