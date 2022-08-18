import React from 'react'
import Bold from './Bold'
export default function Loading() {
  const images = ["https://giphy.com/embed/vOOjguTG3XUKNxfd7R","https://giphy.com/embed/l9RlRvKT3ridxnVSLP","https://giphy.com/embed/IGEdbMBLFSSwz15yrY",
"https://giphy.com/embed/3glE7zIDgW2JrPIr7l","https://giphy.com/embed/H2CxbINqCillOvdzZo"]
const image_source = images[Math.floor(Math.random() * images.length)];
 return (
  <>
  
  <div style={{

      width:"100%",
      height:0,
      paddingBottom:"100%",
      position:"relative"
  }
  }
      >
      <iframe src={image_source} width="100%" height="100%" style={{position : 'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
  </div>
    <Bold>로딩 중입니다. 잠시만 기다려 주세요!!</Bold>
  </>
  )
}
