import React from 'react'
import styled from 'styled-components'

export default function DotList({middle,amount}) {
  return (
    <div style={{display : 'grid',
gridTemplateColumns : '20px auto 80px'}}><Dot/><div>{middle}</div> <div>{amount}만원</div></div>
  )
}

const Dot = styled.span`
height: 25px;
width: 25px;
background-color: #fc0;
border-radius: 50%;
display: inline-block;
`