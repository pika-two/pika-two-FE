import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";

const userService = {
    async post(payload){
        const {data, status} = await customAxios.post(baseURL+'api/user/signup',payload);
        const {data : getUserInfo} = data;
        return getUserInfo
    },

    async getApplyList(userId){
        const {data, status} = await customAxios.get(baseURL+`api/user/${userId}/applied-posts`)
        const { data : responseData} = data;
        return responseData
    },
    async postApply(userId,data){
        return await customAxios.post(baseURL + `api/user/${userId}/applied-posts`,data)
    },
    async deleteApplyList(userId,apply_id){
        return await customAxios.delete(baseURL + `api/user/${userId}/applied-posts/${apply_id}`)
    },
    async getBookmarkList(userId){
        const {data, status} = await customAxios.get(baseURL+ `api/user/${userId}/favor`)
        const {data : responseData} = data;
        return responseData
    },
    async postBookmark(user_id,company_id){
        const {data, status} = await customAxios.post(baseURL +`/api/user/${user_id}/favor`,{
            company_id
        })
        const {data : response_data} = data
        return response_data
    },
    async deleteBookmarkList(userId,fav_company_id){
        return await customAxios.delete(baseURL + `api/user/${userId}/favor/${fav_company_id}`)
    },
    async getMyUserInfo(userId){
        const {data, status} = await customAxios.get(baseURL + `api/user/mypage/${userId}`)
        const {data: response_data} = data
        return response_data
    }
}

export default userService