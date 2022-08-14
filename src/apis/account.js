import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const accountService = {
    async get(user_id){
        return await customAxios.get(baseURL+`api/mydata/${user_id}/account`)
    }
}

export default accountService