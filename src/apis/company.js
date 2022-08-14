import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const companyService = {
    async getPost(){
        return await customAxios.get(baseURL+'api/jobpost')
    }
}

export default companyService