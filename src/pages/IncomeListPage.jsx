import React from 'react'
import BackIcon from '../components/ui/icon/BackIcon'
import { useInternalRouter } from "./routing";
import LeftOnlyHeader from '../components/Composition/LeftOnlyHeader'
export default function () {
   const {goBack} = useInternalRouter();
  return (
    <div>
        <LeftOnlyHeader left={<BackIcon onClick={()=>{goBack()}}/>} title="급여내역 선택"/>
    </div>
  )
}
