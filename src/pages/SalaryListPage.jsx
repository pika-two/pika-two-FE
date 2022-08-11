import React from 'react'
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import Top02 from '../components/ui/Top/Top02';
import Bold from '../components/ui/Bold';
import DotList from '../components/ui/DotList';
import Stack from '../components/ui/Stack';
export default function SalaryListPage() {
    const {goBack} = useInternalRouter();
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>goBack()}/>} title="연봉정보"/>
        <Top02>기업 이름</Top02>
        <Bold>1년차</Bold>
        <Stack>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
            <DotList middle={"춤추는 사자"} amount={3000}></DotList>
        </Stack>
        
    </div>
  )
}
