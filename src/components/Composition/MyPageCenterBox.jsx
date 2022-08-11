import React from 'react'

export default function MyPageCenterBox({children}) {
  return (
    <div style={{
        display : 'grid',
        gap : '1em',
        gridTemplateColumns : 'auto auto'
    }}>{children}</div>
  )
}
