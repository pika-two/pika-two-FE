import {forwardRef} from 'react'
import styled from 'styled-components'
const InputComponent =  forwardRef(function InputComponent(props, ref) {
    return (
    <InputStyled ref={ref} {...props}/>
  )
})


const InputStyled = styled.input`
width : 100%;
height : ${props => props.height?props.height:'48px'};
border : none;
border-bottom: 1px solid #FC0;
margin:5px auto 5px auto;
font-family: two;
outline:none;
padding:8px;
box-sizing:border-box;
transition:.3s;
background : white;
:focus{
    outline: none ;
}`
export default InputComponent;
