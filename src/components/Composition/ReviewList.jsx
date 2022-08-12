import React from 'react'
import Stack from '../ui/Stack'
import Top02 from '../ui/Top/Top02'
import Message from '../ui/message'
import Boldtext from '../ui/Boldtext'
import Bold from '../ui/Bold'

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
            border : '2px solid',
        }}>
            <Bold>
                작성자
            </Bold>
            <Message>
                내용
            </Message>
        </div>
    )
}