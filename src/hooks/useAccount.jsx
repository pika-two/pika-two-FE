import useSWR from "swr";
import accountService from '../apis/account'
export default function useAccount(user_id){
    const {data, error} = useSWR(['api/account',user_id],()=> accountService.get(user_id))
    return {
        accountData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}