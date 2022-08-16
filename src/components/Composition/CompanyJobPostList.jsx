import TrashCanIcon from '../ui/icon/TrachCanIcon'
import CompanyJobPostListItem from '../ui/CompanyJobPostListItem'
export default function CompanyJobPostList({companyJobPosts, userPostIdList = []}) {
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          {companyJobPosts?.map((companyJobPost)=><CompanyJobPostListItem key={companyJobPost.post_id} isApplyed={!!userPostIdList.filter(userPostId => userPostId === companyJobPost.post_id).length}   companyJobPost={companyJobPost}/>)}
      </div>
  )
}
