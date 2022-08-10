import styled from "styled-components";

const InputStyled = styled.input`
width : 100%;
height : 48px;
border:2px solid #f6f6f6;
border-radius:10px;
margin:8px 0;
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