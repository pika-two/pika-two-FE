import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader';
import FixedBottomButton from '../components/ui/FixedBottomButton'
import Input from '../components/ui/Input';


export default function ReviewPage() {

   const {goBack,push} = useInternalRouter();
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
            <Input height="50vh" 
            background = "#fffcab"/> 
        </div>
        <FixedBottomButton onClick={()=>{push('/incomeConnect')}} background="#FFCC00">리뷰 제출하기</FixedBottomButton>
    
    </div>
   )

}