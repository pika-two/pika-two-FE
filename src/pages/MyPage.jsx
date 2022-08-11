import React from 'react'
import MyPageCenterBox from '../components/Composition/MyPageCenterBox'
import RightOnlyHeader from '../components/Composition/RightOnlyHeader'
import Bold from '../components/ui/Bold'
import Button from '../components/ui/Button'
import FixedBottomButton from '../components/ui/FixedBottomButton'
import HomeIcon from '../components/ui/icon/HomeIcon'
import MyPageSalary from '../components/Composition/MyPageSalary'
import { useInternalRouter } from './routing'
export default function MyPage() {
  const {push} = useInternalRouter();
  return (
    <div>
        <RightOnlyHeader title="마이페이지"   right={<HomeIcon/>}></RightOnlyHeader>
        <MyPageCenterBox>
            <Button>일정관리 보기</Button>
            <Button>지원현황 보기</Button>
            <Button onClick={()=>push('/bookmark')}>찜한 기업 보기</Button>
            <Button>리뷰 작성하기</Button>
        </MyPageCenterBox>
        <MyPageSalary>
            <Bold>직전년도 나의 연봉</Bold>
            <Bold>2021년 춤추는 사자님의 급여는</Bold>
            <Bold>6500만원</Bold>
        </MyPageSalary>
        <Button style={{position : 'fixed',bottom : '80px'}}>KB 국민은행 급여계좌 만들러가기</Button>
        <FixedBottomButton>연봉별 금융상품 추천 받으러 가기</FixedBottomButton>
    </div>
  )
}
