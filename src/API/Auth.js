import { axiosClient } from "./API";

export function signUpUserAPI() {
  return axiosClient.post("/signup");
}
