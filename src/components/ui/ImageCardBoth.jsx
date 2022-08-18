import bone from '../../assets/bone.png';
import btwo from '../../assets/btwo.png';
import bthree from '../../assets/bthree.png';
import bfour from '../../assets/bfour.png';
import bfive from '../../assets/bfive.png';


export default function ImageCardBoth({imgae,content,right}) {

    const images = [bone,btwo,bthree,bfour,bfive];
    const image_source = images[Math.floor(Math.random() * images.length)];

    return (
      <div style={{
          display : 'grid',
          gridTemplateColumns : '60px auto 30px',
          border: "2px, solid, black"
      }}>
          <div>
              {/* {imgae?<img src={image} alt=""></img>:<img width={60} height={60} style={{background : '#fcfcca'}}></img>} */}

              <img src={image_source} alt="" img width="60" height="60" style={{
              marginTop : '10px'
            }}></img>
          </div>
          {content}
          {right}
      </div>
    )
  }
  