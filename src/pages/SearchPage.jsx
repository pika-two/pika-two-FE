import { useParams } from "react-router-dom"
import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import CompanyList from '../components/Composition/CompanyList'
import InputComponent from "../components/Composition/InputComponent"
import SearchIcon from "../components/ui/icon/SearchIcon"
import Blank from "../components/ui/Blank"
import {useRef, useEffect, useState} from 'react' 
export default function SearchPage() {
    let { keyword } = useParams()
    let {goBack,push} = useInternalRouter();
    const searchInputRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);
    const searchEvent = function(){
      const value = searchInputRef.current.value
      if(value.trim().length){
        push(`/search/${value}`)
      }
    }
    const onKeyPress = function(event){
      if(event.key === 'Enter'){
        searchEvent();
      }
    }
    useEffect(()=>{
      const dummpyData = [  {
        'company_id': 1,
        'company_name': '회사 이름 1',
        'description': '회사 소개',
        'type': '회사 유형',
        'category': '회사 업종',
        'is_certificated': true,
        },
        {
          'company_id': 2,
          'company_name': '회사 이름 2',
          'description': '회사 소개',
          'type': '회사 유형',
          'category': '회사 업종',
          'is_certificated': false,
        },
        {
          'company_id': 3,
          'company_name': '회사 이름 3',
          'description': '회사 소개',
          'type': '회사 유형',
          'category': '회사 업종',
          'is_certificated': false,
        },
        {
          'company_id': 4,
          'company_name': '회사 이름 4',
          'description': '회사 소개',
          'type': '회사 유형',
          'category': '회사 업종',
          'is_certificated': false,
        },
        {
          'company_id': 5,
          'company_name': '회사 이름 5',
          'description': '회사 소개',
          'type': '회사 유형',
          'category': '회사 업종',
          'is_certificated': true,
        },
        {
          'company_id': 6,
          'company_name': '회사 이름 6',
          'description': '회사 소개',
          'type': '회사 유형',
          'category': '회사 업종',
          'is_certificated': false,
        },
    ]
    setSearchResult(()=>dummpyData)
      searchInputRef.current.value = keyword;
      searchInputRef.current.focus();
    },[keyword])
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업리스트"></BothHeader>
        <div style={ {
          margin : "0 ",
          display: "flex",
          justifyContent: "center",

          background: "#FFCC00",
          }}>
          <InputComponent onKeyPress={onKeyPress} ref={searchInputRef}/>
          <SearchIcon onClick={searchEvent}/>
        </div>
        
        <div style = {{
          margin : "0 5vw"
        }}>
          <Blank/>
          {/* //TODO low : 회사 클릭시 해당 회사 상세 페이지로 이동 기능 추가 그러므로 CompanyList의 props로 상속 필요 */}
          <CompanyList companys={searchResult}/>
        </div>
    </div>
  )
}
