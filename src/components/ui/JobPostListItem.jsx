import React from 'react'
import bone from '../../assets/bone.png';
import btwo from '../../assets/btwo.png';
import bthree from '../../assets/bthree.png';
import bfour from '../../assets/bfour.png';
import bfive from '../../assets/bfive.png';


export default function JobPostListItem({jobPost,...rest}) {

  const images = [bone,btwo,bthree,bfour,bfive];
  const image_source = images[Math.floor(Math.random() * images.length)];

  return (
    <div style={{
        display : "flex",
        flexDirection : "column",
        justifyContent: "center",
        margin : "0 0 18px 0",
        }} {...rest}>

      <img style={{margin : "auto", border: "2px solid black"}} width={130} height={130} src={image_source}></img>
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
