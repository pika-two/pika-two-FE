import useSWR from "swr";
import companyService from "../apis/company";

export default function useSearch({keyword,type}){
    const {data , error} = useSWR(['api/company/search',keyword,type],()=>companyService.getSearch({keyword,type}))
    return {
        searchData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}