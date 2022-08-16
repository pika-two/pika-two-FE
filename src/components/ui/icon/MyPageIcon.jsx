import UserImage from '../../../assets/user.png'
export default function BackIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
      marginRight: "20px"
    }}>
        <img  style={{
            marginTop : "9px", 
        }} width= "32px" height="32px" src={UserImage} alt="" />
    </div>
  )
}
