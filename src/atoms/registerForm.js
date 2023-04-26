import { atom } from "recoil";

export const registerFormInputsState = atom({
  key: "registerFormInputsState", // unique ID (with respect to other atoms/selectors)
  default: {
    formpendaftaran: "",
    formotpverifikasi: "",
    formverifikasiktp: "",
    formsubmitsuccess: "",
  }, // default value (aka initial value)
});

export const registerFormStepState = atom({
  key: "registerFormStepState", // unique ID (with respect to other atoms/selectors)
  default: "formpendaftaran", // default value (aka initial value)
});
