import React from 'react'
import Stack from '../ui/Stack'

export default function ReviewList() {
  return (
    <Stack>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
        <Review/>
    </Stack>
  )
}


const Review = function(){
    return (
        <div style={{
            border : '1px solid',
        }}>
            <div>
                작성자
            </div>
            <div>
                내용
            </div>
        </div>
    )
}