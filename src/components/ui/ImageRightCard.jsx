import redirect from '../../assets/redirect.png'

export default function ImageRightCard({imgae,content,onClick}) {
    return (
      <div style={{
          display : 'grid',
          gridTemplateColumns : 'auto 60px',
          gap: "10px",
      }}
      onClick = {onClick}
      >
          {content}
          <div>
              <img src = {redirect} width={60} height={60} style={{}}></img>
          </div>
      </div>
    )
  }
