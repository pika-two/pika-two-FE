import ImageCard from "./ImageCard"
import Bold from "./Bold"
export default function CompanyListItem({image}) {
  return (
    <ImageCard image={image} content={<CompnyInfo/>}/>
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
            margin : "0 15px 15px 15px",
        }}>
            <Bold>KB국민은행</Bold>
            <Bold>blah</Bold>
        </div>
    )
}