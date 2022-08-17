import useSWR from "swr";
import userService from "../apis/user";
export default function useBookmark(user_id){
    const {data, error} = useSWR(['api/fav',user_id],()=>userService.getBookmarkList(user_id))
    return {
        bookmarkData : data,
        isLoading: !error && data === undefined,
        isError: error

    }
}
