export default function ImageRightCard({imgae,content,onClick}) {
    return (
      <div style={{
          display : 'grid',
          gridTemplateColumns : 'auto 60px',
      }}
      onClick = {onClick}
      >
          {content}
          <div>
              {imgae?<img src={image} alt=""></img>:<img width={60} height={60} style={{background : '#e0e0e0'}}></img>}
          </div>
      </div>
    )
  }
