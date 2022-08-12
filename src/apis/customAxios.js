import axios from "axios";
import baseURL from "../constants/BASE_URL";



const customAxios = axios.create({
    baseURL
})

export default customAxios