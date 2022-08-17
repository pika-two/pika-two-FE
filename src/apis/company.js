import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const companyService = {
    async getPost(){
        const {data, status} = await customAxios.get(baseURL+'api/mainpage')
        const { data : responseData} = data
        return responseData
    },
    async getSearch({keyword,type}){
        return await customAxios.get(baseURL+'api/company',{
            params : {
                keyword : keyword?keyword:'',
                type : type?type:''
            }
        })
    },
    async getInfo(company_id){
        return await customAxios.get(baseURL +`api/company/${company_id}`)
    }
}

export default companyService