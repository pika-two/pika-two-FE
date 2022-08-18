import baseURL from "../constants/BASE_URL";
import timeout from "../utils/timeout";
import customAxios from "./customAxios";
const financialproductService = {
    async getFinance(user_id){
        await timeout(2000)
        const {data,status} = await customAxios.get(baseURL+`api/financialproduct/${user_id}`)
        const {data : responseData} = data;
        return responseData
    }
}



export default financialproductService;