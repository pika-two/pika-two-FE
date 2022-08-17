import useSWR from "swr";
import financialproductService from "../apis/financialproduct";
export default function useSuggest(user_id){
    const {data, error} = useSWR(['api/financialproduct',user_id], ()=>financialproductService.getFinance(user_id))
    
    return {
        suggestData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}