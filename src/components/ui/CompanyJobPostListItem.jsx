import Button from './Button'
import Bold from './Bold'
import datetimeConvert from '../../utils/datetimeConvert'
export default function CompanyJobPostListItem({companyJobPost,isApplyed,onClick}) {
  return (
    <div style={{
        display : 'grid',
        'gridTemplateColumns' : 'auto 130px',
        alignContent: "center",
        justifyContent: "space-evenly"
    }}><CompanyJob companyJobPost={companyJobPost}/><Button onClick={(e)=>onClick(e,companyJobPost.post_id)} background={isApplyed?'lightgray':'#FC0'} disabled={isApplyed} >지원하기</Button></div>

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
            width: "100%"
        }}
        >
            <Bold>{companyJobPost.post_title}  </Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}><Bold>{companyJobPost.type}</Bold> {datetimeConvert(companyJobPost.start_dt)}- {datetimeConvert(companyJobPost.end_dt)}</div>
        </div>
    )
}