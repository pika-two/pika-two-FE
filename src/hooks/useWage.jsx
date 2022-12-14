import useSWR from "swr";
import companyService from "../apis/company";

export default function useWage(company_id,year){
    const {data, error} = useSWR(['api/wage/year',company_id,year],()=>companyService.getCompanyWage(company_id,year))
    data?.wages.sort((a,b)=>b.wage-a.wage)
    return  {
        companyWageInfo : data,
        isLoading: !error && data === undefined,
        isError: error
    }

}