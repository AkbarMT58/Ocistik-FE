import React from "react";
import { useRecoilValue } from "recoil";
import BuatPesanan from "./BuatPesanan";
import SyaratKetentuan from "./syaratketentuan";
import PengirimanBarang from "./informasibarang";
import PengirimanKeIndonesia from "./pengirimankeindonesia";
import EkspedisiLokalIndonesia from "./ekspedisilokalindonesia";
import RangkumanPesanan from "./rangkumanpesanan";


import { registerFormStepState } from "../../atoms/registerForm";

function Primaryformbuatpesanan() {
  const formStep = useRecoilValue(registerFormStepState);

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
      )  : null}
    </div>
  );
}

export default Primaryformbuatpesanan;
