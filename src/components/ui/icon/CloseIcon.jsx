import Close from '../../../assets/close.png'
export default function CloseIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
    }}>
        <img  style={{
            marginTop : "10px"
        }} width= "12px" height="12px" src={Close} alt="" />
    </div>
  )
}
