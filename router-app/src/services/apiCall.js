import axios from "axios";
const apiUrl = "http://localhost:3001/";

const instance= axios.create({
  baseURL: apiUrl
});


export default instance;