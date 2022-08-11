export default function ImageCardBoth({imgae,content,right}) {
    return (
      <div style={{
          display : 'grid',
          gridTemplateColumns : '60px auto 30px',
      }}>
          <div>
              {imgae?<img src={image} alt=""></img>:<img width={60} height={60} style={{background : '#e0e0e0'}}></img>}
          </div>
          {content}
          {right}
      </div>
    )
  }
  