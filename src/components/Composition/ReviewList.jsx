import React from 'react'
import Stack from '../ui/Stack'
import Top02 from '../ui/Top/Top02'
import Message from '../ui/message'
import Boldtext from '../ui/Boldtext'
import Bold from '../ui/Bold'

export default function ReviewList({companyReviews}) {
  return (
    <div 
    style = {{

        alignItems: 'center'
    }}>
        <Stack>
            {companyReviews?.map((companyReview)=> <Review key={companyReview.comment_id} companyReview={companyReview}/>)}
        </Stack>
    </div>
  )
}


const Review = function({companyReview}){
    return (
        <div style={{
            width: "80%",
            border : '1px solid',
            borderRadius: '20px',
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "10px",
            alignItems: "center"
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