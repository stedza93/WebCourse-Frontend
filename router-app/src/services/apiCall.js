import axios from "axios";
import {auth} from "../auth/authService"
const apiUrl = "http://localhost:3001/";

const instance= axios.create({
  baseURL: apiUrl
});
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
        console.log(error)
      auth.logout()
    } else {
        return Promise.reject(error);
    }
  });

export default instance;