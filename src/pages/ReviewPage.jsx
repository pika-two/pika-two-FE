import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import Input from '../components/ui/Input';
import {useRef,useState}  from 'react'
import  commentService from '../apis/comment'
import { useRecoilValue } from 'recoil';
import { userInfoStore } from '../shared/store';
import Modal from '../components/Composition/Modal';
import Bold from '../components/ui/Bold'
import CloseIcon from '../components/ui/icon/CloseIcon';
import Button from '../components/ui/Button';
export default function ReviewPage() {
   const [isOpen, setIsOpen] = useState(false);
   const [endWrite,setEndWrite] = useState(false) 
   const {goBack,push} = useInternalRouter();
   const reviewInputRef = useRef(null);
   const userInfo = useRecoilValue(userInfoStore)
   const submitReview = async function(){
    const value = reviewInputRef.current.value
        if(value.trim().length){
            const {data,status} = await commentService.postReivew(userInfo.user_id,userInfo.cur_company_id,value)
            if(status !== 200){
                alert('잘못된 정보가 있습니다.')
                return
            }
            setEndWrite(()=>true)
        }
   }
   const openModal = ()=>{
    setIsOpen(()=>true)
   }
   const closeModal = ()=>{
    setIsOpen(()=>false)
    setEndWrite(()=>false)
   }
   return(
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="리뷰작성"/>
        <div style = {{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
        }}>
            <Input ref={reviewInputRef} height="50vh" 
            background = "#fffcab"/> 
        </div>
        <FixedBottomButton onClick={openModal} background="#FFCC00">리뷰 제출하기</FixedBottomButton>
        
        
        <Modal isOpen={isOpen} height="20vh">
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto 20px'
            }}>{endWrite?<Bold>리뷰 작성 성공</Bold>:<Bold>리뷰를 작성하시겠습니까?</Bold>}<CloseIcon onClick={closeModal} />
            </div>
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : endWrite?'auto':'auto auto',
                'margin' : '5vh'
            }}>
                {endWrite?<Button onClick={closeModal}>닫기</Button>:
                <>
                    <Button onClick={submitReview} background='#FC0'>YES</Button> <Button onClick={closeModal} background='lightgray'>NO</Button>
                </>
            }
            </div>

        </Modal>
    </div>
   )

}