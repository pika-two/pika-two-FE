import TrashCan from '../../../assets/trash-can.png'
export default function HomeIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
      margin : 'auto'
    }}>
        <img  style={{
        }} width= "32px" height="32px" src={TrashCan} alt="" />
    </div>
  )
}
