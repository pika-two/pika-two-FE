import { useSearchParams } from "react-router-dom"
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
    let [searchParams, setSearchParams]= useSearchParams()
    let keyword = searchParams.get('keyword')??'';
    let type = searchParams.get('type')??'';
    let {goBack,push} = useInternalRouter();
    const searchInputRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);
    const searchEvent = function(){
      const value = searchInputRef.current.value
      if(value.trim().length){
        push(`/search?keyword=${value}`)
      }
    }
    const onKeyPress = function(event){
      if(event.key === 'Enter'){
        searchEvent();
      }
    }
    useEffect(()=>{
      const getSearch = async (keyword,type)=>{
        const {data, status} = await companyService.getSearch({keyword,type})
        const {data : responseData} = data;
        const {company_list} = responseData
        setSearchResult(()=>company_list)
        searchInputRef.current.value = keyword;
        searchInputRef.current.focus();
      }
      getSearch(keyword,type);
    },[keyword,type])
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
