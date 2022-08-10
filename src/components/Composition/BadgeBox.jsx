import React from 'react'
import Badge from '../ui/Badge'
export default function BadgeBox() {
  return (
    <div style={{
        display : 'flex',
    }}>
        <Badge background="#FFCC00">대기업</Badge>
        <Badge background="#FFCC00">연봉 5000이상</Badge>
        <Badge background="#FFCC00">스타트업</Badge>
        <Badge background="#FFCC00">신입</Badge>
    </div>
  )
}
