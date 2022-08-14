import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";

const registerService = {
    async post(data){
        return await customAxios.post(baseURL+'api/user/signup',data)
    }
}

export default registerService