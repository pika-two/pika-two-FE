import WhiteHeart from '../../../assets/white_heart.png'
export default function WhiteHeartIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
      margin : 'auto'
    }}>
        <img  style={{
        }} width= "32px" height="32px" src={WhiteHeart} alt="" />
    </div>
  )
}
