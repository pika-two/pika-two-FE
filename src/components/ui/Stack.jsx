import React from 'react'

export default function Stack({children,...rest}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
