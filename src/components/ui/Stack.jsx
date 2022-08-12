import React from 'react'

export default function Stack({children}) {
  return (
    <div
      style={{
        padding: '30px 24px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "one"
      }}
    >
      {children}
    </div>
  )
}
