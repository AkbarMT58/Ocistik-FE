import { atom } from "recoil";

export const PesananFormInputsState = atom({
  key: "pesananFormInputsState", // unique ID (with respect to other atoms/selectors)
  default: {
    alamatcustomer: "",
    syaratketentuan: "",
    pengirimanbarang: "",
    pengirimanindonesia: "",
    ekspedisilokalindonesia: "",
    rangkumanpesanan:"",
  }, // default value (aka initial value)
});

export const pesananFormStepState = atom({
  key: "pesananFormStepState", // unique ID (with respect to other atoms/selectors)
  default: "alamatcustomer", // default value (aka initial value)
});
