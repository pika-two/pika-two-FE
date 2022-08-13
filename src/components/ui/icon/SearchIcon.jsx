import Search from '../../../assets/search.png'
export default function SearchIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
      margin : 'auto'
    }}>
        <img  style={{
        }} width= "32px" height="32px" src={Search} alt="" />
    </div>
  )
}
