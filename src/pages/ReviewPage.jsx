import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import Input from '../components/ui/Input';
import {useRef}  from 'react'
import  commentService from '../apis/comment'
import { useRecoilValue } from 'recoil';
export default function ReviewPage() {
   
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
            if(confirm('리뷰 페이지로 가시겠습니까?')){
                push(`/company/${userInfo.cur_company_id}`)
            }
        }
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
        <FixedBottomButton onClick={submitReview} background="#FFCC00">리뷰 제출하기</FixedBottomButton>
    
    </div>
   )

}