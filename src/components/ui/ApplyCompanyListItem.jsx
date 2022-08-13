import ImageCardBoth from "./ImageCardBoth"
import Bold from "./Bold"

export default function ApplyCompanyListItem({applyCompanpy,image,right}) {
  return (
    <ImageCardBoth image={image} content={<CompnyInfo applyCompanpy={applyCompanpy}/>} right={right}/>
  )
}

const CompnyInfo = function({applyCompanpy}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}>
            <Bold>{applyCompanpy.company_name}  </Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}>{applyCompanpy.post_title}{applyCompanpy.status}<br></br>
            {applyCompanpy.start_dt}- {applyCompanpy.end_dt}</div>
        </div>
    )
}