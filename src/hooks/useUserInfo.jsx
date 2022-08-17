import useSWR from "swr"
import userService from "../apis/user"

export default function useUserInfo(user_id){
    const {data, error} = useSWR(['api/user/mypage/',user_id],()=>userService.getMyUserInfo(user_id))
    return {
        userInfoData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}