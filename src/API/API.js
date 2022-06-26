import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";
// const baseURL = "";

export async function axiosCall() {
  const axiosClient = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  try {
    let res = await axiosClient(payload.url, {
      method: payload.method,
      data: payload.data,
    });
    if (res.data.token) {
      sessionStorage.setItem("token", res.data.token);
    }
    return res;
  } catch (error) {
    return error;
  }
}
