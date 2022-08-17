import companyService from "../apis/company";
import useSWR from "swr";
export default function useCompanyInfo(company_id){
    const {data, error} = useSWR(['api/companyInfo',company_id],()=>companyService.getInfo(company_id))
    return {
        getCompanyInfo : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}