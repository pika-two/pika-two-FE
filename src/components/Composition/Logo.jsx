import LogoImage from '../../assets/dolgu_logo.png'

export default function Logo() {
  return (
    <img style={{
        display : 'block',
        height : '150px',
        margin : '35vh auto 3vh auto'
    }} src={LogoImage} alt="" />
  )
}
