import baseURL from "../constants/BASE_URL";
import customAxios from "./customAxios";


const commentService = {
    async postReivew(user_id,company_id,content){
        //TODO :  USER_iD를 직접보내준다.
        return await customAxios.post(baseURL + `api/${company_id}/comment`,{
            user_id,
            content
        })
    },
}

export default commentService