import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";

const userService = {
    async post(payload){
        const {data, status} = await customAxios.post(baseURL+'api/user/signup',payload);
        const {data : getUserInfo} = data;
        return getUserInfo
    },

    async getApplyList(userId){
        return await customAxios.get(baseURL+`api/user/${userId}/applied-posts`)
    },
    async postApply(userId,data){
        return await customAxios.post(baseURL + `api/user/${userId}/applied-posts`,data)
    },
    async deleteApplyList(userId,apply_id){
        const payload = {apply_id : apply_id}
        return await customAxios.delete(baseURL + `api/user/${userId}/applied-posts`,{
            data : payload
        },{
            headers : {
                'Content-Type': 'application/json; charset=utf-8'
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
    },
    async getMyUserInfo(userId){
        return await customAxios.get(baseURL + `api/user/mypage/${userId}`)
    }
}

export default userService