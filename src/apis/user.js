import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";

const userService = {
    async post(data){
        return await customAxios.post(baseURL+'api/user/signup',data)
    },

    async getApplyList(userId){
        return await customAxios.get(baseURL+`api/user/${userId}/applied-posts`)
    },
    async deleteApplyList(userId,apply_id){
        return await customAxios.delete(baseURL + `api/user/${userId}/applied-posts`,{
            data : {
                apply_id
            }
        })
    },
    async getBookmarkList(userId){
        return await customAxios.get(baseURL+ `api/user/${userId}/favor`)
    },
    async deleteBookmarkList(userId,fav_company_id){
        return await customAxios.delete(baseURL + `api/user/${userId}/favor`,{
            data : {
                fav_company_id
            }
        })
    }
}

export default userService