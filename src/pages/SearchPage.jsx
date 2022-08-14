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
import companyService from "../apis/company"
export default function SearchPage() {
  //TODO high : type으로 검색해야하니 주소를 바꿔야한다.
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
      const getSearch = async (keyword)=>{
        const {data, status} = await companyService.getSearch({keyword})
        const {data : responseData} = data;
        setSearchResult(()=>responseData)
        searchInputRef.current.value = keyword;
        searchInputRef.current.focus();
      }
      getSearch(keyword);
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
          <CompanyList companys={searchResult}/>
        </div>
    </div>
  )
}
