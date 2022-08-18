import Bold from "./Bold"
import ImageRightCard from "./ImageRightCard"

export default function SuggestListItem({suggest,image}) {
  return (
    <ImageRightCard image={image}  content={<SuggestInfo suggest={suggest}/>}/>
  )
}

const SuggestInfo = function({suggest}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}>
            <Bold>{suggest.bank_name} {suggest.product_name}</Bold>
            <div style = {{fontFamily : "two", textAlign : "center", margin: " 0, vh"}}>{suggest.description}</div>
        </div>
    )
}