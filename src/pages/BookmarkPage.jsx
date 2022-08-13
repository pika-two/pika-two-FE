import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import BookMarkList from '../components/Composition/BookMarkList'
import { useInternalRouter } from "./routing"
import { useState } from "react";
export default function BookmarkPage() {
    const dummyData = [ {
      'fav_company_id': 1,
       'company_name': '회사명1',
       'company_id': 1,
     },
     {
      'fav_company_id': 2,
       'company_name': '회사명2',
       'company_id': 2,
     },
     {
      'fav_company_id': 3,
       'company_name': '회사명3',
       'company_id': 3,
     },
     {
      'fav_company_id': 4,
       'company_name': '회사명4',
       'company_id': 4,
     },{
      'fav_company_id': 5,
       'company_name': '회사명5',
       'company_id': 5,
     },
     {
      'fav_company_id': 6,
       'company_name': '회사명6',
       'company_id': 6,
     },]
    const {goBack, push} = useInternalRouter();
    const [bookmarks, setBookmarks] = useState(dummyData);
    // TODO : fetch로 데이터 가져오기


    const handleDelete = function(event,fav_company_id){
        if(confirm('정말 지우시겠습니까?')){
          // TODO : 삭제 axios 보내기
          setBookmarks(prev=>prev.filter(item=>item.fav_company_id !== fav_company_id))
        }
    }
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="찜한 목록"></BothHeader>
        <div style = {{
          margin : "3vh 5vw"
        }}>
          <BookMarkList bookmarks={bookmarks}  handleDelete={handleDelete}/>
        </div>
    </div>
  )
}
