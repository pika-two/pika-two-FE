import incomeService from '../apis/income'
import useSWR from "swr";
export default function useIncomeConnect(user_id,year){
    const {data, error} = useSWR(['api/incomeconeent',user_id,year],()=>incomeService.getConnect(user_id,year));
    return {
        annual_salary : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}