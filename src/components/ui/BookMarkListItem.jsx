import ImageCardBoth from "./ImageCardBoth"
import Bold from "./Bold"

export default function BookMarkListItem({image,right,bookmark}) {
  return (
    <ImageCardBoth image={image} content={<CompnyInfo bookmark={bookmark}/>} right={right}/>
  )
}

const CompnyInfo = function({bookmark}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#fffff2",
            margin : "0 0 5px 10px",
        }}>
            <Bold>{bookmark.company_name}</Bold>
        </div>
    )
}