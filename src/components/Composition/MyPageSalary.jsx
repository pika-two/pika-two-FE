import React from 'react'
import Stack from '../ui/Stack'

export default function MyPageSalary({children}) {
  return (
    <Stack style={{
      padding: '70px 24px',
      fontFamily: "one"
    }}>
        {children}
    </Stack>
  )
}
