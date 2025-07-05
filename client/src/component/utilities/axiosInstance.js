
import axios from "axios"
const DB_URL="https://socketchat-lnrb.onrender.com/api/v1";

export const axiosInstance = axios.create({
    baseURL: DB_URL,
    withCredentials:true,

    headers: { 
       ContentType:"application/json",
  
     }
  });

