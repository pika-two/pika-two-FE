import React from 'react'

export default function JobPostListItem({jobPost,...rest}) {
  return (
    <div style={{
        display : "flex",
        flexDirection : "column",
        justifyContent: "center",
        margin : "0 0 18px 0",
        }} {...rest}>

      <img style={{margin : "auto", border: "2px solid black"}} width={130} height={130} src="https://play-lh.googleusercontent.com/K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E"></img>
      <div style={{margin : "10px auto 0 auto",
      fontFamily: "four",
      fontSize:"15px",
      overflow: "hidden",
      textOverflow: "ellipsis"
      }}>{jobPost.company_name}</div>
      <div style={{margin : "0px auto 10px auto", fontFamily: "two" ,fontSize:'0.5rem'}}>{jobPost.start_dt}~{jobPost.end_dt}</div>

    </div>
  )
}
