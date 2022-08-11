import Header from './Header';
import Top02 from '../ui/Top/Top02'
export default function BothHeader({left,right,title}) {
    return (
        <Header style={
          {
              display : 'grid',
              gridTemplateColumns : '25px auto 25px'
          }
        }>
            {left?left:<div>왼쪽</div>}
          <div>
              <Top02>{title}</Top02>
          </div>
          {right?right:<div>오른쪽</div>}
      </Header>
    )
}
