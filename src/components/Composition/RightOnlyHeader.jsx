import Header from './Header';
import Top02 from '../ui/Top/Top02'
export default function RightOnlyHeader({right,title}) {
  return (
      <Header style={
        {
            display : 'grid',
            gridTemplateColumns : 'auto 0px'
        }
      }>
        <div>
            <Top02>{title}</Top02>
        </div>
        {right?right:<div>테스트</div>}
    </Header>
  )
}
