import React from 'react'

export default function MyPageCenterBox({children}) {
  return (
    <div style={{
        display : 'grid',
        gap: "0.7em",
        gridTemplateColumns : 'auto auto',
        background: "#FFCC00",
        padding: "20px 5px"
    }}>{children}</div>
  )
}
