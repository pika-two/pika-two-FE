import useSWR from "swr"
import userService from "../apis/user";

export default function useApplyCompany(user_id){
    const {data, error} = useSWR(['api/applyCompany',user_id],()=> userService.getApplyList(user_id));
    return {
        applyCompanyData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}