import React from 'react'

export default function JobPostListItem() {
  return (
    <div style={{
        display : "flex",
        flexDirection : "column",
        justifyContent: "center",
        margin : "0 10px"
    }}><img style={{margin : "auto"}} width={130} height={130} src="https://play-lh.googleusercontent.com/K1rBzVJjq9qtSxC2vkWIsp3GPtPOCwLPf1aCJ0tL0TvWdNcAKQKhYwjPMY90XJwyW-E"></img>
    <div style={{margin : "10px auto 0 auto",
    fontFamily: "four",
    }}>국민은행</div>
    <div style={{margin : "0px auto 10px auto", fontFamily: "two"}}>날짜~날짜</div>
    </div>
  )
}
