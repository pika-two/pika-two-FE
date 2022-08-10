
import styled from 'styled-components';

const Badge = styled.span`padding: 8px 10px;
border-radius: 10px;
font-weight: 600;
font-size: 12px;
box-shadow: 0 2px 5px rgba(0,0,0,.25);
margin: 0 10px;
cursor: pointer;
background : ${props=> props.background?props.background:'#000'};
color : white;
`
export default Badge
