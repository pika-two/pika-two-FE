import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";

const userService = {
    async post(data){
        return await customAxios.post(baseURL+'api/user/signup',data)
    },

    async getApplyList(userId){
        return await customAxios.get(baseURL+`api/user/${userId}/applied-list`)
    },
    async deleteApplyList(userId,apply_id){
        return await customAxios.delete(baseURL + `api/user/${userId}/applied-list`,{
            data : {
                apply_id
            }
        })
    }
}

export default userService