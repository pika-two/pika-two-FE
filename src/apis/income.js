import baseURL from "../constants/BASE_URL";
import timeout from "../utils/timeout";
import customAxios from "./customAxios";


const incomeService = {
    async get(user_id){
        const {data,status}  = await customAxios.get(baseURL+`api/mydata/${user_id}/deposit`);
        const {data : responseData} = data;
        return responseData
    },
    async post(user_id,data){
        return await customAxios.post(baseURL+`api/mydata/${user_id}/memos`,data)
    },
    async getConnect(user_id,year){
        const {data , status} = await customAxios.get(baseURL+`api/mydata/${user_id}/annual-salary/${year}`)
        return data.data.annual_salary
    },
}


export default incomeService