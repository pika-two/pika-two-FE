import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const accountService = {
    async get(user_id){
        return await customAxios.get(baseURL+`api/mydata/${user_id}/account`)
    },
    async post(user_id,data){
        return await customAxios.post(baseURL+`api/mydata/${user_id}/account`,data)
    }
}

export default accountService