import ImageCardBoth from "./ImageCardBoth"
import Bold from "./Bold"
import datetimeConvert from "../../utils/datetimeConvert"
export default function ApplyCompanyListItem({applyCompanpy,image,right,onClick}) {
  return (
    <ImageCardBoth image={image} content={<CompnyInfo onClick={onClick} applyCompanpy={applyCompanpy}/>} right={right}/>
  )
}

const CompnyInfo = function({applyCompanpy,onClick}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}
        onClick={onClick}
        >
            <Bold>{applyCompanpy.company_name}  </Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}>{applyCompanpy.post_title}{applyCompanpy.status}<br></br>
            {datetimeConvert(applyCompanpy.start_dt)}- {datetimeConvert(applyCompanpy.end_dt)}</div>
        </div>
    )
}