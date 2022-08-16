import Button from './Button'
import Bold from './Bold'
export default function CompanyJobPostListItem({companyJobPost,isApplyed}) {
  return (
    <div style={{
        display : 'grid',
        'gridTemplateColumns' : 'auto 60px'
    }}><CompanyJob companyJobPost={companyJobPost}/><Button background={isApplyed?'lightgray':'#FC0'} disabled={isApplyed} >지원하기</Button></div>
  )
}


const CompanyJob = function({companyJobPost}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}
        >
            <Bold>{companyJobPost.post_title}  </Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}><Bold>{companyJobPost.type}</Bold> {companyJobPost.start_dt}- {companyJobPost.end_dt}</div>
        </div>
    )
}