import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import BookMarkList from '../components/Composition/BookMarkList'
import { useInternalRouter } from "./routing"
import { useState, useEffect } from "react";
import userService from "../apis/user";
import { useRecoilState } from "recoil";
import { userInfoStore } from "../shared/store";
import useBookmark from "../hooks/useBookmark";
export default function BookmarkPage() {
    const {goBack, push} = useInternalRouter();
    const [bookmarks, setBookmarks] = useState([]);
    const [userInfo,setUserInfo] = useRecoilState(userInfoStore);
    const handleDelete = async function(event,fav_company_id){
        if(confirm('정말 지우시겠습니까?')){
          const {data, status} = await userService.deleteBookmarkList(userInfo.user_id,fav_company_id);
          if(status === 200){
            setBookmarks(prev=>prev.filter(item=>item.fav_company_id !== fav_company_id));
            setUserInfo({...userInfo, favor_company_list : userInfo.favor_company_list.filter(item=>item.fav_company_id !== fav_company_id)})
          }
        }
    }
    const {bookmarkData, isLoading, isError} = useBookmark(userInfo.user_id);
    useEffect(()=>{
      if(isLoading)return
      setBookmarks(()=>bookmarkData);
    },[isLoading,bookmarkData])
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
