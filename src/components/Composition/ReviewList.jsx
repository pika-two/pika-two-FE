import React from 'react'
import Stack from '../ui/Stack'
import Top02 from '../ui/Top/Top02'
import Message from '../ui/message'
import Boldtext from '../ui/Boldtext'
import Bold from '../ui/Bold'

export default function ReviewList({companyReviews}) {
  return (
    <Stack>
        {companyReviews?.map((companyReview)=> <Review key={companyReview.comment_id} companyReview={companyReview}/>)}
    </Stack>
  )
}


const Review = function({companyReview}){
    return (
        <div style={{
            border : '2px solid',
        }}>
            <Bold>
                {companyReview.nickname}
            </Bold>
            <Message>
                {companyReview.content}
            </Message>
        </div>
    )
}