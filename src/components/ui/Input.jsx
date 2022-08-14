import styled from "styled-components";
import { forwardRef } from "react";
const InputStyled = styled.input`
width : 90%;
height : ${props => props.height?props.height:'48px'};
border:2px solid #000000;
margin:0 auto 10px auto;
outline:none;
padding:8px;
box-sizing:border-box;
transition:.3s;
background : #fcfcf0;
:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue;
}`

const Input = forwardRef(function Input(props,ref) {
  return (
    <InputStyled ref={ref} {...props}/>
  )
})

export default Input