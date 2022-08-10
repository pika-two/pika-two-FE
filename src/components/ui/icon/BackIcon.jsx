import LeftArrow from '../../../assets/left-arrow.png'
export default function BackIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
    }}>
        <img  style={{
            marginTop : "14px"
        }} width= "22px" height="32px" src={LeftArrow} alt="" />
    </div>
  )
}
