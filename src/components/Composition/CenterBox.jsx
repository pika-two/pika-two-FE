export default function CenterBox({children}) {
  return (
    <div style={{
        position: 'absolute',
        top : '30vh',
        height : '40vh',
        width : '70vw',
        left : '15vw',
        backgroundColor : 'white',
        borderRadius : "15px 15px",
        display : "flex",
        flexDirection : "column",
        border : "2px solid #000000",
        boxShadow: "10px 10px black ",
    }}
    >{children}</div>
  )
}
