import { useParams } from "react-router-dom"
import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import CompanyList from '../components/Composition/CompanyList'
import Input from "../components/ui/Input"
import Blank from "../components/ui/Blank"
export default function SearchPage() {
    let { keyword } = useParams()
    let {goBack,push} = useInternalRouter();
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업리스트"></BothHeader>
        <div style={ {
          margin : "0 ",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          background: "#FFCC00",
          }}>
          <Input />
        </div>
        
        <div style = {{
          margin : "0 5vw"
        }}>
          <Blank/>
          <CompanyList/>
        </div>
    </div>
  )
}
