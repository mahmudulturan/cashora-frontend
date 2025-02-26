import axios from "axios";
import envConfig from "@/configs/env.config";

const axiosInstance = axios.create({
    baseURL: `${envConfig.apiUrl}${envConfig.apiVersion}`,
    headers: {
        'Content-Type': 'application/json'
    }
})


export default axiosInstance;
