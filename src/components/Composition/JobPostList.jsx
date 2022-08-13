import React from 'react'
import JobPostListItem from '../ui/JobPostListItem'
import { useInternalRouter } from "../../pages/routing";
export default function JobPostList({jobPosts}) {
  const {push} = useInternalRouter();
  return (
    <div style={{
        display : "grid",
        gridTemplateColumns: "150px 150px",
        justifyContent: "space-evenly",
        overflowX: "auto"
    }}>
        {jobPosts.map( jobPost =><JobPostListItem key={jobPost.post_id} onClick={()=>{push(`/company/${jobPost.company_id}`)
      }} jobPost={jobPost}/>)}
    </div>
  )
}
