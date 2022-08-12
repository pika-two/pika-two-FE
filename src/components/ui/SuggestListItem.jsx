import ImageCard from "./ImageCard"
import Bold from "./Bold"

export default function SuggestListItem({image,right}) {
  return (
    <ImageCard image={image} content={<SuggestInfo/>} right={right}/>
  )
}

const SuggestInfo = function(){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}>
            <Bold>KB국민은행 마이핏카드</Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}>blah</div>
        </div>
    )
}