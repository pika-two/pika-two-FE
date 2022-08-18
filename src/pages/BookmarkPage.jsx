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
import Modal from "../components/Composition/Modal";
import Bold from "../components/ui/Bold";
import CloseIcon from "../components/ui/icon/CloseIcon";
import Button from "../components/ui/Button";
export default function BookmarkPage() {
    const {goBack, push} = useInternalRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [endDelete,setEndDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(-1);
    const [bookmarks, setBookmarks] = useState([]);
    const [userInfo,setUserInfo] = useRecoilState(userInfoStore);
    const handleDelete = async function(event){
        const {data, status} = await userService.deleteBookmarkList(userInfo.user_id,deleteId);
        if(status === 200){
          setBookmarks(prev=>prev.filter(item=>item.fav_company_id !== deleteId));
          setUserInfo({...userInfo, favor_company_list : userInfo.favor_company_list.filter(item=>parseInt(item.fav_company_id) !== parseInt(deleteId))})
        }
        setEndDelete(()=>true);
    }
    const {bookmarkData, isLoading, isError} = useBookmark(userInfo.user_id);
    useEffect(()=>{
      if(isLoading)return
      setBookmarks(()=>bookmarkData);
    },[isLoading,bookmarkData])
    const closeModal = ()=>{
      setIsOpen(()=>false)
      setEndDelete(()=>false);
      setDeleteId(()=>-1);
    }
    const handleOpen = (e,company_id)=>{
      setIsOpen(()=>true);
      setDeleteId(()=>company_id)
    }


  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="찜한 목록"></BothHeader>
        <div style = {{
          margin : "3vh 5vw"
        }}>
          <BookMarkList bookmarks={bookmarks}   handleOpen={handleOpen}/>
        </div>



        <Modal isOpen={isOpen} height="20vh">
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto 20px'
            }}>{endDelete?<Bold>삭제 성공.</Bold>:<Bold>정말 삭제하시겠습니까?</Bold>}<CloseIcon onClick={closeModal} />
            </div>
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : endDelete?'auto':'auto auto',
                'margin' : '5vh'
            }}>
                {endDelete?<Button onClick={closeModal}>닫기</Button>:
                <>
                    <Button onClick={handleDelete} background='#FC0'>YES</Button> <Button onClick={closeModal} background='lightgray'>NO</Button>
                </>
            }
            </div>

        </Modal>

    </div>
  )
}
