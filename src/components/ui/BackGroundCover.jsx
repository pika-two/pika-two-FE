
import styled from 'styled-components'
const BackGroundCover = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
margin: 0 auto;
width: 100%;
height: 100%;
background-color: ${props => props.backgroundColor?props.backgroundColor:'#FFF'};
z-index : ${props => props.zIndex?props.zIndex:-1};
opacity : ${props => props.opacity?props.opacity:1}
`
export default BackGroundCover