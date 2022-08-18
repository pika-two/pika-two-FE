import useSWR from "swr";
import financialproductService from "../apis/financialproduct";
export default function useSuggest(user_id){
    const options = {
        dedupingInterval : 10000000,
        errorRetryInterval : 5000,
    }
    const {data, error} = useSWR('api/financialproduct', ()=>financialproductService.getFinance(user_id),options)
    
    return {
        suggestData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}