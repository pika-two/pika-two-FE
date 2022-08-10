import Header from './Header';
import Top02 from '../ui/Top/Top02'
export default function LeftOnlyHeader({left,title}) {
  return (
      <Header style={
        {
            display : 'grid',
            gridTemplateColumns : '30px auto'
        }
      }>
        {left?left:<div>테스트</div>}
        <div>
            <Top02>{title}</Top02>
        </div>
    </Header>
  )
}
