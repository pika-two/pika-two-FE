import useSWR from 'swr'
import commentService from '../apis/comment'

export default function useComment(company_id) {
  const {data, error} = useSWR(['api/company/comment',company_id],()=>commentService.getReview(company_id))
  return {
    getCommentInfo : data,
    isLoading: !error && data === undefined,
    isError: error
}
}
