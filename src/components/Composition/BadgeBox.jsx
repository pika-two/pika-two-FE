import React from 'react'
import Badge from '../ui/Badge'
export default function BadgeBox() {
  return (
    <div style={{
        display : 'flex',
    }}>
        <Badge background="#FFE006">대기업</Badge>
        <Badge background="#FFE006">연봉 5000이상</Badge>
        <Badge background="#FFE006">스타트업</Badge>
        <Badge background="#FFE006">신입</Badge>
    </div>
  )
}
