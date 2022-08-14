import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const incomeService = {
    async get(user_id){
        return await customAxios.get(baseURL+`api/mydata/${user_id}/deposit`)
    },
    async post(user_id,data){
        return await customAxios.post(baseURL+`api/mydata/${user_id}/memos`,data)
    }
}


export default incomeService