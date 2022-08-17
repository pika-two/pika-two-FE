import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const companyService = {
    async getPost(){
        const {data, status} = await customAxios.get(baseURL+'api/mainpage')
        const { data : responseData} = data
        return responseData
    },
    async getSearch({keyword,type}){
        const {data, status} = await customAxios.get(baseURL+'api/company',{
            params : {
                keyword : keyword?keyword:'',
                type : type?type:''
            }
        })
        const {data : responseData} = data;
        const {company_list} = responseData
        return company_list
    },
    async getInfo(company_id){
        const {data, status} = await customAxios.get(baseURL +`api/company/${company_id}`)
        const {data : response_data} = data;
        return response_data
    }
}

export default companyService