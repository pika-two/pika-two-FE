import companyService from "../apis/company"
import useSWR from "swr"
export default function useJobPosts(){
    const {data, error} = useSWR('api/mainPage',()=>companyService.getPost())
    return {
        jobPostData : data,
        isLoading: !error && data === undefined,
        isError: error
    }
}