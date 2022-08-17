import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";
const financialproductService = {
    async getFinance(user_id){
        const {data,status} = await customAxios.get(baseURL+`api/financialproduct/${user_id}`)
        const {data : responseData} = data;
        return responseData
    }
}



export default financialproductService;