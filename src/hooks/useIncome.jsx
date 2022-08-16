import incomeService from "../apis/income"
import useSWR from "swr"
export default function useIncome(user_id){
    
    const {data, error} = useSWR(['api/income',user_id],()=> incomeService.get(user_id))
    return {
        incomeData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}