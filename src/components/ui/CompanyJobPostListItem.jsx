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
    const convert = (str)=>{
        let date = new Date(str)
        let mnth = ("0" + (date.getMonth() + 1)).slice(-2)
        let day = ("0" + date.getDate()).slice(-2)
        return [date.getFullYear(), mnth, day].join("-")
      }
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
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}><Bold>{companyJobPost.type}</Bold> {convert(companyJobPost.start_dt)}- {convert(companyJobPost.end_dt)}</div>
        </div>
    )
}