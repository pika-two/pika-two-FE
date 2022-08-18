import BothHeader from "../components/Composition/BothHeader"
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import BackIcon from "../components/ui/icon/BackIcon";
import { useInternalRouter } from "./routing"
import ApplyCompanyList from '../components/Composition/ApplyCompanyList'
import { useState,useEffect } from "react";
import userService from "../apis/user";
import { useRecoilState } from "recoil";
import { userInfoStore } from "../shared/store";
import useApplyCompany from "../hooks/useApplyCompany";
import Modal from "../components/Composition/Modal";
import Bold from "../components/ui/Bold";
import CloseIcon from '../components/ui/icon/CloseIcon'
import Button from "../components/ui/Button";
export default function ApplyCompanyListPage() {
  const {goBack, push} = useInternalRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [endDelete,setEndDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [userInfo,setUserInfo] = useRecoilState(userInfoStore)
  const [applyCompanys, setApplyCompanys] = useState([]);
  const handleDeleteApplyCompany = async function(event){
        const {status, data} = await userService.deleteApplyList(userInfo.user_id,deleteId);
        if( status === 200){
          const {post_id} = applyCompanyData.filter(item => item.apply_id === deleteId)[0];
          setUserInfo((prevState)=>({...prevState,applied_list : prevState.applied_list.filter( item=>{ 
            return item !== post_id})}))
          setApplyCompanys((prev)=> [...prev.filter(item => item.apply_id !== deleteId)])
        }
        setEndDelete(()=>true);
  }
  const {applyCompanyData, isLoading, isError} = useApplyCompany(userInfo.user_id);
  useEffect(()=>{
    if(isLoading)return
    setApplyCompanys(()=>applyCompanyData)
  },[isLoading,applyCompanyData])
  const closeModal = ()=>{
    setIsOpen(()=>false)
    setEndDelete(()=>false);
    setDeleteId(()=>-1);
  }
  const handleOpen = (e,apply_id)=>{
    setIsOpen(()=>true);
    setDeleteId(()=>apply_id)
  }
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="지원 현황 보기"></BothHeader>
        <div style = {{ margin: "3vh 5vw"
          }}>
          <ApplyCompanyList applyCompanys={applyCompanys}  handleOpen={handleOpen}/>
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
                    <Button onClick={handleDeleteApplyCompany} background='#FC0'>YES</Button> <Button onClick={closeModal} background='lightgray'>NO</Button>
                </>
            }
            </div>

        </Modal>



    </div>
  )
}
