import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const accountService = {
    async get(user_id){
        const {data, status} = await customAxios.get(baseURL+`api/mydata/${user_id}/account`)
        return data.data
    },
    async post(user_id,payload){
        return await customAxios.post(baseURL+`api/mydata/${user_id}/account`,payload);
    }
}

export default accountService