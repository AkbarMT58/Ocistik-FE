import React from "react";
import { useRecoilValue } from "recoil";
import Form_Pendaftaran from "../../components/register/form_pendaftaran";
import Form_OTP_Verifikasi from "../../components/register/form_otp_verifikasi";
import Form_Submit_Success_OTP from "./form_submit_successotp";
import Form_Verifikasi_KTP from "../../components/register/form_verifikasi_ktp";
import Form_Isian_KTP from "../../components/register/form_isianktp";
import Form_Isian_KTP_Selfi from "../../components/register/form_isianfotoselfi.ktp";
import Form_Submit_Success_KTP from "./form_submit_successktp";

import { registerFormStepState } from "../../atoms/registerForm";

function Primaryformregistrasi() {
  const formStep = useRecoilValue(registerFormStepState);

  return (
    <div className="register-form">
      {formStep === "formpendaftaran" ? (
        <Form_Pendaftaran />
      ) : formStep === "formotpverifikasi" ? (
        <Form_OTP_Verifikasi />
      ) : formStep === "formsubmitsuccessotp" ? (
            <Form_Submit_Success_OTP />
      ) : formStep === "formverifikasiktp" ? (
        <Form_Verifikasi_KTP />
      ) : formStep === "formisianktp" ? (
            <Form_Isian_KTP />
      ) : formStep === "formisianktpselfi" ? (
                <Form_Isian_KTP_Selfi />
      ) : formStep === "formsubmitsuccessktp" ? (
        <Form_Submit_Success_KTP />
      ) : null}
    </div>
  );
}

export default Primaryformregistrasi;
