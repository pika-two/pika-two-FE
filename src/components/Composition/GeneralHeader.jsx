import Header from './Header';
import Top02 from '../ui/Top/Top02'
export default function GeneralHeader({title}) {
  return (
    <Header style={{
        justifyContent: "space-evenly"
    }}>
        <Top02>{title}</Top02>
    </Header>
  )
}
