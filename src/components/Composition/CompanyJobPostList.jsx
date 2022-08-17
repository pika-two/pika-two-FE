import TrashCanIcon from '../ui/icon/TrashCanIcon'
import CompanyJobPostListItem from '../ui/CompanyJobPostListItem'
export default function CompanyJobPostList({companyJobPosts, userPostIdList = [],onClick}) {
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          {companyJobPosts?.map((companyJobPost)=><CompanyJobPostListItem onClick={onClick} key={companyJobPost.post_id} isApplyed={!!userPostIdList.filter(userPostId => userPostId === companyJobPost.post_id).length}   companyJobPost={companyJobPost}/>)}
      </div>
  )
}
