import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const incomeService = {
    async get(user_id){
        return await customAxios.get(baseURL+`api/mydata/${user_id}/deposit`)
    }
}


export default incomeService