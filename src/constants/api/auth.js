import callAPI from "../../configs/axios";



export async function setLogin(data) {
  const url = `${process.env.API_GATEWAY}/auth/login`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
