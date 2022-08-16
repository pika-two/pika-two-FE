import React from 'react'
import styled from 'styled-components'

export default function DotList({middle,amount}) {
  return (
    <div style={{display : 'grid',
    gridTemplateColumns : '40px auto 100px',
    margin:'10px',
    fontFamily: 'three',
    textAlign: 'center'

    }}>
      <Dot/>
      <div style = {{fontSize: "20px"}}>
        {middle}
      </div>
      <div style = {{fontSize: "20px", fontFamily: "six"}}>{amount}만원</div>
    </div>
  )
}

const Dot = styled.span`
height: 20px;
width: 20px;
background-color: #fc0;
border-radius: 50%;
display: inline-block;
`