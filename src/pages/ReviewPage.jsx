import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import Input from '../components/ui/Input';
import {useRef}  from 'react'
import  commentService from '../apis/comment'
export default function ReviewPage() {
   
   const {goBack,push} = useInternalRouter();
   const reviewInputRef = useRef(null);
   const submitReview = async function(){
    const value = reviewInputRef.current.value
        if(value.trim().length){
            // TODO USER_ID, COMPANY_ID
            const {data,status} = await commentService.postReivew(1,1,value)
            if(status !== 200){
                alert('잘못된 정보가 있습니다.')
                return
            }
            if(confirm('리뷰 페이지로 가시겠습니까?')){
                //TODO 회사 id로 연결하기 
                push('/company/1')
            }
        }
   }
   return(
    <div>
        {/* //TODO low : 리뷰 작성시 해당 기업의 리뷰 작성 api로 연결하기 */}
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="리뷰작성"/>
        <div style = {{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
        }}>
            {/* //TODO middle : input 이벤트 연계 */}
            <Input ref={reviewInputRef} height="50vh" 
            background = "#fffcab"/> 
        </div>
        <FixedBottomButton onClick={submitReview} background="#FFCC00">리뷰 제출하기</FixedBottomButton>
    
    </div>
   )

}