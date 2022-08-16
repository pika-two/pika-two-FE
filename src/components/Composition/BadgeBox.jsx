import React from 'react'
import Badge from '../ui/Badge'
export default function BadgeBox({onClick}) {
  return (
    <div style={{
        display : 'flex',
    }}>
        <Badge onClick={(e)=>onClick(e,'대기업')} background="#FFE006">대기업</Badge>
        <Badge onClick={(e)=>onClick(e,'연봉 5000이상')} background="#FFE006">연봉 5000이상</Badge>
        <Badge onClick={(e)=>onClick(e,'스타트업')} background="#FFE006">스타트업</Badge>
        <Badge onClick={(e)=>onClick(e,'신입')} background="#FFE006">신입</Badge>
    </div>
  )
}
