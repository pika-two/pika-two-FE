export default function CenterBox({children,zIndex,height}) {
  return (
    <div style={{
        position: 'absolute',
        top : '30vh',
        height : height?height:'40vh',
        width : '70vw',
        left : '15vw',
        backgroundColor : 'white',
        borderRadius : "15px 15px",
        display : "flex",
        flexDirection : "column",
        border : "2px solid #000000",
        boxShadow: "10px 10px black ",
        zIndex : zIndex,
    }
  }
    >{children}</div>
  )
}
