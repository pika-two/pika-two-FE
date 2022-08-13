import ImageCardBoth from "./ImageCardBoth"
import Bold from "./Bold"

export default function BookMarkListItem({image,right,bookmark,onClick}) {
  return (
    <ImageCardBoth image={image} content={<CompnyInfo onClick={onClick}  bookmark={bookmark}/>} right={right}/>
  )
}

const CompnyInfo = function({bookmark, onClick}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#fffff2",
            margin : "0 0 5px 10px",
        }}
        onClick={onClick}
        >
            <Bold>{bookmark.company_name}</Bold>
        </div>
    )
}