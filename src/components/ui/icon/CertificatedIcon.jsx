import Certificated from '../../../assets/check.png'
export default function CertificatedIcon({onClick}) {
  return (
    <div onClick={onClick} style={{
      zIndex : 1,
    }}>
        <img  style={{
            marginTop : "10px"
        }} width= "20px" height="20px" src={Certificated} alt="" />
    </div>
  )
}
