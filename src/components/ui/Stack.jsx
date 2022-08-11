import React from 'react'

export default function Stack({children}) {
  return (
    <div
      style={{
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </div>
  )
}
