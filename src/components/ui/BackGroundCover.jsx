
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
z-index : -1;
`
export default BackGroundCover