import ImageCardBoth from "./ImageCardBoth"
import Bold from "./Bold"

export default function ApplyCompanyListItem({image,right}) {
  return (
    <ImageCardBoth image={image} content={<CompnyInfo/>} right={right}/>
  )
}

const CompnyInfo = function({compnyinfo}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}>
            <Bold>KB국민은행</Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}>blah</div>
        </div>
    )
}