import LeftArrow from '../../../assets/left-arrow.png'
export default function BackIcon({onClick}) {
  return (
    <>
        <img onClick={onClick} style={{
            marginTop : "32px"
        }} width= "32px" height="32px" src={LeftArrow} alt="" />
    </>
  )
}
