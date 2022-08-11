import styled from "styled-components";

const InputStyled = styled.input`
width : 90%;
height : 48px;
border:2px solid #000000;
margin:0 auto 10px auto;
outline:none;
padding:8px;
box-sizing:border-box;
transition:.3s;
background-color : #f6f6f6;
:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue;
}`

export default function Input({...rest}) {
  return (
    <InputStyled {...rest}/>
  )
}