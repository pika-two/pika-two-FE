import LeftArrow from '../../../assets/left-arrow.png'
export default function BackIcon({onClick}) {
  return (
    <div onClick={onClick}>
        <img style={{
            marginTop : "32px"
        }} width= "32px" height="32px" src={LeftArrow} alt="" />
    </div>
  )
}
