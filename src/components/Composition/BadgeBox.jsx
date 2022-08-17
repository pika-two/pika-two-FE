import React from 'react'
import Badge from '../ui/Badge'
export default function BadgeBox({onClick}) {
  return (
    <div style={{
        display : 'flex',
    }}>
        <Badge onClick={(e)=>onClick(e,'type','대기업')} background="#FFE006">대기업</Badge>
        <Badge onClick={(e)=>onClick(e,'is_certified',1)} background='#FFE006'>인증된 기업</Badge>
        <Badge onClick={(e)=>onClick(e,'category','제조')} background="#FFE006">제조업</Badge>
        <Badge onClick={(e)=>onClick(e,'category','통신')} background="#FFE006">통신업</Badge>
        <Badge onClick={(e)=>onClick(e,'category','건설')} background="#FFE006">건설업</Badge>
    </div>
  )
}
