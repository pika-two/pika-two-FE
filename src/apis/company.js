import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const companyService = {
    async getPost(){
        return await customAxios.get(baseURL+'api/jobpost')
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
        return await customAxios.get(baseURL +`/api/company/${company_id}`)
    }
}

export default companyService